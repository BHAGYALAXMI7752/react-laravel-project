
import React from 'react'
import './EmployerAdvantage.css'

function EmployerAdvantage() {
  return (
    <section className="employer-advantage-section">
      <div className="container employer-advantage-container">
        <div className="row align-items-center g-4">

          <div className="col-lg-6">
            <div className="employer-advantage-content">
              <span className="resource-eyebrow">
                RECRUITER ADVANTAGE
              </span>

              <h2>How Job Hiring Helps You to Hire Faster</h2>

              <p>
                We keep an up-to-date database of job seekers across IT,
                engineering, finance, marketing, and healthcare sectors
                to assist recruiters in finding qualified candidates quickly.
              </p>

              <p>
                Our exclusive Applicant Tracking System (ATS) lets you
                manage every facet of recruitment with complete oversight
                over applicants.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="employer-advantage-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000"
                alt="Recruiters discussing candidates in a meeting"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default EmployerAdvantage
