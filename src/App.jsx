import React from 'react';
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Connect from "./sections/Connect";

import { personalInfo } from "./data/personalInfo";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/projects.css";
import "./styles/techStack.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/responsive.css";


export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("kainat-portfolio-theme");
    if (saved) return saved;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("kainat-portfolio-theme", theme);
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      theme === "dark" ? "#151515" : "#eaeaea"
    );
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")} />
      <main>
        <Hero />
        <Projects />
         <Certificates />
        <TechStack />
        <Contact />
        <Connect />
      </main>
      <Footer email={personalInfo.email} />
    </>
  );
}