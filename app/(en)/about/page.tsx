import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Check,
  Languages,
  Plane,
  TrainFront,
  UtensilsCrossed,
  X,
} from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { GuideRank } from "@/components/guides/GuideRank";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { absoluteUrl, organizationId, pageMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const description = "Italy, in one place.";

export const metadata = pageMetadata({
  title: "About Life in Italia",
  description:
    "Life in Italia is an independent publication about Italy in English and Italian: practical travel guides, city guides and articles on Italian food culture.",
  path: routes.about,
});

const publishes = [
  { icon: BookOpen, name: "Practical guides", text: "Planning a first trip, costs, seasons, checklists and the Dolomites — each with a Guide Rank." },
  { icon: TrainFront, name: "Transport", text: "Trains, airport transfers, driving, ferries and getting between cities." },
  { icon: Building2, name: "Cities", text: "First-visit guides to Rome, Florence, Venice, Milan, Naples, Bologna, Palermo, Turin and Verona." },
  { icon: Plane, name: "Trips", text: "Weekend and regional trips, such as Lake Como and the Dolomites." },
  { icon: UtensilsCrossed, name: "Food & drink", text: "Italian and Sicilian food traditions, coffee, desserts and regional wines." },
  { icon: Languages, name: "Italian edition", text: "Articles written separately for Italian readers at /it, not machine translations." },
];

const approach = [
  { name: "Clarity", text: "Plain language, logical structure and the answer up front." },
  { name: "Usefulness", text: "Every article starts from a real question a reader needs answered." },
  { name: "Research", text: "Key facts are checked against official and authoritative sources, which each article lists." },
  { name: "Honesty about uncertainty", text: "We say when an origin story is disputed or a rule may change, and we don't invent rankings, prices or experiences." },
  { name: "Freshness", text: "Articles are dated and revisited when information changes." },
];

const sectionTitle = "text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px]";

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: `About ${siteConfig.name}`,
          url: absoluteUrl(routes.about),
          about: { "@id": organizationId },
        }}
      />
      <PageHeader
        eyebrow="About"
        title="About Life in Italia"
        description={description}
        breadcrumbs={[{ label: "About", href: routes.about }]}
      />

      <section aria-labelledby="what-title" className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <h2 id="what-title" className={cn(sectionTitle, "lg:col-span-5")}>
            What is Life in Italia?
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Life in Italia is an independent publication about Italy, in English and Italian. We
              publish practical travel guides, city guides and articles on Italian food culture —
              the kind of information that helps readers plan a trip, get around and understand
              what they are seeing and eating.
            </p>
            <p>
              We write for international visitors, for Italian readers through our Italian
              edition, and for anyone curious about the country. We would rather publish a smaller
              number of thorough, well-sourced articles than many thin ones, so the site grows
              slowly and each article is revisited as information changes.
            </p>
            <p>
              Articles are researched and written by the Life in Italia editorial team and credited
              to it. We are not affiliated with any tourism board, transport operator or business,
              and we don&apos;t claim first-hand experiences or professional credentials we
              don&apos;t have.
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="publish-title" className="border-t border-border bg-card py-16 sm:py-20">
        <Container>
          <h2 id="publish-title" className={sectionTitle}>
            What we publish
          </h2>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {publishes.map(({ icon: Icon, name, text }) => (
              <li key={name} className="bg-card p-6">
                <Icon aria-hidden className="size-5 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 font-semibold tracking-[-0.01em]">{name}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="approach-title" className="border-t border-border py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="approach-title" className={sectionTitle}>
              Our approach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Five principles guide every piece we publish.
            </p>
          </div>
          <ol className="divide-y divide-border border-y border-border lg:col-span-7">
            {approach.map((item, index) => (
              <li key={item.name} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                <span
                  aria-hidden
                  className="text-2xl leading-none font-bold tracking-[-0.04em] text-foreground/20 tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.015em]">{item.name}</h3>
                  <p className="mt-1 text-muted-foreground">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="guide-rank"
        aria-labelledby="guide-rank-title"
        className="scroll-mt-20 bg-ink py-16 text-ink-foreground sm:py-24"
      >
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#8ea6f3] uppercase">
              Guide Rank
            </p>
            <h2 id="guide-rank-title" className={cn(sectionTitle, "mt-4 text-white")}>
              A Life in Italia editorial score.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">
              Guide Rank is an internal indicator our editors use to assess how useful, clear,
              well researched and up to date a guide is. It helps readers see at a glance how
              complete we consider a guide to be.
            </p>
            <GuideRank score={94} variant="stacked" tone="dark" showAttribution className="mt-10 w-full max-w-[240px]" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-6">
            <div className="rounded-xl border border-ink-border bg-white/[0.03] p-6">
              <h3 className="font-semibold text-white">Guide Rank is</h3>
              <ul className="mt-4 space-y-3 text-[15px] text-ink-muted">
                {["A Life in Italia editorial score", "Based on usefulness, clarity, research and freshness", "Reviewed when a guide is updated"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-[#8ea6f3]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-ink-border bg-white/[0.03] p-6">
              <h3 className="font-semibold text-white">Guide Rank is not</h3>
              <ul className="mt-4 space-y-3 text-[15px] text-ink-muted">
                {["A Google or search-engine ranking", "An official industry score", "A guarantee of quality"].map((item) => (
                  <li key={item} className="flex gap-3">
                    <X aria-hidden className="mt-0.5 size-4 shrink-0 text-ink-muted" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="standards-title" className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <h2 id="standards-title" className={cn(sectionTitle, "lg:col-span-5")}>
            Editorial standards
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              Facts are checked against primary and authoritative sources — government and
              regional authorities, official registers such as the EU register of protected food
              and wine names, transport operators, museums and UNESCO — and each article lists the
              sources it relies on. Where a tradition&apos;s origin is disputed, or an
              institution&apos;s account is a legend, we say so rather than repeat it as fact.
            </p>
            <p>
              Photographs are used under licence. When a photo illustrates a particular place, we
              check that it was really taken there.
            </p>
            <p>
              Life in Italia does not currently carry advertising, sponsored content or affiliate
              links, and nobody pays to appear in an article. If that changes, commercial content
              will be clearly labelled and kept separate from editorial content.
            </p>
            <p>
              Articles show when they were published and last updated. If you spot an error,
              tell us and we&apos;ll look into it and correct the article where needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={routes.editorialPolicy}
                className={cn(buttonVariants({ size: "xl" }), "hover:bg-primary/90")}
              >
                Read our Editorial Policy
                <ArrowRight aria-hidden data-icon="inline-end" />
              </Link>
              <Link
                href={routes.contact}
                className={cn(buttonVariants({ variant: "outline", size: "xl" }), "bg-card")}
              >
                Report a correction
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
