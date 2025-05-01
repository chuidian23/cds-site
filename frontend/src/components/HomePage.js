import React from "react";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaQuoteLeft,
  FaUser,
  FaCalendarAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import aboutImage from "../assets/images/about-image.png";
import heroImage from "../assets/images/hero-image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonial1 from "../assets/images/testimonial1.jpg";
import testimonial2 from "../assets/images/testimonial2.jpg";
import testimonial3 from "../assets/images/testimonial3.jpg";
import testimonial4 from "../assets/images/testimonial4.jpg";
import testimonial5 from "../assets/images/testimonial5.jpg";
import student1 from "../assets/images/student1.jpg";
import student2 from "../assets/images/student2.jpg";
import student3 from "../assets/images/student3.jpg";
import student4 from "../assets/images/student4.jpg";
import student5 from "../assets/images/student5.jpg";
import student6 from "../assets/images/student6.jpg";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    role: "Student Driver",
    text: "Car-vinne helped me overcome my fear of driving. The instructors are patient and professional!",
    image: testimonial1,
  },
  {
    id: 2,
    name: "John Dela Cruz",
    role: "Working Professional",
    text: "Flexible schedules made it easy to balance work and driving lessons. Highly recommended!",
    image: testimonial2,
  },
  {
    id: 3,
    name: "Sofia Reyes",
    role: "College Student",
    text: "Passed my LTO exam on the first try thanks to their comprehensive training program.",
    image: testimonial3,
  },
  {
    id: 4,
    name: "Sofia Reyes",
    role: "College Student",
    text: "Passed my LTO exam on the first try thanks to their comprehensive training program.",
    image: testimonial4,
  },
  {
    id: 5,
    name: "Sofia Reyes",
    role: "College Student",
    text: "Passed my LTO exam on the first try thanks to their comprehensive training program.",
    image: testimonial5,
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section (keep the same) */}

      {/* Modified Hero Section */}
      <section className="hero py-5 bg-primary text-white position-relative overflow-hidden">
        <div className="hero-overlay"></div>
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6} className="position-relative text-center text-md-start">
              <div
                className="hero-content mx-auto"
                style={{ maxWidth: "500px" }}
              >
                <h1 className="display-4 mb-4 fw-bold">
                  Start Your Driving Journey
                </h1>
                <p className="lead mb-5 fs-5">
                  Transform from novice to confident driver with our proven
                  training program
                </p>
                <div className="d-flex justify-content-center">
                  <a
                    href="/courses"
                    className="btn btn-enroll btn-lg px-5 py-3 d-inline-flex align-items-center"
                  >
                    Get Started
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      className="ms-2"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <div className="hero-image-container">
                <img
                  src={heroImage}
                  alt="Happy Student Driving"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <Container>
          <Row className="align-items-center g-5">
            <Col md={6} className="text-center">
              <div className="about-image">
                <img
                  src={aboutImage}
                  alt="Car-vinne Team"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    width: "400px",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className="ps-lg-4 text-center text-md-start">
                <h2 className="display-5 mb-4 fw-bold text-primary">
                  About Us
                </h2>
                <p className="lead text-muted mb-4">
                  At Car-vinne Driving School, we've been shaping confident
                  drivers since 2008. Our certified instructors combine
                  expertise with patience to create a supportive learning
                  environment for all skill levels.
                </p>
                <div className="key-points mb-4">
                  <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                    <div className="icon-box bg-primary text-white me-3">
                      <FaUser size={18} />
                    </div>
                    <div>
                      <h5 className="mb-0">Personalized Training</h5>
                      <small>Tailored lessons for individual needs</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                    <div className="icon-box bg-primary text-white me-3">
                      <FaCalendarAlt size={18} />
                    </div>
                    <div>
                      <h5 className="mb-0">Flexible Scheduling</h5>
                      <small>Available 6 days a week</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <div className="icon-box bg-primary text-white me-3">
                      <FaMoneyBillWave size={18} />
                    </div>
                    <div>
                      <h5 className="mb-0">Affordable Packages</h5>
                      <small>Transparent pricing with no hidden fees</small>
                    </div>
                  </div>
                </div>
                <div className="social-icons mt-4 d-flex justify-content-center justify-content-md-start">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link me-3"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link me-3"
                  >
                    <FaTiktok size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaYoutube size={24} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="testimonials" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Student Testimonials</h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card text-center p-4">
                  <div className="testimonial-image mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <FaQuoteLeft className="text-danger mb-3" size={24} />
                  <p className="text-muted mb-4">{testimonial.text}</p>
                  <h5 className="mb-1">{testimonial.name}</h5>
                  <small className="text-muted">{testimonial.role}</small>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>

      <section id="gallery" className="py-5">
        <Container>
          <h2 className="text-center mb-5">Our Students in Action</h2>
          <Row className="g-4 mb-4">
            <Col md={4} className="gallery-item">
              <img
                src={student1}
                alt="Student 1"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={4} className="gallery-item">
              <img
                src={student2}
                alt="Student 2"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={4} className="gallery-item">
              <img
                src={student3}
                alt="Student 3"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4} className="gallery-item">
              <img
                src={student4}
                alt="Student 4"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={4} className="gallery-item">
              <img
                src={student5}
                alt="Student 5"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={4} className="gallery-item">
              <img
                src={student6}
                alt="Student 6"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
