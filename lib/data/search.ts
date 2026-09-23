import { getAuthors } from "@/lib/data/authors";
import { getCategories } from "@/lib/data/categories";
import { getGuides } from "@/lib/data/guides";
import { getTopics } from "@/lib/data/topics";
import type {
  AuthorWithCount,
  CategoryWithCount,
  Guide,
  Paginated,
  TopicWithCount,
} from "@/lib/types";

export interface SearchResults {
  query: string;
  guides: Paginated<Guide>;
  categories: CategoryWithCount[];
  topics: TopicWithCount[];
  authors: AuthorWithCount[];
}

const includes = (values: string[], q: string) =>
  values.join(" ").toLowerCase().includes(q);

/** Mock search across content types. Replace with Supabase full-text search later. */
export async function searchSite(query: string, page = 1): Promise<SearchResults> {
  const q = query.trim().toLowerCase();
  const [guides, categories, topics, authors] = await Promise.all([
    getGuides({ query: q, page, pageSize: 10 }),
    getCategories(),
    getTopics(),
    getAuthors(),
  ]);
  return {
    query: query.trim(),
    guides,
    categories: categories.filter((c) => includes([c.name, c.description], q)),
    topics: topics.filter((t) => includes([t.name, t.description], q)),
    authors: authors.filter((a) => includes([a.name, a.shortBio, ...a.interests], q)),
  };
}
