import { CategoryCard } from "@/components/categories/CategoryCard";
import type { CategoryWithCount } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryGridProps {
  categories: CategoryWithCount[];
  headingLevel?: "h2" | "h3";
  className?: string;
}

export function CategoryGrid({ categories, headingLevel, className }: CategoryGridProps) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {categories.map((category) => (
        <li key={category.slug}>
          <CategoryCard category={category} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
