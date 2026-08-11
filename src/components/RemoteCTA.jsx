import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "./ShinyButton";

export default function RemoteCTA() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box reveal-scale">
          <span className="cta-eyebrow">◆ remote-ready</span>
          <h2 className="cta-heading">Looking for a self-driven engineer<br />who thrives in async environments?</h2>
          <p className="cta-sub">I ship quality work across time zones, communicate proactively, and know how to unblock myself. Let's talk about how I can add value to your team.</p>
          <div className="cta-actions">
            <ShinyButton href="mailto:arfaisal463@gmail.com">Schedule a Chat ✉</ShinyButton>
            <ShinyButton href="#" outline>Download Resume ↓</ShinyButton>
          </div>
        </div>
      </div>
    </section>
  );
}