"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    // Get saved theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    // Apply theme to DOM immediately
    if (shouldBeDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Defer state updates to next microtask to avoid warning
    Promise.resolve().then(() => {
      setIsDark(shouldBeDark);
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-8 rounded-full transition-colors duration-300"
      style={{
        background: isDark
          ? "linear-gradient(135deg, #1e293b, #0f172a)"
          : "linear-gradient(135deg, #6366f1, #8b5cf6)",
        border: "none",
        outline: "none",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{
          left: isDark ? "calc(100% - 28px)" : "4px",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <Moon className="w-3.5 h-3.5 text-slate-700" />
        ) : (
          <Sun className="w-3.5 h-3.5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  );
}
