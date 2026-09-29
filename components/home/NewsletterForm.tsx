"use client";

import { useActionState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { subscribeToNewsletter } from "@/lib/actions/newsletter";
import type { FormState } from "@/lib/forms";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const initialState: FormState<"email"> = { status: "idle", message: "" };

const copy = {
  en: {
    label: "Email address",
    placeholder: "Email address",
    submit: "Subscribe",
    pending: "Subscribing…",
    note: "We'll only use your email to send The Italy Edit.",
  },
  it: {
    label: "Indirizzo email",
    placeholder: "Il tuo indirizzo email",
    submit: "Iscriviti",
    pending: "Iscrizione in corso…",
    note: "Useremo il tuo indirizzo solo per inviarti la newsletter.",
  },
} as const;

export function NewsletterForm({ locale = "en" }: { locale?: Locale }) {
  const text = copy[locale];
  const [state, formAction, pending] = useActionState(subscribeToNewsletter, initialState);
  const hasError = state.status === "error";

  return (
    <form action={formAction} noValidate className="w-full">
      <input type="hidden" name="locale" value={locale} />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          {text.label}
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={text.placeholder}
          defaultValue={state.values?.email}
          aria-invalid={hasError || undefined}
          aria-describedby="newsletter-status"
          className="h-13 w-full min-w-0 border-b-2 border-foreground bg-transparent px-1 text-lg text-foreground outline-none placeholder:text-foreground/45 focus-visible:border-primary aria-invalid:border-destructive sm:flex-1"
        />
        <button
          type="submit"
          disabled={pending}
          className={cn(
            buttonVariants({ size: "xl" }),
            "h-13 rounded-none bg-foreground px-7 text-background hover:bg-foreground/85"
          )}
        >
          {pending ? text.pending : text.submit}
        </button>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={cn(
          "mt-4 min-h-5 text-sm",
          hasError ? "text-destructive" : "text-muted-foreground"
        )}
      >
        {state.message || text.note}
      </p>
    </form>
  );
}
