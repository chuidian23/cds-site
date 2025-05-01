import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courseCategories = [
    {
      name: "Theoretical Driving Courses (TDC)",
      courses: [
        {
          id: 1,
          name: "TDC (Face to Face)",
          type: "tdc-face-to-face",
          scheduleType: "fixed",
          price: "₱1,000",
          duration: "15 hours",
          requirements: [
            "LTS Portal",
            "PSA/NSO/National ID or Passport",
            "Medical Certificate",
            "Valid ID (any government issued ID)",
            "PSA Marriage Certificate (for married women)",
            "Parent ID and Consent (for 16-17 years old)",
          ],
        },
        {
          id: 2,
          name: "OTDC (Self-Paced)",
          type: "otdc-self-paced",
          scheduleType: "self-paced",
          maxDays: 30,
          price: "₱1,500",
          duration: "Flexible",
          requirements: [
            "LTS Portal",
            "PSA/NSO/National ID or Passport",
            "Medical Certificate",
            "Valid ID (any government issued ID)",
            "PSA Marriage Certificate (for married women)",
            "Parent ID and Consent (for 16-17 years old)",
          ],
        },
      ],
    },
    {
      name: "🏍️ Motorcycle Driving Courses (PDC)",
      courses: [
        {
          id: 3,
          name: "Motorcycle Refresher",
          type: "motorcycle-refresher",
          scheduleType: "whole-day",
          daysRequired: 1,
          price: "₱2,500",
          duration: "8 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
        {
          id: 4,
          name: "Motorcycle Beginner",
          type: "motorcycle-beginner",
          scheduleType: "whole-day",
          daysRequired: 2,
          price: "₱4,000",
          duration: "16 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
      ],
    },
    {
      name: "🚘 4 Wheels Manual Transmission (PDC)",
      courses: [
        {
          id: 5,
          name: "Manual Refresher",
          type: "manual-refresher",
          scheduleType: "half-day",
          sessionsRequired: 2,
          price: "₱4,000",
          duration: "8 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
        {
          id: 6,
          name: "Manual Intermediate",
          type: "manual-intermediate",
          scheduleType: "half-day",
          sessionsRequired: 3,
          price: "₱6,000",
          duration: "12 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
        {
          id: 7,
          name: "Manual Beginner",
          type: "manual-beginner",
          scheduleType: "half-day",
          sessionsRequired: 5,
          price: "₱10,000",
          duration: "20 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
      ],
    },
    {
      name: "🚗 4 Wheels Automatic Transmission (PDC)",
      courses: [
        {
          id: 8,
          name: "Automatic Refresher",
          type: "automatic-refresher",
          scheduleType: "half-day",
          sessionsRequired: 2,
          price: "₱4,000",
          duration: "8 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
        {
          id: 9,
          name: "Automatic Intermediate",
          type: "automatic-intermediate",
          scheduleType: "half-day",
          sessionsRequired: 3,
          price: "₱4,000",
          duration: "8 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
        {
          id: 10,
          name: "Automatic Beginner",
          type: "automatic-beginner",
          scheduleType: "half-day",
          sessionsRequired: 5,
          price: "₱4,000",
          duration: "8 hours",
          requirements: ["Student Permit", "Medical Certificate"],
        },
      ],
    },
  ];

  return (
    <div className="courses-page container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary mb-3">
          Available Driving Courses
        </h1>
        <p className="lead text-muted">
          Choose the perfect program for your driving journey
        </p>
      </header>

      {courseCategories.map((category) => (
        <section key={category.name} className="category-section mb-5">
          <div className="category-header mb-4 p-3 rounded">
            <h2 className="category-title mb-0 fw-bold">{category.name}</h2>
          </div>

          <div className="row g-4">
            {category.courses.map((course) => (
              <div key={course.id} className="col-md-6 col-lg-4">
                <div className="course-card h-100 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="card-title fw-bold mb-0">{course.name}</h3>
                      <span className="badge bg-primary">{course.price}</span>
                    </div>

                    <div className="course-details mb-3">
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">
                          <i className="fas fa-clock me-2"></i>
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <div className="requirements">
                      <h4 className="text-secondary fs-6 fw-bold mb-3">
                        Requirements:
                      </h4>
                      <ul className="list-unstyled">
                        {course.requirements?.map((req, index) => (
                          <li key={index} className="d-flex mb-2">
                            <i className="fas fa-check-circle text-success me-2 mt-1"></i>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/enroll"
                      className="btn btn-enroll w-100 mt-3 d-flex justify-content-center align-items-center gap-2"
                      state={{
                        selectedCourse: course.name,
                        coursePrice: course.price,
                      }}
                    >
                      Enroll Now
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Courses;
