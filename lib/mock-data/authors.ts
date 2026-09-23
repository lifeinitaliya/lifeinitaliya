import type { Author } from "@/lib/types";

// Mock contributors. Guest author entries are placeholders for layout only.
export const authors: Author[] = [
  {
    slug: "bareera",
    name: "Bareera",
    role: "Founder & Editor",
    shortBio:
      "Writes about technology, practical guides, digital products and everyday topics.",
    bio: "Bareera founded BS Insights and edits its guides, writing about technology, practical guides, digital products and everyday topics.",
    interests: ["Technology", "Practical guides", "Digital products", "Everyday topics"],
  },
  {
    slug: "editorial-team",
    name: "BS Insights Editorial Team",
    role: "Editorial Team",
    shortBio: "Researches, writes and updates guides across every BS Insights category.",
    bio: "Guides credited to the editorial team are researched, written and maintained collaboratively by BS Insights editors.",
    interests: ["Travel", "Finance", "How-To", "Lifestyle"],
  },
  {
    slug: "sara-malik",
    name: "Sara Malik",
    role: "Guest Author",
    shortBio: "Writes about trip planning and travelling on a budget.",
    bio: "Sara is a guest author who writes about trip planning and travelling on a budget.",
    interests: ["Travel planning", "Budget travel", "Europe"],
  },
  {
    slug: "daniel-reyes",
    name: "Daniel Reyes",
    role: "Guest Author",
    shortBio: "Writes about study habits, online learning and early careers.",
    bio: "Daniel is a guest author who writes about study habits, online learning and starting out in a career.",
    interests: ["Study tips", "Online learning", "Careers"],
  },
];
