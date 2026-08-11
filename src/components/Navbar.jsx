import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "./ShinyButton";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Blog from "./Blog";
import Contact from "./Contact";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Education", "Projects", "Certifications", "Contact"];
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo" style={{ textDecoration: "none" }}>AR<span>.Faisal</span></a>
          <div className="nav-links">
            {links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
          </div>
          <div className="nav-actions">
            <button className="btn-theme" onClick={() => setDark(!dark)}>{dark ? "☀️" : "🌙"}</button>
            <ShinyButton href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↓</ShinyButton>
            <button className="hamburger" onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>)}
      </div>
    </>
  );
}