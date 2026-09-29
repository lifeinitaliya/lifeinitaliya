import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface GuidePaginationProps {
  page: number;
  totalPages: number;
  basePath: string;
  /** Other query params to keep, e.g. `{ category: "travel" }`. */
  params?: Record<string, string | undefined>;
  className?: string;
  locale?: Locale;
}

const pageList = (page: number, total: number): (number | "gap")[] => {
  const pages = new Set([1, total, page - 1, page, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i > 0 && p - sorted[i - 1] > 1 ? ["gap" as const, p] : [p]));
};

export function GuidePagination({
  page,
  totalPages,
  basePath,
  params = {},
  className,
  locale = "en",
}: GuidePaginationProps) {
  if (totalPages <= 1) return null;
  const dict = t(locale);

  const href = (target: number) => {
    const search = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => value && search.set(key, value));
    if (target > 1) search.set("page", String(target));
    const query = search.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  const linkClass = (active = false) =>
    cn(
      buttonVariants({ variant: active ? "outline" : "ghost", size: "icon-lg" }),
      active && "border-foreground/20 bg-card font-semibold"
    );
  const stepClass = cn(buttonVariants({ variant: "ghost", size: "lg" }), "gap-1 px-3");

  return (
    <Pagination className={className}>
      <PaginationContent className="gap-1">
        <PaginationItem>
          {page > 1 ? (
            <Link href={href(page - 1)} className={stepClass} aria-label={dict.previousPage}>
              <ChevronLeft aria-hidden />
              <span className="hidden sm:inline">{dict.previous}</span>
            </Link>
          ) : (
            <span aria-hidden className={cn(stepClass, "pointer-events-none opacity-40")}>
              <ChevronLeft />
              <span className="hidden sm:inline">{dict.previous}</span>
            </span>
          )}
        </PaginationItem>

        {pageList(page, totalPages).map((item, index) => (
          <PaginationItem key={item === "gap" ? `gap-${index}` : item}>
            {item === "gap" ? (
              <PaginationEllipsis />
            ) : (
              <Link
                href={href(item)}
                aria-label={dict.pageN(item)}
                aria-current={item === page ? "page" : undefined}
                className={linkClass(item === page)}
              >
                {item}
              </Link>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          {page < totalPages ? (
            <Link href={href(page + 1)} className={stepClass} aria-label={dict.nextPage}>
              <span className="hidden sm:inline">{dict.next}</span>
              <ChevronRight aria-hidden />
            </Link>
          ) : (
            <span aria-hidden className={cn(stepClass, "pointer-events-none opacity-40")}>
              <span className="hidden sm:inline">{dict.next}</span>
              <ChevronRight />
            </span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
