export type Theme = "light" | "dark";

export const THEMES: Theme[] = ["light", "dark"];

export const THEME_STORAGE_KEY = "autoday.theme";

export const DEFAULT_THEME: Theme = "light";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}
