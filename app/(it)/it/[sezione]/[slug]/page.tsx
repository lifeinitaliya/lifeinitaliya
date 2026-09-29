import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleView } from "@/components/content/ArticleView";
import { getAllItArticles, getItArticleBySlug } from "@/lib/queries/it";
import { articleMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

// Italian editorial stories, served at /it/{sezione}/{slug}.

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllItArticles();
  return articles
    .filter((a) => a.kind === "story")
    .map((a) => {
      const [, , sezione, slug] = routes.article(a).split("/");
      return { sezione, slug };
    });
}

async function load(params: PageProps<"/it/[sezione]/[slug]">["params"]) {
  const { sezione, slug } = await params;
  const article = await getItArticleBySlug(slug);
  // The section in the URL must be the article's own section.
  if (!article || article.kind !== "story" || routes.article(article) !== `/it/${sezione}/${slug}`) return null;
  return article;
}

export async function generateMetadata({ params }: PageProps<"/it/[sezione]/[slug]">): Promise<Metadata> {
  const article = await load(params);
  return article ? articleMetadata(article, routes.article(article)) : {};
}

export default async function ItalianStoryPage({ params }: PageProps<"/it/[sezione]/[slug]">) {
  const article = await load(params);
  if (!article) notFound();
  return <ArticleView article={article} locale="it" />;
}
