
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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
    setLoading(true);

    try {
      const response = await fetch("/api/login", {
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

        setMessage(data.message || "Login failed. Please try again.");
        return;
      }

      localStorage.setItem("auth_token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      window.dispatchEvent(new Event("authChanged"));

      setMessage("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setMessage("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-back-home">
        <Link to="/" className="login-back-link">
          <i className="bi bi-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="login-card">
        <div className="login-icon">
          <i className="bi bi-shield-lock-fill"></i>
        </div>

        <div className="login-heading">
          <h2>Welcome Back</h2>
          <p>Sign in to continue your career journey.</p>
        </div>

        {message && (
          <div
            className={`alert ${
              message.includes("successful")
                ? "alert-success"
                : "alert-danger"
            } login-alert`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="loginEmail">Email Address</label>

            <div className="login-input-wrapper">
              <i className="bi bi-envelope"></i>

              <input
                id="loginEmail"
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
              <div className="login-error">{errors.email[0]}</div>
            )}
          </div>

          <div className="login-field">
            <label htmlFor="loginPassword">Password</label>

            <div className="login-input-wrapper">
              <i className="bi bi-lock"></i>

              <input
                id="loginPassword"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? "input-error" : ""}
                required
              />

              <button
                type="button"
                className="login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <i
                  className={`bi ${
                    showPassword ? "bi-eye-slash" : "bi-eye"
                  }`}
                ></i>
              </button>
            </div>

            {errors.password && (
              <div className="login-error">{errors.password[0]}</div>
            )}
          </div>

          <button
            type="submit"
            className="login-submit-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
            {!loading && <i className="bi bi-arrow-right"></i>}
          </button>
        </form>

        <div className="login-register-link">
          <span>Don't have an account?</span>
          <Link to="/register">Register Free</Link>
        </div>
      </div>

      <div className="login-bottom-text">
        © 2026 Job Hiring. All rights reserved.
      </div>
    </div>
  );
}

export default Login;
