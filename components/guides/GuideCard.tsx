import Link from "next/link";

import { CategoryLabel } from "@/components/guides/CategoryLabel";
import { GuideCover } from "@/components/guides/GuideCover";
import { GuideMeta } from "@/components/guides/GuideMeta";
import { GuideRank } from "@/components/guides/GuideRank";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GuideCardProps {
  guide: Guide;
  /** "vertical" stacks image above text; "horizontal" puts a thumbnail beside it. */
  layout?: "vertical" | "horizontal";
  showRank?: boolean;
  className?: string;
}

export function GuideCard({
  guide,
  layout = "vertical",
  showRank = true,
  className,
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
            "mt-2 font-semibold tracking-[-0.015em] text-balance",
            horizontal
              ? "text-base leading-snug sm:text-[17px]"
              : "text-xl leading-tight"
          )}
        >
          <Link
            href={routes.guide(guide.slug)}
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
          {showRank && <GuideRank score={guide.guideRank} />}
          <GuideMeta guide={guide} />
        </div>
      </div>
    </article>
  );
}
