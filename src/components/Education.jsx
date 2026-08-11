import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

export default function Education() {
  const items = [
    { degree:"B.Sc. in Computer Science & Engineering", school:"Southeast University, Dhaka, Bangladesh", period:"2023 – 2027", note:"", courses:[] },
    { degree:"Higher Secondary Certificate (HSC) - Science", school:"HSC Batch: 2022", period:"2022 – 2023", note:"GPA: 4.88 / 5.00", courses:[] },
  ];
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionLabel text="education" />
        <div className="timeline" style={{ marginTop:32 }}>
          {items.map((item,i) => (
            <div className={`tl-item reveal delay-${i+1}`} key={i}>
              <div className="tl-dot" />
              <div className="card" style={{ padding:24 }}>
                <div className="tl-period">{item.period}</div>
                <div className="tl-degree">{item.degree}</div>
                <div className="tl-school">{item.school}</div>
                <div className="tl-note">{item.note}</div>
                <div className="skill-tags">{item.courses.map(c => <span className="tag" key={c}>{c}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}