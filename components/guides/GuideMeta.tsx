import { formatDate, formatReadingTime } from "@/lib/format";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GuideMetaProps {
  guide: Pick<Guide, "updatedAt" | "readingTimeMinutes">;
  className?: string;
}

export function GuideMeta({ guide, className }: GuideMetaProps) {
  return (
    <p className={cn("text-[13px] text-muted-foreground", className)}>
      <span className="sr-only">Updated </span>
      <time dateTime={guide.updatedAt}>{formatDate(guide.updatedAt)}</time>
      <span aria-hidden className="mx-1.5">
        ·
      </span>
      {formatReadingTime(guide.readingTimeMinutes)}
    </p>
  );
}
