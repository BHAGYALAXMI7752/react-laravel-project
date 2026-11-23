
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile_number: "",
    work_status: "",
  });

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setErrors({});

    if (!agreeTerms) {
      setMessage("Please accept the Terms and Conditions.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }

        setMessage(data.message || "Registration failed. Please try again.");
        return;
      }

      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMessage("Registration successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="register-page">
        <div className="register-container">
          <div className="row g-0 register-card">

            {/* Left promotional section */}
            <div className="col-lg-5 register-promo">
              <div className="register-promo-content">
                <div className="register-ai-badge">
                  <i className="bi bi-stars"></i>
                  AI-POWERED CAREER PLATFORM
                </div>

                <h1>
                  Supercharge Your Career Journey with AI
                </h1>

                <p className="register-promo-description">
                  Create your free account and discover opportunities
                  that match your skills and career goals.
                </p>

                <div className="register-benefits">
                  <div className="register-benefit">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>AI-powered job recommendations</span>
                  </div>

                  <div className="register-benefit">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Connect with top companies</span>
                  </div>

                  <div className="register-benefit">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Track your job applications</span>
                  </div>
                </div>

                <div className="register-promo-decoration">
                  <i className="bi bi-briefcase-fill"></i>
                  <div>
                    <strong>Your next opportunity awaits</strong>
                    <span>Build your future with Job Hiring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration form */}
            <div className="col-lg-7 register-form-section">
              <div className="register-form-content">

                <div className="register-back-home">
                  <Link to="/">
                    <i className="bi bi-arrow-left"></i>
                    Back to Home
                  </Link>
                </div>

                <div className="register-heading">
                  <h2>Create Your Account</h2>
                  <p>
                    Join Job Hiring and take the next step in your career.
                  </p>
                </div>

                {message && (
                  <div
                    className={`alert ${
                      message.includes("successful")
                        ? "alert-success"
                        : "alert-danger"
                    } register-alert`}
                  >
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="register-field">
                    <label htmlFor="registerName">Full Name</label>

                    <div className="register-input-wrapper">
                      <i className="bi bi-person"></i>

                      <input
                        id="registerName"
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "input-error" : ""}
                        required
                      />
                    </div>

                    {errors.name && (
                      <div className="register-error">
                        {errors.name[0]}
                      </div>
                    )}
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerEmail">Email Address</label>

                    <div className="register-input-wrapper">
                      <i className="bi bi-envelope"></i>

                      <input
                        id="registerEmail"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "input-error" : ""}
                        required
                      />
                    </div>

                    {errors.email && (
                      <div className="register-error">
                        {errors.email[0]}
                      </div>
                    )}
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerPassword">Password</label>

                    <div className="register-input-wrapper">
                      <i className="bi bi-lock"></i>

                      <input
                        id="registerPassword"
                        type="password"
                        name="password"
                        placeholder="Create a password (minimum 8 characters)"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? "input-error" : ""}
                        required
                        minLength={8}
                      />
                    </div>

                    {errors.password && (
                      <div className="register-error">
                        {errors.password[0]}
                      </div>
                    )}
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerMobile">Mobile Number</label>

                    <div className="register-input-wrapper">
                      <i className="bi bi-telephone"></i>

                      <input
                        id="registerMobile"
                        type="tel"
                        name="mobile_number"
                        placeholder="Enter your mobile number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        className={errors.mobile_number ? "input-error" : ""}
                        required
                      />
                    </div>

                    {errors.mobile_number && (
                      <div className="register-error">
                        {errors.mobile_number[0]}
                      </div>
                    )}
                  </div>

                  <div className="register-field">
                    <label htmlFor="registerWorkStatus">Work Status</label>

                    <div className="register-input-wrapper">
                      <i className="bi bi-briefcase"></i>

                      <select
                        id="registerWorkStatus"
                        name="work_status"
                        value={formData.work_status}
                        onChange={handleChange}
                        className={errors.work_status ? "input-error" : ""}
                        required
                      >
                        <option value="">Select your work status</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Fresher">Fresher</option>
                      </select>
                    </div>

                    {errors.work_status && (
                      <div className="register-error">
                        {errors.work_status[0]}
                      </div>
                    )}
                  </div>

                  <div className="register-terms">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                    />

                    <label htmlFor="agreeTerms">
                      I agree to the{" "}
                      <a href="#terms">Terms and Conditions</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="register-submit-btn"
                    disabled={loading}
                  >
                    {loading ? "Creating Account..." : "Create Free Account"}
                    {!loading && <i className="bi bi-arrow-right"></i>}
                  </button>
                </form>

                <div className="register-divider">
                  <span>OR</span>
                </div>

                <button
                  type="button"
                  className="register-google-btn"
                  disabled
                  title="Google registration is not configured yet"
                >
                  <i className="bi bi-google"></i>
                  Continue with Google
                </button>

                <div className="register-signin-link">
                  <span>Already have an account?</span>
                  <Link to="/login">Sign In</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Register;
