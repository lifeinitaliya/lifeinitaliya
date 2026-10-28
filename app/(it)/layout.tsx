import type { Metadata, Viewport } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { TopicNav } from "@/components/layout/TopicNav";
import { dmSerif, inter } from "@/lib/fonts";
import { defaultShareImage } from "@/lib/seo";
import { itSite } from "@/lib/site-it";
import { siteConfig } from "@/lib/site";
import "../globals.css";

// Root layout for the Italian edition (/it). A separate root layout lets the
// document declare lang="it"; moving between languages is a full page load.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: itSite.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: itSite.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "it_IT",
    url: "/it",
    title: itSite.title,
    description: itSite.description,
    images: [defaultShareImage("it")],
  },
  twitter: {
    card: "summary_large_image",
    title: itSite.title,
    description: itSite.description,
    images: [defaultShareImage("it")],
  },
  // Allows large image previews (e.g. in Google Discover); pages marked
  // noindex set their own robots metadata.
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
};

export default function ItalianRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${inter.variable} ${dmSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only z-50 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Vai al contenuto
        </a>
        <Header locale="it" />
        <TopicNav locale="it" />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale="it" />
      </body>
    </html>
  );
}
