import { articles } from "@/data/articles";
import { authors } from "@/data/authors";
import type { Author, AuthorWithCount } from "@/lib/types";

const withCount = (author: Author): AuthorWithCount => ({
  ...author,
  guideCount: articles.filter((a) => a.authorSlug === author.slug).length,
});

// These authors always get a public profile page regardless of article credits.
const ALWAYS_PUBLIC = new Set(["bareera-sharif"]);

/** Authors credited on published articles, plus named editors with a standing profile. */
export async function getAuthors(): Promise<AuthorWithCount[]> {
  return authors.map(withCount).filter((a) => a.guideCount > 0 || ALWAYS_PUBLIC.has(a.slug));
}

export async function getAuthorBySlug(slug: string): Promise<AuthorWithCount | null> {
  const author = authors.find((a) => a.slug === slug);
  return author ? withCount(author) : null;
}
