import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

const TESTIMONIALS = [
  {
    text: "Abdur Rahman delivered our full-stack SaaS dashboard ahead of schedule. His TypeScript architecture was clean, well-documented, and the CI/CD pipeline he set up saved us weeks of DevOps work. Genuinely one of the best remote engineers I've worked with.",
    name: "James Whitfield",
    role: "CTO · NexaFlow Inc., UK",
    initials: "JW",
    color: "#0066FF",
    stars: 5,
  },
  {
    text: "We hired Abdur for a 3-month contract to rebuild our data pipeline with FastAPI and PostgreSQL. He was async-first, communicated proactively in Slack, never missed a standup, and the API performance improved by 4×. Would hire again without hesitation.",
    name: "Priya Nair",
    role: "Lead Engineer · DataStack, Singapore",
    initials: "PN",
    color: "#8b5cf6",
    stars: 5,
  },
  {
    text: "Our React frontend was a mess of prop drilling and legacy class components. Abdur refactored it into a clean Redux + RTK Query architecture over 6 weeks. He asked the right questions from day one and delivered exactly what we needed.",
    name: "Marco Esposito",
    role: "Product Manager · Solara Labs, Italy",
    initials: "ME",
    color: "#10b981",
    stars: 5,
  },
  {
    text: "Abdur built our ML inference API using FastAPI and Docker, integrated it with our React dashboard, and wrote comprehensive tests. His ability to bridge the gap between data science and production engineering is rare and incredibly valuable.",
    name: "Sarah Chen",
    role: "AI Research Lead · Cognify, Canada",
    initials: "SC",
    color: "#f59e0b",
    stars: 5,
  },
  {
    text: "Working with Abdur across a 6-hour time zone difference was seamless. He documented every decision in Notion, left async video updates for complex PRs, and shipped a full e-commerce backend with Stripe integration in just 4 weeks.",
    name: "Lukas Bauer",
    role: "Founder · ShopKit, Germany",
    initials: "LB",
    color: "#ef4444",
    stars: 5,
  },
  {
    text: "Abdur is the kind of engineer who reads the brief twice before writing a single line of code. He built our Node.js microservices architecture from scratch — clean, tested, and deployed on AWS with full monitoring. Outstanding work.",
    name: "Amira Hassan",
    role: "Engineering Manager · Veltro, UAE",
    initials: "AH",
    color: "#06b6d4",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex]       = useState(0);
  const [perView, setPerView]   = useState(3);
  const trackRef                = useRef(null);

  // Responsive perView
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 600)      setPerView(1);
      else if (window.innerWidth <= 900) setPerView(2);
      else                               setPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = TESTIMONIALS.length - perView;
  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  // Card width % of track
  const cardW   = 100 / perView;
  const gapPx   = 24;
  const offsetPx = index * (trackRef.current
    ? (trackRef.current.offsetWidth / perView)
    : 0);

  // Auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i >= maxIndex ? 0 : i + 1));
    }, 4000);
    return () => clearInterval(id);
  }, [maxIndex]);

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <SectionLabel text="testimonials" />
        <h2 className="reveal" style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:700, color:"var(--text-primary)", marginTop:8, marginBottom:4 }}>
          What clients <span style={{ color:"var(--btn-blue)" }}>say.</span>
        </h2>
        <p className="reveal" style={{ color:"var(--text-secondary)", fontSize:"0.95rem", marginBottom:0 }}>
          Feedback from engineers and founders I've worked with remotely.
        </p>

        <div className="testimonials-outer reveal" style={{ marginTop:36 }}>
          <div
            ref={trackRef}
            className="testimonials-track"
            style={{ transform: `translateX(calc(-${index * cardW}% - ${index * gapPx}px))` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-quote">"</div>

                {/* Stars */}
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <span className="testimonial-star" key={s}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p className="testimonial-text">"{t.text}"</p>

                {/* Author */}
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ background: t.color }}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="testimonial-controls">
          <button className="testimonial-btn" onClick={prev} disabled={index === 0}>←</button>
          <div className="testimonial-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                className={`testimonial-dot${index === i ? " active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button className="testimonial-btn" onClick={next} disabled={index >= maxIndex}>→</button>
        </div>
      </div>
    </section>
  );
}