import Link from "next/link";

import type { Category, CategorySlug } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Pick<Category, "slug" | "name">[];
  active?: CategorySlug;
  basePath: string;
  /** Other query params to keep, e.g. the search query. */
  params?: Record<string, string | undefined>;
  className?: string;
}

/** URL-driven category tabs, so filtered views are linkable and crawlable. */
export function CategoryFilter({
  categories,
  active,
  basePath,
  params = {},
  className,
}: CategoryFilterProps) {
  const href = (category?: string) => {
    const search = new URLSearchParams();
    Object.entries({ ...params, category }).forEach(
      ([key, value]) => value && search.set(key, value)
    );
    const query = search.toString();
    return query ? `${basePath}?${query}` : basePath;
  };

  const options = [{ slug: undefined, name: "All" }, ...categories];

  return (
    <nav aria-label="Filter by category" className={cn("-mx-4 sm:mx-0", className)}>
      <ul className="flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:flex-wrap sm:px-0">
        {options.map((option) => {
          const isActive = option.slug === active;
          return (
            <li key={option.name} className="shrink-0">
              <Link
                href={href(option.slug)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 items-center rounded-full border px-4 text-sm font-medium transition-colors",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card text-foreground/80 hover:border-foreground/30 hover:text-foreground"
                )}
              >
                {option.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
