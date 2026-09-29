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
import { t } from "@/lib/i18n";
import {
  getItArticles,
  getItCategories,
  getItCategoryBySlug,
  isItSectionIndexable,
} from "@/lib/queries/it";
import { parsePage } from "@/lib/queries/pagination";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { itRoutes } from "@/lib/site";

export const dynamicParams = false;

// Only sections with published articles (in either language) have a page;
// getItCategories leaves out empty ones.
export async function generateStaticParams() {
  const categories = await getItCategories();
  return categories.map((c) => ({ sezione: c.itSlug }));
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps<"/it/[sezione]">): Promise<Metadata> {
  const [{ sezione }, sp] = await Promise.all([params, searchParams]);
  const category = await getItCategoryBySlug(sezione);
  if (!category) return {};
  const page = parsePage(sp.page);
  const path = itRoutes.section(category.slug);
  return pageMetadata({
    title: page > 1 ? `${category.seoTitle} — Pagina ${page}` : category.seoTitle,
    description: category.seoDescription,
    path: page > 1 ? `${path}?page=${page}` : path,
    locale: "it",
    // Sections are indexed once they contain articles written in Italian.
    noIndex: !isItSectionIndexable(category.slug),
  });
}

export default async function ItalianSectionPage({ params, searchParams }: PageProps<"/it/[sezione]">) {
  const [{ sezione }, sp] = await Promise.all([params, searchParams]);
  const category = await getItCategoryBySlug(sezione);
  const published = await getItCategories();
  if (!category || !published.some((c) => c.slug === category.slug)) notFound();

  const page = parsePage(sp.page);
  const path = itRoutes.section(category.slug);
  const [first, allCategories, italian] = await Promise.all([
    getItArticles({ category: category.slug, pageSize: 1 }),
    getItCategories(),
    getItArticles({ category: category.slug, italianOnly: true, pageSize: 1 }),
  ]);
  const lead = page === 1 ? first.items[0] : undefined;
  const rest = await getItArticles({
    category: category.slug,
    excludeSlugs: lead ? [lead.slug] : [],
    page,
  });
  const otherSections = allCategories.filter((c) => c.slug !== category.slug);
  const hasEnglishOnly = rest.items.some((a) => a.locale !== "it") || (lead && lead.locale !== "it");

  return (
    <>
      <JsonLd
        data={{
          ...collectionPageSchema({ name: category.name, description: category.intro, path }),
          inLanguage: "it",
        }}
      />
      <PageHeader
        eyebrow="Life in Italia"
        title={category.name}
        description={category.intro}
        breadcrumbs={[{ label: category.name, href: path }]}
        locale="it"
      >
        {italian.total === 0 && (
          <p className="max-w-2xl border-l-2 border-primary pl-4 text-[15px] leading-relaxed text-muted-foreground">
            Gli articoli di questa sezione sono per ora disponibili solo in inglese: li segnaliamo con
            l&apos;etichetta «In inglese». Le versioni italiane arriveranno man mano.
          </p>
        )}
      </PageHeader>

      {lead && (
        <Container className="pt-12 sm:pt-16">
          <StoryCard article={lead} variant="feature" headingLevel="h2" priority showRank locale="it" />
        </Container>
      )}

      <section aria-labelledby="stories-title" className="py-14 sm:py-20">
        <Container>
          <SectionHeader id="stories-title" label={lead ? "Ultimi articoli" : `Articoli: ${category.name}`}>
            {rest.totalPages > 1 && (
              <p className="mt-2 text-sm text-muted-foreground">{t("it").pageOf(rest.page, rest.totalPages)}</p>
            )}
          </SectionHeader>
          {rest.items.length > 0 ? (
            <StoryGrid articles={rest.items} showRank locale="it" className="mt-8" />
          ) : (
            <p className="mt-8 text-muted-foreground">Altri articoli sono in preparazione.</p>
          )}
          {hasEnglishOnly && italian.total > 0 && (
            <p className="mt-10 text-sm text-muted-foreground">
              Le schede con l&apos;etichetta «In inglese» rimandano ad articoli non ancora tradotti.
            </p>
          )}
          <GuidePagination
            page={rest.page}
            totalPages={rest.totalPages}
            basePath={path}
            locale="it"
            className="mt-14"
          />
        </Container>
      </section>

      <section aria-labelledby="sections-title" className="border-t border-border py-14 sm:py-16">
        <Container>
          <SectionHeader id="sections-title" label="Altre sezioni" />
          <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherSections.map((other) => (
              <li key={other.slug}>
                <Link href={itRoutes.section(other.slug)} className="group block rounded-sm">
                  <span className="font-display text-[24px] leading-tight group-hover:text-primary">
                    {other.name}
                  </span>
                  <span className="mt-1 block text-[15px] text-muted-foreground">{other.description}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href={itRoutes.guides} className="group block rounded-sm">
                <span className="font-display text-[24px] leading-tight group-hover:text-primary">Guide</span>
                <span className="mt-1 block text-[15px] text-muted-foreground">
                  Le guide pratiche per organizzare il viaggio.
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
}
