import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    icon: "bi-magic",
    title: "AI Skill Matching",
    description:
      "Our neural matching engine analyzes resume vectors against real-time job requirements with 99.4% precision.",
  },
  {
    icon: "bi-lightning-fill",
    title: "Instant Application",
    description:
      "Apply to verified enterprise openings in a single click with pre-verified credentials and instant recruiter routing.",
  },
  {
    icon: "bi-shield-fill",
    title: "Trusted & Secure",
    description:
      "Every employer and candidate goes through automated multi-layer verification ensuring a spam-free hiring ecosystem.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="container why-container">
        <div className="section-heading text-center">
          <span className="section-eyebrow">NEXT-GEN INTELLIGENCE</span>

          <h2>Why Top Companies Choose Job Hiring Prime</h2>

          <p>
            Powered by advanced automated algorithms designed to connect elite
            talent with high-growth organizations effortlessly.
          </p>
        </div>

        <div className="row g-3">
          {features.map((feature) => (
            <div className="col-md-4" key={feature.title}>
              <div className="why-feature-card h-100">
                <div className="why-feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <h5>{feature.title}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
