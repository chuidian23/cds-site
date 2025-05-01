import React, { useState, useEffect, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { useNavigate } from "react-router-dom";
import { Alert, CircularProgress, Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
      {/* Add other routes here */}
    </Routes>
  );
}

Chart.register(...registerables);

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [enrollments, setEnrollments] = useState([]);
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [auth] = useState(() => {
    // Get credentials from sessionStorage
    const storedAuth = sessionStorage.getItem("adminAuth");
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First Name", width: 130 },
    { field: "last_name", headerName: "Last Name", width: 130 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "course", headerName: "Course", width: 200 },
    {
      field: "enrollment_date",
      headerName: "Enrollment Date",
      width: 180,
      valueFormatter: (params) => new Date(params.value).toLocaleString(),
    },
    { field: "status", headerName: "Status", width: 130 },
  ];

  const data = {
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

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const [enrollRes, statsRes] = await Promise.all([
        fetch("http://localhost:3001/api/admin/enrollments", {
          headers: {
            Authorization: `Basic ${auth?.token}`,
          },
        }),
        fetch("http://localhost:3001/api/admin/stats", {
          headers: {
            Authorization: `Basic ${auth?.token}`,
          },
        }),
      ]);

      if (!enrollRes.ok || !statsRes.ok) {
        throw new Error("Failed to fetch data");
      }

      setEnrollments(await enrollRes.json());
      setStats(await statsRes.json());
    } catch (err) {
      setError(err.message);
      if (err.response?.status === 401) {
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  }, [auth?.token, navigate]); // Add dependencies here

  useEffect(() => {
    if (!auth) {
      navigate("/admin/login");
      return;
    }
    fetchData();
  }, [auth, fetchData, navigate]); // Correct dependency array

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem" }}>
        <Alert severity="error">{error}</Alert>
        <Button
          variant="contained"
          onClick={fetchData}
          style={{ marginTop: "1rem" }}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2rem",
        }}
      >
        <h1>Enrollment Analytics</h1>
        <Button variant="outlined" onClick={fetchData} disabled={loading}>
          Refresh Data
        </Button>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>
          Total Enrollments: {stats.total_enrollments || 0}
        </h2>
        <div style={{ height: "400px" }}>
          <Bar
            data={data}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: true },
              },
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </div>

      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={enrollments}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
