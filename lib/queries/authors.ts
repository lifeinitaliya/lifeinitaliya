import { articles } from "@/data/articles";
import { authors } from "@/data/authors";
import type { Author, AuthorWithCount } from "@/lib/types";

const withCount = (author: Author): AuthorWithCount => ({
  ...author,
  guideCount: articles.filter((a) => a.authorSlug === author.slug).length,
});

/** Authors credited on published articles. Others have no public profile page. */
export async function getAuthors(): Promise<AuthorWithCount[]> {
  return authors.map(withCount).filter((a) => a.guideCount > 0);
}

export async function getAuthorBySlug(slug: string): Promise<AuthorWithCount | null> {
  const author = authors.find((a) => a.slug === slug);
  return author ? withCount(author) : null;
}
