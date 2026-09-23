import { PageHeader } from "@/components/content/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { TopicExplorer } from "@/components/topics/TopicExplorer";
import { getCategories } from "@/lib/data/categories";
import { getTopics } from "@/lib/data/topics";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

const description =
  "Topics are more specific than categories. Find guides on exactly what you're looking for.";

export const metadata = pageMetadata({
  title: "Explore Topics",
  description,
  path: routes.topics,
});

export default async function TopicsPage() {
  const [categories, topics] = await Promise.all([getCategories(), getTopics()]);
  const groups = categories.map((category) => ({
    category: { slug: category.slug, name: category.name },
    topics: topics.filter((t) => t.categorySlug === category.slug),
  }));

  return (
    <>
      <JsonLd data={collectionPageSchema({ name: "Topics", description, path: routes.topics })} />
      <PageHeader
        eyebrow="BS Insights"
        title="Explore Topics"
        description={description}
        breadcrumbs={[{ label: "Topics", href: routes.topics }]}
      />
      <Container className="py-12 sm:py-16">
        <TopicExplorer groups={groups} />
      </Container>
    </>
  );
}
