"use server";

import { isEmail, text, type FormState } from "@/lib/forms";

export type ContactField = "name" | "email" | "subject" | "message";

export async function sendContactMessage(
  _prev: FormState<ContactField>,
  formData: FormData
): Promise<FormState<ContactField>> {
  const values = {
    name: text(formData, "name"),
    email: text(formData, "email"),
    subject: text(formData, "subject"),
    message: text(formData, "message"),
  };

  const fieldErrors: FormState<ContactField>["fieldErrors"] = {};
  if (!values.name) fieldErrors.name = "Please enter your name.";
  if (!isEmail(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (!values.subject) fieldErrors.subject = "Please add a subject.";
  if (values.message.length < 20)
    fieldErrors.message = "Please write a message of at least 20 characters.";

  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  // TODO: deliver the message (e.g. insert into a Supabase `contact_messages`
  // table and notify the team), then return { status: "success" }.
  return {
    status: "unavailable",
    message:
      "Your message is ready, but our contact system isn't connected yet, so it has not been sent. Please try again soon.",
    values,
  };
}
