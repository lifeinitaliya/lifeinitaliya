import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { CategoryGrid } from "@/components/categories/CategoryGrid";
import { PageHeader } from "@/components/content/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TopicList } from "@/components/topics/TopicList";
import { buttonVariants } from "@/components/ui/button";
import { getCategories } from "@/lib/data/categories";
import { getTopics } from "@/lib/data/topics";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

const description =
  "Find practical knowledge organized around the topics that matter.";

export const metadata = pageMetadata({
  title: "Explore Categories",
  description,
  path: routes.categories,
});

export default async function CategoriesPage() {
  const [categories, topics] = await Promise.all([getCategories(), getTopics()]);
  const popularTopics = [...topics].sort((a, b) => b.guideCount - a.guideCount).slice(0, 10);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({ name: "Categories", description, path: routes.categories })}
      />
      <PageHeader
        eyebrow="BS Insights"
        title="Explore Categories"
        description={description}
        breadcrumbs={[{ label: "Categories", href: routes.categories }]}
      />

      <Container className="py-12 sm:py-16">
        <CategoryGrid categories={categories} headingLevel="h2" />
      </Container>

      <section aria-labelledby="popular-topics-title" className="border-t border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            id="popular-topics-title"
            title="Popular topics"
            description="Topics are more specific than categories."
            action={{ label: "All topics", href: routes.topics }}
          />
          <TopicList topics={popularTopics} className="mt-8" />
        </Container>
      </section>

      <section aria-labelledby="cant-find-title" className="border-t border-border bg-card py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex gap-5">
            <span
              aria-hidden
              className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-accent text-primary sm:flex"
            >
              <Search className="size-5" />
            </span>
            <div>
              <h2
                id="cant-find-title"
                className="text-[28px] leading-tight font-bold tracking-[-0.03em] sm:text-[34px]"
              >
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Use search to explore all BS Insights content.
              </p>
            </div>
          </div>
          <Link href={routes.search} className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}>
            Search Guides
            <ArrowRight aria-hidden data-icon="inline-end" />
          </Link>
        </Container>
      </section>
    </>
  );
}
