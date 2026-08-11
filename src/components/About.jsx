import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "./ShinyButton";
import SectionLabel from "./SectionLabel";
import PHOTO from '../assets/profile.jpg';

export default function About() {

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionLabel text="about_me" />
        <div className="about-photo-grid" style={{ marginTop:36 }}>
          {/* ── LEFT: PHOTO ── */}
          <div className="about-photo-wrap reveal-left">
            <img src={PHOTO} alt="Abdur Rahman Faisal — coding at desk" />
            <div className="about-photo-overlay" />
            <div className="about-photo-badge">
              <span style={{ width:7,height:7,borderRadius:"50%",background:"#34d399",boxShadow:"0 0 8px #34d399",display:"inline-block" }} />
              Available for Remote Work
            </div>
          </div>

          {/* ── RIGHT: TEXT ── */}
          <div className="about-text-block reveal-right">
            <h2 className="about-heading">
              Engineering for scale,<br />
              <span style={{ color:"var(--btn-blue)" }}>not just for demos.</span>
            </h2>
            <p className="about-p">
              I'm a Computer Science & Engineering student at Southeast University, Dhaka, passionate about backend development and software engineering. I have a solid foundation in Data Structures and Algorithms, Database Systems, Computer Networks, and OOP.
            </p>
            <p className="about-p">
              Experienced with Node.js, Express.js, REST APIs, PostgreSQL, MongoDB, and authentication systems. I also have foundational knowledge of Machine Learning and Deep Learning.
            </p>
            <p className="about-p">
              I enjoy designing APIs, solving backend problems, and building scalable, secure, and reliable web applications while continuously learning modern technologies. Currently seeking remote roles where I can grow with a global team.
            </p>
            <div className="about-info-grid">
              {[
                { label:"Name",       val:"Abdur Rahman Faisal" },
                { label:"University", val:"Southeast University" },
                { label:"Location",   val:"Dhaka, Bangladesh" },
                { label:"Timezone",   val:"UTC +6 (BST)" },
                { label:"Degree",     val:"B.Sc. in CSE" },
                { label:"Status",     val:"Open to Remote Roles" },
              ].map(({ label, val }) => (
                <div className="about-info-item" key={label}>
                  <span className="about-info-label">{label}</span>
                  <span className="about-info-val">{val}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop:32 }}>
              <ShinyButton href="#contact">Get In Touch →</ShinyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}