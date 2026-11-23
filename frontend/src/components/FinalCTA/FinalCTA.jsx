
import React from 'react'
import { Link } from 'react-router-dom'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="container final-cta-container">
        <div className="final-cta-banner text-center">

          <h2>Ready to Find Your Next Star?</h2>

          <p>
            Connect with talented professionals and grow your team.
          </p>

          <Link to="/register" className="final-cta-button">
            Start Hiring Today
            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default FinalCTA

