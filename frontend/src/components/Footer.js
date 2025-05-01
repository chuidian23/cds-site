import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-1">
              © {new Date().getFullYear()} Car-vinne Driving School. All rights
              reserved.
            </p>
            <p className="mb-0">
              Contact: carvinnedrivingschool@gmail.com
              <br className="d-md-none" />
              <span className="d-none d-md-inline"> | </span>
              0967 298 8130 (G) | 0949 724 2329 (S)
            </p>
          </div>

          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
