import { authors } from "@/lib/mock-data/authors";
import { guides } from "@/lib/mock-data/guides";
import type { Author, AuthorWithCount } from "@/lib/types";

const withCount = (author: Author): AuthorWithCount => ({
  ...author,
  guideCount: guides.filter((g) => g.authorSlug === author.slug).length,
});

export async function getAuthors(): Promise<AuthorWithCount[]> {
  return authors.map(withCount);
}

export async function getAuthorBySlug(slug: string): Promise<AuthorWithCount | null> {
  const author = authors.find((a) => a.slug === slug);
  return author ? withCount(author) : null;
}
