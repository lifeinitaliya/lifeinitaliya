import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/site";
import type { City, Region } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CityCardProps {
  city: City;
  region?: Pick<Region, "slug" | "name">;
  /** Whether the region has its own page to link to. */
  linkRegion?: boolean;
  className?: string;
}

export function CityCard({ city, region, linkRegion = false, className }: CityCardProps) {
  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        {city.image && (
          <Image
            src={city.image.src}
            alt={city.image.alt}
            fill
            sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
          />
        )}
      </div>
      <h3 className="mt-3 font-display text-[22px] leading-tight">
        {region && linkRegion ? (
          <Link
            href={routes.region(region.slug)}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
          >
            {city.name}
          </Link>
        ) : (
          city.name
        )}
      </h3>
      {region && <p className="text-[13px] text-muted-foreground">{region.name}</p>}
    </article>
  );
}
