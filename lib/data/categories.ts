import { categories } from "@/lib/mock-data/categories";
import { guides } from "@/lib/mock-data/guides";
import type { Category, CategoryWithCount } from "@/lib/types";

const withCount = (category: Category): CategoryWithCount => ({
  ...category,
  guideCount: guides.filter((g) => g.category.slug === category.slug).length,
});

export async function getCategories(): Promise<CategoryWithCount[]> {
  return categories.map(withCount);
}

export async function getCategoryBySlug(slug: string): Promise<CategoryWithCount | null> {
  const category = categories.find((c) => c.slug === slug);
  return category ? withCount(category) : null;
}
