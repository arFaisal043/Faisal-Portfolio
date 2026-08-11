import React, { useState, useEffect, useRef } from "react";

export default function Loader({ onDone }) {
  const [pct,  setPct]  = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Smoothly increment by random amount between 1 and 3
      current += Math.random() * 2 + 1;
      if (current >= 100) {
        current = 100;
        setPct(100);
        clearInterval(interval);
        setTimeout(() => setFade(true), 400);
        setTimeout(() => onDone(), 1000);
      } else {
        setPct(Math.floor(current));
      }
    }, 30); // 30ms interval = smooth ~33fps updates
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader-overlay${fade ? " fade" : ""}`}>
      <p className="loader-title">
        <span>Portfolio</span> · Loading
      </p>
      <p className="loader-name">
        Abdur Rahman <em>Faisal</em>
      </p>
      <div className="loader-track">
        <div className="loader-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="loader-pct">{pct}%</p>
    </div>
  );
}