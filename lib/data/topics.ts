import { guides } from "@/lib/mock-data/guides";
import { topics } from "@/lib/mock-data/topics";
import type { CategorySlug, Topic, TopicWithCount } from "@/lib/types";

const withCount = (topic: Topic): TopicWithCount => ({
  ...topic,
  guideCount: guides.filter((g) => g.topicSlugs.includes(topic.slug)).length,
});

export async function getTopics({
  category,
}: { category?: CategorySlug } = {}): Promise<TopicWithCount[]> {
  return topics
    .filter((t) => !category || t.categorySlug === category)
    .map(withCount);
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
    .slice(0, limit)
    .map(withCount);
}
