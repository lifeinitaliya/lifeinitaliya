import { NewsletterForm } from "@/components/home/NewsletterForm";
import { Container } from "@/components/shared/Container";

export function NewsletterCTA() {
  return (
    <section aria-labelledby="newsletter-title" className="pb-20 sm:pb-24">
      <Container>
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-14">
          <div className="lg:col-span-6">
            <h2
              id="newsletter-title"
              className="text-[32px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[40px]"
            >
              Stay in the know.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Get useful guides and practical insights delivered to your inbox.
            </p>
          </div>
          <div className="lg:col-span-6">
            <NewsletterForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
