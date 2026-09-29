import { AuthorAvatar } from "@/components/authors/AuthorAvatar";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import { Container } from "@/components/shared/Container";
import { routes } from "@/lib/site";
import type { AuthorWithCount } from "@/lib/types";

export function AuthorHeader({ author }: { author: AuthorWithCount }) {
  return (
    <header className="border-b border-border">
      <Container className="pt-8 pb-12 sm:pt-10 sm:pb-16">
        <Breadcrumbs
          items={[
            { label: "Authors", href: routes.authors },
            { label: author.name, href: routes.author(author.slug) },
          ]}
          className="mb-10 sm:mb-12"
        />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          <AuthorAvatar author={author} size="lg" />
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary">{author.role}</p>
            <h1 className="mt-2 font-display text-[clamp(40px,5.5vw,68px)] leading-[1] text-balance">
              {author.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {author.bio}
            </p>
            <dl className="mt-8 grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-x-10">
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  Published guides
                </dt>
                <dd className="mt-2 text-2xl font-bold tabular-nums">{author.guideCount}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  Areas of interest
                </dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-2">
                    {author.interests.map((interest) => (
                      <li
                        key={interest}
                        className="rounded-full border border-border bg-card px-3 py-1 text-sm"
                      >
                        {interest}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </header>
  );
}
