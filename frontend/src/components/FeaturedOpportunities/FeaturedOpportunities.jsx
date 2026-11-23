
import React, { useState } from 'react'
import './FeaturedOpportunities.css'

const jobs = [
  {
    id: 1,
    company: 'Google',
    initial: 'G',
    companyColor: 'google',
    title: 'Senior Fullstack Lead',
    location: 'Google · Bangalore',
    type: 'Full Time',
    category: 'Development',
    salary: '₹14L - ₹18L',
    tags: ['Full Time', 'Remote', 'Development'],
  },
  {
    id: 2,
    company: 'Microsoft',
    initial: 'M',
    companyColor: 'microsoft',
    title: 'UI/UX Design Director',
    location: 'Microsoft · Mumbai',
    type: 'Full Time',
    category: 'Design',
    salary: '₹12L - ₹16L',
    tags: ['Full Time', 'Design'],
  },
  {
    id: 3,
    company: 'Amazon',
    initial: 'A',
    companyColor: 'amazon',
    title: 'Growth Marketing Manager',
    location: 'Amazon · Delhi',
    type: 'Full Time',
    category: 'Marketing',
    salary: '₹8L - ₹12L',
    tags: ['Full Time', 'Marketing'],
  },
  {
    id: 4,
    company: 'Meta',
    initial: 'M',
    companyColor: 'meta',
    title: 'Senior Data Scientist',
    location: 'Meta · Bangalore',
    type: 'Remote',
    category: 'Analytics',
    salary: '₹14L - ₹20L',
    tags: ['Full Time', 'Data', 'Remote'],
  },
  {
    id: 5,
    company: 'Adobe',
    initial: 'A',
    companyColor: 'adobe',
    title: 'Enterprise Support Lead',
    location: 'Adobe · Hyderabad',
    type: 'Full Time',
    category: 'Support',
    salary: '₹9L - ₹12L',
    tags: ['Full Time', 'Support'],
  },
  {
    id: 6,
    company: 'Job Hiring',
    initial: 'J',
    companyColor: 'job-hiring',
    title: 'Frontend Engineering Intern',
    location: 'Job Hiring · Bangalore',
    type: 'Internship',
    category: 'Development',
    salary: '₹2L - ₹3L',
    tags: ['Internship', 'Development'],
  },
]

const filters = ['All Jobs', 'Full Time', 'Remote', 'Internship']

function FeaturedOpportunities() {
  const [activeFilter, setActiveFilter] = useState('All Jobs')
  const [savedJobs, setSavedJobs] = useState([])

  const filteredJobs =
    activeFilter === 'All Jobs'
      ? jobs
      : jobs.filter((job) =>
          job.type === activeFilter || job.tags.includes(activeFilter)
        )

  const toggleSaved = (jobId) => {
    setSavedJobs((current) =>
      current.includes(jobId)
        ? current.filter((id) => id !== jobId)
        : [...current, jobId]
    )
  }

  return (
    <section className="featured-opportunities-section">
      <div className="container featured-container">

        <div className="featured-heading d-flex justify-content-between align-items-start">
          <div>
            <h2>Featured Opportunities</h2>
            <p>Handpicked positions from top-tier companies.</p>
          </div>

          <a href="/jobs" className="featured-view-all">
            View All Jobs <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="featured-filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={`featured-filter ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="row g-3">
          {filteredJobs.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <article className="featured-job-card h-100">

                <div className="featured-job-top">
                  <div className={`featured-company-logo ${job.companyColor}`}>
                    {job.initial}
                  </div>

                  <button
                    type="button"
                    className={`featured-save-button ${savedJobs.includes(job.id) ? 'saved' : ''}`}
                    onClick={() => toggleSaved(job.id)}
                    aria-label={savedJobs.includes(job.id) ? 'Remove saved job' : 'Save job'}
                  >
                    <i className={`bi ${savedJobs.includes(job.id) ? 'bi-bookmark-fill' : 'bi-bookmark'}`}></i>
                  </button>
                </div>

                <h3>{job.title}</h3>
                <p className="featured-company-name">{job.location}</p>

                <div className="featured-job-tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="featured-job-bottom">
                  <strong>{job.salary}</strong>
                  <span>Per Annum</span>
                </div>

              </article>
            </div>
          ))}

          {filteredJobs.length === 0 && (
            <div className="col-12">
              <p className="featured-empty-message">
                No jobs found for this filter.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default FeaturedOpportunities
