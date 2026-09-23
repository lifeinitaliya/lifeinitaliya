import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Write for BS Insights",
  description:
    "BS Insights welcomes original contributions that provide practical value to readers. Read our guidelines and submit a guest post.",
  path: routes.writeForUs,
});

const contributors = [
  "Writers",
  "Professionals",
  "Researchers",
  "Industry practitioners",
  "Experienced enthusiasts",
];

const lookingFor = [
  { name: "Original content", text: "Written for BS Insights and not published elsewhere." },
  { name: "Useful information", text: "Helps readers understand, decide or do something." },
  { name: "Clear structure", text: "Logical headings, short paragraphs and lists where they help." },
  { name: "Practical examples", text: "Real steps, examples and specifics over generalities." },
  { name: "Accurate information", text: "Facts you can support, with sources where appropriate." },
  { name: "Readable writing", text: "Plain language that respects the reader's time." },
];

const notAccepted = [
  "Copied content",
  "Plagiarized content",
  "Low-quality AI-generated articles",
  "Spam",
  "Casino/gambling promotion",
  "Adult content",
  "Illegal content",
  "Manipulative backlink articles",
  "Unrelated promotional content",
];

const requirements = [
  { name: "Originality", text: "Your own work, not published anywhere else." },
  { name: "Clear author identity", text: "Your real name and a short, accurate bio." },
  { name: "Relevant topic", text: "Fits one of our categories and serves our readers." },
  { name: "Useful content", text: "Practical value from start to finish." },
  { name: "Proper citations", text: "Sources credited where appropriate." },
  { name: "Natural external links", text: "Only links that genuinely help the reader." },
];

const process = [
  { name: "Submit", text: "Send your article using the submission form." },
  { name: "Editorial Review", text: "Our editors review it against these guidelines." },
  { name: "Revision if Needed", text: "We may ask for changes or clarifications." },
  { name: "Approval", text: "We confirm the final version with you." },
  { name: "Publication", text: "Your guide goes live with your author bio." },
];

const sectionTitle = "text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px]";

function SubmitButton({ className }: { className?: string }) {
  return (
    <Link
      href={routes.submitGuestPost}
      className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90", className)}
    >
      Submit a Guest Post
      <ArrowRight aria-hidden data-icon="inline-end" />
    </Link>
  );
}

export default function WriteForUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contributors"
        title="Write for BS Insights"
        description="Share useful knowledge with our readers."
        breadcrumbs={[{ label: "Write for Us", href: routes.writeForUs }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <SubmitButton />
          <Link
            href={routes.editorialPolicy}
            className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}
          >
            Read our Editorial Policy
          </Link>
        </div>
      </PageHeader>

      <section aria-labelledby="who-title" className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="who-title" className={sectionTitle}>
              Who can contribute?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              BS Insights welcomes original contributions that provide practical value to
              readers. You don&apos;t need to be a professional writer — you need knowledge worth
              sharing and the care to explain it well.
            </p>
          </div>
          <ul className="flex flex-wrap content-start gap-3 lg:col-span-7">
            {contributors.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-[15px] font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="looking-title" className="border-t border-border bg-card py-16 sm:py-20">
        <Container>
          <h2 id="looking-title" className={sectionTitle}>
            What we&apos;re looking for
          </h2>
          <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {lookingFor.map((item) => (
              <li key={item.name} className="flex gap-4">
                <span
                  aria-hidden
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary"
                >
                  <Check className="size-4" strokeWidth={2.5} />
                </span>
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="mt-1 text-[15px] text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="standards-title" className="border-t border-border py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="standards-title" className={sectionTitle}>
              We do not accept
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {notAccepted.map((item) => (
                <li key={item} className="flex gap-3 text-[15px]">
                  <X aria-hidden className="mt-0.5 size-4 shrink-0 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={sectionTitle}>Submission requirements</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {requirements.map((item) => (
                <div key={item.name} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="font-semibold">{item.name}</dt>
                  <dd className="text-[15px] text-muted-foreground">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section aria-labelledby="process-title" className="bg-ink py-16 text-ink-foreground sm:py-24">
        <Container>
          <h2 id="process-title" className={cn(sectionTitle, "text-white")}>
            The process
          </h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ink-border bg-ink-border sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <li key={step.name} className="bg-ink p-6">
                <span aria-hidden className="text-3xl font-bold tracking-[-0.04em] text-[#8ea6f3] tabular-nums">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-semibold text-white">{step.name}</h3>
                <p className="mt-1.5 text-[15px] text-ink-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <SubmitButton />
            <p className="text-sm text-ink-muted">
              Submitting an article does not guarantee publication.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
