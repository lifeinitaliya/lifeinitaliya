import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Typographic brand mark: an emphasised "BS" block followed by a lighter "INSIGHTS". */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex items-center gap-2.5 rounded-sm leading-none", className)}
    >
      <span
        aria-hidden
        className="relative flex h-7 w-8 items-center justify-center rounded-md pb-[3px] bg-foreground text-[13px] font-extrabold tracking-[-0.02em] text-background"
      >
        BS
        <span className="absolute bottom-[4px] left-1/2 h-[2px] w-3 -translate-x-1/2 rounded-full bg-primary" />
      </span>
      <span
        aria-hidden
        className="text-[15px] font-semibold tracking-[0.2em] text-foreground"
      >
        INSIGHTS
      </span>
    </Link>
  );
}
