import Link from "next/link";

import { routes } from "@/lib/site";
import type { TopicWithCount } from "@/lib/types";
import { cn } from "@/lib/utils";

interface TopicListProps {
  topics: TopicWithCount[];
  showCount?: boolean;
  className?: string;
}

export function TopicList({ topics, showCount = true, className }: TopicListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {topics.map((topic) => (
        <li key={topic.slug}>
          <Link
            href={routes.topic(topic.slug)}
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/40 hover:text-primary"
          >
            {topic.name}
            {showCount && (
              <span className="text-xs text-muted-foreground tabular-nums group-hover:text-primary/70">
                {topic.guideCount}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
