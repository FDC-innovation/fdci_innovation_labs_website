"use client";

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);
  const isInitializing = useRef(true);

  const applyTheme = useCallback((newTheme: Theme) => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
    }
  }, []);

  useEffect(() => {
    // Only run initialization once
    if (!isInitializing.current) return;
    
    // Check for saved theme preference or default to dark
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      
      // Apply theme to DOM immediately (synchronously to prevent flash)
      applyTheme(initialTheme);
      
      // Mark as initialized and update state
      isInitializing.current = false;
      setMounted(true);
      setTheme(initialTheme);
    }
  }, [applyTheme]);

  const handleSetTheme = useCallback((newTheme: Theme) => {
    // Only allow theme changes after component is mounted
    if (!mounted || isInitializing.current) return;
    
    // Update state
    setTheme(newTheme);
    
    // Save to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    
    // Apply to DOM
    applyTheme(newTheme);
  }, [mounted, applyTheme]);

  const toggleTheme = useCallback(() => {
    if (!mounted || isInitializing.current) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    handleSetTheme(newTheme);
  }, [theme, mounted, handleSetTheme]);

  // Prevent flash of wrong theme - return children immediately
  // Theme will be applied via useEffect
  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

