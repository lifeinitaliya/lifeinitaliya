import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { StoryImage } from "@/components/editorial/StoryImage";
import { GuideMeta } from "@/components/guides/GuideMeta";
import { GuideRank } from "@/components/guides/GuideRank";
import { HomeSection } from "@/components/home/HomeSection";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

/** The cornerstone guide, presented as the homepage's lead feature. */
export function ItFeaturedGuide({ guide }: { guide: Guide }) {
  const href = routes.article(guide);
  return (
    <HomeSection labelledBy="featured-guide-title" tone="sand">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <Link href={href} tabIndex={-1} aria-hidden className="group lg:col-span-7">
          <StoryImage
            article={guide}
            sizes="(min-width: 1280px) 700px, (min-width: 1024px) 58vw, 100vw"
            className="aspect-[3/2]"
          />
        </Link>
        <div className="lg:col-span-5">
          <p className="text-[12px] font-bold tracking-[0.18em] text-primary uppercase">
            La guida in evidenza
          </p>
          <h2
            id="featured-guide-title"
            className="mt-4 font-display text-[34px] leading-[1.05] text-balance sm:text-[44px]"
          >
            <Link href={href} className="rounded-sm hover:text-primary">
              La guida completa al viaggio in Italia
            </Link>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Come organizzare il primo viaggio, scegliere le destinazioni, muoversi tra le città e
            costruire un itinerario realistico.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
            <GuideRank score={guide.guideRank} locale="it" />
            <GuideMeta guide={guide} locale="it" />
          </div>
          <Link
            href={href}
            className={cn(buttonVariants({ size: "xl" }), "mt-8 rounded-none hover:bg-primary/90")}
          >
            Leggi la guida
            <ArrowRight aria-hidden data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}
