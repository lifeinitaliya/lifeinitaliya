"use server";

export interface NewsletterState {
  status: "idle" | "success" | "error";
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // TODO: persist the subscriber (e.g. Supabase `newsletter_subscribers` table
  // or an email provider) once the backend is connected.

  return {
    status: "success",
    message: "Thanks! Please check your inbox to confirm your subscription.",
  };
}
