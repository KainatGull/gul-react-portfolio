import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills";

// Tech Stack
export default function TechStack() {
  return (
    <section className="stack-section section-shell" id="stack">
      <div className="section-heading">
        <div><p className="eyebrow">TOOLS OF THE TRADE / 02</p><h2>My web <span>stack.</span></h2></div>
        <p>Technologies I use to build responsive, practical, and maintainable web experiences.</p>
      </div>
      <div className="stack-stage">
        <div className="stack-crosshair" aria-hidden="true">✳</div>
        {skills.map((skill, index) => (
          <motion.button
            type="button"
            className={`skill-pointer skill-${index % 6}`}
            key={skill.name}
            whileHover={{ scale: 1.08, rotate: index % 2 ? -2 : 2 }}
            whileFocus={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            title={`${skill.name} — ${skill.group}`}
          >
            <span className="pointer-dot" /><span>{skill.name}</span><small>{skill.group}</small>
          </motion.button>
        ))}
      </div>
      <p className="stack-footnote">HOVER OR TAP A LABEL TO EXPLORE THE STACK</p>
    </section>
  );
}