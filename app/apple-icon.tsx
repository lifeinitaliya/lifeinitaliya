import { ImageResponse } from "next/og";

import { loadBrandFonts } from "@/lib/og-fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#11141a",
          color: "#ffffff",
          fontFamily: "Inter",
          position: "relative",
          padding: 16,
        }}
      >
        {/* Italian Tricolor Dots */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#16a34a",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f8fafc",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#dc2626",
            }}
          />
        </div>

        {/* Tuscan Sun */}
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "linear-gradient(180deg, #FCD34D 0%, #F59E0B 100%)",
            marginBottom: 4,
          }}
        />

        {/* Monogram LI */}
        <div
          style={{
            fontSize: 62,
            fontWeight: 800,
            letterSpacing: 2,
            lineHeight: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          LI
        </div>

        {/* Azzurro Blue Horizon Bar */}
        <div
          style={{
            width: 68,
            height: 6,
            marginTop: 10,
            borderRadius: 3,
            background: "#2563eb",
          }}
        />
      </div>
    ),
    { ...size, fonts: await loadBrandFonts() }
  );
}

