import { articles } from "@/data/articles";
import { categories } from "@/data/categories";
import type { Category, CategoryWithCount } from "@/lib/types";

const withCount = (category: Category): CategoryWithCount => ({
  ...category,
  guideCount: articles.filter((a) => a.category.slug === category.slug).length,
});

/** Sections with published articles. Empty sections have no page and aren't linked. */
export async function getCategories(): Promise<CategoryWithCount[]> {
  return categories.map(withCount).filter((c) => c.guideCount > 0);
}

export async function getCategoryBySlug(slug: string): Promise<CategoryWithCount | null> {
  const category = categories.find((c) => c.slug === slug);
  return category ? withCount(category) : null;
}
