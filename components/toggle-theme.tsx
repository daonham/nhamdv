"use client";

import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="text-zinc-400 absolute top-16 right-4 gap-2 hidden sm:flex">
      <button
        className={cn(
          "text-zinc-400 size-7 inline-flex items-center justify-center rounded-sm transition-colors duration-300 cursor-pointer",
          theme !== "dark" && "text-zinc-600 bg-gray-200/60",
        )}
        onClick={() => setTheme("light")}
        aria-label="Toggle light theme"
      >
        <Sun className="size-4" />
      </button>
      <button
        className={cn(
          "text-zinc-400 size-7 inline-flex items-center justify-center rounded-sm transition-colors duration-300 cursor-pointer",
          theme === "dark" && "text-white bg-gray-700/60",
        )}
        onClick={() => setTheme("dark")}
        aria-label="Toggle dark theme"
      >
        <Moon className="size-4" />
      </button>
    </div>
  );
}
