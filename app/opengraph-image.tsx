import { ImageResponse } from "next/og";

import { loadBrandFonts } from "@/lib/og-fonts";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fafaf7",
          color: "#171717",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 64,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 14,
              background: "#171717",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            Li
            <div
              style={{
                width: 24,
                height: 4,
                marginTop: 4,
                borderRadius: 2,
                background: "#3157d5",
              }}
            />
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 7 }}>
            LIFE IN ITALIA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Italy, in one place.
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 40,
              fontWeight: 600,
              letterSpacing: -1,
              lineHeight: 1.2,
              color: "#666666",
            }}
          >
            Practical travel guides, cities and food.
          </div>
          <div
            style={{
              marginTop: 32,
              width: 120,
              height: 6,
              borderRadius: 3,
              background: "#3157d5",
            }}
          />
        </div>
      </div>
    ),
    { ...size, fonts: await loadBrandFonts() }
  );
}
