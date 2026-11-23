import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-nav">
      <div className="container footer-wrapper">
        {/* Footer top section */}
        <div className="row g-4 footer-top">
          {/* SHOP */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">SHOP</h6>

            <ul className="list-unstyled footer-links">
              <li>Browse Jobs</li>
              <li>Saved Positions</li>
              <li>Remote Roles</li>
              <li>Internships</li>
              <li>Enterprise Plans</li>
            </ul>
          </div>

          {/* LEARN */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">LEARN</h6>

            <ul className="list-unstyled footer-links">
              <li>Our Story</li>
              <li>Career Blog</li>
              <li>AI Matching</li>
              <li>Sustainability</li>
              <li>Enterprise Plans</li>
            </ul>
          </div>

          {/* HELP */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">HELP</h6>

            <ul className="list-unstyled footer-links">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Accessibility</li>
              <li>Support Center</li>
              <li>Manage Subscriptions</li>
            </ul>
          </div>

          {/* JOB HIRING */}
          <div className="col-6 col-lg-2">
            <h6 className="footer-heading">JOB HIRING</h6>

            <ul className="list-unstyled footer-links">
              <li>My Account</li>
              <li>Register Account</li>
              <li>Recruiter Portal</li>
              <li>Press &amp; Media</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-12 col-lg-4">
            <h6 className="footer-heading">
              SIGN UP TO GET 15% OFF ON YOUR FIRST ORDER
            </h6>

            <form
              className="footer-form d-flex align-items-center rounded-pill p-1"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                className="form-control border-0 shadow-none"
                placeholder="Your Email Address"
                aria-label="Your email address"
                required
              />

              <button type="submit" className="btn subscribe-btn rounded-pill">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="footer-bottom border-top">
          <div className="row align-items-center gy-3">
            {/* Copyright */}
            <div className="col-12 col-lg-4 text-center text-lg-start">
              <p className="footer-copy mb-0">
                © 2026 Job Hiring, Inc. All Rights Reserved
              </p>
            </div>

            {/* Social media icons */}
            <div className="col-12 col-lg-4">
              <div className="footer-social d-flex justify-content-center gap-2">
                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#" aria-label="Pinterest">
                  <i className="bi bi-pinterest"></i>
                </a>

                <a href="#" aria-label="TikTok">
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>

            {/* Legal links */}
            <div className="col-12 col-lg-4">
              <div className="footer-legal d-flex justify-content-center justify-content-lg-end align-items-center gap-3">
                <span className="bcorp">Certified B Corp</span>

                <a href="#">Terms</a>

                <a href="#">Privacy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
