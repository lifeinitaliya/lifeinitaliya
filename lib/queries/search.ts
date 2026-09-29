import { getArticles } from "@/lib/queries/articles";
import { getAuthors } from "@/lib/queries/authors";
import { getCategories } from "@/lib/queries/categories";
import { getRegions } from "@/lib/queries/italy";
import { getTopics } from "@/lib/queries/topics";
import type {
  Article,
  AuthorWithCount,
  CategoryWithCount,
  Paginated,
  RegionWithCount,
  TopicWithCount,
} from "@/lib/types";

export interface SearchResults {
  query: string;
  articles: Paginated<Article>;
  categories: CategoryWithCount[];
  topics: TopicWithCount[];
  regions: RegionWithCount[];
  authors: AuthorWithCount[];
}

const includes = (values: string[], q: string) =>
  values.join(" ").toLowerCase().includes(q);

/** Mock search across content types. Replace with Supabase full-text search later. */
export async function searchSite(query: string, page = 1): Promise<SearchResults> {
  const q = query.trim().toLowerCase();
  const [articles, categories, topics, regions, authors] = await Promise.all([
    getArticles({ query: q, page, pageSize: 10 }),
    getCategories(),
    getTopics(),
    getRegions(),
    getAuthors(),
  ]);
  return {
    query: query.trim(),
    articles,
    categories: categories.filter((c) => includes([c.name, c.description], q)),
    topics: topics.filter((t) => includes([t.name, t.description], q)),
    regions: regions.filter((r) => r.articleCount > 0 && includes([r.name, r.capital], q)),
    authors: authors.filter((a) => includes([a.name, a.shortBio, ...a.interests], q)),
  };
}
