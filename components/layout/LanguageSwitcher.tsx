"use client";

import { usePathname } from "next/navigation";

import { localeInfo, t, type Locale } from "@/lib/i18n";
import { itRoutes, pagePairs, routes } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Where the current page lives in the other language; falls back to that language's homepage. */
function counterpart(pathname: string, target: Locale): string {
  const pair = pagePairs.find(([en, it]) => en === pathname || it === pathname);
  if (pair) return target === "it" ? pair[1] : pair[0];
  return target === "it" ? itRoutes.home : routes.home;
}

const order: Locale[] = ["it", "en"];
const short: Record<Locale, string> = { it: "IT", en: "EN" };

/** "Italiano | English". The current language is shown as text, the other as a link. */
export function LanguageSwitcher({
  locale,
  label,
  className,
}: {
  locale: Locale;
  /** Accessible name; give each instance on a page a distinct one. */
  label?: string;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <nav aria-label={label ?? t(locale).language} className={className}>
      <ul className="flex items-center text-[13px] font-semibold">
        {order.map((code, index) => {
          const name = localeInfo[code].label;
          const current = code === locale;
          return (
            <li key={code} className="flex items-center">
              {index > 0 && (
                <span aria-hidden className="px-1.5 text-foreground/25">
                  |
                </span>
              )}
              {current ? (
                <span aria-current="true" lang={code} className="text-foreground">
                  <span className="hidden sm:inline">{name}</span>
                  <span aria-hidden className="sm:hidden">{short[code]}</span>
                  <span className="sr-only sm:hidden">{name}</span>
                </span>
              ) : (
                <a
                  href={counterpart(pathname, code)}
                  hrefLang={code}
                  lang={code}
                  className={cn(
                    "rounded-sm text-foreground/55 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                  )}
                >
                  <span className="hidden sm:inline">{name}</span>
                  <span aria-hidden className="sm:hidden">{short[code]}</span>
                  <span className="sr-only sm:hidden">{name}</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
