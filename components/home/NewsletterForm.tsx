"use client";

import { useActionState } from "react";

import { buttonVariants } from "@/components/ui/button";
import {
  subscribeToNewsletter,
  type NewsletterState,
} from "@/lib/actions/newsletter";
import { cn } from "@/lib/utils";

const initialState: NewsletterState = { status: "idle", message: "" };

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState
  );
  const hasError = state.status === "error";

  return (
    <form action={formAction} noValidate className="w-full">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          aria-invalid={hasError || undefined}
          aria-describedby="newsletter-status"
          className="h-12 w-full min-w-0 rounded-lg sm:flex-1 border border-border bg-background px-4 text-base text-foreground transition-[border-color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/10 aria-invalid:border-destructive"
        />
        <button
          type="submit"
          disabled={pending}
          className={cn(
            buttonVariants({ size: "xl" }),
            "h-12 bg-foreground text-background hover:bg-foreground/85"
          )}
        >
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn(
          "mt-3 min-h-5 text-sm",
          hasError ? "text-destructive" : "text-muted-foreground"
        )}
      >
        {state.message || "One useful email a week. Unsubscribe anytime."}
      </p>
    </form>
  );
}
