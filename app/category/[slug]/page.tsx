import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryGrid } from "@/components/categories/CategoryGrid";
import { PageHeader } from "@/components/content/PageHeader";
import { CompactGuideList } from "@/components/guides/CompactGuideList";
import { FeaturedGuideCard } from "@/components/guides/FeaturedGuideCard";
import { GuideGrid } from "@/components/guides/GuideGrid";
import { GuidePagination } from "@/components/guides/GuidePagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TopicList } from "@/components/topics/TopicList";
import { getCategories, getCategoryBySlug } from "@/lib/data/categories";
import { getGuides, getPopularGuides } from "@/lib/data/guides";
import { parsePage } from "@/lib/data/pagination";
import { getTopics } from "@/lib/data/topics";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps<"/category/[slug]">): Promise<Metadata> {
  const [{ slug }, sp] = await Promise.all([params, searchParams]);
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  const page = parsePage(sp.page);
  const path = routes.category(category.slug);
  return pageMetadata({
    title: `${category.name} Guides & Insights${page > 1 ? ` — Page ${page}` : ""}`,
    description: category.intro,
    path: page > 1 ? `${path}?page=${page}` : path,
  });
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps<"/category/[slug]">) {
  const [{ slug }, sp] = await Promise.all([params, searchParams]);
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const page = parsePage(sp.page);
  const path = routes.category(category.slug);
  const [popular, topics, allCategories] = await Promise.all([
    getPopularGuides({ category: category.slug, limit: 5 }),
    getTopics({ category: category.slug }),
    getCategories(),
  ]);
  const featured = popular[0];
  const latest = await getGuides({
    category: category.slug,
    excludeSlugs: featured ? [featured.slug] : [],
    page,
  });
  const otherCategories = allCategories.filter((c) => c.slug !== category.slug).slice(0, 3);
  const title = `${category.name} Guides & Insights`;

  return (
    <>
      <JsonLd data={collectionPageSchema({ name: title, description: category.intro, path })} />
      <PageHeader
        eyebrow={category.name}
        title={title}
        description={category.intro}
        breadcrumbs={[
          { label: "Categories", href: routes.categories },
          { label: category.name, href: path },
        ]}
      >
        <p className="text-sm text-muted-foreground">
          {category.guideCount} guides · {topics.length} topics
        </p>
        {topics.length > 0 && <TopicList topics={topics} className="mt-4" />}
      </PageHeader>

      {featured && page === 1 && (
        <section aria-labelledby="featured-title" className="py-12 sm:py-16">
          <Container className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2
                id="featured-title"
                className="mb-6 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
              >
                Featured guide
              </h2>
              <FeaturedGuideCard guide={featured} priority />
            </div>
            {popular.length > 1 && (
              <div className="lg:col-span-5">
                <h2 className="mb-6 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Popular in {category.name}
                </h2>
                <CompactGuideList guides={popular.slice(1)} numbered />
              </div>
            )}
          </Container>
        </section>
      )}

      <section aria-labelledby="latest-title" className="border-t border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            id="latest-title"
            title={`Latest ${category.name} Guides`}
            description={
              latest.totalPages > 1 ? `Page ${latest.page} of ${latest.totalPages}` : undefined
            }
          />
          <GuideGrid guides={latest.items} className="mt-10" />
          <GuidePagination
            page={latest.page}
            totalPages={latest.totalPages}
            basePath={path}
            className="mt-14"
          />
        </Container>
      </section>

      <section aria-labelledby="related-categories-title" className="border-t border-border bg-card py-16 sm:py-20">
        <Container>
          <SectionHeading
            id="related-categories-title"
            title="Related Categories"
            action={{ label: "All categories", href: routes.categories }}
          />
          <CategoryGrid categories={otherCategories} className="mt-10" />
        </Container>
      </section>
    </>
  );
}
