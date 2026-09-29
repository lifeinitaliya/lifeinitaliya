"use server";

import { categories } from "@/data/categories";
import { isEmail, isHttpUrl, text, wordCount, type FormState } from "@/lib/forms";

export type GuestPostField =
  | "fullName"
  | "email"
  | "website"
  | "socialProfile"
  | "title"
  | "category"
  | "content"
  | "authorBio"
  | "featuredImage";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MIN_WORDS = 300;

export async function submitGuestPost(
  _prev: FormState<GuestPostField>,
  formData: FormData
): Promise<FormState<GuestPostField>> {
  const values = {
    fullName: text(formData, "fullName"),
    email: text(formData, "email"),
    website: text(formData, "website"),
    socialProfile: text(formData, "socialProfile"),
    title: text(formData, "title"),
    category: text(formData, "category"),
    content: text(formData, "content"),
    authorBio: text(formData, "authorBio"),
  };
  const image = formData.get("featuredImage");

  const fieldErrors: FormState<GuestPostField>["fieldErrors"] = {};
  if (!values.fullName) fieldErrors.fullName = "Please enter your full name.";
  if (!isEmail(values.email)) fieldErrors.email = "Please enter a valid email address.";
  if (values.website && !isHttpUrl(values.website))
    fieldErrors.website = "Please enter a full URL, starting with https://";
  if (values.socialProfile && !isHttpUrl(values.socialProfile))
    fieldErrors.socialProfile = "Please enter a full URL, starting with https://";
  if (values.title.length < 10) fieldErrors.title = "Please enter a descriptive title.";
  if (!categories.some((c) => c.slug === values.category))
    fieldErrors.category = "Please choose a category.";
  if (wordCount(values.content) < MIN_WORDS)
    fieldErrors.content = `Articles should be at least ${MIN_WORDS} words (currently ${wordCount(values.content)}).`;
  if (values.authorBio.length < 30)
    fieldErrors.authorBio = "Please write a short bio of at least 30 characters.";
  if (image instanceof File && image.size > 0) {
    if (!image.type.startsWith("image/"))
      fieldErrors.featuredImage = "Please upload an image file (JPG, PNG or WebP).";
    else if (image.size > MAX_IMAGE_BYTES)
      fieldErrors.featuredImage = "Images must be 5 MB or smaller.";
  }

  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "Please check the highlighted fields.", fieldErrors, values };
  }

  // TODO: store the submission (Supabase `guest_submissions` table and the
  // image in Supabase Storage), notify editors, then return { status: "success" }.
  return {
    status: "unavailable",
    message:
      "Your submission passed our checks, but online submissions aren't connected yet, so it has not been sent. Please keep a copy and try again soon.",
    values,
  };
}
