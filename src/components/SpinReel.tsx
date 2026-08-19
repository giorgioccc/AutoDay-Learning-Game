"use client";

import { useEffect, useState } from "react";

import type { Challenge, Lang } from "@/content/types";

const TICK_MS = 100;
const WORD_COUNT = 10;
/** Titles often open on an article ("The", "Il"); skip those so the reel
    flashes the word that actually says something. */
const MIN_WORD_LENGTH = 4;

function meaningfulWords(title: string): string[] {
  const words = title.split(/\s+/).filter(Boolean);
  const substantial = words.filter(
    (word) => word.replace(/[^\p{L}]/gu, "").length >= MIN_WORD_LENGTH,
  );
  return substantial.length > 0 ? substantial : words;
}

function pickWords(pool: Challenge[], lang: Lang, count: number): string[] {
  return Array.from({ length: count }, () => {
    const challenge = pool[Math.floor(Math.random() * pool.length)];
    const candidates = meaningfulWords(challenge.title[lang]);
    return candidates[Math.floor(Math.random() * candidates.length)];
  });
}

/**
 * Shown in place of the result while a spin is picking a challenge: one word
 * at a time, drawn from titles in the current pool, ticking over like a
 * slot-machine reel until the real card takes its place.
 */
export function SpinReel({ pool, lang }: { pool: Challenge[]; lang: Lang }) {
  const [words] = useState(() => pickWords(pool, lang, WORD_COUNT));
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1 < words.length ? i + 1 : i));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <div
      className="border-border bg-surface flex min-h-32 items-center justify-center overflow-hidden rounded-sm border px-5 py-8 sm:px-6"
      aria-hidden="true"
    >
      <p
        key={index}
        className="reel-tick text-text font-mono text-2xl font-semibold sm:text-3xl"
      >
        {words[index]}
      </p>
    </div>
  );
}
