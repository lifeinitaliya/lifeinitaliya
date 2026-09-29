import { notFound } from "next/navigation";

// Retired before launch: the listings here were sample data, not real events.
// The page returns 404 until real event listings are connected. The previous
// implementation is in git history (EventCard and getEvents are unchanged).
export default function EventsPage() {
  notFound();
}
