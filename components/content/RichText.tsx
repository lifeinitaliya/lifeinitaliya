import type { ReactNode } from "react";
import Link from "next/link";

// Supports `[label](href)` links and `**bold**` in stored text.
const TOKEN = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

const linkClass =
  "rounded-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary";

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;

  for (const match of text.matchAll(TOKEN)) {
    const [raw, label, href, bold] = match;
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));

    if (bold) {
      nodes.push(
        <strong key={index} className="font-semibold text-foreground">
          {bold}
        </strong>
      );
    } else if (href.startsWith("/")) {
      nodes.push(
        <Link key={index} href={href} className={linkClass}>
          {label}
        </Link>
      );
    } else {
      nodes.push(
        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      );
    }
    last = index + raw.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
