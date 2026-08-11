import React, { useState, useEffect, useRef } from "react";

export default function JsonWindow() {
  const c = { key: "#a78bfa", str: "#4ade80", bool: "#38bdf8", brace: "#e2e8f0", arr: "#fbbf24", muted: "#3d5070" };
  const s = (color, text) => <span style={{ color }}>{text}</span>;
  return (
    <div className="code-window reveal-right" style={{ transform: "perspective(900px) rotateY(-4deg) rotateX(2deg)", transition: "transform 0.4s ease", boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,102,255,0.12)" }}
      onMouseEnter={e => e.currentTarget.style.transform = "perspective(900px) rotateY(-1deg) rotateX(0deg)"}
      onMouseLeave={e => e.currentTarget.style.transform = "perspective(900px) rotateY(-4deg) rotateX(2deg)"}
    >
      <div className="code-titlebar">
        <span className="code-dot" style={{ background: "#ef4444" }} />
        <span className="code-dot" style={{ background: "#f59e0b" }} />
        <span className="code-dot" style={{ background: "#22c55e" }} />
        <span className="code-filename">code.json</span>
        <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--text-muted)" }}>JSON</span>
      </div>
      <div className="code-body">
        <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
          {s(c.brace, "{\n")}
          {s(c.muted, "  ")}{s(c.key, '"name"')}{s(c.brace, ": ")}{s(c.str, '"Abdur Rahman Faisal"')}{s(c.brace, ",\n")}
          {s(c.muted, "  ")}{s(c.key, '"role"')}{s(c.brace, ": ")}{s(c.str, '"Backend Developer"')}{s(c.brace, ",\n")}
          {s(c.muted, "  ")}{s(c.key, '"location"')}{s(c.brace, ": ")}{s(c.str, '"Dhaka, Bangladesh"')}{s(c.brace, ",\n")}
          {s(c.muted, "  ")}{s(c.key, '"stack"')}{s(c.brace, ": {\n")}
          {s(c.muted, "    ")}{s(c.key, '"languages"')}{s(c.brace, ": ")}{s(c.arr, '["C/C++", "JavaScript", "TypeScript", "Python", "Java"]')}{s(c.brace, ",\n")}
          {s(c.muted, "    ")}{s(c.key, '"backend"')}{s(c.brace, ": ")}{s(c.arr, '["Node.js", "Express.js", "Authentication"]')}{s(c.brace, ",\n")}
          {s(c.muted, "    ")}{s(c.key, '"database"')}{s(c.brace, ": ")}{s(c.arr, '["PostgreSQL", "MySQL", "Prisma", "MongoDB"]')}{s(c.brace, ",\n")}
          {s(c.muted, "    ")}{s(c.key, '"tools"')}{s(c.brace, ": ")}{s(c.arr, '["Docker", "Git", "Postman"]')}{s(c.brace, "\n")}
          {s(c.muted, "  ")}{s(c.brace, "},\n")}
          {s(c.muted, "  ")}{s(c.key, '"available"')}{s(c.brace, ": ")}{s(c.bool, "true")}{s(c.brace, "\n")}
          {s(c.brace, "}")}
        </pre>
      </div>
    </div>
  );
}