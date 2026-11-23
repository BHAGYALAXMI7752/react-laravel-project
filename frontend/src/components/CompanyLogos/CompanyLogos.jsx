
import React from 'react'
import './CompanyLogos.css'

const companies = [
  { name: 'Google', icon: 'bi-google' },
  { name: 'Microsoft', icon: 'bi-microsoft' },
  { name: 'Amazon', icon: 'bi-amazon' },
  { name: 'Adobe', icon: 'bi-asterisk' },
  { name: 'Meta', icon: 'bi-meta' },
]

function CompanyLogos() {
  return (
    <section className="company-logos-section">
      <div className="container text-center">
        <p className="company-logos-heading">
          HELPING TALENT FIND THEIR PLACE AT
        </p>

        <div className="company-logos-list">
          {companies.map((company) => (
            <div className="company-logo-item" key={company.name}>
              <i className={`bi ${company.icon}`}></i>
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyLogos
