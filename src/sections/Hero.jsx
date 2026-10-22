import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

// Hero Section
export default function Hero() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-topline"><span>PORTFOLIO / 2026</span><span>AVAILABLE FOR SELECT PROJECTS</span></div>
      <div className="hero-title-wrap" aria-label="Kainat">
        <motion.div className="hero-title hero-title-light" animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}> GUL</motion.div>
        <motion.div className="hero-title hero-title-dark" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} aria-hidden="true">KAINAT</motion.div>
        <span className="hero-index">KG — 01</span>
      </div>
      <div className="hero-bottom">
        <div className="hero-intro">
          <p className="eyebrow">HELLO, I'M KAINAT GUL</p>
          <h1>Frontend Developer <span>(React.js)</span></h1>
          <p className="hero-summary">Building thoughtful interfaces and modern e-commerce experiences.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={personalInfo.cvPath} download><Download size={16} /> Download CV</a>
            <a className="button button-outline" href="#contact">Contact me <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="sash-area">
          <button className={`red-sash ${aboutOpen ? "is-open" : ""}`} onClick={() => setAboutOpen(!aboutOpen)} aria-expanded={aboutOpen} aria-controls="about-panel">
            <span>{aboutOpen ? "CLOSE ABOUT" : "A LITTLE ABOUT ME"}</span><ArrowDownRight size={20} />
          </button>
          <AnimatePresence>
            {aboutOpen && (
              <motion.div id="about-panel" className="about-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                <div id="about">
                  <p>{personalInfo.summary}</p>
                  <div className="experience-mini"><strong>Aug 2025 — Present</strong><span>Freelance Frontend Developer</span></div>
                  <div className="experience-mini"><strong>Jul 2025 — Sep 2025</strong><span>DevelopersHub Corporation</span></div>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn profile ↗</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
    </section>
  );
}