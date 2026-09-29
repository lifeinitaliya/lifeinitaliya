import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { itRoutes } from "@/lib/site";
import { cn } from "@/lib/utils";

const heroImage = {
  src: "/images/guides/complete-italy-travel-guide/venice-grand-canal-gondolas-rialto.webp",
  alt: "Gondole ormeggiate sul Canal Grande vicino al ponte di Rialto, a Venezia, al tramonto",
};

/** Typographic opening of the Italian homepage. */
export function ItHero() {
  return (
    <section aria-labelledby="hero-title" className="border-b border-border">
      <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.18em] text-primary uppercase">
            <span aria-hidden className="h-px w-8 bg-primary" />
            Guide e idee dall&apos;Italia
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(44px,7vw,92px)] leading-[0.98] tracking-[-0.015em] text-balance"
          >
            L&apos;Italia, raccontata oltre le cartoline.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Guide pratiche di viaggio, città e cultura del cibo per conoscere l&apos;Italia con più
            attenzione e meno cliché.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={itRoutes.guides}
              className={cn(buttonVariants({ size: "xl" }), "rounded-none hover:bg-primary/90")}
            >
              Esplora le guide
              <ArrowRight aria-hidden data-icon="inline-end" />
            </Link>
            <Link
              href="#ultime-storie"
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "rounded-none bg-card")}
            >
              Leggi le ultime storie
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div className="relative aspect-[3/2] overflow-hidden bg-secondary lg:aspect-[4/5]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              preload
              // Portrait crop of a landscape photo: request roughly 2x the column width.
              sizes="(min-width: 1280px) 900px, (min-width: 1024px) 70vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      </Container>
    </section>
  );
}
