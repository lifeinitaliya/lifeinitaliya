import Link from "next/link";

import { formatReadingTime } from "@/lib/format";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CompactGuideListProps {
  guides: Guide[];
  numbered?: boolean;
  className?: string;
}

/** Dense title-only list for sidebars and secondary columns. */
export function CompactGuideList({ guides, numbered = false, className }: CompactGuideListProps) {
  const List = numbered ? "ol" : "ul";
  return (
    <List className={cn("divide-y divide-border", className)}>
      {guides.map((guide, index) => (
        <li key={guide.slug} className="first:*:pt-0">
          <Link
            href={routes.guide(guide.slug)}
            className="group flex gap-4 rounded-sm py-4"
          >
            {numbered && (
              <span
                aria-hidden
                className="w-7 shrink-0 text-2xl leading-none font-bold tracking-[-0.04em] text-foreground/20 tabular-nums transition-colors group-hover:text-primary"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <span className="flex flex-col">
              <span className="text-[15px] leading-snug font-semibold tracking-[-0.01em] transition-colors group-hover:text-primary">
                {guide.title}
              </span>
              <span className="mt-1 text-[13px] text-muted-foreground">
                {guide.category.name} · {formatReadingTime(guide.readingTimeMinutes)}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </List>
  );
}
