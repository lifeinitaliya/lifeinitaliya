"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Container } from "@/components/shared/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    // TODO: report to an error-tracking service once one is configured.
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Errore
      </p>
      <h1 className="mt-5 text-[clamp(30px,4.5vw,48px)] leading-[1.05] font-extrabold tracking-[-0.035em]">
        Qualcosa è andato storto.
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">Riprova tra qualche istante.</p>
      <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <Button size="xl" onClick={() => retry()} className="hover:bg-primary/90">
          Riprova
        </Button>
        <Link href="/it" className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}>
          Torna alla prima pagina
        </Link>
      </div>
    </Container>
  );
}
