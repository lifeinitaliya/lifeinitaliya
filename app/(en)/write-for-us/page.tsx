import { notFound } from "next/navigation";

// Retired before launch: guest submissions aren't connected to any backend, so
// the page invited submissions that could not be sent. It returns 404 until
// the submission pipeline exists; the previous page is in git history.
export default function WriteForUsPage() {
  notFound();
}
