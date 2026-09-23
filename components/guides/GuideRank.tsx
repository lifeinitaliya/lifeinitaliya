import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type GuideRankVariant = "inline" | "stacked";
type GuideRankTone = "light" | "dark";

interface GuideRankProps {
  score: number;
  variant?: GuideRankVariant;
  tone?: GuideRankTone;
  /** Shows a subtle "Powered by BS Insights" line (stacked variant only). */
  showAttribution?: boolean;
  className?: string;
}

const clamp = (score: number) => Math.min(100, Math.max(0, Math.round(score)));

/**
 * BS Insights' own editorial score for how useful and complete a guide is.
 * Deliberately styled as an index — not a star/review rating or a search-engine score.
 */
export function GuideRank({
  score,
  variant = "inline",
  tone = "light",
  showAttribution = false,
  className,
}: GuideRankProps) {
  const value = clamp(score);
  const label = `Guide Rank ${value} out of 100`;
  const dark = tone === "dark";

  if (variant === "stacked") {
    return (
      <div
        role="img"
        aria-label={label}
        className={cn("inline-flex flex-col gap-2", className)}
      >
        <span
          className={cn(
            "text-[11px] font-semibold tracking-[0.14em] uppercase",
            dark ? "text-ink-muted" : "text-muted-foreground"
          )}
        >
          Guide Rank
        </span>
        <span className="flex items-baseline gap-1 tabular-nums">
          <span
            className={cn(
              "text-5xl leading-none font-bold tracking-[-0.04em]",
              dark ? "text-white" : "text-foreground"
            )}
          >
            {value}
          </span>
          <span
            className={cn(
              "text-base font-medium",
              dark ? "text-ink-muted" : "text-muted-foreground"
            )}
          >
            /100
          </span>
        </span>
        <span
          aria-hidden
          className={cn(
            "h-1 w-full overflow-hidden rounded-full",
            dark ? "bg-white/10" : "bg-primary/10"
          )}
        >
          <span
            className={cn(
              "block h-full rounded-full",
              dark ? "bg-[#6f8ff0]" : "bg-primary"
            )}
            style={{ width: `${value}%` }}
          />
        </span>
        {showAttribution && (
          <span
            className={cn(
              "text-xs",
              dark ? "text-ink-muted" : "text-muted-foreground"
            )}
          >
            Powered by {siteConfig.name}
          </span>
        )}
      </div>
    );
  }

  return (
    <span
      role="img"
      aria-label={label}
      className={cn(
        "inline-flex items-center gap-2 rounded-md border px-2 py-1 text-xs leading-none tabular-nums",
        dark
          ? "border-white/15 text-ink-muted"
          : "border-primary/15 bg-accent text-accent-foreground",
        className
      )}
    >
      <span className="text-[10px] font-semibold tracking-[0.12em] uppercase">
        Guide Rank
      </span>
      <span>
        <span
          className={cn("font-bold", dark ? "text-white" : "text-primary")}
        >
          {value}
        </span>
        <span className="opacity-70">/100</span>
      </span>
    </span>
  );
}
