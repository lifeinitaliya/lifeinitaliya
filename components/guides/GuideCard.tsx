import Link from "next/link";

import { CategoryLabel } from "@/components/guides/CategoryLabel";
import { GuideCover } from "@/components/guides/GuideCover";
import { GuideMeta } from "@/components/guides/GuideMeta";
import { GuideRank } from "@/components/guides/GuideRank";
import { articleLocale, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GuideCardProps {
  guide: Article;
  /** "vertical" stacks image above text; "horizontal" puts a thumbnail beside it. */
  layout?: "vertical" | "horizontal";
  showRank?: boolean;
  className?: string;
  locale?: Locale;
}

export function GuideCard({
  guide,
  layout = "vertical",
  showRank = true,
  className,
  locale = "en",
}: GuideCardProps) {
  const horizontal = layout === "horizontal";

  return (
    <article
      className={cn(
        "group relative",
        horizontal
          ? "grid grid-cols-[112px_1fr] items-start gap-4 sm:grid-cols-[160px_1fr] sm:gap-5"
          : "flex flex-col",
        className
      )}
    >
      <GuideCover
        guide={guide}
        sizes={
          horizontal
            ? "(min-width: 640px) 160px, 112px"
            : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        }
        className={horizontal ? "aspect-[4/3]" : "aspect-[16/10]"}
      />

      <div className={cn("flex flex-col", !horizontal && "mt-5")}>
        <CategoryLabel category={guide.category} />
        <h3
          className={cn(
            "mt-2 font-display text-balance",
            horizontal
              ? "text-[19px] leading-snug sm:text-[21px]"
              : "text-[23px] leading-[1.15]"
          )}
        >
          <Link
            href={routes.article(guide)}
            hrefLang={articleLocale(guide) !== locale ? articleLocale(guide) : undefined}
            className="rounded-sm transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
          >
            {guide.title}
          </Link>
        </h3>
        <p
          className={cn(
            "mt-2 text-[15px] leading-relaxed text-muted-foreground",
            horizontal ? "hidden sm:line-clamp-2" : "line-clamp-2"
          )}
        >
          {guide.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          {showRank && guide.kind === "guide" && <GuideRank score={guide.guideRank} locale={locale} />}
          <GuideMeta guide={guide} locale={locale} />
        </div>
      </div>
    </article>
  );
}
