import Link from "next/link";

import { StoryImage } from "@/components/editorial/StoryImage";
import { GuideMeta } from "@/components/guides/GuideMeta";
import { GuideRank } from "@/components/guides/GuideRank";
import { articleLocale, t, type Locale } from "@/lib/i18n";
import { routes } from "@/lib/site";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

export type StoryCardVariant = "lead" | "feature" | "standard" | "compact" | "text" | "overlay";

interface StoryCardProps {
  article: Article;
  variant?: StoryCardVariant;
  headingLevel?: "h2" | "h3";
  showExcerpt?: boolean;
  showRank?: boolean;
  priority?: boolean;
  /** `sizes` for the image; sensible defaults per variant. */
  sizes?: string;
  /** Aspect-ratio class for the image, e.g. "aspect-[3/2]". */
  imageClassName?: string;
  tone?: "light" | "dark";
  /** Standard cards only: thumbnail beside the headline on phones. */
  compactOnMobile?: boolean;
  className?: string;
  /** Language of the page the card appears on. */
  locale?: Locale;
  /** Full byline shown in the card metadata, e.g. "Di Bareera". */
  byline?: string;
}

const defaultSizes: Record<StoryCardVariant, string> = {
  lead: "(min-width: 1024px) 800px, 100vw",
  feature: "(min-width: 1024px) 800px, 100vw",
  standard: "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
  compact: "192px",
  text: "0px",
  // Portrait crop of landscape photos: request ~2x the card width.
  overlay: "(min-width: 1024px) 580px, (min-width: 640px) 95vw, 100vw",
};

const titleSize: Record<StoryCardVariant, string> = {
  lead: "text-[30px] leading-[1.08] sm:text-[40px] lg:text-[46px]",
  feature: "text-[30px] leading-[1.08] sm:text-[38px] lg:text-[42px]",
  standard: "text-[22px] leading-[1.15] sm:text-[24px]",
  compact: "text-[18px] leading-[1.2]",
  text: "text-[22px] leading-[1.18]",
  overlay: "text-[22px] leading-[1.15]",
};

/** The core editorial unit: category, headline, dek and metadata. */
export function StoryCard({
  article,
  variant = "standard",
  headingLevel: Heading = "h3",
  showExcerpt = variant !== "compact" && variant !== "overlay",
  showRank = false,
  priority = false,
  sizes,
  imageClassName,
  tone = "light",
  compactOnMobile = false,
  className,
  locale = "en",
  byline,
}: StoryCardProps) {
  const href = routes.article(article);
  const dark = tone === "dark" || variant === "overlay";
  const rank = showRank && article.kind === "guide" ? article.guideRank : null;
  // Cards on an Italian page can point to articles published only in English.
  const contentLocale = articleLocale(article);
  const foreign = contentLocale !== locale;

  const label = (
    <p
      className={cn(
        "text-[11px] font-bold tracking-[0.16em] uppercase",
        dark ? "text-white/80" : "text-primary"
      )}
    >
      {article.kind === "guide" ? t(locale).guide : article.category.name}
      {foreign && (
        <span
          className={cn(
            "ml-2 inline-block border px-1 py-px align-[1px] text-[10px] leading-none tracking-[0.12em]",
            dark ? "border-white/40 text-white/80" : "border-foreground/25 text-muted-foreground"
          )}
        >
          {t(locale).inOtherLanguage}
        </span>
      )}
    </p>
  );

  const title = (
    <Heading
      className={cn(
        "font-display tracking-[-0.005em] text-balance",
        compactOnMobile && variant === "standard"
          ? "text-[18px] leading-[1.2] sm:text-[24px] sm:leading-[1.15]"
          : titleSize[variant],
        dark ? "text-white" : "text-foreground"
      )}
    >
      <Link
        href={href}
        hrefLang={foreign ? contentLocale : undefined}
        className={cn(
          "rounded-sm after:absolute after:inset-0 after:content-[''] transition-colors",
          !dark && "group-hover:text-primary"
        )}
      >
        {article.title}
      </Link>
    </Heading>
  );

  const excerpt = showExcerpt && (
    <p
      className={cn(
        "leading-relaxed",
        variant === "lead" || variant === "feature" ? "text-[17px] sm:text-lg" : "text-[15px]",
        dark ? "text-ink-muted" : "text-muted-foreground",
        variant !== "lead" && variant !== "feature" && "line-clamp-3"
      )}
    >
      {article.excerpt}
    </p>
  );

  const meta = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {rank !== null && <GuideRank score={rank} tone={dark ? "dark" : "light"} locale={locale} />}
      {byline && (
        <p className={cn("text-[13px]", dark ? "text-ink-muted" : "text-foreground/75")}>{byline}</p>
      )}
      <GuideMeta guide={article} locale={locale} className={dark ? "text-ink-muted" : undefined} />
    </div>
  );

  if (variant === "overlay") {
    return (
      <article className={cn("group relative overflow-hidden", className)}>
        <StoryImage
          article={article}
          sizes={sizes ?? defaultSizes.overlay}
          priority={priority}
          className={cn("aspect-[3/4]", imageClassName)}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
          {label}
          {title}
        </div>
      </article>
    );
  }

  if (variant === "feature") {
    return (
      <article className={cn("group relative grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10", className)}>
        <StoryImage
          article={article}
          sizes={sizes ?? defaultSizes.feature}
          priority={priority}
          className={cn("aspect-[3/2] lg:col-span-8 lg:aspect-[16/10]", imageClassName)}
        />
        <div className="flex flex-col gap-3 lg:col-span-4">
          {label}
          {title}
          {excerpt}
          {meta}
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <article className={cn("group relative grid grid-cols-[96px_1fr] gap-4 sm:grid-cols-[120px_1fr]", className)}>
        <StoryImage
          article={article}
          sizes={sizes ?? defaultSizes.compact}
          className={cn("aspect-square", imageClassName)}
        />
        <div className="flex flex-col gap-1.5">
          {label}
          {title}
          {meta}
        </div>
      </article>
    );
  }

  if (variant === "text") {
    return (
      <article
        className={cn(
          "group relative flex flex-col gap-2.5 border-t pt-5",
          dark ? "border-ink-border" : "border-border",
          className
        )}
      >
        {label}
        {title}
        {excerpt}
        {meta}
      </article>
    );
  }

  const compact = compactOnMobile && variant === "standard";
  return (
    <article
      className={cn(
        "group relative",
        compact
          ? "grid grid-cols-[104px_1fr] items-start gap-4 sm:flex sm:flex-col sm:gap-0"
          : "flex flex-col",
        className
      )}
    >
      <StoryImage
        article={article}
        sizes={sizes ?? defaultSizes[variant]}
        priority={priority}
        className={cn(compact ? "aspect-square sm:aspect-[3/2]" : "aspect-[3/2]", imageClassName)}
      />
      <div
        className={cn(
          "flex flex-col",
          compact ? "gap-1.5 sm:mt-4 sm:gap-2" : variant === "lead" ? "mt-6 gap-3" : "mt-4 gap-2"
        )}
      >
        {label}
        {title}
        {excerpt}
        {meta}
      </div>
    </article>
  );
}
