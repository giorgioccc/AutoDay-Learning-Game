"use client";

import { useCallback, useEffect, useState } from "react";

const MINUTE = 60_000;

/**
 * Three lengths built around what the challenge says it takes: a short slice,
 * roughly half, and the whole estimate. A 30-minute quick build and a 4-hour
 * deep build should not be offered the same menu.
 */
export function timerPresets(estimatedMinutes: number): number[] {
  const half = Math.max(5, Math.round(estimatedMinutes / 2 / 5) * 5);
  const unique = new Set([15, half, estimatedMinutes]);
  return [...unique].sort((a, b) => a - b);
}

/** mm:ss below an hour, h:mm:ss above it. */
export function formatDuration(ms: number): string {
  const total = Math.floor(Math.abs(ms) / 1000);
  const seconds = total % 60;
  const minutes = Math.floor(total / 60) % 60;
  const hours = Math.floor(total / 3600);
  const pad = (n: number) => String(n).padStart(2, "0");

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${minutes}:${pad(seconds)}`;
}

export type SessionTimer = {
  /** null when no timer is running. */
  endsAt: number | null;
  /** Negative once the timer has run out; it keeps counting, gently. */
  remainingMs: number;
  expired: boolean;
  start: (minutes: number) => void;
  extend: (minutes: number) => void;
  stop: () => void;
};

/**
 * Derived from a stored end timestamp rather than accumulated by an interval,
 * so a backgrounded tab, a throttled timer or a laptop lid does not make the
 * countdown quietly wrong.
 */
/**
 * Both timestamps live in one piece of state so the render is a pure
 * subtraction of two numbers React already holds — no clock is read during
 * render, which is what keeps this deterministic and hydration-safe.
 */
type Running = { endsAt: number; now: number };

export function useSessionTimer(): SessionTimer {
  const [state, setState] = useState<Running | null>(null);
  const running = state !== null;

  useEffect(() => {
    if (!running) return;

    const sync = () => {
      const now = Date.now();
      setState((current) => (current === null ? null : { ...current, now }));
    };

    const id = window.setInterval(sync, 1000);
    // A tab woken after being suspended should be right the moment it comes
    // back, not up to a second later.
    document.addEventListener("visibilitychange", sync);

    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [running]);

  const start = useCallback((minutes: number) => {
    const now = Date.now();
    setState({ endsAt: now + minutes * MINUTE, now });
  }, []);

  const extend = useCallback((minutes: number) => {
    const now = Date.now();
    setState((current) =>
      current === null
        ? null
        : // Extending something already over starts from now, not from the debt.
          { endsAt: Math.max(current.endsAt, now) + minutes * MINUTE, now },
    );
  }, []);

  const stop = useCallback(() => setState(null), []);

  const remainingMs = state === null ? 0 : state.endsAt - state.now;

  return {
    endsAt: state?.endsAt ?? null,
    remainingMs,
    expired: state !== null && remainingMs <= 0,
    start,
    extend,
    stop,
  };
}
