"use client";

import { useId } from "react";

import type { Category, Lang, Level, Mode } from "@/content/types";
import { CATEGORIES, LEVELS } from "@/content/types";
import { matchingChallenges } from "@/content/challenges";
import { matchCountLabel, ui } from "@/lib/i18n";
import { isNarrowed, useFilters } from "@/lib/filters";

function Check({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  /** What ticking this box would actually get you, given the other axis. */
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="accent-accent h-4 w-4 shrink-0 cursor-pointer"
      />
      <label
        htmlFor={id}
        className={`cursor-pointer font-mono text-xs ${
          checked ? "text-text" : "text-text-faint"
        }`}
      >
        {label}
        {/* Some combinations are empty by construction — no quick build is
            advanced. Saying so beforehand beats a dead end. */}
        <span className="text-text-faint ml-1.5">({count})</span>
      </label>
    </div>
  );
}

/**
 * Collapsed by default: the product's first move is to hand you a problem, not
 * a settings panel. The count in the summary is the only thing that has to be
 * visible while it is shut.
 */
export function Filters({ mode, lang }: { mode: Mode; lang: Lang }) {
  const { filters, toggleCategory, toggleLevel, reset } = useFilters();

  const count = matchingChallenges({
    mode,
    categories: filters.categories,
    levels: filters.levels,
  }).length;

  const narrowed = isNarrowed(filters);

  return (
    <details className="group border-border bg-surface rounded-sm border">
      <summary className="marker:content-none flex cursor-pointer list-none items-center gap-3 px-4 py-3 text-sm select-none">
        <span
          aria-hidden="true"
          className="text-accent transition-transform duration-200 group-open:rotate-90"
        >
          ▸
        </span>
        <span className="text-text">{ui.narrowTitle[lang]}</span>
        {narrowed && (
          <span className="bg-accent-soft text-accent rounded-xs px-1.5 py-0.5 font-mono text-[11px] tracking-wide uppercase">
            {ui.filterNarrowed[lang]}
          </span>
        )}
        <span className="text-text-faint ml-auto font-mono text-xs font-normal">
          {matchCountLabel(count, lang)}
        </span>
      </summary>

      <div className="reveal-panel">
        <div className="reveal-panel-inner">
          <div className="border-border flex flex-col gap-5 border-t px-4 py-4">
            <p className="text-text-muted text-xs leading-relaxed">
              {ui.narrowHint[lang]}
            </p>

            <fieldset>
              <legend className="text-text-faint font-mono text-xs tracking-wide uppercase">
                {ui.filterCategory[lang]}
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {CATEGORIES.map((category: Category) => (
                  <Check
                    key={category}
                    label={ui.categories[category][lang]}
                    count={
                      matchingChallenges({
                        mode,
                        categories: [category],
                        levels: filters.levels,
                      }).length
                    }
                    checked={filters.categories.includes(category)}
                    onChange={() => toggleCategory(category)}
                  />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-text-faint font-mono text-xs tracking-wide uppercase">
                {ui.filterLevel[lang]}
              </legend>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {LEVELS.map((level: Level) => (
                  <Check
                    key={level}
                    label={ui.levels[level][lang]}
                    count={
                      matchingChallenges({
                        mode,
                        categories: filters.categories,
                        levels: [level],
                      }).length
                    }
                    checked={filters.levels.includes(level)}
                    onChange={() => toggleLevel(level)}
                  />
                ))}
              </div>
            </fieldset>

            <div className="flex items-center gap-4">
              <p
                aria-live="polite"
                className={`font-mono text-xs ${
                  count === 0 ? "text-accent" : "text-text-muted"
                }`}
              >
                {count === 0
                  ? ui.filterEmpty[lang]
                  : matchCountLabel(count, lang)}
              </p>
              {narrowed && (
                <button
                  type="button"
                  onClick={reset}
                  className="rounded-xs border-border-strong text-text-muted hover:border-accent hover:text-accent ml-auto border px-3 py-1.5 font-mono text-xs transition-colors"
                >
                  {ui.filterReset[lang]}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </details>
  );
}
