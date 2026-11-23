import React from "react";
import { Link } from "react-router-dom";
import "./ExploreCategory.css";

const categories = [
  {
    name: "Development",
    jobs: "120+ Jobs",
    icon: "bi-code-slash",
    color: "purple",
  },
  {
    name: "Design & Creative",
    jobs: "85+ Jobs",
    icon: "bi-brush-fill",
    color: "green",
  },
  {
    name: "Marketing",
    jobs: "90+ Jobs",
    icon: "bi-graph-up-arrow",
    color: "orange",
  },
  { name: "Finance", jobs: "65+ Jobs", icon: "bi-wallet-fill", color: "pink" },
  {
    name: "Business",
    jobs: "100+ Jobs",
    icon: "bi-briefcase-fill",
    color: "blue",
  },
  {
    name: "Human Resources",
    jobs: "45+ Jobs",
    icon: "bi-people-fill",
    color: "violet",
  },
  {
    name: "Data & Analytics",
    jobs: "75+ Jobs",
    icon: "bi-database-fill",
    color: "yellow",
  },
  {
    name: "Customer Support",
    jobs: "55+ Jobs",
    icon: "bi-headset",
    color: "teal",
  },
];

function ExploreCategory() {
  return (
    <section className="explore-category-section">
      <div className="container category-container">
        <div className="category-heading d-flex justify-content-between align-items-center">
          <div>
            <h2>Explore by Category</h2>
            <p>Find the perfect role in your area of expertise.</p>
          </div>

          <Link to="/jobs" className="category-view-link">
            Explore All <span>→</span>
          </Link>
        </div>

        <div className="row g-2">
          {categories.map((category) => (
            <div className="col-12 col-sm-6 col-lg-3" key={category.name}>
              <Link
                to={`/jobs?category=${encodeURIComponent(category.name)}`}
                className="category-card"
              >
                <div className={`category-icon ${category.color}`}>
                  <i className={`bi ${category.icon}`}></i>
                </div>

                <div className="category-info">
                  <h6>{category.name}</h6>
                  <p>{category.jobs}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExploreCategory;
