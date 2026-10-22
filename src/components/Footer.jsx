import React from "react";
import { personalInfo } from "../data/personalInfo";

// Site Footer
export default function Footer({ email }) {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Kainat Gul</span>
      <span>Designed with intention · Built with React</span>
      <a href={`mailto:${email || personalInfo.email}`}>{email || personalInfo.email}</a>
    </footer>
  );
}