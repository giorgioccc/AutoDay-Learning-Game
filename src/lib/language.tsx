"use client";

import { useCallback, useSyncExternalStore } from "react";

import type { Lang } from "@/content/types";
import { DEFAULT_LANG, LANG_STORAGE_KEY, isLang } from "./i18n";

const CHANGE_EVENT = "autoday:langchange";

/**
 * The language lives on <html lang>, which the inline script in the layout
 * has already set from localStorage before first paint. Treating that
 * attribute as an external store lets React hydrate against the server value
 * and then resync, with no mismatch and no setState-in-effect.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

function getSnapshot(): Lang {
  const value = document.documentElement.lang;
  return isLang(value) ? value : DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

export function useLanguage() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((next: Lang) => {
    document.documentElement.lang = next;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
    } catch {
      // Private browsing or storage disabled: the switch still works for this
      // session, it just will not be remembered.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  return { lang, setLang };
}
