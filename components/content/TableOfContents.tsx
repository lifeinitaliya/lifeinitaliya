"use client";

import { useEffect, useState } from "react";

import type { Heading } from "@/lib/content";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

/** Desktop table of contents that highlights the section currently in view. */
export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | undefined>(headings[0]?.id);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav aria-labelledby="toc-title" className={className}>
      <p
        id="toc-title"
        className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase"
      >
        On this page
      </p>
      <TocList headings={headings} activeId={activeId} className="mt-4" />
    </nav>
  );
}

export function TocList({
  headings,
  activeId,
  className,
}: {
  headings: Heading[];
  activeId?: string;
  className?: string;
}) {
  return (
    <ol className={cn("space-y-1 border-l border-border", className)}>
      {headings.map((heading) => {
        const active = heading.id === activeId;
        return (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              aria-current={active ? "location" : undefined}
              className={cn(
                "-ml-px block border-l py-1.5 text-sm leading-snug transition-colors",
                heading.level === 3 ? "pl-7" : "pl-4",
                active
                  ? "border-primary font-medium text-primary"
                  : "border-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              )}
            >
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}
