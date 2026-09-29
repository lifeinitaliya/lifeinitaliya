import type { ReactNode } from "react";
import Link from "next/link";

import { t, type Locale } from "@/lib/i18n";

// Supports `[label](href)` links, `**bold**` and `*italic*` in stored text.
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*/g;

const linkClass =
  "rounded-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

export function RichText({ text, locale = "en" }: { text: string; locale?: Locale }) {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(TOKEN)) {
    const [raw, label, href, bold, italic] = match;
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));

    if (bold) {
      nodes.push(
        <strong key={index} className="font-semibold text-foreground">
          {bold}
        </strong>
      );
    } else if (italic) {
      nodes.push(<em key={index}>{italic}</em>);
    } else if (href.startsWith("/")) {
      // On Italian pages, internal links outside /it lead to English pages.
      const toEnglish = locale === "it" && href !== "/it" && !href.startsWith("/it/");
      nodes.push(
        <Link key={index} href={href} hrefLang={toEnglish ? "en" : undefined} className={linkClass}>
          {label}
          {toEnglish && (
            <>
              <span aria-hidden className="ml-1 align-[0.1em] text-[0.68em] font-semibold tracking-[0.06em] text-muted-foreground no-underline">
                EN
              </span>
              <span className="sr-only"> (in inglese)</span>
            </>
          )}
        </Link>
      );
    } else {
      nodes.push(
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
          <span className="sr-only"> {t(locale).opensNewTab}</span>
        </a>
      );
    }
    last = index + raw.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
