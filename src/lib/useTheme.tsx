"use client";

import { useCallback, useSyncExternalStore } from "react";

import { DEFAULT_THEME, THEME_STORAGE_KEY, isTheme, type Theme } from "./theme";

const CHANGE_EVENT = "autoday:themechange";
const SYSTEM_QUERY = "(prefers-color-scheme: dark)";

/**
 * Theme lives on <html data-theme>, set from localStorage by the inline
 * script in the layout before first paint, same trick as the language store.
 * When no explicit choice has been stored, the attribute is left unset and
 * the resolved value falls through to the OS preference — so someone who
 * never touches the switch keeps getting pure prefers-color-scheme, and the
 * switch itself still reports the right pill as active.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  const media = window.matchMedia(SYSTEM_QUERY);
  media.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    media.removeEventListener("change", onChange);
  };
}

function getSnapshot(): Theme {
  const stored = document.documentElement.dataset.theme;
  if (isTheme(stored)) return stored;
  return window.matchMedia(SYSTEM_QUERY).matches ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return DEFAULT_THEME;
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: Theme) => {
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing or storage disabled: the switch still works for this
      // session, it just will not be remembered.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { theme, setTheme };
}
