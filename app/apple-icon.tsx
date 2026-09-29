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
          background: "#171717",
          color: "#ffffff",
          fontFamily: "Inter",
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>
          Li
        </div>
        <div
          style={{
            width: 56,
            height: 8,
            marginTop: 10,
            borderRadius: 4,
            background: "#3157d5",
          }}
        />
      </div>
    ),
    { ...size, fonts: await loadBrandFonts() }
  );
}
