import Image from "next/image";
import Link from "next/link";

import { hasRegionPage } from "@/lib/queries/italy";
import { routes } from "@/lib/site";
import type { RegionWithCount } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RegionCardProps {
  region: RegionWithCount;
  sizes?: string;
  className?: string;
}

/** Photographic region tile. Links only when the region has its own page. */
export function RegionCard({
  region,
  // Portrait tiles crop landscape photos, so request ~2x the tile width.
  sizes = "(min-width: 1024px) 460px, (min-width: 640px) 66vw, 100vw",
  className,
}: RegionCardProps) {
  const linked = hasRegionPage(region);
  const name = linked ? (
    <Link
      href={routes.region(region.slug)}
      className="rounded-sm after:absolute after:inset-0 after:content-['']"
    >
      {region.name}
    </Link>
  ) : (
    region.name
  );

  if (!region.image) {
    return (
      <article
        className={cn(
          "group relative flex aspect-[3/4] flex-col justify-end bg-sand p-4",
          className
        )}
      >
        <h3 className="font-display text-[22px] leading-tight">{name}</h3>
        <p className="mt-1 text-[13px] text-muted-foreground">{region.capital}</p>
      </article>
    );
  }

  return (
    <article className={cn("group relative overflow-hidden bg-secondary", className)}>
      <div className="relative aspect-[3/4]">
        <Image
          src={region.image.src}
          alt={region.image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="font-display text-[22px] leading-tight sm:text-[24px]">{name}</h3>
        <p className="mt-0.5 text-[13px] text-white/80">{region.capital}</p>
      </div>
    </article>
  );
}
