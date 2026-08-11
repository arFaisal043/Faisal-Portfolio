import React, { useState, useEffect, useRef } from "react";
import { useReveal } from "./hooks/useReveal";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";

import RemoteCTA from "./components/RemoteCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [dark,    setDark]    = useState(true);

  useReveal();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    // Ensure correct mobile viewport
    let vp = document.querySelector('meta[name="viewport"]');
    if (!vp) {
      vp = document.createElement("meta");
      vp.name = "viewport";
      document.head.appendChild(vp);
    }
    vp.content = "width=device-width, initial-scale=1, maximum-scale=5";

    
  }, []);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <RemoteCTA />
      <Contact />
      <Footer />
    </>
  );
}
