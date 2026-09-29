import { notFound } from "next/navigation";

// Retired before launch: the guest-post form isn't connected to any backend
// (see lib/actions/guest-post.ts). Returns 404 until it is; the previous page
// and GuestPostForm remain in git history and components/forms.
export default function SubmitGuestPostPage() {
  notFound();
}
