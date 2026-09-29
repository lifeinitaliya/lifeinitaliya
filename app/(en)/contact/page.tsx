import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT_EMAIL } from "@/lib/contact";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { routes, siteConfig } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "How to contact Life in Italia with a correction, question, suggestion or website issue, by email or through the contact form.",
  path: routes.contact,
});

const reasons = [
  {
    title: "Corrections and factual updates",
    text: "Spotted an error, or something that has changed since we published? Include the page link and what needs fixing.",
    href: routes.editorialPolicy,
    linkLabel: "How we handle corrections",
  },
  { title: "Editorial questions", text: "Questions about an article, our sources or how we research." },
  { title: "Suggestions", text: "Topics, places or practical questions you'd like us to cover." },
  { title: "Website problems", text: "A broken link, a page that doesn't display properly, or anything else that isn't working." },
  { title: "General enquiries", text: "Anything else about the publication." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${siteConfig.name}`,
          url: absoluteUrl(routes.contact),
        }}
      />
      <PageHeader
        eyebrow="Contact"
        title={`Contact ${siteConfig.name}`}
        description="Have a correction, question, suggestion or website issue? Use the form or email us — we read every message."
        breadcrumbs={[{ label: "Contact", href: routes.contact }]}
      >
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-sm text-[17px] font-semibold text-primary underline-offset-4 hover:underline"
        >
          <Mail aria-hidden className="size-4" />
          {CONTACT_EMAIL}
        </a>
      </PageHeader>

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-16">
        <Card className="gap-0 rounded-2xl py-0 shadow-none ring-border lg:col-span-7">
          <CardContent className="p-6 sm:p-8">
            <h2 className="mb-8 text-xl font-semibold tracking-[-0.02em]">Send us a message</h2>
            <ContactForm />
          </CardContent>
        </Card>

        <aside className="lg:col-span-5" aria-labelledby="help-title">
          <h2 id="help-title" className="text-xl font-semibold tracking-[-0.02em]">
            What you can contact us about
          </h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {reasons.map((reason) => (
              <li key={reason.title} className="py-5">
                <h3 className="font-semibold">{reason.title}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">{reason.text}</p>
                {reason.href && (
                  <Link
                    href={reason.href}
                    className="group mt-2 inline-flex items-center gap-1 rounded-sm text-sm font-semibold text-primary"
                  >
                    {reason.linkLabel}
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            {siteConfig.name} is an editorial publication. We can&apos;t make bookings, arrange
            transport or tours, or answer questions on behalf of hotels, operators or other
            businesses — for those, please contact the business directly.
          </p>
        </aside>
      </Container>
    </>
  );
}
