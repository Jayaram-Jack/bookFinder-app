import React from "react";
import { useTheme } from "../context/useTheme";
import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "../context/ThemeToggle";

const RootLayout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Book Finder
            </h1>
          </Link>
          <ThemeToggle theme={theme} />
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
