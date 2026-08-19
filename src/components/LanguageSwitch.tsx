"use client";

import { LANGS } from "@/content/types";
import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={ui.languageLabel[lang]}
    >
      {LANGS.map((option) => {
        const active = option === lang;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-pressed={active}
            className={`rounded-xs px-2 py-1 font-mono text-xs uppercase transition-colors ${
              active
                ? "bg-accent-soft text-accent"
                : "text-text-faint hover:text-text"
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
