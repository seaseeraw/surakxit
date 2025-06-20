import React from 'react';
import '../App.css'; // Import CSS file

const Career = () => {
  const jobs = [
    { title: "React Frontend Engineer (Banking UX)", type: "Remote" },
    { title: "Node.js API Developer (Payments)", type: "Hybrid - Sydney" },
    { title: "Security Engineer (Fintech Compliance)", type: "Onsite - Melbourne" },
    { title: "Full Stack Developer (MERN)", type: "Remote" },
  ];

  return (
    <div className="careers-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Join the Future of Secure Digital Banking</h1>
        <p>We are building the most trusted banking platform using modern technology. Help us shape the future of finance.</p>
        <button className="cta-button">Explore Roles</button>
      </section>

      {/* Mission Section */}
      <section className="section mission">
        <h2>🔐 Our Mission</h2>
        <p>
          At FinTrust Bank, we believe everyone deserves access to safe, intelligent, and intuitive financial services.
          Built with the MERN stack, we deliver scalable and secure experiences that redefine how banking is done.
        </p>
      </section>

      {/* Why Work With Us */}
      <section className="section benefits">
        <h2>💼 Why Work at FinTrust</h2>
        <div className="benefits-list">
          {[
            "Work with cutting-edge technology – MERN, Docker, GraphQL, and more.",
            "Build secure financial systems trusted by thousands.",
            "Remote-friendly culture and inclusive environment.",
            "Opportunities to grow in fintech, compliance, and engineering.",
            "Be part of meaningful digital transformation in banking.",
            "Learn continuously through mentorship and certifications.",
          ].map((text, idx) => (
            <div key={idx} className="benefit-card">{text}</div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="section openings">
        <h2>📋 Current Openings</h2>
        <ul className="job-list">
          {jobs.map((job, index) => (
            <li key={index} className="job-item">
              <div>
                <p className="job-title">{job.title}</p>
                <p className="job-type">{job.type}</p>
              </div>
              <button className="apply-button">Apply</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="section final-cta">
        <h2>Ready to shape the future of banking?</h2>
        <p>We’re always looking for passionate, trustworthy talent to join us.</p>
        <button className="cta-button">Join Our Team</button>
      </section>
    </div>
  );
};

export default Career;



