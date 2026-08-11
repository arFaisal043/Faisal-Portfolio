import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  const categories = [
    { icon:"💻", title:"Languages", tags:["C", "C++", "JavaScript", "TypeScript", "Python", "Java"] },
    { icon:"⚙️", title:"Backend", tags:["Node.js", "Express.js", "REST APIs", "JWT", "API Integration"] },
    { icon:"🗄️", title:"Databases", tags:["PostgreSQL", "MySQL", "MongoDB", "SQL", "Prisma", "Mongoose"] },
    { icon:"⚛️", title:"Frontend", tags:["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { icon:"🤖", title:"CS & AI", tags:["DSA", "OOP", "Computer Networks", "Pandas", "NumPy", "Matplotlib"] },
    { icon:"🛠️", title:"Tools", tags:["Git", "GitHub", "Docker", "Postman", "n8n"] },
  ];
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionLabel text="tech_stack" />
        <p className="reveal" style={{ color:"var(--text-secondary)", fontSize:"1rem", marginTop:8, maxWidth:540 }}>
          Technologies I work with daily to build production-grade applications.
        </p>
        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div className={`skills-card reveal delay-${i+1}`} key={cat.title}>
              <div className="skills-card-icon">{cat.icon}</div>
              <div className="skills-card-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}