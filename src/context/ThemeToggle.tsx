import React from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme } from "./useTheme";
import { DARK_THEME_NAME, THEME } from "../utils/constants";

interface ThemeToggleProps {
  theme: THEME;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme }) => {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === DARK_THEME_NAME ? (
        <LightMode className="text-white" />
      ) : (
        <DarkMode />
      )}
    </button>
  );
};

export default ThemeToggle;
