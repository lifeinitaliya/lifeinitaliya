import Link from "next/link";

import { CategoryLabel } from "@/components/guides/CategoryLabel";
import { GuideCover } from "@/components/guides/GuideCover";
import { GuideRank } from "@/components/guides/GuideRank";
import { formatReadingTime } from "@/lib/format";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";

interface HeroVisualProps {
  primary: Guide;
  secondary?: Guide;
}

export function HeroVisual({ primary, secondary }: HeroVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <article className="group relative">
        <GuideCover
          guide={primary}
          priority
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, 100vw"
          className="aspect-[4/5] rounded-2xl sm:aspect-[5/6]"
        />
        <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border bg-card/95 p-5 shadow-[0_12px_32px_-12px_rgba(17,24,39,0.25)] backdrop-blur-sm sm:inset-x-5 sm:bottom-5">
          <div className="flex items-start justify-between gap-4">
            <CategoryLabel category={primary.category} />
            <GuideRank score={primary.guideRank} />
          </div>
          <p className="mt-3 text-lg leading-snug font-semibold tracking-[-0.015em] text-balance">
            <Link
              href={routes.guide(primary.slug)}
              className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
            >
              {primary.title}
            </Link>
          </p>
          <p className="mt-1.5 text-[13px] text-muted-foreground">
            {formatReadingTime(primary.readingTimeMinutes)}
          </p>
        </div>
      </article>

      {secondary && (
        <article className="group absolute top-8 -left-10 hidden w-56 rounded-xl border border-border bg-card p-3 shadow-[0_12px_32px_-16px_rgba(17,24,39,0.3)] xl:block">
          <GuideCover
            guide={secondary}
            sizes="208px"
            className="aspect-[16/10] rounded-md"
          />
          <div className="px-1 pt-3 pb-1">
            <GuideRank score={secondary.guideRank} />
            <p className="mt-2 text-sm leading-snug font-semibold">
              <Link
                href={routes.guide(secondary.slug)}
                className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
              >
                {secondary.title}
              </Link>
            </p>
          </div>
        </article>
      )}
    </div>
  );
}
