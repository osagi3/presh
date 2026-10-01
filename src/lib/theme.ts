export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "prefelo-theme";

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function getPreferredTheme(): Theme {
  return getStoredTheme() ?? "dark";
}
