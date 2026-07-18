import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "light" ? "#fff6ea" : "#0c0a0f");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      playSkyTransition(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function playSkyTransition(nextTheme) {
  if (typeof document === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const existing = document.querySelector(".theme-sky-flash");
  if (existing) existing.remove();

  const flash = document.createElement("div");
  flash.className = `theme-sky-flash ${
    nextTheme === "light" ? "is-sunrise" : "is-sunset"
  }`;
  flash.setAttribute("aria-hidden", "true");
  document.body.appendChild(flash);

  window.setTimeout(() => {
    flash.remove();
  }, 1200);
}

export function useTheme() {
  return useContext(ThemeContext);
}
