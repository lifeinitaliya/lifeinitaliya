import { articles } from "@/data/articles";
import { topics } from "@/data/topics";
import type { CategorySlug, Topic, TopicWithCount } from "@/lib/types";

const withCount = (topic: Topic): TopicWithCount => ({
  ...topic,
  guideCount: articles.filter((a) => a.topicSlugs.includes(topic.slug)).length,
});

const hasArticles = (topic: TopicWithCount) => topic.guideCount > 0;

/** Topics with published articles. Empty topics have no page and aren't linked. */
export async function getTopics({
  category,
}: { category?: CategorySlug } = {}): Promise<TopicWithCount[]> {
  return topics
    .filter((t) => !category || t.categorySlug === category)
    .map(withCount)
    .filter(hasArticles);
}

export async function getTopicBySlug(slug: string): Promise<TopicWithCount | null> {
  const topic = topics.find((t) => t.slug === slug);
  return topic ? withCount(topic) : null;
}

export async function getRelatedTopics(
  topic: Topic,
  limit = 8
): Promise<TopicWithCount[]> {
  return topics
    .filter((t) => t.slug !== topic.slug && t.categorySlug === topic.categorySlug)
    .map(withCount)
    .filter(hasArticles)
    .slice(0, limit);
}
