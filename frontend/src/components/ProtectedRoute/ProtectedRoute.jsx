import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("auth_token");

      // Check whether a token exists
      if (!token) {
        setIsAuthenticated(false);
        setIsChecking(false);
        return;
      }

      try {
        // Ask Laravel to verify the token
        const response = await fetch("/api/user", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error("Invalid or expired token");
        }

        // Save the latest user information
        localStorage.setItem("user", JSON.stringify(data));

        setIsAuthenticated(true);
      } catch (error) {
        // Remove invalid authentication details
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");

        window.dispatchEvent(new Event("authChanged"));

        setIsAuthenticated(false);
      } finally {
        setIsChecking(false);
      }
    };

    verifyToken();
  }, []);

  // Show loading while Laravel verifies the token
  if (isChecking) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Verifying your account...</p>
        </div>
      </div>
    );
  }

  // Redirect unauthenticated users to Login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Allow authenticated users to access protected pages
  return <Outlet />;
}

export default ProtectedRoute;
