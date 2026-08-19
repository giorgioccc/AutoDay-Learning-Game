"use client";

import Link from "next/link";

import type { Challenge } from "@/content/types";
import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { useSessionTimer } from "@/lib/timer";
import { ChallengeCard } from "./ChallengeCard";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeSwitch } from "./ThemeSwitch";
import { TimerBadge, TimerLauncher } from "./SessionTimer";

/**
 * The permalink view. Same card, no spinner — someone arriving here was sent
 * this specific problem, so shuffling it out from under them would be rude.
 */
export function ChallengeDetail({ challenge }: { challenge: Challenge }) {
  const { lang } = useLanguage();
  const timer = useSessionTimer();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-5 py-10 sm:px-6 sm:py-16">
      <header className="flex items-start justify-between gap-4">
        <Link
          href="/"
          className="text-text font-mono text-lg font-semibold tracking-tight"
        >
          AutoDay
          <span className="caret ml-1" aria-hidden="true" />
        </Link>
        <div className="flex items-center gap-3">
          <ThemeSwitch />
          <LanguageSwitch />
        </div>
      </header>

      <ChallengeCard challenge={challenge} lang={lang} titleAs="h1" />

      <TimerLauncher
        timer={timer}
        estimatedMinutes={challenge.estimatedMinutes}
        lang={lang}
      />

      <Link
        href="/"
        className="border-border-strong text-text-muted hover:border-accent hover:text-accent rounded-sm border px-6 py-3 text-center font-mono text-sm transition-colors"
      >
        <span aria-hidden="true" className="mr-2 opacity-70">
          $
        </span>
        {ui.backToSpin[lang]}
      </Link>

      <TimerBadge timer={timer} lang={lang} />
    </div>
  );
}
