"use client";

import { useActionState, type ReactNode } from "react";

import { FormField, fieldClass, textareaClass } from "@/components/forms/FormField";
import { FormStatus } from "@/components/forms/FormStatus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { submitGuestPost, type GuestPostField } from "@/lib/actions/guest-post";
import type { FormState } from "@/lib/forms";
import type { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

const initialState: FormState<GuestPostField> = { status: "idle", message: "" };

function Fieldset({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="grid gap-6 border-t border-border pt-8 first:border-t-0 first:pt-0">
      <legend className="float-left mb-1 w-full text-lg font-semibold tracking-[-0.015em]">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

export function GuestPostForm({ categories }: { categories: Pick<Category, "slug" | "name">[] }) {
  const [state, formAction, pending] = useActionState(submitGuestPost, initialState);
  const err = state.fieldErrors ?? {};
  const val = state.values ?? {};
  const invalid = (field: GuestPostField) => Boolean(err[field]) || undefined;
  const categoryItems = categories.map((c) => ({ value: c.slug, label: c.name }));

  return (
    <form action={formAction} noValidate className="flex flex-col gap-10">
      <Fieldset legend="About you">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField id="gp-name" label="Full Name" error={err.fullName}>
            {(d) => (
              <Input id="gp-name" name="fullName" autoComplete="name" required defaultValue={val.fullName} aria-invalid={invalid("fullName")} aria-describedby={d} className={fieldClass} />
            )}
          </FormField>
          <FormField id="gp-email" label="Email" error={err.email}>
            {(d) => (
              <Input id="gp-email" name="email" type="email" autoComplete="email" required defaultValue={val.email} aria-invalid={invalid("email")} aria-describedby={d} className={fieldClass} />
            )}
          </FormField>
          <FormField id="gp-website" label="Website" optional error={err.website}>
            {(d) => (
              <Input id="gp-website" name="website" type="url" inputMode="url" placeholder="https://" defaultValue={val.website} aria-invalid={invalid("website")} aria-describedby={d} className={fieldClass} />
            )}
          </FormField>
          <FormField id="gp-social" label="Social Profile" optional error={err.socialProfile}>
            {(d) => (
              <Input id="gp-social" name="socialProfile" type="url" inputMode="url" placeholder="https://" defaultValue={val.socialProfile} aria-invalid={invalid("socialProfile")} aria-describedby={d} className={fieldClass} />
            )}
          </FormField>
        </div>
      </Fieldset>

      <Fieldset legend="Your article">
        <FormField id="gp-title" label="Article Title" error={err.title}>
          {(d) => (
            <Input id="gp-title" name="title" required defaultValue={val.title} aria-invalid={invalid("title")} aria-describedby={d} className={fieldClass} />
          )}
        </FormField>
        <FormField id="gp-category" label="Category" error={err.category}>
          {(d) => (
            <Select name="category" items={categoryItems} defaultValue={val.category || null}>
              <SelectTrigger
                id="gp-category"
                aria-invalid={invalid("category")}
                aria-describedby={d}
                className={cn(fieldClass, "w-full data-[size=default]:h-11 sm:w-72")}
              >
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {categoryItems.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </FormField>
        <FormField
          id="gp-content"
          label="Article Content"
          hint="Paste your full article. Minimum 300 words. Use headings and lists where they help readers."
          error={err.content}
        >
          {(d) => (
            <Textarea id="gp-content" name="content" required rows={14} defaultValue={val.content} aria-invalid={invalid("content")} aria-describedby={d} className={cn(textareaClass, "min-h-80")} />
          )}
        </FormField>
        <FormField
          id="gp-image"
          label="Featured Image"
          optional
          hint="JPG, PNG or WebP, up to 5 MB. Only upload images you have the right to use."
          error={err.featuredImage}
        >
          {(d) => (
            <input
              id="gp-image"
              name="featuredImage"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              aria-invalid={invalid("featuredImage")}
              aria-describedby={d}
              className="w-full rounded-lg border border-dashed border-border bg-card p-3 text-sm text-muted-foreground file:mr-4 file:rounded-md file:border-0 file:bg-secondary file:px-3 file:py-2 file:text-sm file:font-medium file:text-foreground hover:file:bg-muted focus-visible:border-primary/60 focus-visible:ring-4 focus-visible:ring-primary/10 focus-visible:outline-none aria-invalid:border-destructive"
            />
          )}
        </FormField>
      </Fieldset>

      <Fieldset legend="About the author">
        <FormField
          id="gp-bio"
          label="Author Bio"
          hint="Two or three sentences, shown with your article if it's published."
          error={err.authorBio}
        >
          {(d) => (
            <Textarea id="gp-bio" name="authorBio" required rows={4} defaultValue={val.authorBio} aria-invalid={invalid("authorBio")} aria-describedby={d} className={cn(textareaClass, "min-h-28")} />
          )}
        </FormField>
      </Fieldset>

      <FormStatus state={state} />

      <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm text-muted-foreground">
          By submitting, you confirm the article is your own original work.
        </p>
        <Button type="submit" size="xl" disabled={pending} className="hover:bg-primary/90">
          {pending ? "Submitting…" : "Submit Guest Post"}
        </Button>
      </div>
    </form>
  );
}
