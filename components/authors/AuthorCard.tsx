import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AuthorAvatar } from "@/components/authors/AuthorAvatar";
import { routes } from "@/lib/site";
import type { AuthorWithCount } from "@/lib/types";

export function AuthorCard({ author }: { author: AuthorWithCount }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/20 sm:p-7">
      <AuthorAvatar author={author} />
      <h2 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
        <Link
          href={routes.author(author.slug)}
          className="rounded-sm after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
        >
          {author.name}
        </Link>
      </h2>
      <p className="mt-1 text-sm font-medium text-primary">{author.role}</p>
      <p className="mt-3 mb-6 text-[15px] leading-relaxed text-muted-foreground">
        {author.shortBio}
      </p>
      <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="font-medium text-foreground/80 tabular-nums">
          {author.guideCount} published {author.guideCount === 1 ? "guide" : "guides"}
        </span>
        <span aria-hidden className="inline-flex items-center gap-1.5 font-semibold">
          View profile
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
