import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CategoryLabel } from "@/components/guides/CategoryLabel";
import { GuideCover } from "@/components/guides/GuideCover";
import { GuideMeta } from "@/components/guides/GuideMeta";
import { GuideRank } from "@/components/guides/GuideRank";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FeaturedGuideCardProps {
  guide: Guide;
  priority?: boolean;
  className?: string;
}

export function FeaturedGuideCard({
  guide,
  priority = false,
  className,
}: FeaturedGuideCardProps) {
  return (
    <article className={cn("group relative flex flex-col", className)}>
      <GuideCover
        guide={guide}
        priority={priority}
        sizes="(min-width: 1024px) 680px, 100vw"
        className="aspect-[16/10] rounded-xl"
      />
      <div className="mt-6 flex flex-col">
        <CategoryLabel category={guide.category} />
        <h3 className="mt-3 text-[26px] leading-[1.1] font-bold tracking-[-0.03em] text-balance sm:text-[32px]">
          <Link
            href={routes.guide(guide.slug)}
            className="rounded-sm transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
          >
            {guide.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
          {guide.excerpt}
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <div className="flex flex-wrap items-center gap-3">
            <GuideRank score={guide.guideRank} />
            <GuideMeta guide={guide} />
          </div>
          <span
            aria-hidden
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground"
          >
            Read guide
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
