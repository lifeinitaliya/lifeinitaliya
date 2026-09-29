"use server";

import { isEmail, text, type FormState } from "@/lib/forms";

export async function subscribeToNewsletter(
  _prev: FormState<"email">,
  formData: FormData
): Promise<FormState<"email">> {
  const email = text(formData, "email").toLowerCase();
  const italian = text(formData, "locale") === "it";

  if (!isEmail(email)) {
    const message = italian ? "Inserisci un indirizzo email valido." : "Please enter a valid email address.";
    return {
      status: "error",
      message,
      fieldErrors: { email: message },
      values: { email },
    };
  }

  // TODO: store the subscriber (Supabase or an email provider with double
  // opt-in), then return { status: "success" }.
  return {
    status: "unavailable",
    message: italian
      ? "Le iscrizioni alla newsletter non sono ancora aperte: il tuo indirizzo non è stato salvato. Riprova più avanti."
      : "Newsletter sign-ups aren't open yet, so your email has not been saved. Please check back soon.",
    values: { email },
  };
}
