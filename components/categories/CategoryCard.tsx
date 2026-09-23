import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { categoryIcons } from "@/components/guides/category-icons";
import { routes } from "@/lib/site";
import type { CategoryWithCount } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: CategoryWithCount;
  headingLevel?: "h2" | "h3";
  className?: string;
}

export function CategoryCard({
  category,
  headingLevel: Heading = "h3",
  className,
}: CategoryCardProps) {
  const Icon = categoryIcons[category.slug];

  return (
    <Link
      href={routes.category(category.slug)}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-[border-color,background-color] hover:border-foreground/20 hover:bg-card sm:p-7",
        className
      )}
    >
      <span
        aria-hidden
        className="flex size-10 items-center justify-center rounded-lg bg-accent text-primary"
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <Heading className="mt-6 text-xl font-semibold tracking-[-0.02em]">
        {category.name}
      </Heading>
      <p className="mt-2 mb-6 text-[15px] leading-relaxed text-muted-foreground">
        {category.description}
      </p>
      <span className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="font-medium text-foreground/80 tabular-nums">
          {category.guideCount} {category.guideCount === 1 ? "guide" : "guides"}
        </span>
        <ArrowRight
          aria-hidden
          className="size-4 text-muted-foreground transition-[transform,color] group-hover:translate-x-1 group-hover:text-primary"
        />
      </span>
    </Link>
  );
}
