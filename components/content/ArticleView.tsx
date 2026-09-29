import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthorAvatar } from "@/components/authors/AuthorAvatar";
import { AuthorBio } from "@/components/authors/AuthorBio";
import { ArticleBody } from "@/components/content/ArticleBody";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Faq } from "@/components/content/Faq";
import { MobileTableOfContents } from "@/components/content/MobileTableOfContents";
import { TableOfContents } from "@/components/content/TableOfContents";
import { StoryGrid } from "@/components/editorial/StoryGrid";
import { StoryImage } from "@/components/editorial/StoryImage";
import { CompactGuideList } from "@/components/guides/CompactGuideList";
import { GuideFeedback } from "@/components/guides/GuideFeedback";
import { GuideRank } from "@/components/guides/GuideRank";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/editorial/SectionHeader";
import { TopicList } from "@/components/topics/TopicList";
import { buttonVariants } from "@/components/ui/button";
import { t, type Locale } from "@/lib/i18n";
import { getRelatedArticles } from "@/lib/queries/articles";
import { getItRelatedArticles } from "@/lib/queries/it";
import { getRegions, hasRegionPage } from "@/lib/queries/italy";
import { getTopics } from "@/lib/queries/topics";
import { getHeadings } from "@/lib/content";
import { formatLongDate, formatReadingTime } from "@/lib/format";
import { articleSchema } from "@/lib/seo";
import { itCategories } from "@/data/it/categories";
import { itRoutes, routes } from "@/lib/site";
import type { ArticleDetail } from "@/lib/types";
import { cn } from "@/lib/utils";

const smallLabel = "text-[11px] font-bold tracking-[0.16em] text-muted-foreground uppercase";

/** Full article page shared by practical guides and editorial stories. */
export async function ArticleView({
  article,
  locale = "en",
}: {
  article: ArticleDetail;
  /** Language of the article (and of the page). */
  locale?: Locale;
}) {
  const dict = t(locale);
  const it = locale === "it";
  const isGuide = article.kind === "guide";
  const [related, allTopics, allRegions] = await Promise.all([
    it ? getItRelatedArticles(article, 6) : getRelatedArticles(article, 6),
    getTopics(),
    getRegions(),
  ]);
  // Topic and region pages exist in English only, so Italian articles don't list them.
  const topics = it ? [] : allTopics.filter((topic) => article.topicSlugs.includes(topic.slug));
  const regions = it ? [] : allRegions.filter((r) => article.regionSlugs.includes(r.slug));
  // The table of contents lists major sections (H2) plus the FAQ.
  const headings = [
    ...getHeadings(article.body).filter((h) => h.level === 2),
    ...(article.faqs?.length
      ? [{ id: "faq-title", text: dict.faqTitle, level: 2 as const }]
      : []),
  ];
  const path = routes.article(article);
  const guidesPath = it ? itRoutes.guides : routes.guides;
  const hasItSection = itCategories.some((c) => c.slug === article.category.slug);
  const sectionPath = it
    ? hasItSection
      ? itRoutes.section(article.category.slug)
      : guidesPath
    : routes.section(article.category.slug);
  // Author profiles exist in English only.
  const authorPath = routes.author(article.author.slug);
  const toEnglish = it ? "en" : undefined;

  const trail = isGuide
    ? [{ label: dict.guides, href: guidesPath }]
    : [{ label: article.category.name, href: sectionPath }];

  return (
    <article>
      <JsonLd data={articleSchema(article, path, authorPath)} />

      <Container className="pt-8 sm:pt-10">
        <Breadcrumbs
          items={[...trail, { label: article.shortTitle ?? article.title, href: path }]}
          locale={locale}
        />

        <header className="mt-10 max-w-4xl sm:mt-12">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-bold tracking-[0.16em] uppercase">
            <Link href={sectionPath} className="rounded-sm text-primary hover:underline">
              {isGuide ? dict.categoryGuide(article.category.name) : article.category.name}
            </Link>
          </p>
          <h1 className="mt-4 font-display text-[clamp(38px,5.5vw,68px)] leading-[1.02] tracking-[-0.01em] text-balance">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {article.excerpt}
          </p>

          <div className="mt-8 flex flex-col gap-5 border-y border-border py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <AuthorAvatar author={article.author} size="sm" />
              <div className="text-sm leading-snug">
                <p>
                  {/* Italian credits the team as "A cura della redazione". */}
                  {it && article.author.slug === "editorial-team" ? "A cura della" : dict.by}{" "}
                  <Link href={authorPath} hrefLang={toEnglish} className="rounded-sm font-semibold hover:text-primary">
                    {it && article.author.slug === "editorial-team" ? "redazione di Life in Italia" : article.author.name}
                  </Link>
                </p>
                <p className="text-muted-foreground">{article.author.role}</p>
              </div>
            </div>
            <dl className="flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-muted-foreground">
              <div className="flex gap-1">
                <dt>{dict.published}</dt>
                <dd>
                  <time dateTime={article.publishedAt}>{formatLongDate(article.publishedAt, locale)}</time>
                </dd>
              </div>
              <div className="flex gap-1">
                <dt>{dict.updated}</dt>
                <dd className="font-medium text-foreground">
                  <time dateTime={article.updatedAt}>{formatLongDate(article.updatedAt, locale)}</time>
                </dd>
              </div>
              <div>
                <dt className="sr-only">{dict.readingTime}</dt>
                <dd>{formatReadingTime(article.readingTimeMinutes, locale)}</dd>
              </div>
            </dl>
          </div>
          {isGuide && <GuideRank score={article.guideRank} locale={locale} className="mt-5 lg:hidden" />}
        </header>

        <StoryImage
          article={article}
          priority
          sizes="(min-width: 1280px) 1176px, 100vw"
          className="mt-10 aspect-[3/2] sm:aspect-[2/1]"
        />
      </Container>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div className="max-w-[720px] min-w-0">
          <MobileTableOfContents
            headings={headings}
            title={dict.onThisPage}
            navLabel={dict.tableOfContents}
            className="mb-10 lg:hidden"
          />
          <ArticleBody blocks={article.body} locale={locale} />

          {(topics.length > 0 || regions.length > 0) && (
            <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              {topics.length > 0 && (
                <div>
                  <h2 className={smallLabel}>{dict.topics}</h2>
                  <TopicList topics={topics} showCount={false} className="mt-4" />
                </div>
              )}
              {regions.length > 0 && (
                <div>
                  <h2 className={smallLabel}>{dict.regions}</h2>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {regions.map((region) => (
                      <li key={region.slug}>
                        {hasRegionPage(region) ? (
                          <Link
                            href={routes.region(region.slug)}
                            className="rounded-sm font-display text-lg hover:text-primary"
                          >
                            {region.name}
                          </Link>
                        ) : (
                          <span className="font-display text-lg">{region.name}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {article.faqs && <Faq items={article.faqs} title={dict.faqTitle} className="mt-16 scroll-mt-28" />}

          <section aria-labelledby="sources-title" className="mt-16 border-t border-border pt-8">
            <h2 id="sources-title" className={smallLabel}>
              {dict.editorialNote}
            </h2>
            {it ? (
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Orari, tariffe, regole e requisiti d&apos;ingresso possono cambiare: prima di
                prenotare o di partire, verifica sempre la fonte ufficiale. Puoi leggere la nostra{" "}
                <Link href={routes.editorialPolicy} hrefLang="en" className="font-medium text-primary hover:underline">
                  politica editoriale
                </Link>{" "}
                o{" "}
                <Link href={routes.contact} hrefLang="en" className="font-medium text-primary hover:underline">
                  segnalarci una correzione
                </Link>{" "}
                (pagine in inglese).
              </p>
            ) : (
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                Information such as transport schedules, prices, opening hours and entry requirements
                can change. Check the relevant official source before making a booking or travelling.
                {" "}Read our{" "}
                <Link href={routes.editorialPolicy} className="font-medium text-primary hover:underline">
                  editorial policy
                </Link>{" "}
                or{" "}
                <Link href={routes.contact} className="font-medium text-primary hover:underline">
                  report a correction
                </Link>
                .
              </p>
            )}
            {article.sources && article.sources.length > 0 && (
              <>
                <h3 className="mt-6 text-sm font-semibold text-foreground">
                  {article.sourcesTitle ?? dict.sourcesDefault}
                </h3>
                <ul className="mt-3 space-y-2 text-[14px] leading-snug">
                  {article.sources.map((source) => (
                    <li key={source.url}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {source.label}
                        <span className="sr-only"> {dict.opensNewTab}</span>
                      </a>
                      {source.note && <span className="text-muted-foreground"> — {source.note}</span>}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>

          <div className="mt-16 space-y-6">
            <AuthorBio author={article.author} locale={locale} />
            <GuideFeedback noun={isGuide ? "guide" : "article"} locale={locale} />
          </div>
        </div>

        <aside className="hidden lg:block" aria-label={dict.articleDetails}>
          <div className="sticky top-28 space-y-10">
            {isGuide && (
              <div className="border border-border bg-card p-5">
                <GuideRank
                  score={article.guideRank}
                  variant="stacked"
                  showAttribution
                  locale={locale}
                  className="w-full"
                />
                <Link
                  href={`${routes.about}#guide-rank`}
                  hrefLang={toEnglish}
                  className="mt-4 inline-block rounded-sm text-[13px] font-medium text-primary hover:underline"
                >
                  {dict.whatIsGuideRank}
                  {it && <span className="font-normal text-muted-foreground"> (in inglese)</span>}
                </Link>
              </div>
            )}
            <TableOfContents headings={headings} title={dict.onThisPage} />
            {related.length > 0 && (
              <div>
                <p className={smallLabel}>{dict.related}</p>
                <CompactGuideList guides={related.slice(0, 3)} locale={locale} className="mt-4" />
              </div>
            )}
          </div>
        </aside>
      </Container>

      {related.length > 0 && (
        <section aria-labelledby="related-title" className="border-t border-border py-14 sm:py-20">
          <Container>
            <SectionHeader id="related-title" label={dict.keepReading} />
            <StoryGrid articles={related} locale={locale} className="mt-8" />
          </Container>
        </section>
      )}

      <section aria-labelledby="explore-title" className="bg-sand py-14 sm:py-16">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 id="explore-title" className="font-display text-[32px] leading-tight sm:text-[40px]">
              {it
                ? hasItSection
                  ? `Altro da ${article.category.name}`
                  : "Altre guide pratiche"
                : `Explore more ${article.category.name.toLowerCase()}`}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {it ? "Altre storie e guide di Life in Italia." : "More stories and guides from Life in Italia."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={it && !hasItSection ? itRoutes.home : sectionPath}
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "rounded-none bg-card")}
            >
              {it ? (hasItSection ? `Sezione ${article.category.name}` : "Torna alla prima pagina") : `More ${article.category.name}`}
            </Link>
            <Link
              href={isGuide ? guidesPath : it ? itRoutes.home : routes.home}
              className={cn(buttonVariants({ size: "xl" }), "rounded-none hover:bg-primary/90")}
            >
              {isGuide ? (it ? "Tutte le guide" : "All guides") : it ? "Torna alla prima pagina" : "Back to the front page"}
              <ArrowRight aria-hidden data-icon="inline-end" />
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
