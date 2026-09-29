import { formatDate, formatReadingTime } from "@/lib/format";
import { t, type Locale } from "@/lib/i18n";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GuideMetaProps {
  guide: Pick<Article, "updatedAt" | "readingTimeMinutes">;
  className?: string;
  locale?: Locale;
}

export function GuideMeta({ guide, className, locale = "en" }: GuideMetaProps) {
  return (
    <p className={cn("text-[13px] text-muted-foreground", className)}>
      <span className="sr-only">{t(locale).updated} </span>
      <time dateTime={guide.updatedAt}>{formatDate(guide.updatedAt, locale)}</time>
      <span aria-hidden className="mx-1.5">
        ·
      </span>
      {formatReadingTime(guide.readingTimeMinutes, locale)}
    </p>
  );
}
