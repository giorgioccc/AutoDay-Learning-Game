"use client";

/**
 * A disclosure built on <details>, so the content is in the DOM and works
 * without JavaScript, while the grid-rows transition still animates it open.
 */
export function Reveal({
  label,
  hint,
  index,
  children,
}: {
  label: string;
  hint: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <details className="group border-border bg-surface rounded-sm border">
      <summary className="marker:content-none flex cursor-pointer list-none items-center gap-3 px-4 py-3 text-sm select-none">
        <span
          aria-hidden="true"
          className="text-accent transition-transform duration-200 group-open:rotate-90"
        >
          ▸
        </span>
        <span className="text-text">
          {index}. {label}
        </span>
        <span className="text-text-faint ml-auto hidden text-xs font-normal sm:inline">
          {hint}
        </span>
      </summary>
      <div className="reveal-panel">
        <div className="reveal-panel-inner">
          <div className="border-border border-t px-4 py-4">{children}</div>
        </div>
      </div>
    </details>
  );
}
