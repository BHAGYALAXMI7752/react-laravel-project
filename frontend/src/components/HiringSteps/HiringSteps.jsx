
import React from 'react'
import './HiringSteps.css'

const steps = [
  {
    number: '01',
    icon: 'bi-person-plus-fill',
    title: 'Create Your Account',
    description: 'Register your account and complete your professional profile.',
  },
  {
    number: '02',
    icon: 'bi-file-earmark-text-fill',
    title: 'Post Your Requirements',
    description: 'Share your job details and the skills you are looking for.',
  },
  {
    number: '03',
    icon: 'bi-patch-check-fill',
    title: 'Verify Your Details',
    description: 'Complete mobile and email verification for a trusted experience.',
  },
  {
    number: '04',
    icon: 'bi-people-fill',
    title: 'Connect With Talent',
    description: 'Discover suitable candidates and move forward with hiring.',
  },
]

function HiringSteps() {
  return (
    <section className="hiring-steps-section">
      <div className="container hiring-steps-container">

        <div className="hiring-steps-heading text-center">
        <span className="section-eyebrow">SEAMLESS WORKFLOW</span>
          <h2>Hire with Easy Simple Steps, Perfect Candidate!</h2>
          <p>
            Fast, transparent, and intelligent hiring starts here.
          </p>
        </div>

        <div className="row g-3">
          {steps.map((step) => (
            <div className="col-6 col-lg-3" key={step.number}>
              <div className="hiring-step-card h-100">

                <div className="hiring-step-top">
                  <div className="hiring-step-icon">
                    <i className={`bi ${step.icon}`}></i>
                  </div>

                  <span className="hiring-step-number">
                    {step.number}
                  </span>
                </div>

                <h5>{step.title}</h5>
                <p>{step.description}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HiringSteps
