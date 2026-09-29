import { StoryCard, type StoryCardVariant } from "@/components/editorial/StoryCard";
import type { Locale } from "@/lib/i18n";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

interface StoryGridProps {
  articles: Article[];
  columns?: keyof typeof columnClasses;
  variant?: StoryCardVariant;
  showRank?: boolean;
  showExcerpt?: boolean;
  tone?: "light" | "dark";
  compactOnMobile?: boolean;
  className?: string;
  locale?: Locale;
}

export function StoryGrid({
  articles,
  columns = 3,
  variant = "standard",
  showRank,
  showExcerpt,
  tone,
  compactOnMobile,
  className,
  locale,
}: StoryGridProps) {
  // Compact phone cards show a ~104px square thumbnail.
  const mobile = compactOnMobile ? "208px" : "100vw";
  const sizes =
    columns === 4
      ? `(min-width: 1024px) 290px, (min-width: 640px) 50vw, ${mobile}`
      : columns === 3
        ? `(min-width: 1024px) 390px, (min-width: 640px) 50vw, ${mobile}`
        : `(min-width: 640px) 50vw, ${mobile}`;

  return (
    <ul
      className={cn(
        "grid gap-x-8",
        compactOnMobile ? "gap-y-6 sm:gap-y-12" : "gap-y-12",
        columnClasses[columns],
        className
      )}
    >
      {articles.map((article) => (
        <li key={article.slug}>
          <StoryCard
            article={article}
            variant={variant}
            sizes={sizes}
            showRank={showRank}
            showExcerpt={showExcerpt}
            tone={tone}
            compactOnMobile={compactOnMobile}
            locale={locale}
          />
        </li>
      ))}
    </ul>
  );
}
