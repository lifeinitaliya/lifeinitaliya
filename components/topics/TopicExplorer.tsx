"use client";

import { useId, useState } from "react";
import { Search } from "lucide-react";

import { TopicList } from "@/components/topics/TopicList";
import type { Category, TopicWithCount } from "@/lib/types";

interface TopicExplorerProps {
  groups: { category: Pick<Category, "slug" | "name">; topics: TopicWithCount[] }[];
}

/** Topic directory grouped by category, with instant client-side filtering. */
export function TopicExplorer({ groups }: TopicExplorerProps) {
  const inputId = useId();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filtered = groups
    .map((group) => ({
      ...group,
      topics: group.topics.filter(
        (t) =>
          !q ||
          t.name.toLowerCase().includes(q) ||
          group.category.name.toLowerCase().includes(q)
      ),
    }))
    .filter((group) => group.topics.length > 0);
  const count = filtered.reduce((sum, g) => sum + g.topics.length, 0);

  return (
    <div>
      <div className="relative max-w-xl">
        <label htmlFor={inputId} className="sr-only">
          Search topics
        </label>
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground"
        />
        <input
          id={inputId}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics..."
          autoComplete="off"
          className="h-14 w-full rounded-xl border border-border bg-card pr-4 pl-12 text-base shadow-[0_1px_2px_rgba(17,24,39,0.04)] outline-none placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/10"
        />
      </div>
      <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
        {q ? `${count} ${count === 1 ? "topic" : "topics"} found` : `${count} topics`}
      </p>

      {filtered.length ? (
        <div className="mt-10 divide-y divide-border border-y border-border">
          {filtered.map((group) => (
            <section
              key={group.category.slug}
              aria-labelledby={`topics-${group.category.slug}`}
              className="grid gap-4 py-8 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <h2
                id={`topics-${group.category.slug}`}
                className="text-xl font-semibold tracking-[-0.02em]"
              >
                {group.category.name}
              </h2>
              <TopicList topics={group.topics} />
            </section>
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-xl border border-dashed border-border px-6 py-12 text-center text-muted-foreground">
          No topics match &ldquo;{query}&rdquo;. Try a broader term.
        </p>
      )}
    </div>
  );
}
