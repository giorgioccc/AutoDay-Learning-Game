/**
 * The content contract. Phases 2 and 3 add data, not fields — treat any
 * change here as a breaking change to the challenge library.
 */

export type Level = "beginner" | "intermediate" | "advanced";

export type Mode = "quick" | "deep";

export type Category =
  | "work-admin" // inbox, scheduling, reporting, internal ops
  | "marketing-content" // writing, repurposing, campaigns, social
  | "data-research" // gathering, cleaning, summarising, monitoring
  | "software-dev" // code review, tests, docs, releases
  | "communication" // meetings, notes, follow-ups, customer replies
  | "personal"; // household, finances, learning, travel

export type Lang = "en" | "it";

export type Localized = { en: string; it: string };

export type Challenge = {
  id: string;
  mode: Mode;
  /** Read by the Phase 3 filters. */
  level: Level;
  /** Read by the Phase 3 filters. */
  category: Category;
  /** Read by the Phase 3 timer presets. */
  estimatedMinutes: number;
  title: Localized;
  /** 2-4 sentences: a specific person doing specific manual work. */
  scenario: Localized;
  /** 2-4 bullets: what makes it hard, and what "done" means. */
  constraints: Localized[];
  /** Reveal layer 1. */
  nudge: Localized;
  /** Reveal layer 2. */
  approach: {
    summary: Localized;
    /** 3-6 architectural steps. Shape, never code. */
    steps: Localized[];
  };
  /** Reveal layer 3. 2-4 items. */
  pitfalls: Localized[];
  /** Gated behind an opt-in checkbox. A kickoff, not the answer. */
  starterPrompt: Localized;
};

export const LEVELS: readonly Level[] = [
  "beginner",
  "intermediate",
  "advanced",
] as const;

export const MODES: readonly Mode[] = ["quick", "deep"] as const;

export const CATEGORIES: readonly Category[] = [
  "work-admin",
  "marketing-content",
  "data-research",
  "software-dev",
  "communication",
  "personal",
] as const;

export const LANGS: readonly Lang[] = ["en", "it"] as const;

export function t(value: Localized, lang: Lang): string {
  return value[lang];
}
