
import React from 'react'
import { Link } from 'react-router-dom'
import './CareerDashboard.css'

const benefits = [
  'Personalized job recommendations',
  'Smart application tracking',
  'Save your favorite opportunities',
  'Career growth insights',
]

function CareerDashboard() {
  return (
    <section className="career-dashboard-section">
      <div className="container career-dashboard-container">
        <div className="row align-items-center g-4">

          {/* Dashboard preview */}
          <div className="col-lg-6">
            <div className="career-dashboard-preview">

              <div className="dashboard-preview-header">
                <strong>Application Overview</strong>
                <span>2026 <i className="bi bi-pencil"></i></span>
              </div>

              <div className="row g-2 dashboard-stat-row">
                <div className="col-6">
                  <div className="dashboard-stat-box">
                    <h3>24</h3>
                    <p>Applications</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="dashboard-stat-box">
                    <h3>08</h3>
                    <p>Interviews</p>
                  </div>
                </div>
              </div>

              <div className="dashboard-completion">
                <div className="d-flex justify-content-between align-items-center">
                  <strong>Profile Completion</strong>
                  <span>75%</span>
                </div>

                <div className="progress dashboard-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '75%' }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="dashboard-notice">
                <i className="bi bi-check-circle-fill"></i>
                Your profile is getting noticed!
              </div>

            </div>
          </div>

          {/* Dashboard description */}
          <div className="col-lg-6">
            <div className="career-dashboard-content">

              <span className="resource-eyebrow">
                SMARTER CAREER GROWTH
              </span>

              <h2>
                Your Career.
                <span>Your Dashboard.</span>
              </h2>

              <p>
                Take control of your professional journey. Track your
                applications, organize opportunities and manage your
                career from one place.
              </p>

              <ul className="career-dashboard-benefits">
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <i className="bi bi-check-circle-fill"></i>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link to="/profile" className="career-dashboard-button">
                Create Your Profile
                <i className="bi bi-arrow-right"></i>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CareerDashboard

