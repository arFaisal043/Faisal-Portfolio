import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "./ShinyButton";
import JsonWindow from "./JsonWindow";
import Projects from "./Projects";
import Certifications from "./Certifications";

export default function Hero() {
  const [text, setText] = useState("");
  const full = "Building Scalable\nBackend Solutions\nfor Global Teams.";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => { setText(full.slice(0, i)); i++; if (i > full.length) clearInterval(id); }, 45);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="hero">
      <div className="hero-bg-glow" />
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge reveal delay-1">
              <span className="hero-badge-dot" />
              Available for Remote Work
            </div>
            <h1 className="hero-title reveal delay-2">
              {text.split("\n").map((line, i) => (
                <span key={i}>{i === 1 ? <span className="accent">{line}</span> : line}{"\n"}</span>
              ))}

            </h1>
            <p className="hero-sub reveal delay-3">
              CS student at Southeast University, Dhaka. Passionate about backend development and software engineering. I enjoy designing APIs and building scalable web applications.
            </p>
            <div className="hero-ctas reveal delay-4">
              <ShinyButton href="#projects">View Projects →</ShinyButton>
              <ShinyButton href="#contact" outline>Let's Collaborate</ShinyButton>
            </div>
            <div className="stats-strip reveal delay-5">
              {[["20+", "Projects Completed"], ["200+", "DSA Problem Solved"], ["∞", "Lines of Code"]].map(([n, l]) => (
                <div key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
              ))}
            </div>
          </div>
          <JsonWindow />
        </div>
      </div>
    </section>
  );
}