
import React from 'react'
import { Link } from 'react-router-dom'
import './EmployerBanner.css'

function EmployerBanner() {
  return (
    <section className="employer-banner-section">
      <div className="container employer-banner-container">
        <div className="employer-banner">

          <div className="employer-banner-content">
            <span className="employer-banner-label">
              JOIN 10,000+ TOP EMPLOYERS
            </span>

            <h2>Find your next great candidate.</h2>

            <p>
              Post jobs, access our massive pre-verified database,
              and accelerate your recruitment pipeline with enterprise-grade
              AI solutions.
            </p>

            <Link to="/register" className="employer-banner-button">
              Post a Job Free
            </Link>
          </div>

          <div className="employer-banner-image">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
              alt="Professionals collaborating in an office"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default EmployerBanner
