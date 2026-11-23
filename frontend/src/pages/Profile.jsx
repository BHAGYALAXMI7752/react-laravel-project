import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="container py-5">
      <div className="card shadow-sm border-0 rounded-4 p-4">
        <h2 className="fw-bold mb-3">My Profile</h2>

        <p>
          <strong>Name:</strong> {user.name || "Not available"}
        </p>

        <p>
          <strong>Email:</strong> {user.email || "Not available"}
        </p>

        <p>
          <strong>Mobile:</strong> {user.mobile_number || "Not available"}
        </p>

        <p>
          <strong>Work Status:</strong> {user.work_status || "Not available"}
        </p>

        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Profile;
