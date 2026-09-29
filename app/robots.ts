import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";
import { itRoutes, routes } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal search results add no value to search engines.
      disallow: [routes.search, itRoutes.search],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
