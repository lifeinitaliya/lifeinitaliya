import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthorCard } from "@/components/authors/AuthorCard";
import { PageHeader } from "@/components/content/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { getAuthors } from "@/lib/data/authors";
import { collectionPageSchema, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

const description = "Explore the writers and contributors behind BS Insights.";

export const metadata = pageMetadata({
  title: "Meet the Contributors",
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
        title="Meet the Contributors"
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

      <section aria-labelledby="contribute-title" className="border-t border-border bg-card py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2
              id="contribute-title"
              className="text-[28px] leading-tight font-bold tracking-[-0.03em] sm:text-[34px]"
            >
              Want to contribute?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              BS Insights welcomes practical, original contributions from guest authors.
            </p>
          </div>
          <Link
            href={routes.writeForUs}
            className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}
          >
            Write for BS Insights
            <ArrowRight aria-hidden data-icon="inline-end" />
          </Link>
        </Container>
      </section>
    </>
  );
}
