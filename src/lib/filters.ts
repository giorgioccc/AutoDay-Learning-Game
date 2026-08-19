"use client";

import { useCallback, useSyncExternalStore } from "react";

import type { Category, Level } from "@/content/types";
import { CATEGORIES, LEVELS } from "@/content/types";

export const FILTERS_STORAGE_KEY = "autoday.filters";

export type Filters = {
  categories: readonly Category[];
  levels: readonly Level[];
};

/** Nothing narrowed. This is the default and the state after a reset. */
export const ALL_FILTERS: Filters = {
  categories: CATEGORIES,
  levels: LEVELS,
};

export function isNarrowed(filters: Filters): boolean {
  return (
    filters.categories.length !== CATEGORIES.length ||
    filters.levels.length !== LEVELS.length
  );
}

/**
 * Toggling keeps the canonical order rather than append order, so the stored
 * value is stable no matter which sequence the boxes were clicked in.
 */
function toggle<T>(all: readonly T[], selected: readonly T[], value: T): T[] {
  const next = selected.includes(value)
    ? selected.filter((item) => item !== value)
    : [...selected, value];
  return all.filter((item) => next.includes(item));
}

function parse(raw: string | null): Filters | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return null;
    const { categories, levels } = parsed as Record<string, unknown>;
    if (!Array.isArray(categories) || !Array.isArray(levels)) return null;

    // Filter against the canonical lists: a category renamed or removed in a
    // later release must not resurrect itself out of someone's localStorage.
    return {
      categories: CATEGORIES.filter((item) => categories.includes(item)),
      levels: LEVELS.filter((item) => levels.includes(item)),
    };
  } catch {
    return null;
  }
}

/* ---------------------------------------------------------------
   An external store, for the same reason the language is one: the
   stored value cannot be read during render without desyncing the
   static HTML from the client.
   --------------------------------------------------------------- */

const CHANGE_EVENT = "autoday:filterschange";

let cache: Filters | null = null;

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

function getSnapshot(): Filters {
  if (cache) return cache;
  try {
    cache = parse(window.localStorage.getItem(FILTERS_STORAGE_KEY)) ?? ALL_FILTERS;
  } catch {
    cache = ALL_FILTERS;
  }
  return cache;
}

function getServerSnapshot(): Filters {
  return ALL_FILTERS;
}

export function useFilters() {
  const filters = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const write = useCallback((next: Filters) => {
    cache = next;
    try {
      window.localStorage.setItem(FILTERS_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Storage disabled: the filters still apply for this session.
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const toggleCategory = useCallback(
    (value: Category) => {
      write({
        ...getSnapshot(),
        categories: toggle(CATEGORIES, getSnapshot().categories, value),
      });
    },
    [write],
  );

  const toggleLevel = useCallback(
    (value: Level) => {
      write({ ...getSnapshot(), levels: toggle(LEVELS, getSnapshot().levels, value) });
    },
    [write],
  );

  const reset = useCallback(() => write(ALL_FILTERS), [write]);

  return { filters, toggleCategory, toggleLevel, reset };
}
