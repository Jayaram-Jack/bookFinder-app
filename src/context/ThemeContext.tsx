import { createContext } from "react";
import { THEME } from "../utils/constants";

export interface ThemeContextType {
  theme: THEME;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
