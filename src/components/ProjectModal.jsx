import React from "react";
import { useEffect } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";

// Project Details
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const handleKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="icon-button modal-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
        <p className="eyebrow">{project.category}</p>
        <h2 id="modal-title">{project.name}</h2>
        <p className="modal-description">{project.description}</p>
        <h3>Selected features</h3>
        <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <h3>Technology</h3>
        <div className="tag-list">{project.technologies.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
        <div className="modal-actions">
          {project.liveUrl && <a className="button button-dark" href={project.liveUrl} target="_blank" rel="noreferrer">View live <ArrowUpRight size={16} /></a>}
          {project.repositoryUrl && <a className="button button-outline" href={project.repositoryUrl} target="_blank" rel="noreferrer"><Github size={16} /> Source code</a>}
          {!project.repositoryUrl && <span className="private-note">Source code is private</span>}
        </div>
      </section>
    </div>
  );
}