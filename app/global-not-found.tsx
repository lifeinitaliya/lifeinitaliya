import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/layout/Logo";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { dmSerif, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

// Shown for URLs that match no route in either language. Pages that call
// notFound() use the not-found file of their own language instead.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Page not found | Life in Italia",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="border-b border-border">
          <Container className="flex h-16 items-center lg:h-[72px]">
            <Logo />
          </Container>
        </header>
        <main className="flex-1">
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
            <p lang="it" className="mt-2 max-w-lg text-lg text-muted-foreground">
              La pagina che cerchi non esiste o è stata spostata.
            </p>
            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link href="/" className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}>
                Back to Life in Italia
              </Link>
              <Link
                href="/it"
                hrefLang="it"
                lang="it"
                className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}
              >
                Vai all&apos;edizione italiana
              </Link>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
