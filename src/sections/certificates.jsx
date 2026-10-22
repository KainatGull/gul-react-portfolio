
import React from "react";
import certificates from "../data/certificates";
import "../styles/certificates.css";

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-heading">
        <span className="section-label">MY ACHIEVEMENTS</span>
        <h2>Certifications<span>.</span></h2>
        <p>Milestones earned through learning and building.</p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <a
            className="certificate-card"
            href={certificate.link}
            target="_blank"
            rel="noopener noreferrer"
            key={certificate.id}
          >
            <div className="certificate-image-wrap">
              <img
                src={certificate.image}
                alt={`${certificate.name} certificate`}
                loading="lazy"
              />
              <span className="certificate-number">
                0{index + 1}
              </span>
              <span className="certificate-open">↗</span>
            </div>

            <div className="certificate-info">
              <div>
                <h3>{certificate.name}</h3>
                <p>{certificate.issuer}</p>
              </div>
              <span className="certificate-link">VERIFY ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
