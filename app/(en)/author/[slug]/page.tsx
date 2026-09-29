import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AuthorHeader } from "@/components/authors/AuthorHeader";
import { GuideGrid } from "@/components/guides/GuideGrid";
import { GuidePagination } from "@/components/guides/GuidePagination";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { getAuthorBySlug, getAuthors } from "@/lib/queries/authors";
import { getArticles } from "@/lib/queries/articles";
import { parsePage } from "@/lib/queries/pagination";
import { pageMetadata, profilePageSchema } from "@/lib/seo";
import { routes } from "@/lib/site";

// Only authors credited on published articles have a profile page.
export const dynamicParams = false;

export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/author/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);
  if (!author) return {};
  return pageMetadata({
    title: author.name.includes(author.role) ? author.name : `${author.name} — ${author.role}`,
    description: author.shortBio,
    path: routes.author(author.slug),
    openGraph: { type: "profile" },
  });
}

export default async function AuthorPage({
  params,
  searchParams,
}: PageProps<"/author/[slug]">) {
  const [{ slug }, sp] = await Promise.all([params, searchParams]);
  const author = await getAuthorBySlug(slug);
  if (!author || author.guideCount === 0) notFound();

  const path = routes.author(author.slug);
  const guides = await getArticles({ author: author.slug, page: parsePage(sp.page) });

  return (
    <>
      <JsonLd data={profilePageSchema(author, path)} />
      <AuthorHeader author={author} />

      <section aria-labelledby="published-title" className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            id="published-title"
            title="Published Articles"
            description="Latest contributions first."
          />
          <GuideGrid
            guides={guides.items}
            className="mt-10"
            empty={`${author.name} hasn't published any guides yet.`}
          />
          <GuidePagination
            page={guides.page}
            totalPages={guides.totalPages}
            basePath={path}
            className="mt-14"
          />
        </Container>
      </section>
    </>
  );
}
