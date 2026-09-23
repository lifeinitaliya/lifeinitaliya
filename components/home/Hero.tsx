import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

import { HeroVisual } from "@/components/home/HeroVisual";
import { Container } from "@/components/shared/Container";
import { SearchForm } from "@/components/shared/SearchForm";
import { buttonVariants } from "@/components/ui/button";
import type { Guide } from "@/lib/types";
import { cn } from "@/lib/utils";

const popularSearches = ["Italy itinerary", "AI tools", "Budgeting", "Meal prep"];

interface HeroProps {
  spotlight?: Guide;
  secondary?: Guide;
}

export function Hero({ spotlight, secondary }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-14 pt-12 pb-16 sm:pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-20">
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 lg:col-span-7 motion-safe:duration-700">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            <span aria-hidden className="h-px w-8 bg-primary" />
            BS Insights
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(42px,6vw,72px)] leading-[0.98] font-extrabold tracking-[-0.04em] text-balance"
          >
            Understand more.{" "}
            <span className="block text-muted-foreground">Do more.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Practical guides, useful insights, and well-researched
            information for everyday decisions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/guides"
              className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}
            >
              Explore Guides
              <ArrowRight aria-hidden data-icon="inline-end" />
            </Link>
            <Link
              href="/categories"
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "bg-card"
              )}
            >
              Browse Categories
            </Link>
          </div>

          <div className="mt-10 max-w-xl">
            <SearchForm id="hero-search" />
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="text-muted-foreground">Popular:</span>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {popularSearches.map((term) => (
                  <li key={term}>
                    <Link
                      href={{ pathname: "/search", query: { q: term } }}
                      className="rounded-sm font-medium text-foreground/80 underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      {term}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {spotlight && (
          <div className="lg:col-span-5">
            <HeroVisual primary={spotlight} secondary={secondary} />
          </div>
        )}
      </Container>

      <Container className="hidden pb-10 lg:block">
        <a
          href="#featured-guides"
          className="group inline-flex items-center gap-2 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="flex size-8 items-center justify-center rounded-full border border-border bg-card">
            <ArrowDown
              aria-hidden
              className="size-4 transition-transform group-hover:translate-y-0.5"
            />
          </span>
          Start with featured insights
        </a>
      </Container>
    </section>
  );
}
