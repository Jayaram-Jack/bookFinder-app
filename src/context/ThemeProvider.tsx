import React, { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import LocalStorageService from "../utils/localStorageService";
import { DARK_THEME_NAME, LIGHT_THEME_NAME, THEME } from "../utils/constants";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<THEME>(() => {
    const savedTheme = LocalStorageService.getItem("THEME");

    if (savedTheme === LIGHT_THEME_NAME || savedTheme === DARK_THEME_NAME) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? DARK_THEME_NAME
      : LIGHT_THEME_NAME;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(LIGHT_THEME_NAME, DARK_THEME_NAME);
    root.classList.add(theme);
    LocalStorageService.setItem("THEME", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? DARK_THEME_NAME : LIGHT_THEME_NAME);
    };
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === LIGHT_THEME_NAME ? DARK_THEME_NAME : LIGHT_THEME_NAME
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
