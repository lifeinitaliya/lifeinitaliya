import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Life in Italia Brand Emblem (SVG Icon)
 * An authentic Roman arch portal framing the Tuscan sun, "LI" monogram,
 * Italian national tricolor pips (Verde, Bianco, Rosso), and Mediterranean Azzurro horizon.
 */
export function BrandIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0 transition-transform duration-300 ease-out group-hover:scale-105", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1F242D" />
          <stop offset="50%" stopColor="#13161C" />
          <stop offset="100%" stopColor="#0B0D10" />
        </linearGradient>
        <linearGradient id="logoSun" x1="32" y1="16" x2="32" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="logoAzzurro" x1="18" y1="49.5" x2="43" y2="49.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>

      {/* Rounded Arch-Squircle Container */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#logoBg)" />
      <rect x="2" y="2" width="60" height="60" rx="16" stroke="#374151" strokeWidth="1.2" strokeOpacity="0.6" />

      {/* Italian Tricolor Pips (Verde, Bianco, Rosso) */}
      <circle cx="23" cy="11" r="2.2" fill="#16A34A" />
      <circle cx="32" cy="11" r="2.2" fill="#F8FAFC" />
      <circle cx="41" cy="11" r="2.2" fill="#DC2626" />

      {/* Roman Arch Portal Silhouette */}
      <path
        d="M16 48 V27 C16 18.163 23.163 11 32 11 C40.837 11 48 18.163 48 27 V48"
        stroke="#E5E7EB"
        strokeWidth="1.2"
        strokeOpacity="0.22"
        strokeDasharray="2 2"
      />

      {/* Radiant Tuscan Sun */}
      <circle cx="32" cy="23" r="5.5" fill="url(#logoSun)" />

      {/* Monogram "L" */}
      <path d="M18 26 H23.5 V41.5 H32.5 V46 H18 Z" fill="#FFFFFF" />

      {/* Monogram "I" */}
      <path d="M37.5 26 H43 V46 H37.5 Z" fill="#FFFFFF" />

      {/* Mediterranean Blue Horizon Bar */}
      <rect x="18" y="49.5" width="25" height="3" rx="1.5" fill="url(#logoAzzurro)" />
    </svg>
  );
}

/** Editorial Masthead Logo: Brand symbol with 'LIFE IN ITALIA' typographic wordmark and subtitle. */
export function Logo({
  className,
  locale = "en",
  showSubtitle = true,
}: {
  className?: string;
  locale?: Locale;
  showSubtitle?: boolean;
}) {
  const it = locale === "it";
  const subtitle = it ? "GUIDE & CULTURA" : "EDITORIAL & TRAVEL";

  return (
    <Link
      href={it ? "/it" : "/"}
      aria-label={it ? `${siteConfig.name}, prima pagina` : `${siteConfig.name} home`}
      className={cn(
        "group inline-flex items-center gap-2 min-[360px]:gap-2.5 sm:gap-3 rounded-sm leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
    >
      <BrandIcon className="size-7 min-[360px]:size-8 sm:size-[34px]" />
      <div className="flex flex-col justify-center gap-[3px]">
        <span
          aria-hidden
          className="text-[12.5px] font-bold tracking-[0.12em] text-foreground transition-colors group-hover:text-primary min-[360px]:text-[14.5px] min-[360px]:tracking-[0.14em] sm:text-[15.5px] sm:tracking-[0.16em] whitespace-nowrap"
        >
          LIFE IN ITALIA
        </span>
        {showSubtitle && (
          <span
            aria-hidden
            className="text-[7.5px] font-semibold tracking-[0.16em] text-muted-foreground uppercase min-[360px]:text-[8px] min-[360px]:tracking-[0.22em] sm:text-[9px] sm:tracking-[0.26em] whitespace-nowrap"
          >
            {subtitle}
          </span>
        )}
      </div>
    </Link>
  );
}

