import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/content/PageHeader";
import { GuideCard } from "@/components/guides/GuideCard";
import { GuidePagination } from "@/components/guides/GuidePagination";
import { Container } from "@/components/shared/Container";
import { SearchForm } from "@/components/shared/SearchForm";
import { getItArticles, getItCategories } from "@/lib/queries/it";
import { parsePage, parseParam } from "@/lib/queries/pagination";
import { pageMetadata } from "@/lib/seo";
import { itRoutes } from "@/lib/site";

export async function generateMetadata({ searchParams }: PageProps<"/it/cerca">): Promise<Metadata> {
  const query = parseParam((await searchParams).q);
  return pageMetadata({
    title: query ? `Risultati per «${query}»` : "Cerca",
    description: "Cerca guide, storie e sezioni di Life in Italia.",
    path: itRoutes.search,
    locale: "it",
    noIndex: true,
  });
}

export default async function ItalianSearchPage({ searchParams }: PageProps<"/it/cerca">) {
  const params = await searchParams;
  const query = parseParam(params.q);
  const [results, categories] = await Promise.all([
    query ? getItArticles({ query, page: parsePage(params.page), pageSize: 10 }) : null,
    getItCategories(),
  ]);

  return (
    <>
      <PageHeader title="Cerca su Life in Italia" locale="it">
        <SearchForm
          id="it-search"
          action={itRoutes.search}
          label="Cerca su Life in Italia"
          placeholder="Che cosa stai cercando?"
          submitLabel="Cerca"
          defaultValue={query}
          className="max-w-2xl"
        />
      </PageHeader>

      <Container className="py-12 sm:py-16">
        {results ? (
          <>
            <p className="mb-10 border-b border-border pb-5 text-sm text-muted-foreground" aria-live="polite">
              {results.total} {results.total === 1 ? "risultato" : "risultati"} per{" "}
              <span className="font-medium text-foreground">«{query}»</span>
            </p>
            {results.items.length > 0 ? (
              <ul className="grid gap-10">
                {results.items.map((article) => (
                  <li key={article.slug}>
                    <GuideCard guide={article} layout="horizontal" locale="it" />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground">
                Nessun risultato. Prova con un termine diverso, oppure sfoglia le sezioni qui sotto.
              </p>
            )}
            <GuidePagination
              page={results.page}
              totalPages={results.totalPages}
              basePath={itRoutes.search}
              params={{ q: query }}
              locale="it"
              className="mt-14"
            />
          </>
        ) : null}

        <div className={results ? "mt-16" : undefined}>
          <h2 className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
            Sfoglia le sezioni
          </h2>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={itRoutes.section(c.slug)} className="rounded-sm font-medium hover:text-primary">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={itRoutes.guides} className="rounded-sm font-medium hover:text-primary">
                Guide
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}
