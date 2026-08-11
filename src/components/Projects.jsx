import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";
import { PROJECTS } from "../data/constants";
import { useReveal } from "../hooks/useReveal";
import ShinyButton from "./ShinyButton";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  useReveal([filter, showAll]);
  const tabs = [
    {id:"all",label:"All"},
    {id:"backend",label:"Backend Development"},
    {id:"analytics",label:"Data Analytics"},
    {id:"database",label:"Database Design"},
    {id:"android",label:"Android Application"},
    {id:"ai",label:"AI / ML"},
    {id:"automation",label:"AI Automation"},
    {id:"cli",label:"CLI Projects"}
  ];
  const filtered = filter==="all" ? PROJECTS : PROJECTS.filter(p=>p.category===filter);
  const displayedProjects = showAll ? filtered : filtered.slice(0, 6);
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionLabel text="projects" />
        <div className="filter-bar reveal" style={{ marginTop:24 }}>
          {tabs.map(t => (
            <button key={t.id} className={`filter-btn${filter===t.id?" active":""}`} onClick={() => { setFilter(t.id); setShowAll(false); }}>{t.label}</button>
          ))}
        </div>
        <div className="projects-grid">
          {displayedProjects.map((p,i) => (
            <div className={`proj-card reveal delay-${(i%3)+1}`} key={i}>
              <div className="proj-thumb" style={{ background:p.bg }}><span className="proj-thumb-icon">{p.icon}</span></div>
              <div className="proj-body">
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
                <div className="proj-links">
                  <a href={p.github} className="proj-link">⎇ GitHub</a>
                  {(p.title.includes("FixItNow") || p.title.includes("DevPulse")) && (
                    <a href={p.demo} className="proj-link demo">↗ Live Demo</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length > 6 && (
          <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <ShinyButton onClick={() => setShowAll(!showAll)}>
              {showAll ? "↑ Show Less" : "↓ Show More Projects"}
            </ShinyButton>
          </div>
        )}
      </div>
    </section>
  );
}