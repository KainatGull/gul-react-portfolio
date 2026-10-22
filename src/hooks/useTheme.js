import { useEffect, useState } from "react";

// Theme State
export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem("kainat-portfolio-theme") || "light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("kainat-portfolio-theme", theme);
  }, [theme]);
  return { theme, toggleTheme: () => setTheme((current) => current === "light" ? "dark" : "light") };
}