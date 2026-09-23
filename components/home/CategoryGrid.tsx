import { CategoryGrid as CategoryCards } from "@/components/categories/CategoryGrid";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { routes } from "@/lib/site";
import type { CategoryWithCount } from "@/lib/types";

export function CategoryGrid({ categories }: { categories: CategoryWithCount[] }) {
  return (
    <section
      aria-labelledby="categories-title"
      className="border-t border-border bg-card py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="categories-title"
          title="Explore Categories"
          description="Find guides and insights by topic."
          action={{ label: "All categories", href: routes.categories }}
        />
        <CategoryCards categories={categories} className="mt-12" />
      </Container>
    </section>
  );
}
