"use client";

import Link from "next/link";

import { LanguageSwitch } from "@/components/LanguageSwitch";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-5 py-10 sm:px-6 sm:py-16">
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

      <div>
        <h1 className="text-text text-xl font-semibold sm:text-2xl">
          {ui.notFoundTitle[lang]}
        </h1>
        <p className="text-text-muted mt-3 leading-relaxed">
          {ui.notFoundBody[lang]}
        </p>
      </div>

      <Link
        href="/"
        className="border-border-strong text-text-muted hover:border-accent hover:text-accent self-start rounded-sm border px-6 py-3 font-mono text-sm transition-colors"
      >
        <span aria-hidden="true" className="mr-2 opacity-70">
          $
        </span>
        {ui.backToSpin[lang]}
      </Link>
    </main>
  );
}
