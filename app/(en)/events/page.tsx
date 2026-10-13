import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/content/PageHeader";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { StoryCard } from "@/components/editorial/StoryCard";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { GuidePagination } from "@/components/guides/GuidePagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { TopicList } from "@/components/topics/TopicList";

import { getArticles } from "@/lib/queries/articles";
import { getCategories, getCategoryBySlug } from "@/lib/queries/categories";
import { parsePage } from "@/lib/queries/pagination";
import { getTopics } from "@/lib/queries/topics";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export async function generateMetadata({ searchParams }: PageProps<"/events">): Promise<Metadata> {
  const sp = await searchParams;
  const category = await getCategoryBySlug("events");
  if (!category) return {};
  const page = parsePage(sp.page);
  const path = routes.section("events");
  return pageMetadata({
    title: page > 1 ? `${category.name} — Page ${page}` : category.name,
    description: category.intro,
    path: page > 1 ? `${path}?page=${page}` : path,
  });
}

export default async function EventsPage({ searchParams }: PageProps<"/events">) {
  const sp = await searchParams;
  const category = await getCategoryBySlug("events");
  if (!category || category.guideCount === 0) notFound();

  const page = parsePage(sp.page);
  const path = routes.section("events");
  const [latest, topics, allCategories] = await Promise.all([
    getArticles({ category: "events", pageSize: 1 }),
    getTopics({ category: "events" }),
    getCategories(),
  ]);
  const lead = page === 1 ? latest.items[0] : undefined;
  const rest = await getArticles({
    category: "events",
    excludeSlugs: lead ? [lead.slug] : [],
    page,
  });
  const otherSections = allCategories.filter((c) => c.slug !== "events");

  return (
    <>
      <JsonLd
        data={collectionPageSchema({ name: category.name, description: category.intro, path })}
      />
      <PageHeader
        eyebrow="Life in Italia"
        title={category.name}
        description={category.intro}
        breadcrumbs={[{ label: category.name, href: path }]}
      >
        {topics.length > 0 && <TopicList topics={topics} />}
      </PageHeader>

      {lead && (
        <Container className="pt-12 sm:pt-16">
          <StoryCard article={lead} variant="feature" headingLevel="h2" priority />
        </Container>
      )}

      <section aria-labelledby="stories-title" className="py-14 sm:py-20">
        <Container>
          <SectionHeader
            id="stories-title"
            label={lead ? `More ${category.name}` : `${category.name} stories`}
          >
            {rest.totalPages > 1 && (
              <p className="mt-2 text-sm text-muted-foreground">
                Page {rest.page} of {rest.totalPages}
              </p>
            )}
          </SectionHeader>
          {rest.items.length > 0 ? (
            <StoryGrid articles={rest.items} showRank className="mt-8" />
          ) : (
            <p className="mt-8 text-muted-foreground">More {category.name.toLowerCase()} stories are on the way.</p>
          )}
          <GuidePagination
            page={rest.page}
            totalPages={rest.totalPages}
            basePath={path}
            className="mt-14"
          />
        </Container>
      </section>

      <section aria-labelledby="sections-title" className="border-t border-border bg-sand py-14 sm:py-16">
        <Container>
          <SectionHeader id="sections-title" label="More from Life in Italia" />
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherSections.map((other) => (
              <li key={other.slug}>
                <Link href={routes.section(other.slug)} className="group block rounded-sm">
                  <span className="font-display text-[24px] leading-tight group-hover:text-primary">
                    {other.name}
                  </span>
                  <span className="mt-1 block text-[15px] text-muted-foreground">
                    {other.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
