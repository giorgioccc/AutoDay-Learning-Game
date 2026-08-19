"use client";

import type { Challenge, Lang } from "@/content/types";
import { ui } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { StarterPrompt } from "./StarterPrompt";

function Meta({ challenge, lang }: { challenge: Challenge; lang: Lang }) {
  const parts = [
    ui.categories[challenge.category][lang],
    ui.levels[challenge.level][lang],
    `~${challenge.estimatedMinutes} ${ui.minutesShort[lang]}`,
  ];

  return (
    <p className="text-text-faint shrink-0 font-mono text-xs">
      {parts.map((part) => (
        <span key={part} className="mr-2 inline-block whitespace-nowrap">
          [ {part} ]
        </span>
      ))}
    </p>
  );
}

export function ChallengeCard({
  challenge,
  lang,
  href,
  titleAs: Title = "h2",
}: {
  challenge: Challenge;
  lang: Lang;
  /** When set, the card offers a permalink to its own page. */
  href?: string;
  /** The permalink page has no other heading, so there the title is the h1. */
  titleAs?: "h1" | "h2";
}) {
  // The section headings sit one level below the title wherever the card is
  // used, so the document never skips a level.
  const Sub = Title === "h1" ? "h2" : "h3";

  return (
    <article className="fade-up flex flex-col gap-5">
      <header className="border-border bg-surface rounded-sm border px-5 py-5 sm:px-6 sm:py-6">
        {/* Wraps rather than squashes: on a narrow screen the permalink drops
            to its own line instead of breaking the metadata onto three. */}
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <Meta challenge={challenge} lang={lang} />
          {href && (
            <a
              href={href}
              className="text-text-faint hover:text-accent ml-auto shrink-0 font-mono text-xs whitespace-nowrap underline decoration-dotted underline-offset-4 transition-colors"
            >
              {ui.permalink[lang]}
            </a>
          )}
        </div>
        <Title className="text-text mt-3 text-xl leading-snug font-semibold sm:text-2xl">
          {challenge.title[lang]}
        </Title>

        <Sub className="text-text-faint mt-6 font-mono text-xs tracking-wide uppercase">
          {ui.scenario[lang]}
        </Sub>
        <p className="text-text mt-2 leading-relaxed">
          {challenge.scenario[lang]}
        </p>

        <Sub className="text-text-faint mt-6 font-mono text-xs tracking-wide uppercase">
          {ui.constraints[lang]}
        </Sub>
        <ul className="mt-2 flex flex-col gap-2">
          {challenge.constraints.map((constraint) => (
            <li key={constraint.en} className="flex gap-2.5">
              <span aria-hidden="true" className="text-accent font-mono">
                $
              </span>
              <span className="text-text-muted leading-relaxed">
                {constraint[lang]}
              </span>
            </li>
          ))}
        </ul>
      </header>

      <div className="flex flex-col gap-2">
        <Reveal
          index={1}
          label={ui.nudge[lang]}
          hint={ui.revealHints.nudge[lang]}
        >
          <p className="text-text-muted leading-relaxed">
            {challenge.nudge[lang]}
          </p>
        </Reveal>

        <Reveal
          index={2}
          label={ui.approach[lang]}
          hint={ui.revealHints.approach[lang]}
        >
          <p className="text-text leading-relaxed">
            {challenge.approach.summary[lang]}
          </p>
          <ol className="mt-4 flex flex-col gap-3">
            {challenge.approach.steps.map((step, i) => (
              <li key={step.en} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="text-text-faint w-5 shrink-0 font-mono text-sm"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-text-muted leading-relaxed">
                  {step[lang]}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal
          index={3}
          label={ui.pitfalls[lang]}
          hint={ui.revealHints.pitfalls[lang]}
        >
          <ul className="flex flex-col gap-3">
            {challenge.pitfalls.map((pitfall) => (
              <li key={pitfall.en} className="flex gap-2.5">
                <span aria-hidden="true" className="text-accent font-mono">
                  !
                </span>
                <span className="text-text-muted leading-relaxed">
                  {pitfall[lang]}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <StarterPrompt
        key={challenge.id}
        text={challenge.starterPrompt[lang]}
        lang={lang}
      />
    </article>
  );
}
