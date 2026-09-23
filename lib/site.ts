export const siteConfig = {
  name: "BS Insights",
  title: "BS Insights — Practical Knowledge, Clearly Explained",
  tagline: "Practical knowledge. Clearly explained.",
  description:
    "Discover practical guides, useful insights, and well-researched information on travel, technology, education, lifestyle, and more.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bsinsights.com",
  locale: "en_US",
} as const;

export interface NavLink {
  label: string;
  href: string;
  /** Extra path prefixes that should mark this link as active. */
  activePrefixes?: string[];
}

export const routes = {
  home: "/",
  guides: "/guides",
  guide: (slug: string) => `/guides/${slug}`,
  categories: "/categories",
  category: (slug: string) => `/category/${slug}`,
  topics: "/topics",
  topic: (slug: string) => `/topic/${slug}`,
  authors: "/authors",
  author: (slug: string) => `/author/${slug}`,
  search: "/search",
  about: "/about",
  contact: "/contact",
  writeForUs: "/write-for-us",
  submitGuestPost: "/write-for-us/submit",
  editorialPolicy: "/editorial-policy",
  privacyPolicy: "/privacy-policy",
  terms: "/terms-and-conditions",
  disclaimer: "/disclaimer",
  cookiePolicy: "/cookie-policy",
} as const;

export const mainNav: NavLink[] = [
  { label: "Guides", href: routes.guides },
  { label: "Categories", href: routes.categories, activePrefixes: ["/category"] },
  { label: "Topics", href: routes.topics, activePrefixes: ["/topic"] },
  { label: "About", href: routes.about },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Guides", href: routes.guides },
      { label: "Categories", href: routes.categories },
      { label: "Topics", href: routes.topics },
      { label: "Authors", href: routes.authors },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: routes.about },
      { label: "Contact", href: routes.contact },
      { label: "Write for Us", href: routes.writeForUs },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: routes.privacyPolicy },
      { label: "Terms", href: routes.terms },
      { label: "Disclaimer", href: routes.disclaimer },
      { label: "Cookie Policy", href: routes.cookiePolicy },
      { label: "Editorial Policy", href: routes.editorialPolicy },
    ],
  },
];
