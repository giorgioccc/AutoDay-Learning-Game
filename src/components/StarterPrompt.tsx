"use client";

import { useEffect, useId, useState } from "react";

import type { Lang } from "@/content/types";
import { ui } from "@/lib/i18n";

export function StarterPrompt({ text, lang }: { text: string; lang: Lang }) {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);
  const checkboxId = useId();

  // Resets when the challenge changes, because the parent keys this component
  // by challenge id — but the copy confirmation still needs a timer.
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="border-border bg-surface rounded-sm border px-4 py-4">
      <div className="flex items-start gap-3">
        <input
          id={checkboxId}
          type="checkbox"
          checked={shown}
          onChange={(event) => setShown(event.target.checked)}
          className="accent-accent mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
        />
        <div className="min-w-0">
          <label
            htmlFor={checkboxId}
            className="text-text cursor-pointer text-sm"
          >
            {ui.starterPromptToggle[lang]}
          </label>
          <p className="text-text-muted mt-1 text-xs leading-relaxed">
            {ui.starterPromptCaption[lang]}
          </p>
        </div>
      </div>

      {/* Not rendered at all while unchecked: someone solving this unaided
          must never catch sight of it by accident. */}
      {shown && (
        <div className="fade-up mt-4">
          <div className="border-border bg-surface-sunken relative rounded-sm border p-4">
            <p className="text-text pr-2 font-mono text-xs leading-relaxed whitespace-pre-wrap">
              {text}
            </p>
          </div>
          <button
            type="button"
            onClick={copy}
            className={`rounded-xs mt-3 border px-3 py-1.5 font-mono text-xs transition-colors ${
              copied
                ? "border-success text-success bg-success-soft"
                : "border-border-strong text-text-muted hover:border-accent hover:text-accent"
            }`}
          >
            {copied ? `✓ ${ui.copied[lang]}` : ui.copy[lang]}
          </button>
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? ui.copied[lang] : ""}
          </span>
        </div>
      )}
    </section>
  );
}
