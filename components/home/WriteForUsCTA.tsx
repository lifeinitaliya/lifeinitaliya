import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WriteForUsCTA() {
  return (
    <section
      aria-labelledby="write-for-us-title"
      className="border-t border-border py-20 sm:py-28"
    >
      <Container className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Share your knowledge
        </p>
        <h2
          id="write-for-us-title"
          className="mt-5 max-w-3xl text-[34px] leading-[1.05] font-bold tracking-[-0.035em] text-balance sm:text-[46px] lg:text-[52px]"
        >
          Have something useful to share?
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          BS Insights welcomes practical, original contributions from writers,
          professionals and subject-matter experts.
        </p>
        <Link
          href={routes.writeForUs}
          className={cn(
            buttonVariants({ size: "xl" }),
            "mt-9 bg-foreground text-background hover:bg-foreground/85"
          )}
        >
          Write for BS Insights
          <ArrowRight aria-hidden data-icon="inline-end" />
        </Link>
      </Container>
    </section>
  );
}
