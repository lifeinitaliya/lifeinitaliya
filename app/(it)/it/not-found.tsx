import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { itRoutes } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pagina non trovata",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-[clamp(72px,14vw,140px)] leading-none font-extrabold tracking-[-0.06em] text-primary tabular-nums">
        404
      </p>
      <h1 className="mt-6 text-[clamp(30px,4.5vw,48px)] leading-[1.05] font-extrabold tracking-[-0.035em]">
        Questa pagina non c&apos;è.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">
        Potrebbe essere stata spostata o non esistere più.
      </p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Link href={itRoutes.home} className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}>
          Torna alla prima pagina
        </Link>
        <Link
          href={itRoutes.guides}
          className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}
        >
          Esplora le guide
          <ArrowRight aria-hidden data-icon="inline-end" />
        </Link>
      </div>
    </Container>
  );
}
