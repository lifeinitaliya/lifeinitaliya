import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/content/PageHeader";
import { FeaturedGuideCard } from "@/components/guides/FeaturedGuideCard";
import { GuideGrid } from "@/components/guides/GuideGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TopicList } from "@/components/topics/TopicList";
import { getCategoryBySlug } from "@/lib/queries/categories";
import { getArticles } from "@/lib/queries/articles";
import { getRelatedTopics, getTopicBySlug, getTopics } from "@/lib/queries/topics";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

// Only topics with published articles have a page.
export const dynamicParams = false;

export async function generateStaticParams() {
  const topics = await getTopics();
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/topic/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const topic = await getTopicBySlug(slug);
  if (!topic) return {};
  return pageMetadata({
    title: `${topic.name} Guides`,
    description: topic.description,
    path: routes.topic(topic.slug),
  });
}

export default async function TopicPage({ params }: PageProps<"/topic/[slug]">) {
  const { slug } = await params;
  const topic = await getTopicBySlug(slug);
  if (!topic || topic.guideCount === 0) notFound();

  const [category, featuredResult, latestResult, related] = await Promise.all([
    getCategoryBySlug(topic.categorySlug),
    getArticles({ topic: topic.slug, pageSize: 1 }),
    getArticles({ topic: topic.slug, pageSize: 24 }),
    getRelatedTopics(topic),
  ]);
  const featured = featuredResult.items[0];
  const latest = latestResult.items.filter((g) => g.slug !== featured?.slug);
  const path = routes.topic(topic.slug);

  return (
    <>
      <JsonLd
        data={collectionPageSchema({ name: `${topic.name} Guides`, description: topic.description, path })}
      />
      <PageHeader
        eyebrow="Topic"
        title={topic.name}
        description={topic.description}
        breadcrumbs={[
          { label: "Topics", href: routes.topics },
          { label: topic.name, href: path },
        ]}
      >
        <p className="text-sm text-muted-foreground">
          {topic.guideCount} {topic.guideCount === 1 ? "guide" : "guides"}
          {category && category.guideCount > 0 && (
            <>
              {" "}
              in{" "}
              <Link
                href={routes.section(category.slug)}
                className="rounded-sm font-medium text-primary hover:underline"
              >
                {category.name}
              </Link>
            </>
          )}
        </p>
      </PageHeader>

      {featured ? (
        <section aria-labelledby="featured-title" className="py-12 sm:py-16">
          <Container>
            <h2
              id="featured-title"
              className="mb-6 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
            >
              Featured
            </h2>
            <FeaturedGuideCard guide={featured} priority className="max-w-3xl" />
          </Container>
        </section>
      ) : (
        <Container className="py-16">
          <GuideGrid guides={[]} empty="There are no guides on this topic yet." />
        </Container>
      )}

      {latest.length > 0 && (
        <section aria-labelledby="latest-title" className="border-t border-border py-16 sm:py-20">
          <Container>
            <SectionHeading id="latest-title" title="Latest Guides" />
            <GuideGrid guides={latest} className="mt-10" />
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related-topics-title" className="border-t border-border bg-card py-16 sm:py-20">
          <Container>
            <SectionHeading
              id="related-topics-title"
              title="Related Topics"
              action={{ label: "All topics", href: routes.topics }}
            />
            <TopicList topics={related} className="mt-8" />
          </Container>
        </section>
      )}
    </>
  );
}
