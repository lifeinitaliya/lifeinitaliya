// Domain types. These mirror the future Supabase tables so mock data can be
// swapped for database queries without touching components.

export type CategorySlug =
  | "travel"
  | "technology"
  | "education"
  | "lifestyle"
  | "finance"
  | "how-to";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  /** Longer introduction shown on the category page. */
  intro: string;
}

export interface CategoryWithCount extends Category {
  guideCount: number;
}

export interface Topic {
  slug: string;
  name: string;
  description: string;
  categorySlug: CategorySlug;
}

export interface TopicWithCount extends Topic {
  guideCount: number;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  /** One or two sentences, shown on cards and article bylines. */
  shortBio: string;
  bio: string;
  interests: string[];
  avatar?: GuideImage;
}

export interface AuthorWithCount extends Author {
  guideCount: number;
}

export interface GuideImage {
  src: string;
  alt: string;
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: Pick<Category, "slug" | "name">;
  authorSlug: string;
  topicSlugs: string[];
  /** Editorial usefulness/completeness score, 0–100. */
  guideRank: number;
  readingTimeMinutes: number;
  /** ISO 8601 date strings. */
  publishedAt: string;
  updatedAt: string;
  image?: GuideImage;
}

/**
 * Structured article content. Inline text supports `[label](href)` links and
 * `**bold**`, which maps cleanly to a JSON or Markdown column later.
 */
export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title?: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

export interface Faq {
  question: string;
  answer: string;
}

export interface GuideContent {
  body: ContentBlock[];
  faqs?: Faq[];
}

export interface GuideDetail extends Guide, GuideContent {
  author: Author;
  topics: Topic[];
}

export interface Paginated<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}
