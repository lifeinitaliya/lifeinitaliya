import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Typographic brand mark: an emphasised "Li" monogram followed by the "LIFE IN ITALIA" wordmark. */
export function Logo({ className, locale = "en" }: { className?: string; locale?: Locale }) {
  const it = locale === "it";
  return (
    <Link
      href={it ? "/it" : "/"}
      aria-label={it ? `${siteConfig.name}, prima pagina` : `${siteConfig.name} home`}
      className={cn("inline-flex items-center gap-2.5 rounded-sm leading-none", className)}
    >
      <span
        aria-hidden
        className="relative flex h-7 w-8 items-center justify-center rounded-md pb-[3px] bg-foreground text-[13px] font-extrabold tracking-[-0.02em] text-background"
      >
        Li
        <span className="absolute bottom-[4px] left-1/2 h-[2px] w-3 -translate-x-1/2 rounded-full bg-primary" />
      </span>
      <span
        aria-hidden
        className="text-[12.5px] font-semibold tracking-[0.1em] whitespace-nowrap text-foreground min-[360px]:text-[14px] min-[360px]:tracking-[0.14em] sm:text-[15px] sm:tracking-[0.16em]"
      >
        LIFE IN ITALIA
      </span>
    </Link>
  );
}
