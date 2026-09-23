import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/content/PageHeader";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuidePagination } from "@/components/guides/GuidePagination";
import { Container } from "@/components/shared/Container";
import { SearchForm } from "@/components/shared/SearchForm";
import { TopicList } from "@/components/topics/TopicList";
import { getCategories } from "@/lib/data/categories";
import { parsePage, parseParam } from "@/lib/data/pagination";
import { searchSite } from "@/lib/data/search";
import { getTopics } from "@/lib/data/topics";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export async function generateMetadata({
  searchParams,
}: PageProps<"/search">): Promise<Metadata> {
  const query = parseParam((await searchParams).q);
  return pageMetadata({
    title: query ? `Search results for “${query}”` : "Search",
    description: "Search guides, insights, topics and authors on BS Insights.",
    path: routes.search,
    noIndex: true,
  });
}

async function Suggestions() {
  const [topics, categories] = await Promise.all([getTopics(), getCategories()]);
  const popular = [...topics].sort((a, b) => b.guideCount - a.guideCount).slice(0, 8);
  return (
    <div className="mt-10 grid gap-10 md:grid-cols-2">
      <div>
        <h2 className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Popular topics
        </h2>
        <TopicList topics={popular} className="mt-4" />
      </div>
      <div>
        <h2 className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
          Browse categories
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link href={routes.category(c.slug)} className="rounded-sm font-medium hover:text-primary">
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const params = await searchParams;
  const query = parseParam(params.q);
  const results = query ? await searchSite(query, parsePage(params.page)) : null;
  const otherMatches = results
    ? [
        ...results.categories.map((c) => ({ label: c.name, kind: "Category", href: routes.category(c.slug) })),
        ...results.topics.map((t) => ({ label: t.name, kind: "Topic", href: routes.topic(t.slug) })),
        ...results.authors.map((a) => ({ label: a.name, kind: "Author", href: routes.author(a.slug) })),
      ]
    : [];

  return (
    <>
      <PageHeader title="Search BS Insights">
        <SearchForm id="search-page" defaultValue={query} className="max-w-2xl" />
      </PageHeader>

      <Container className="py-12 sm:py-16">
        {!results ? (
          <section aria-labelledby="empty-title">
            <h2 id="empty-title" className="text-2xl font-bold tracking-[-0.025em]">
              What are you looking for?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Search guides, insights, topics and authors — or start with one of these.
            </p>
            <Suggestions />
          </section>
        ) : (
          <section aria-labelledby="results-title">
            <div className="border-b border-border pb-6">
              <h2 id="results-title" className="text-2xl font-bold tracking-[-0.025em] text-balance">
                Search results for &ldquo;{results.query}&rdquo;
              </h2>
              <p className="mt-2 text-muted-foreground" aria-live="polite">
                {results.guides.total} {results.guides.total === 1 ? "result" : "results"}
              </p>
            </div>

            {otherMatches.length > 0 && (
              <div className="border-b border-border py-6">
                <h3 className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  Also matching
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {otherMatches.map((match) => (
                    <li key={match.href}>
                      <Link
                        href={match.href}
                        className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <span className="text-xs text-muted-foreground">{match.kind}</span>
                        {match.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results.guides.total > 0 ? (
              <>
                <ul className="max-w-4xl divide-y divide-border">
                  {results.guides.items.map((guide) => (
                    <li key={guide.slug} className="py-8">
                      <GuideCard guide={guide} layout="horizontal" />
                    </li>
                  ))}
                </ul>
                <GuidePagination
                  page={results.guides.page}
                  totalPages={results.guides.totalPages}
                  basePath={routes.search}
                  params={{ q: results.query }}
                  className="mt-10"
                />
              </>
            ) : (
              <div className="py-12">
                <p className="text-xl font-semibold">No guides found.</p>
                <p className="mt-2 text-muted-foreground">Try a different search term.</p>
                <Suggestions />
              </div>
            )}
          </section>
        )}
      </Container>
    </>
  );
}
