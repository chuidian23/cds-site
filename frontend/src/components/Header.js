import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/cds-logo.png";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2C3E50" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Car-vinne Driving School"
            style={{
              height: "60px",
              width: "auto",
              transition: "transform 0.3s ease",
            }}
            className="logo-hover"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto align-items-center">
            <Link className="nav-link" to="/" onClick={handleHomeClick}>
              Home
            </Link>
            <a className="nav-link" href="#about">
              About Us
            </a>
            <a className="nav-link" href="#testimonials">
              Testimonials
            </a>
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
            <Link to="/courses" className="nav-link enroll-btn ms-lg-4">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
