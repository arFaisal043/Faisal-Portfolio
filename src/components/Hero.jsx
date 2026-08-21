import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "./ShinyButton";
import JsonWindow from "./JsonWindow";
import Projects from "./Projects";
import Certifications from "./Certifications";

const AnimatedNumber = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (typeof end !== "number") {
      return;
    }
    let start = 0;
    const duration = 1500; // 1.5 seconds animation
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  if (typeof end !== "number") return <>{end}</>;
  return <>{count}{suffix}</>;
};

export default function Hero() {
  const [text, setText] = useState("");
  const full = "Building Scalable\nBackend Solutions\nfor Global Teams.";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => { setText(full.slice(0, i)); i++; if (i > full.length) clearInterval(id); }, 45);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="hero hero-centered">
      <div className="hero-bg-glow" />
      <div className="container">
        <div className="hero-content">
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
            {[
              { end: 20, suffix: "+", label: "Projects Completed" },
              { end: 200, suffix: "+", label: "DSA Problem Solved" },
              { end: "∞", suffix: "", label: "Lines of Code" }
            ].map(({ end, suffix, label }) => (
              <div key={label}>
                <div className="stat-num">
                  <AnimatedNumber end={end} suffix={suffix} />
                </div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}