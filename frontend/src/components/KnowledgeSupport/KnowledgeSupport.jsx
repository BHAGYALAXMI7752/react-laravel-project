
import React from 'react'
import { Link } from 'react-router-dom'
import './KnowledgeSupport.css'

function KnowledgeSupport() {
  return (
    <section className="knowledge-support-section">
      <div className="container knowledge-support-container">
        <div className="row align-items-center g-4">

          <div className="col-lg-6">
            <div className="knowledge-support-image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000"
                alt="Professionals working together at computers"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="knowledge-support-content">
              <span className="resource-eyebrow">
                KNOWLEDGE &amp; SUPPORT
              </span>

              <h2>Hiring resources for every step of the process</h2>

              <p>
                Learn everything you need to know about managing your
                account, navigating your dashboard and more.
              </p>

              <div className="knowledge-support-links">
                <Link to="/employer-help">
                  <i className="bi bi-arrow-right"></i>
                  Employer Help Centre
                </Link>

                <Link to="/employer-resources">
                  <i className="bi bi-arrow-right"></i>
                  Employer resource library
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default KnowledgeSupport
