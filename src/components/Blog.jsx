import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";
import { BLOGS } from "../data/constants";

export default function Blog() {
  return (
    <section id="blog" className="section section-alt">
      <div className="container">
        <SectionLabel text="blog" />
        <div className="blog-grid" style={{ marginTop:32 }}>
          {BLOGS.map((b,i) => (
            <a className={`blog-card reveal delay-${i+1}`} href={b.link} key={i}>
              <div className="blog-meta">
                <span className="blog-date">{b.date}</span>
                <span className="blog-readtime">{b.readTime}</span>
              </div>
              <div className="blog-title">{b.title}</div>
              <div className="blog-excerpt">{b.excerpt}</div>
              <div className="blog-cta">Read article →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}