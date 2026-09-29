import { Info } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Labels placeholder data (events, weather, preview stories) so it's never
 * mistaken for real, current information. Controlled by siteConfig.
 */
export function SampleNotice({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  if (!siteConfig.showSampleNotices) return null;
  return (
    <p
      className={cn(
        "inline-flex items-start gap-2 text-[13px] leading-snug",
        tone === "dark" ? "text-ink-muted" : "text-muted-foreground",
        className
      )}
    >
      <Info aria-hidden className="mt-px size-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  );
}

/** Small corner badge for individual sample items. */
export function SampleBadge({ className }: { className?: string }) {
  if (!siteConfig.showSampleNotices) return null;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm bg-background/95 px-1.5 py-0.5 text-[10px] font-bold tracking-[0.12em] text-foreground uppercase",
        className
      )}
    >
      Sample
    </span>
  );
}
