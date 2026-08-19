"use client";

import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";
import { THEMES } from "@/lib/theme";
import { useTheme } from "@/lib/useTheme";

export function ThemeSwitch() {
  const { lang } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="flex items-center gap-1"
      role="group"
      aria-label={ui.themeLabel[lang]}
    >
      {THEMES.map((option) => {
        const active = option === theme;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setTheme(option)}
            aria-pressed={active}
            className={`rounded-xs px-2 py-1 font-mono text-xs uppercase transition-colors ${
              active
                ? "bg-accent-soft text-accent"
                : "text-text-faint hover:text-text"
            }`}
          >
            {option === "light" ? ui.themeLight[lang] : ui.themeDark[lang]}
          </button>
        );
      })}
    </div>
  );
}
