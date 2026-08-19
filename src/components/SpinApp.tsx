"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import type { Challenge, Mode } from "@/content/types";
import { MODES } from "@/content/types";
import { matchingChallenges, pickFrom } from "@/content/challenges";
import { ui } from "@/lib/i18n";
import { useFilters } from "@/lib/filters";
import { useLanguage } from "@/lib/language";
import { useSessionTimer } from "@/lib/timer";
import { ChallengeCard } from "./ChallengeCard";
import { Filters } from "./Filters";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";
import { TimerBadge, TimerLauncher } from "./SessionTimer";

const SPIN_MS = 620;

export function SpinApp() {
  const { lang } = useLanguage();
  const { filters } = useFilters();
  const timer = useSessionTimer();
  const [mode, setMode] = useState<Mode>("quick");
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [spinning, setSpinning] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);
  const emptyNoteId = useId();
  const modeHeadingId = useId();

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const pool = matchingChallenges({
    mode,
    categories: filters.categories,
    levels: filters.levels,
  });
  const empty = pool.length === 0;

  const spin = useCallback(() => {
    if (spinning) return;
    const next = pickFrom(pool, challenge?.id);
    if (!next) return;

    setSpinning(true);
    timeoutRef.current = window.setTimeout(() => {
      setChallenge(next);
      setSpinning(false);
    }, SPIN_MS);
  }, [pool, challenge?.id, spinning]);

  useEffect(() => {
    if (challenge && resultRef.current) {
      resultRef.current.focus({ preventScroll: true });
    }
  }, [challenge]);

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-5 py-10 sm:px-6 sm:py-16">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-text font-mono text-lg font-semibold tracking-tight">
            AutoDay
            <span className="caret ml-1" aria-hidden="true" />
          </p>
          <p className="text-text-muted mt-2 text-sm leading-relaxed">
            {ui.tagline[lang]}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <LanguageSwitch />
        </div>
      </header>

      {!challenge && (
        <p className="text-text-muted max-w-xl leading-relaxed">
          {ui.intro[lang]}
        </p>
      )}

      {/* Not a labelled region: it holds the mode choice, the filters and the
          spin button, so any single name for it would be a lie. The heading
          names the mode group only. */}
      <div className="border-border flex flex-col gap-4 border-y py-6">
        <h2
          id={modeHeadingId}
          className="text-text-faint font-mono text-xs tracking-wide uppercase"
        >
          {ui.chooseMode[lang]}
        </h2>
        <div
          role="group"
          aria-labelledby={modeHeadingId}
          className="grid gap-2 sm:grid-cols-2"
        >
          {MODES.map((option) => {
            const active = option === mode;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setMode(option)}
                aria-pressed={active}
                className={`rounded-sm border px-4 py-3 text-left transition-colors ${
                  active
                    ? "border-accent bg-accent-soft"
                    : "border-border bg-surface hover:border-border-strong"
                }`}
              >
                <span
                  className={`font-mono text-sm ${
                    active ? "text-accent" : "text-text"
                  }`}
                >
                  {ui.modeNames[option][lang]}
                </span>
                <span className="text-text-muted mt-1 block font-sans text-xs leading-relaxed">
                  {ui.modeDescriptions[option][lang]}
                </span>
              </button>
            );
          })}
        </div>

        <Filters mode={mode} lang={lang} />

        <button
          type="button"
          onClick={spin}
          disabled={spinning || empty}
          aria-describedby={empty ? emptyNoteId : undefined}
          className="bg-accent hover:bg-accent-hover disabled:hover:bg-accent text-on-accent rounded-sm px-6 py-4 font-mono text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          {spinning ? (
            <span>
              {ui.spinning[lang]}
              <Ellipsis />
            </span>
          ) : (
            <span>
              <span aria-hidden="true" className="mr-2 opacity-70">
                $
              </span>
              {challenge ? ui.spinAgain[lang] : ui.spin[lang]}
            </span>
          )}
        </button>

        {empty && (
          <p id={emptyNoteId} className="text-accent font-mono text-xs">
            {ui.filterEmpty[lang]}
          </p>
        )}
      </div>

      <div
        ref={resultRef}
        tabIndex={-1}
        aria-live="polite"
        aria-busy={spinning}
        className="outline-none"
      >
        {challenge && !spinning && (
          <ChallengeCard
            challenge={challenge}
            lang={lang}
            href={`/c/${challenge.id}`}
          />
        )}
      </div>

      {challenge && !spinning && (
        <TimerLauncher
          timer={timer}
          estimatedMinutes={challenge.estimatedMinutes}
          lang={lang}
        />
      )}

      {/* The card is long on a phone; spinning again must not require
          scrolling back to the top. */}
      {challenge && !spinning && (
        <button
          type="button"
          onClick={spin}
          disabled={empty}
          className="border-border-strong text-text-muted hover:border-accent hover:text-accent rounded-sm border px-6 py-3 font-mono text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span aria-hidden="true" className="mr-2 opacity-70">
            $
          </span>
          {ui.spinAgain[lang]}
        </button>
      )}

      <TimerBadge timer={timer} lang={lang} />
    </div>
  );
}

function Ellipsis() {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const id = window.setInterval(
      () => setDots((current) => (current % 3) + 1),
      180,
    );
    return () => window.clearInterval(id);
  }, []);

  return <span aria-hidden="true">{".".repeat(dots)}</span>;
}
