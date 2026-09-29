"use server";

import { headers } from "next/headers";

import { CONTACT_EMAIL, validateContact, type ContactField, type ContactValues } from "@/lib/contact";
import { text, type FormState } from "@/lib/forms";
import { siteConfig } from "@/lib/site";

// Contact form delivery: browser → this Server Action → Resend → CONTACT_EMAIL.
// RESEND_API_KEY and RESEND_FROM_EMAIL are server-only environment variables;
// never expose them with a NEXT_PUBLIC_ prefix. RESEND_FROM_EMAIL must use a
// domain verified in Resend, e.g. "Life in Italia <contact@your-domain>".

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const HONEYPOT_FIELD = "website";

const SENT_MESSAGE = `Thanks for contacting ${siteConfig.name}. Your message has been sent successfully.`;
const FAILED_MESSAGE = `We couldn't send your message right now. Please try again in a few minutes or contact us directly at ${CONTACT_EMAIL}.`;

// Basic abuse protection: a few messages per address per window. Kept in
// memory, so it applies per server instance and resets on restart.
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recent = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const hits = (recent.get(key) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (hits.length >= RATE_LIMIT.max) {
    recent.set(key, hits);
    return true;
  }
  hits.push(now);
  recent.set(key, hits);
  if (recent.size > 5000) recent.clear();
  return false;
}

/** Single-line values (name, subject): no line breaks or control characters, so they can't inject headers. */
const singleLine = (value: string) => value.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim();

/** Message body: keeps line breaks, drops other control characters. */
const multiLine = (value: string) =>
  value.replace(/\r\n?/g, "\n").replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, "").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function buildEmail(values: ContactValues) {
  const subjectLine = values.subject || "No subject";
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Subject", subjectLine],
  ];
  const plain = [
    `New contact message from ${siteConfig.name}`,
    "",
    ...rows.map(([label, value]) => `${label}:\n${value}\n`),
    "Message:",
    "",
    values.message,
    "",
    "---",
    `Submitted from: ${siteConfig.url}/contact`,
  ].join("\n");
  const html = `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#171717;line-height:1.5">
<p style="font-size:16px;font-weight:bold">New contact message from ${escapeHtml(siteConfig.name)}</p>
${rows.map(([label, value]) => `<p><strong>${label}:</strong><br>${escapeHtml(value)}</p>`).join("\n")}
<p><strong>Message:</strong></p>
<div style="white-space:pre-wrap">${escapeHtml(values.message)}</div>
<hr><p style="color:#666;font-size:13px">Submitted from: ${escapeHtml(`${siteConfig.url}/contact`)}</p>
</body></html>`;
  return {
    subject: `[${siteConfig.name} Contact] ${subjectLine}`.slice(0, 200),
    text: plain,
    html,
  };
}

export async function sendContactMessage(
  _prev: FormState<ContactField>,
  formData: FormData
): Promise<FormState<ContactField>> {
  const values: ContactValues = {
    name: singleLine(text(formData, "name")),
    email: singleLine(text(formData, "email")),
    subject: singleLine(text(formData, "subject")),
    message: multiLine(text(formData, "message")),
  };

  // Honeypot: people never see this field, so anything in it came from a bot.
  // Answer as if the message was sent, without sending anything.
  if (text(formData, HONEYPOT_FIELD)) {
    console.warn("[contact] submission discarded: honeypot field filled");
    return { status: "success", message: SENT_MESSAGE };
  }

  const fieldErrors = validateContact(values);
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  const requestHeaders = await headers();
  const client =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(client)) {
    console.warn("[contact] submission rejected: rate limit reached");
    return {
      status: "error",
      message: `You've sent several messages in a short time. Please wait a few minutes and try again, or email us at ${CONTACT_EMAIL}.`,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("[contact] email delivery is not configured: set RESEND_API_KEY and RESEND_FROM_EMAIL");
    return { status: "error", message: FAILED_MESSAGE, values };
  }

  const email = buildEmail(values);
  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [CONTACT_EMAIL],
        reply_to: values.email,
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    if (!response.ok) {
      // Log the provider's error type only — never the message content or the key.
      const detail = await response.json().catch(() => null);
      console.error(`[contact] Resend rejected the message: HTTP ${response.status} ${detail?.name ?? ""}`.trim());
      return { status: "error", message: FAILED_MESSAGE, values };
    }
  } catch (error) {
    console.error(`[contact] could not reach Resend: ${error instanceof Error ? error.name : "unknown error"}`);
    return { status: "error", message: FAILED_MESSAGE, values };
  }

  return { status: "success", message: SENT_MESSAGE };
}
