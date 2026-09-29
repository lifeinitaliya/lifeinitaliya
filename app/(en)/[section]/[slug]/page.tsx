import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView } from "@/components/content/ArticleView";
import { getArticleBySlug, listArticles } from "@/lib/queries/articles";
import { articleMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

// Only stories that exist are rendered; anything else is a 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const stories = await listArticles({ kind: "story" });
  return stories.map((story) => ({ section: story.category.slug, slug: story.slug }));
}

async function getStory(params: PageProps<"/[section]/[slug]">["params"]) {
  const { section, slug } = await params;
  const story = await getArticleBySlug(slug, "story");
  return story && story.category.slug === section ? story : null;
}

export async function generateMetadata({
  params,
}: PageProps<"/[section]/[slug]">): Promise<Metadata> {
  const story = await getStory(params);
  return story ? articleMetadata(story, routes.article(story)) : {};
}

export default async function StoryPage({ params }: PageProps<"/[section]/[slug]">) {
  const story = await getStory(params);
  if (!story) notFound();
  return <ArticleView article={story} />;
}
