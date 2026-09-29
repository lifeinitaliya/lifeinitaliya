import Link from "next/link";

import { formatReadingTime } from "@/lib/format";
import { articleLocale, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Numbered editorial list with large serif numerals. */
export function EditorialList({
  articles,
  className,
  locale = "en",
}: {
  articles: Article[];
  className?: string;
  locale?: Locale;
}) {
  return (
    <ol className={cn("grid gap-x-12 md:grid-cols-2", className)}>
      {articles.map((article, index) => (
        <li key={article.slug} className="border-t border-border">
          <Link
            href={routes.article(article)}
            hrefLang={articleLocale(article) !== locale ? articleLocale(article) : undefined}
            className="group grid grid-cols-[3.25rem_1fr] items-baseline gap-4 rounded-sm py-6 sm:grid-cols-[4.5rem_1fr]"
          >
            <span
              aria-hidden
              className="font-display text-[40px] leading-none text-foreground/25 tabular-nums transition-colors group-hover:text-primary sm:text-[52px]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="flex flex-col gap-2">
              <span className="font-display text-[22px] leading-[1.2] text-balance transition-colors group-hover:text-primary sm:text-[26px]">
                {article.title}
              </span>
              <span className="text-[13px] text-muted-foreground">
                {article.category.name}
                <span aria-hidden className="mx-1.5">
                  ·
                </span>
                {formatReadingTime(article.readingTimeMinutes, locale)}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
