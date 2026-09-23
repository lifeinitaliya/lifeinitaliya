import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthorAvatar } from "@/components/authors/AuthorAvatar";
import { routes } from "@/lib/site";
import type { Author } from "@/lib/types";

/** "About the author" box shown at the end of an article. */
export function AuthorBio({ author }: { author: Author }) {
  return (
    <section
      aria-labelledby="about-author-title"
      className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 sm:flex-row sm:p-7"
    >
      <AuthorAvatar author={author} />
      <div>
        <h2
          id="about-author-title"
          className="text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase"
        >
          About the author
        </h2>
        <p className="mt-2 text-lg font-semibold tracking-[-0.015em]">{author.name}</p>
        <p className="text-sm font-medium text-primary">{author.role}</p>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {author.shortBio}
        </p>
        <Link
          href={routes.author(author.slug)}
          className="group mt-4 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold hover:text-primary"
        >
          More from {author.name}
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
}
