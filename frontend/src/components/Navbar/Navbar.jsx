import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.body.classList.contains("dark-theme"),
  );
  const [loggingOut, setLoggingOut] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("auth_token")),
  );

  // Listen for login and logout events
  useEffect(() => {
    const updateAuthStatus = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("auth_token")));
    };

    window.addEventListener("authChanged", updateAuthStatus);

    return () => {
      window.removeEventListener("authChanged", updateAuthStatus);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-theme", newMode);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setJobsOpen(false);
  };

  // Logout
  const handleLogout = async () => {
    if (loggingOut) return;

    setLoggingOut(true);

    const token = localStorage.getItem("auth_token");

    try {
      if (token) {
        await fetch("/api/logout", {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error("Logout API error:", error);
    } finally {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");

      window.dispatchEvent(new Event("authChanged"));

      closeMenu();
      setLoggingOut(false);
      navigate("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-xl job-navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-brand job-logo" onClick={closeMenu}>
          Job Hiring<span>.</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto align-items-xl-center">
            <li className="nav-item">
              <Link to="/" className="nav-link active" onClick={closeMenu}>
                Home
              </Link>
            </li>

            {/* Jobs dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle jobs-dropdown"
                type="button"
                onClick={() => setJobsOpen(!jobsOpen)}
                aria-expanded={jobsOpen}
              >
                Jobs
              </button>

              {jobsOpen && (
                <ul className="dropdown-menu show">
                  <li>
                    <Link
                      to="/jobs"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Browse Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs/remote"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Remote Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs/internships"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Internships
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jobs/saved"
                      className="dropdown-item"
                      onClick={closeMenu}
                    >
                      Saved Jobs
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="nav-item">
              <Link to="/degree" className="nav-link" onClick={closeMenu}>
                Degree
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/employer" className="nav-link" onClick={closeMenu}>
                Employer
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/jobs" className="nav-link" onClick={closeMenu}>
                Explore Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/applications" className="nav-link" onClick={closeMenu}>
                Application
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile" className="nav-link" onClick={closeMenu}>
                Profile
              </Link>
            </li>
          </ul>

          {/* Right side buttons */}
          <div className="navbar-actions d-flex align-items-center gap-2">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title="Toggle theme"
            >
              <i
                className={`bi ${darkMode ? "bi-sun-fill" : "bi-moon-fill"}`}
              ></i>
            </button>

            {isLoggedIn ? (
              <button
                type="button"
                className="btn login-btn"
                onClick={handleLogout}
                disabled={loggingOut}
              >
                {loggingOut ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Logging out...
                  </>
                ) : (
                  <>
                    <i className="bi bi-box-arrow-right me-1"></i>
                    Logout
                  </>
                )}
              </button>
            ) : (
              <>
                <Link to="/login" className="btn login-btn" onClick={closeMenu}>
                  Login
                </Link>

                <Link
                  to="/register"
                  className="btn register-btn"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
