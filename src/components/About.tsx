"use client";

import { ui } from "@/lib/i18n";
import { useLanguage } from "@/lib/language";

/**
 * Client component, but still server-rendered into the static HTML at build
 * time — which is what carries the page's indexable prose.
 */
export function About() {
  const { lang } = useLanguage();

  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-10 px-5 py-12 sm:px-6 sm:py-16">
        <section>
          <h2 className="text-text-faint font-mono text-xs tracking-wide uppercase">
            {ui.howItWorksTitle[lang]}
          </h2>
          <ol className="mt-4 flex flex-col gap-4">
            {ui.howItWorks.map((item, i) => (
              <li key={item.en} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-text-faint w-5 shrink-0 font-mono text-sm"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-text-muted leading-relaxed">
                  {item[lang]}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-text-faint font-mono text-xs tracking-wide uppercase">
            {ui.noAnswersTitle[lang]}
          </h2>
          <p className="text-text-muted mt-4 leading-relaxed">
            {ui.noAnswers[lang]}
          </p>
        </section>
      </div>
    </footer>
  );
}
