"use client";

import type { Lang } from "@/content/types";
import { ui } from "@/lib/i18n";
import {
  formatDuration,
  timerPresets,
  type SessionTimer as Timer,
} from "@/lib/timer";

/**
 * Opt-in, and offered only once there is something to time. Nothing starts a
 * clock on the user without being asked.
 */
export function TimerLauncher({
  timer,
  estimatedMinutes,
  lang,
}: {
  timer: Timer;
  estimatedMinutes: number;
  lang: Lang;
}) {
  if (timer.endsAt !== null) return null;

  return (
    <section className="border-border bg-surface rounded-sm border px-4 py-4">
      <h3 className="text-text-faint font-mono text-xs tracking-wide uppercase">
        {ui.timerTitle[lang]}
      </h3>
      <p className="text-text-muted mt-2 text-xs leading-relaxed">
        {ui.timerCaption[lang]}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {timerPresets(estimatedMinutes).map((minutes) => {
          const suggested = minutes === estimatedMinutes;
          return (
            <button
              key={minutes}
              type="button"
              onClick={() => timer.start(minutes)}
              className={`rounded-xs border px-3 py-1.5 font-mono text-xs transition-colors ${
                suggested
                  ? "border-accent text-accent bg-accent-soft"
                  : "border-border-strong text-text-muted hover:border-accent hover:text-accent"
              }`}
            >
              {minutes} {ui.minutesShort[lang]}
              {/* No opacity here: dimming accent-on-accent-soft drops it
                  under 4.5:1. */}
              {suggested && (
                <span className="ml-1.5">· {ui.timerSuggested[lang]}</span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Fixed to the corner so it survives scrolling and spinning again. The
 * countdown itself is hidden from assistive tech — a value changing every
 * second is noise — and only the expiry is announced, once.
 */
export function TimerBadge({ timer, lang }: { timer: Timer; lang: Lang }) {
  if (timer.endsAt === null) return null;

  const { expired, remainingMs } = timer;

  return (
    <>
      <div
        role="timer"
        aria-live="off"
        className={`fade-up fixed right-3 bottom-3 z-50 max-w-[calc(100vw-1.5rem)] rounded-sm border px-3 py-2 shadow-lg backdrop-blur-sm sm:right-5 sm:bottom-5 ${
          expired
            ? "border-accent bg-accent-soft"
            : "border-border-strong bg-surface"
        }`}
      >
        <div className="flex items-baseline gap-3">
          <span className="text-text-faint font-mono text-[11px] tracking-wide uppercase">
            {expired ? ui.timerElapsedPrefix[lang] : ui.timerRemaining[lang]}
          </span>
          <span
            aria-hidden="true"
            className={`ml-auto font-mono text-sm tabular-nums ${
              expired ? "text-accent" : "text-text"
            }`}
          >
            {formatDuration(remainingMs)}
          </span>
        </div>

        {expired && (
          <p className="text-text-muted mt-1.5 max-w-[15rem] text-xs leading-relaxed">
            {ui.timerDone[lang]}
          </p>
        )}

        <div className="mt-2 flex items-center gap-2">
          <button
            type="button"
            onClick={() => timer.extend(10)}
            className="rounded-xs border-border-strong text-text-muted hover:border-accent hover:text-accent border px-2 py-1 font-mono text-[11px] transition-colors"
          >
            {ui.timerExtend[lang]}
          </button>
          <button
            type="button"
            onClick={timer.stop}
            className="rounded-xs border-border-strong text-text-muted hover:border-accent hover:text-accent border px-2 py-1 font-mono text-[11px] transition-colors"
          >
            {ui.timerStop[lang]}
          </button>
        </div>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {expired ? ui.timerDone[lang] : ""}
      </p>
    </>
  );
}
