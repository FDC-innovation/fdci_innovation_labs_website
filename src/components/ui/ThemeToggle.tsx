"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="relative h-9 w-9 rounded-lg"
        aria-label="Toggle theme"
        disabled
      >
        <Moon className="w-5 h-5 text-foreground opacity-50" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-lg hover:bg-muted transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
        className="relative w-5 h-5"
      >
        {theme === "dark" ? (
          <Moon className="w-5 h-5 text-foreground" />
        ) : (
          <Sun className="w-5 h-5 text-foreground" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

