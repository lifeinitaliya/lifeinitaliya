import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { AuthorAvatar } from "@/components/authors/AuthorAvatar";
import { AuthorBio } from "@/components/authors/AuthorBio";
import { ArticleBody } from "@/components/content/ArticleBody";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { MobileTableOfContents } from "@/components/content/MobileTableOfContents";
import { TableOfContents } from "@/components/content/TableOfContents";
import { CompactGuideList } from "@/components/guides/CompactGuideList";
import { GuideCover } from "@/components/guides/GuideCover";
import { GuideFeedback } from "@/components/guides/GuideFeedback";
import { GuideGrid } from "@/components/guides/GuideGrid";
import { GuideRank } from "@/components/guides/GuideRank";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TopicList } from "@/components/topics/TopicList";
import { buttonVariants } from "@/components/ui/button";
import { getGuideBySlug, getAllGuideSlugs, getRelatedGuides } from "@/lib/data/guides";
import { getTopics } from "@/lib/data/topics";
import { getHeadings } from "@/lib/content";
import { formatLongDate, formatReadingTime } from "@/lib/format";
import { articleSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: routes.guide(guide.slug),
    openGraph: {
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author.name],
      section: guide.category.name,
      ...(guide.image && { images: [{ url: guide.image.src, alt: guide.image.alt }] }),
    },
  });
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const [related, allTopics] = await Promise.all([getRelatedGuides(guide, 3), getTopics()]);
  const guideTopics = allTopics.filter((t) => guide.topicSlugs.includes(t.slug));
  const headings = getHeadings(guide.body);
  const path = routes.guide(guide.slug);
  const authorPath = routes.author(guide.author.slug);

  return (
    <article>
      <JsonLd data={articleSchema(guide, path, authorPath)} />

      <Container className="pt-8 sm:pt-10">
        <Breadcrumbs
          items={[
            { label: "Guides", href: routes.guides },
            { label: guide.category.name, href: routes.category(guide.category.slug) },
            { label: guide.title, href: path },
          ]}
        />

        <header className="mt-10 max-w-3xl sm:mt-12">
          <Link
            href={routes.category(guide.category.slug)}
            className="rounded-sm text-xs font-semibold tracking-[0.12em] text-primary uppercase hover:underline"
          >
            {guide.category.name}
          </Link>
          <h1 className="mt-4 text-[clamp(34px,5vw,56px)] leading-[1.04] font-extrabold tracking-[-0.04em] text-balance">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {guide.excerpt}
          </p>

          <div className="mt-8 flex flex-col gap-5 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <AuthorAvatar author={guide.author} size="sm" />
              <div className="text-sm leading-snug">
                <p>
                  By{" "}
                  <Link href={authorPath} className="rounded-sm font-semibold hover:text-primary">
                    {guide.author.name}
                  </Link>
                </p>
                <p className="text-muted-foreground">{guide.author.role}</p>
              </div>
            </div>
            <dl className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-muted-foreground">
              <div className="flex gap-1">
                <dt>Published</dt>
                <dd>
                  <time dateTime={guide.publishedAt}>{formatLongDate(guide.publishedAt)}</time>
                </dd>
              </div>
              <div className="flex gap-1">
                <dt>Updated</dt>
                <dd className="font-medium text-foreground">
                  <time dateTime={guide.updatedAt}>{formatLongDate(guide.updatedAt)}</time>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Reading time</dt>
                <dd>{formatReadingTime(guide.readingTimeMinutes)}</dd>
              </div>
            </dl>
          </div>
          <GuideRank score={guide.guideRank} className="mt-5 lg:hidden" />
        </header>

        <GuideCover
          guide={guide}
          priority
          sizes="(min-width: 1280px) 1176px, 100vw"
          className="mt-10 aspect-[16/10] rounded-2xl sm:aspect-[2/1]"
        />
      </Container>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div className="min-w-0 max-w-[760px]">
          <MobileTableOfContents headings={headings} className="mb-10 lg:hidden" />
          <ArticleBody blocks={guide.body} />

          {guideTopics.length > 0 && (
            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                Topics
              </h2>
              <TopicList topics={guideTopics} showCount={false} className="mt-4" />
            </div>
          )}

          {guide.faqs && <Faq items={guide.faqs} className="mt-16" />}

          <div className="mt-16 space-y-6">
            <AuthorBio author={guide.author} />
            <GuideFeedback />
          </div>
        </div>

        <aside className="hidden lg:block" aria-label="Guide details">
          <div className="sticky top-28 space-y-10">
            <div className="rounded-xl border border-border bg-card p-5">
              <GuideRank
                score={guide.guideRank}
                variant="stacked"
                showAttribution
                className="w-full"
              />
              <Link
                href={`${routes.about}#guide-rank`}
                className="mt-4 inline-block rounded-sm text-[13px] font-medium text-primary hover:underline"
              >
                What is Guide Rank?
              </Link>
            </div>
            <TableOfContents headings={headings} />
            {related.length > 0 && (
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                  Related guides
                </p>
                <CompactGuideList guides={related} className="mt-4" />
              </div>
            )}
          </div>
        </aside>
      </Container>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-border py-16 sm:py-20">
          <Container>
            <SectionHeading id="related-title" title="Related Guides" />
            <GuideGrid guides={related} className="mt-10" />
          </Container>
        </section>
      )}

      <section aria-labelledby="explore-title" className="border-t border-border bg-card py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 id="explore-title" className="text-[28px] leading-tight font-bold tracking-[-0.03em] sm:text-[34px]">
              Explore More Guides
            </h2>
            <p className="mt-2 text-muted-foreground">
              Keep going with more practical guides from BS Insights.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={routes.category(guide.category.slug)}
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}
            >
              More {guide.category.name} guides
            </Link>
            <Link href={routes.guides} className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}>
              All guides
              <ArrowRight aria-hidden data-icon="inline-end" />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
