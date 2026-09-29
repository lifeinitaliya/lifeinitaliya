"use client";

import { useActionState, useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";

import { FormField, fieldClass, textareaClass } from "@/components/forms/FormField";
import { FormStatus } from "@/components/forms/FormStatus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactMessage } from "@/lib/actions/contact";
import { CONTACT_LIMITS, validateContact, type ContactField, type ContactValues } from "@/lib/contact";
import type { FormState } from "@/lib/forms";
import { routes } from "@/lib/site";

const initialState: FormState<ContactField> = { status: "idle", message: "" };
const fields: ContactField[] = ["name", "email", "subject", "message"];

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);
  const [clientErrors, setClientErrors] = useState<Partial<Record<ContactField, string>> | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Clear the form only once the server has confirmed the message was sent.
  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const err = clientErrors ?? state.fieldErrors ?? {};
  const val = state.status === "success" ? {} : (state.values ?? {});

  // Instant feedback in the browser; the server validates everything again.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(
      fields.map((f) => [f, String(data.get(f) ?? "").trim()])
    ) as ContactValues;
    const errors = validateContact(values);
    if (Object.keys(errors).length) {
      event.preventDefault();
      setClientErrors(errors);
      const first = fields.find((f) => errors[f]);
      if (first) event.currentTarget.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setClientErrors(null);
  }

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="contact-name" label="Name" error={err.name}>
          {(describedBy) => (
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={CONTACT_LIMITS.name}
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
              maxLength={CONTACT_LIMITS.email}
              defaultValue={val.email}
              aria-invalid={Boolean(err.email) || undefined}
              aria-describedby={describedBy}
              className={fieldClass}
            />
          )}
        </FormField>
      </div>
      <FormField id="contact-subject" label="Subject" optional error={err.subject}>
        {(describedBy) => (
          <Input
            id="contact-subject"
            name="subject"
            maxLength={CONTACT_LIMITS.subject}
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
            maxLength={CONTACT_LIMITS.messageMax}
            defaultValue={val.message}
            aria-invalid={Boolean(err.message) || undefined}
            aria-describedby={describedBy}
            className={textareaClass}
          />
        )}
      </FormField>

      {/* Spam trap: hidden from people and assistive technology; bots tend to fill it in. */}
      <div aria-hidden className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <FormStatus state={clientErrors ? { status: "error", message: "Please check the highlighted fields." } : state} />

      <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          We use your details only to reply to you. See our{" "}
          <Link href={routes.privacyPolicy} className="font-medium text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <Button
          type="submit"
          size="xl"
          disabled={pending}
          aria-disabled={pending}
          className="hover:bg-primary/90 sm:w-auto"
        >
          {pending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
