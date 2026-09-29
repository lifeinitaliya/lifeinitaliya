import { AuthorCard } from "@/components/authors/AuthorCard";
import { PageHeader } from "@/components/content/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { getAuthors } from "@/lib/queries/authors";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

const description = "Who researches, writes and updates the articles and guides on Life in Italia.";

export const metadata = pageMetadata({
  title: "Authors",
  description,
  path: routes.authors,
});

export default async function AuthorsPage() {
  const authors = await getAuthors();

  return (
    <>
      <JsonLd data={collectionPageSchema({ name: "Authors", description, path: routes.authors })} />
      <PageHeader
        eyebrow="Authors"
        title="Authors"
        description={description}
        breadcrumbs={[{ label: "Authors", href: routes.authors }]}
      />

      <Container className="py-12 sm:py-16">
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {authors.map((author) => (
            <li key={author.slug}>
              <AuthorCard author={author} />
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
