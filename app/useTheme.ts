import { useEffect, useState } from "react";

const STORAGE_KEY = "spaxio-theme";

function applyTheme(isDark: boolean) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  try {
    window.localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
  } catch {
    // Ignore storage errors (e.g., private mode).
  }
}

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextIsDark = stored ? stored === "dark" : !!prefersDark;
    setIsDark(nextIsDark);
    applyTheme(nextIsDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      applyTheme(next);
      return next;
    });
  };

  return { isDark, toggleTheme };
}
