"use client";

import { useActionState } from "react";

import { FormField, fieldClass, textareaClass } from "@/components/forms/FormField";
import { FormStatus } from "@/components/forms/FormStatus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage, type ContactField } from "@/lib/actions/contact";
import type { FormState } from "@/lib/forms";

const initialState: FormState<ContactField> = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const err = state.fieldErrors ?? {};
  const val = state.values ?? {};

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="contact-name" label="Name" error={err.name}>
          {(describedBy) => (
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              defaultValue={val.name}
              aria-invalid={Boolean(err.name) || undefined}
              aria-describedby={describedBy}
              className={fieldClass}
            />
          )}
        </FormField>
        <FormField id="contact-email" label="Email" error={err.email}>
          {(describedBy) => (
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={val.email}
              aria-invalid={Boolean(err.email) || undefined}
              aria-describedby={describedBy}
              className={fieldClass}
            />
          )}
        </FormField>
      </div>
      <FormField id="contact-subject" label="Subject" error={err.subject}>
        {(describedBy) => (
          <Input
            id="contact-subject"
            name="subject"
            required
            defaultValue={val.subject}
            aria-invalid={Boolean(err.subject) || undefined}
            aria-describedby={describedBy}
            className={fieldClass}
          />
        )}
      </FormField>
      <FormField id="contact-message" label="Message" error={err.message}>
        {(describedBy) => (
          <Textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            defaultValue={val.message}
            aria-invalid={Boolean(err.message) || undefined}
            aria-describedby={describedBy}
            className={textareaClass}
          />
        )}
      </FormField>

      <FormStatus state={state} />

      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We are working on connecting our contact system.
        </p>
        <Button
          type="submit"
          size="xl"
          disabled={pending}
          className="hover:bg-primary/90 sm:w-auto"
        >
          {pending ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
