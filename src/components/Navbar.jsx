
import React from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "../data/personalInfo";

// Main Navigation
export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Projects", "#projects"],
    ["Stack", "#stack"],
    ["About", "#about"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="site-nav">
      <a className="wordmark" href="#home" aria-label="Kainat Gul home">
        KG<span>.</span>
      </a>

      <nav
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          className={`theme-toggle ${theme === "dark" ? "is-dark" : ""}`}
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-pressed={theme === "dark"}
          type="button"
        >
          <span className="theme-icon sun">
            <Sun size={16} />
          </span>

          <span className="theme-icon moon">
            <Moon size={16} />
          </span>

          <span className="theme-knob" />
        </button>

        <a className="nav-contact" href={`mailto:${personalInfo.email}`}>
          Let's talk <span>↗</span>
        </a>

        <button
          className="icon-button menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          type="button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
