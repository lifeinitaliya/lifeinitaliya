import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/content/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/shared/Container";
import { Card, CardContent } from "@/components/ui/card";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with BS Insights with a question, suggestion, correction or partnership inquiry.",
  path: routes.contact,
});

const reasons = [
  { title: "Questions & suggestions", text: "Ideas for guides you'd like to see, or questions about existing ones." },
  { title: "Corrections", text: "Spotted an error? Include the page link and what needs fixing.", href: routes.editorialPolicy, linkLabel: "How we handle corrections" },
  { title: "Partnerships", text: "Collaboration and partnership inquiries." },
  { title: "Guest posts", text: "Please use our guest post process rather than this form.", href: routes.writeForUs, linkLabel: "Write for BS Insights" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact BS Insights",
          url: absoluteUrl(routes.contact),
        }}
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description={
          <>
            Have a question, suggestion, correction, or partnership inquiry? We&apos;d love to
            hear from you.
          </>
        }
        breadcrumbs={[{ label: "Contact", href: routes.contact }]}
      />

      <Container className="grid gap-12 py-12 sm:py-16 lg:grid-cols-12 lg:gap-16">
        <Card className="gap-0 rounded-2xl py-0 shadow-none ring-border lg:col-span-7">
          <CardContent className="p-6 sm:p-8">
            <h2 className="mb-8 text-xl font-semibold tracking-[-0.02em]">Send us a message</h2>
            <ContactForm />
          </CardContent>
        </Card>

        <aside className="lg:col-span-5" aria-labelledby="help-title">
          <h2 id="help-title" className="text-xl font-semibold tracking-[-0.02em]">
            How we can help
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
        </aside>
      </Container>
    </>
  );
}
