import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/content/PageHeader";
import { CategoryFilter } from "@/components/guides/CategoryFilter";
import { GuideGrid } from "@/components/guides/GuideGrid";
import { GuidePagination } from "@/components/guides/GuidePagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SearchForm } from "@/components/shared/SearchForm";
import { getCategories } from "@/lib/queries/categories";
import { getGuides } from "@/lib/queries/articles";
import { parsePage, parseParam } from "@/lib/queries/pagination";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import type { CategorySlug } from "@/lib/types";

const description =
  "Step-by-step guides to the practical side of Italy — trains, driving, budgets, seasons and planning. Each carries a Guide Rank, our editorial score for usefulness and completeness.";

async function parseFilters(searchParams: PageProps<"/guides">["searchParams"]) {
  const params = await searchParams;
  // Only offer sections that actually contain guides.
  const [allCategories, allGuides] = await Promise.all([getCategories(), getGuides({ pageSize: 100 })]);
  const categories = allCategories.filter((c) =>
    allGuides.items.some((g) => g.category.slug === c.slug)
  );
  const categoryParam = parseParam(params.category);
  const category = categories.find((c) => c.slug === categoryParam)?.slug as
    | CategorySlug
    | undefined;
  return { categories, category, query: parseParam(params.q), page: parsePage(params.page) };
}

export async function generateMetadata({
  searchParams,
}: PageProps<"/guides">): Promise<Metadata> {
  const { category, query, page } = await parseFilters(searchParams);
  const isFiltered = Boolean(category || query);
  return pageMetadata({
    title: page > 1 ? `Practical Italy Guides — Page ${page}` : "Practical Italy Guides",
    description,
    path: !isFiltered && page > 1 ? `${routes.guides}?page=${page}` : routes.guides,
    noIndex: Boolean(query),
  });
}

export default async function GuidesPage({ searchParams }: PageProps<"/guides">) {
  const { categories, category, query, page } = await parseFilters(searchParams);
  const result = await getGuides({ category, query, page });
  const categoryName = categories.find((c) => c.slug === category)?.name;

  return (
    <>
      <JsonLd
        data={collectionPageSchema({ name: "Practical Italy Guides", description, path: routes.guides })}
      />
      <PageHeader
        eyebrow="Practical guides"
        title="Practical Italy guides."
        description={description}
        breadcrumbs={[{ label: "Guides", href: routes.guides }]}
      >
        <SearchForm
          id="guides-search"
          action={routes.guides}
          label="Search guides"
          placeholder="Search guides..."
          defaultValue={query}
          hiddenFields={{ category }}
          required={false}
          className="max-w-2xl"
        />
      </PageHeader>

      <Container className="py-12 sm:py-16">
        <CategoryFilter
          categories={categories}
          active={category}
          basePath={routes.guides}
          params={{ q: query || undefined }}
        />

        <div className="mt-8 mb-10 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-5">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {query ? (
              <>
                {result.total} {result.total === 1 ? "result" : "results"} for{" "}
                <span className="font-medium text-foreground">&ldquo;{query}&rdquo;</span>
                {categoryName && <> in {categoryName}</>}
              </>
            ) : (
              <>
                {result.total} {categoryName ? `${categoryName} ` : ""}
                {result.total === 1 ? "guide" : "guides"}
              </>
            )}
          </p>
          {query && (
            <Link
              href={category ? `${routes.guides}?category=${category}` : routes.guides}
              className="rounded-sm text-sm font-medium text-primary hover:underline"
            >
              Clear search
            </Link>
          )}
        </div>

        <GuideGrid
          guides={result.items}
          empty={
            <>
              <p className="font-medium text-foreground">No guides found.</p>
              <p className="mt-1">Try a different search term or category.</p>
            </>
          }
        />

        <GuidePagination
          page={result.page}
          totalPages={result.totalPages}
          basePath={routes.guides}
          params={{ category, q: query || undefined }}
          className="mt-16"
        />
      </Container>
    </>
  );
}
