
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

// Project Card
export default function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.article
      className={`project-card project-card-${index + 1}`}
      initial={{ opacity: 0, y: 30, rotate: index % 2 ? 5 : -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 3 : -2 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
    >
      <button
        className="card-open"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.name} details`}
      >
        <div className={`project-art art-${project.id}`}>
          {project.image ? (
            <img
              className="project-image"
              src={project.image}
              alt={`${project.name} website preview`}
              loading="lazy"
            />
          ) : (
            <>
              <span className="art-index">
                0{index + 1} / PROJECT
              </span>
              <span className="art-word">{project.name}</span>
              <span className="art-caption">{project.category}</span>
              <span className="art-orbit" aria-hidden="true" />
            </>
          )}
        </div>

        <div className="project-card-bottom">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
          <span className="round-arrow">
            <ArrowUpRight size={19} />
          </span>
        </div>
      </button>

      <div className="card-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight size={13} />
          </a>
        )}
        {project.repositoryUrl && (
          <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
            <Github size={13} /> Repository
          </a>
        )}
        {!project.repositoryUrl && (
          <span className="private-note">Private source</span>
        )}
      </div>
    </motion.article>
  );
}
