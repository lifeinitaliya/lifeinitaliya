import Link from "next/link";
import { Info } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { GuestPostForm } from "@/components/forms/GuestPostForm";
import { Container } from "@/components/shared/Container";
import { getCategories } from "@/lib/data/categories";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Submit a Guest Post",
  description: "Submit an original, practical article for review by the BS Insights editorial team.",
  path: routes.submitGuestPost,
});

export default async function SubmitGuestPostPage() {
  const categories = await getCategories();

  return (
    <>
      <PageHeader
        eyebrow="Contributors"
        title="Submit a Guest Post"
        description={
          <>
            Before you submit, please read our{" "}
            <Link href={routes.writeForUs} className="font-medium text-primary underline-offset-4 hover:underline">
              guidelines
            </Link>{" "}
            and{" "}
            <Link href={routes.editorialPolicy} className="font-medium text-primary underline-offset-4 hover:underline">
              editorial policy
            </Link>
            .
          </>
        }
        breadcrumbs={[
          { label: "Write for Us", href: routes.writeForUs },
          { label: "Submit", href: routes.submitGuestPost },
        ]}
      />

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <aside className="mb-10 flex gap-4 rounded-xl border border-primary/20 bg-accent p-5 text-[15px] leading-relaxed text-accent-foreground">
            <Info aria-hidden className="mt-0.5 size-5 shrink-0" />
            <p>
              Submitting an article does not guarantee publication. All submissions are reviewed
              by the BS Insights editorial team.
            </p>
          </aside>
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-10">
            <GuestPostForm categories={categories.map(({ slug, name }) => ({ slug, name }))} />
          </div>
        </div>
      </Container>
    </>
  );
}
