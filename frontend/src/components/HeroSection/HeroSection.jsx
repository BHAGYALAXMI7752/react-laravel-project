import React, { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("Anywhere");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Job:", jobTitle);
    console.log("Location:", location);
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                AI-POWERED ENTERPRISE RECRUITMENT 2026
              </div>

              <h1 className="hero-title">
                Discover Your Next
                <br />
                <span>Big Opportunity.</span>
              </h1>

              <p className="hero-description">
                Accelerate your hiring or fast-track your career with
                intelligent matching, real-time candidate tracking, and
                world-class enterprise workflows.
              </p>

              <form className="hero-search-form" onSubmit={handleSearch}>
                <div className="hero-search-field">
                  <i className="bi bi-search"></i>
                  <div className="hero-search-input">
                    <label htmlFor="hero-job-search">
                      WHAT ARE YOU LOOKING FOR?
                    </label>
                    <input
                      id="hero-job-search"
                      type="text"
                      placeholder="Job title, skill or company"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                    />
                  </div>
                </div>

                <div className="hero-search-divider"></div>

                <div className="hero-search-field hero-location-field">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div className="hero-search-input">
                    <label htmlFor="hero-location">LOCATION</label>
                    <select
                      id="hero-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option>Anywhere</option>
                      <option>Bangalore</option>
                      <option>Hyderabad</option>
                      <option>Chennai</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Remote</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="hero-search-button">
                  Search Jobs <i className="bi bi-arrow-right"></i>
                </button>
              </form>

              <div className="row g-2 hero-stats">
                <div className="col-4">
                  <div className="hero-stat">
                    <h3>12K+</h3>
                    <p>Live Opportunities</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="hero-stat">
                    <h3>8K+</h3>
                    <p>Trusted Companies</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="hero-stat">
                    <h3>25K+</h3>
                    <p>Successful Hires</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-visual">
              <div className="smart-match-card">
                <div className="smart-match-header">
                  <div className="smart-match-avatar">AI</div>

                  <div className="smart-match-heading">
                    <h5>Smart Match Pulse</h5>
                    <p>Active candidate radar</p>
                  </div>

                  <div className="live-sync">
                    <span></span> Live Sync
                  </div>
                </div>

                <div className="candidate-match-card">
                  <h6>Senior Fullstack Lead</h6>
                  <p>Google Technologies · Bangalore / Remote</p>
                  <div className="match-progress">
                    <div className="match-progress-value"></div>
                  </div>
                </div>

                <div className="assistant-match-card">
                  <h6>AI Recruiter Assistant</h6>
                  <p>Verified 24 candidate interviews scheduled today.</p>

                  <div className="skill-tags">
                    <span className="skill-tag react-tag">React</span>
                    <span className="skill-tag laravel-tag">Laravel</span>
                    <span className="skill-tag python-tag">Python</span>
                  </div>
                </div>

                <div className="match-accuracy">
                  <i className="bi bi-lightning-fill"></i>
                  99.4% Match Accuracy Verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
