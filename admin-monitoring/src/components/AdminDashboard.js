// src/components/AdminDashboard.js
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import {
  Button,
  CircularProgress,
  Alert,
  Typography,
  Box,
} from "@mui/material";

Chart.register(...registerables);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Check authentication status
  const [auth] = useState(() => {
    const storedAuth = sessionStorage.getItem("adminAuth");
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  // Table columns configuration
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First Name", width: 130 },
    { field: "last_name", headerName: "Last Name", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "course", headerName: "Course", width: 180 },
    {
      field: "enrollment_date",
      headerName: "Enrollment Date",
      width: 180,
      valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    },
    { field: "status", headerName: "Status", width: 100 },
  ];

  // Chart data configuration
  const chartData = {
    labels: stats.by_course?.map((item) => item.course) || [],
    datasets: [
      {
        label: "Enrollments by Course",
        data: stats.by_course?.map((item) => item.count) || [],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Fetch data from API
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [enrollmentsResponse, statsResponse] = await Promise.all([
        fetch("http://localhost:3001/api/admin/enrollments", {
          headers: { Authorization: `Basic ${auth?.token}` },
        }),
        fetch("http://localhost:3001/api/admin/stats", {
          headers: { Authorization: `Basic ${auth?.token}` },
        }),
      ]);

      if (!enrollmentsResponse.ok || !statsResponse.ok) {
        throw new Error("Failed to fetch data");
      }

      setEnrollments(await enrollmentsResponse.json());
      setStats(await statsResponse.json());
    } catch (err) {
      setError(err.message);
      if (err.response?.status === 401) {
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  }, [auth?.token, navigate]);

  // Authentication check
  useEffect(() => {
    if (!auth) {
      navigate("/admin/login");
    }
  }, [auth, navigate]);

  // Initial data fetch
  useEffect(() => {
    if (auth) {
      fetchData();
    }
  }, [auth, fetchData]);

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  // Loading state
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
        <Button variant="contained" onClick={fetchData} sx={{ mt: 2 }}>
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4">Admin Dashboard</Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>

      {/* Statistics Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Total Enrollments: {stats.total_enrollments || 0}
        </Typography>
        <Box sx={{ height: 400 }}>
          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: true },
              },
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
        </Box>
      </Box>

      {/* Enrollments Table */}
      <Box sx={{ height: 600 }}>
        <DataGrid
          rows={enrollments}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
