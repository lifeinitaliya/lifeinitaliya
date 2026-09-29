import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-[clamp(72px,14vw,140px)] leading-none font-extrabold tracking-[-0.06em] text-primary tabular-nums">
        404
      </p>
      <h1 className="mt-6 text-[clamp(30px,4.5vw,48px)] leading-[1.05] font-extrabold tracking-[-0.035em]">
        We couldn&apos;t find that page.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">
        The page may have moved or no longer exists.
      </p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link href={routes.home} className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}>
          Back to Life in Italia
        </Link>
        <Link
          href={routes.guides}
          className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}
        >
          Explore Guides
          <ArrowRight aria-hidden data-icon="inline-end" />
        </Link>
      </div>
    </Container>
  );
}
