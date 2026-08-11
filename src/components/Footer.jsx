import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Blog from "./Blog";
import Contact from "./Contact";

export default function Footer() {
  const year = new Date().getFullYear();

  const GH = () => <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>;
  const LI = () => <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
  const TW = () => <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
  const DEV = () => <svg viewBox="0 0 24 24"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.64-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" /></svg>;
  const FB = () => <svg viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.494v-9.294H9.689v-3.621h3.13V8.41c0-3.1 1.894-4.785 4.66-4.785 1.325 0 2.464.097 2.796.142v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.314h3.59l-.467 3.621h-3.123V24h6.115c.733 0 1.325-.592 1.325-1.325V1.326C24 .593 23.408 0 22.675 0z"/></svg>;

  const socials = [
    { Icon: GH, href: "https://github.com/arFaisal043", title: "GitHub" },
    { Icon: LI, href: "https://www.linkedin.com/in/abdur-rahman-faisal-a998ba291/", title: "LinkedIn" },
    { Icon: TW, href: "https://x.com/arfaisal463", title: "X (Twitter)" },
    { Icon: FB, href: "https://www.facebook.com/faisal043/", title: "Facebook" },
  ];

  const cols = [
    {
      title: "Explore",
      links: [
        ["About Me", "#about"],
        ["Skills", "#skills"],
        ["Education", "#education"],
        ["Projects", "#projects"],
        ["Certifications", "#certifications"],
        ["Blog", "#blog"],
      ],
    },
    {
      title: "Services",
      links: [
        ["Full-Stack Dev", "#"],
        ["API Engineering", "#"],
        ["Data Analytics", "#"],
      ],
    },
    {
      title: "Contact",
      links: null,
      custom: (
        <div>
          {[
            { label: "Email", val: <a href="mailto:arfaisal463@gmail.com">arfaisal463@gmail.com</a> },
            { label: "Location", val: "Dhaka, Bangladesh" },
            { label: "Timezone", val: "UTC +6 · Remote" },
            { label: "Status", val: <span style={{ color: "#34d399" }}>● Open to Work</span> },
          ].map(({ label, val }) => (
            <div className="footer-contact-item" key={label}>
              <div className="footer-contact-label">{label}</div>
              <div className="footer-contact-val">{val}</div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-glow-line" />
      <div className="container">

        {/* ── MAIN COLUMNS ── */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand-col">
            <div className="footer-logo">ARF<em>.dev</em></div>
            <p className="footer-desc">
              Full-Stack Engineer specialising in scalable web apps, REST &amp; GraphQL APIs,
              and AI-powered pipelines — built for global remote teams.
            </p>
            <div className="footer-socials">
              {socials.map(({ Icon, href, title }) => (
                <a key={title} href={href} className="footer-social" title={title}>
                  <Icon />
                </a>
              ))}
            </div>
            <div className="footer-available">
              <span className="footer-available-dot" />
              Available for remote contracts
            </div>
          </div>

          {/* Nav cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div className="footer-col-head">{col.title}</div>
              {col.links ? (
                <ul className="footer-col-list">
                  {col.links.map(([label, href]) => (
                    <li key={label}><a href={href}>{label}</a></li>
                  ))}
                </ul>
              ) : col.custom}
            </div>
          ))}
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {year} <b>Abdur Rahman Faisal</b> — All rights reserved.
          </span>
          <div className="footer-legal">
            <a>Privacy Policy</a>
            <a>Terms</a>
            <a>Sitemap</a>
          </div>
          <span className="footer-built">Built with React · TypeScript · Node.js</span>
        </div>

      </div>
    </footer>
  );
}