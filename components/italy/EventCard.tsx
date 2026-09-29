import Image from "next/image";
import Link from "next/link";

import { SampleBadge } from "@/components/editorial/SampleNotice";
import { routes } from "@/lib/site";
import type { City, ItalyEvent } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EventCardProps {
  event: ItalyEvent;
  city?: City;
  headingLevel?: "h2" | "h3";
  className?: string;
}

/** Event listing. Current events are SAMPLE listings, flagged with a badge. */
export function EventCard({ event, city, headingLevel: Heading = "h3", className }: EventCardProps) {
  return (
    <article id={event.slug} className={cn("group relative flex scroll-mt-28 flex-col", className)}>
      <div className="relative aspect-[3/2] overflow-hidden bg-secondary">
        <Image
          src={event.image.src}
          alt={event.image.alt}
          fill
          sizes="(min-width: 1024px) 290px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.03]"
        />
        {event.sample && <SampleBadge className="absolute top-3 left-3" />}
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <p className="text-[12px] font-semibold tracking-[0.04em] text-primary tabular-nums">
          {event.dateLabel}
        </p>
        <Heading className="font-display text-[22px] leading-[1.15]">
          <Link
            href={`${routes.events}#${event.slug}`}
            className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
          >
            {event.name}
          </Link>
        </Heading>
        <p className="text-[13px] text-muted-foreground">
          <span className="font-bold tracking-[0.12em] text-foreground uppercase">
            {city?.name ?? event.citySlug}
          </span>
          <span aria-hidden className="mx-1.5">
            ·
          </span>
          {event.category}
        </p>
      </div>
    </article>
  );
}
