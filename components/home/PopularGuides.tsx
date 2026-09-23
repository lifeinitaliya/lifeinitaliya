import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { routes } from "@/lib/site";
import type { Guide } from "@/lib/types";

interface PopularGuidesProps {
  guides: Guide[];
  title?: string;
  description?: string;
  className?: string;
}

export function PopularGuides({
  guides,
  title = "Popular Right Now",
  description = "The guides readers are returning to this week.",
  className = "py-20 sm:py-24",
}: PopularGuidesProps) {
  return (
    <section aria-labelledby="popular-title" className={className}>
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2
              id="popular-title"
              className="text-[32px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px] lg:text-[42px]"
            >
              {title}
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        <ol className="border-t border-border lg:col-span-8">
          {guides.map((guide, index) => (
            <li key={guide.slug} className="border-b border-border">
              <Link
                href={routes.guide(guide.slug)}
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 rounded-sm py-6 sm:grid-cols-[5rem_1fr] sm:gap-6 sm:py-8"
              >
                <span
                  aria-hidden
                  className="text-3xl leading-none font-bold tracking-[-0.04em] text-foreground/20 tabular-nums transition-colors group-hover:text-primary sm:text-5xl"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex flex-col">
                  <span className="text-lg leading-snug font-semibold tracking-[-0.02em] text-balance transition-colors group-hover:text-primary sm:text-2xl">
                    {guide.title}
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">
                    {guide.category.name}
                    <span aria-hidden className="mx-1.5">
                      ·
                    </span>
                    {guide.readingTimeMinutes} min read
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
