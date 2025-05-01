import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Courses from "./components/Courses";
import EnrollmentForm from "./components/EnrollmentForm";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css"; // Your main styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap

function App() {
  return (
    <Router>
      <Header />
      <div className="navbar-spacer"></div>

      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/enroll" element={<EnrollmentForm />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" replace />;
};

export default App;
