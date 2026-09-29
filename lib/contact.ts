// Contact form rules shared by the browser (instant feedback) and the server
// action (the check that counts). Keep this file free of server-only code.

import { isEmail } from "@/lib/forms";

/** Public contact address. Contact-form messages are delivered here. */
export const CONTACT_EMAIL = "lifeinitaliya@gmail.com";

export type ContactField = "name" | "email" | "subject" | "message";

export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  messageMin: 20,
  messageMax: 5000,
} as const;

export type ContactValues = Record<ContactField, string>;

/** Returns an error message for each invalid field; an empty object means the values are valid. */
export function validateContact(values: ContactValues): Partial<Record<ContactField, string>> {
  const errors: Partial<Record<ContactField, string>> = {};
  if (!values.name) errors.name = "Please enter your name.";
  else if (values.name.length > CONTACT_LIMITS.name)
    errors.name = `Please keep your name under ${CONTACT_LIMITS.name} characters.`;

  if (!values.email) errors.email = "Please enter your email address, so we can reply.";
  else if (values.email.length > CONTACT_LIMITS.email || !isEmail(values.email))
    errors.email = "Please enter a valid email address.";

  if (values.subject.length > CONTACT_LIMITS.subject)
    errors.subject = `Please keep the subject under ${CONTACT_LIMITS.subject} characters.`;

  if (values.message.length < CONTACT_LIMITS.messageMin)
    errors.message = `Please write a message of at least ${CONTACT_LIMITS.messageMin} characters.`;
  else if (values.message.length > CONTACT_LIMITS.messageMax)
    errors.message = `Please keep your message under ${CONTACT_LIMITS.messageMax} characters.`;

  return errors;
}
