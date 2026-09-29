import type { ReactNode } from "react";

import { GuideCard } from "@/components/guides/GuideCard";
import type { Locale } from "@/lib/i18n";
import type { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

interface GuideGridProps {
  guides: Article[];
  showRank?: boolean;
  empty?: ReactNode;
  className?: string;
  locale?: Locale;
}

export function GuideGrid({ guides, showRank = true, empty, className, locale }: GuideGridProps) {
  if (!guides.length) {
    return (
      <div className="rounded-xl border border-dashed border-border px-6 py-14 text-center text-muted-foreground">
        {empty ?? (locale === "it" ? "Nessuna guida, per ora." : "No guides here yet.")}
      </div>
    );
  }

  return (
    <ul className={cn("grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {guides.map((guide) => (
        <li key={guide.slug}>
          <GuideCard guide={guide} showRank={showRank} locale={locale} />
        </li>
      ))}
    </ul>
  );
}
