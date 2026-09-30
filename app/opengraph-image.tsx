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
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 80,
              height: 80,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 20,
              background: "#12161f",
              color: "#ffffff",
              position: "relative",
              padding: 8,
            }}
          >
            {/* Tricolor dots */}
            <div
              style={{
                display: "flex",
                gap: 5,
                marginBottom: 3,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#f8fafc" }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#dc2626" }} />
            </div>
            {/* Tuscan Sun */}
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#f59e0b",
                marginBottom: 2,
              }}
            />
            {/* LI */}
            <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 1, lineHeight: 1 }}>
              LI
            </div>
            {/* Azzurro Blue bar */}
            <div
              style={{
                width: 32,
                height: 3,
                marginTop: 4,
                borderRadius: 2,
                background: "#2563eb",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: 5 }}>
              LIFE IN ITALIA
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: 3, color: "#666666", textTransform: "uppercase" }}>
              Editorial &amp; Guides
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            Italy, in one place.
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: -1,
              lineHeight: 1.2,
              color: "#666666",
            }}
          >
            Practical travel guides, city culture and Italian food.
          </div>
          <div
            style={{
              marginTop: 32,
              width: 140,
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

