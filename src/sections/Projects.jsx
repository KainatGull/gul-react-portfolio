import React from "react";
import { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

// Projects Section
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const closeModal = useCallback(() => setActiveProject(null), []);

  return (
    <section className="projects-section section-shell" id="projects">
      <div className="section-heading">
        <div><p className="eyebrow">SELECTED WORK / 01—03</p><h2>Made to <span>work.</span></h2></div>
        <p>A selection of e-commerce experiences, interface work, and ongoing experiments.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />)}
      </div>
      <div className="projects-note"><span>01 — 03</span><span>DESIGN / DEVELOPMENT / DETAIL</span><a href="https://github.com/KainatGull" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a></div>
      <ProjectModal project={activeProject} onClose={closeModal} />
    </section>
  );
}