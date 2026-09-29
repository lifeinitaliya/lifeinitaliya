import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      // Sections replaced the old category pages.
      { source: "/categories", destination: "/", permanent: true },
      { source: "/category/:slug", destination: "/:slug", permanent: true },
      // The short Galleria article was merged into the Milan guide, which covers it.
      {
        source: "/culture/galleria-vittorio-emanuele",
        destination: "/cities/milan-beyond-the-duomo",
        statusCode: 301,
      },
    ];
  },
  experimental: {
    // English and Italian use separate root layouts, so unmatched URLs need
    // an app-wide 404 (app/global-not-found.tsx).
    globalNotFound: true,
    // Server Actions keep Next's default 1 MB request limit: the contact form
    // (the only live form) sends at most a few kilobytes.
  },
};

export default nextConfig;
