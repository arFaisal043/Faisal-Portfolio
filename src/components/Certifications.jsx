import React, { useState } from "react";
import SectionLabel from "./SectionLabel";
import { ACHIEVEMENTS } from "../data/constants";

function CertCard({ c, index }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`cert-card reveal delay-${index + 1}`} style={{ height: "100%" }}>
      <div className="cert-icon">{c.icon}</div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="cert-title">{c.title}</div>
        <div className="cert-org">{c.org}</div>
        {c.desc && (
          <div style={{ flex: 1 }}>
            <div
              className="cert-desc"
              style={{
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
                marginTop: "8px",
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "unset" : 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {c.desc}
            </div>
            <button 
              onClick={() => setExpanded(!expanded)} 
              style={{
                background: "transparent",
                border: "none",
                color: "var(--btn-blue)",
                fontSize: "0.8rem",
                cursor: "pointer",
                padding: "4px 0",
                marginTop: "2px",
                fontFamily: "inherit"
              }}
            >
              {expanded ? "See Less" : "See More"}
            </button>
          </div>
        )}
      </div>
      <div className="cert-footer" style={{ marginTop: "auto" }}>
        <span className="cert-date">{c.date}</span>
        <a href={c.link} className="cert-verify">View ↗</a>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionLabel text="certifications" />
        <div className="certs-grid" style={{ marginTop: 32 }}>
          {ACHIEVEMENTS.map((c, i) => (
            <CertCard c={c} index={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}