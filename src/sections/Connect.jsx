import React from "react";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

// Connect Section
export default function Connect() {
  return (
    <section className="connect-section section-shell" id="connect">
      <p className="eyebrow">THE NEXT THING STARTS WITH A HELLO</p>
      <a className="connect-title" href={`mailto:${personalInfo.email}`}>LET'S<br /><span>CONNECT</span><ArrowUpRight className="connect-arrow" /></a>
      <div className="connect-links">
        <a href={personalInfo.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
        <a href={`mailto:${personalInfo.email}`}><span>✉</span> Email <ArrowUpRight size={14} /></a>
      </div>
    </section>
  );
}