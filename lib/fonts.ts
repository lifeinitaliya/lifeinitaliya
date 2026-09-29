import { DM_Serif_Display, Inter } from "next/font/google";

// Shared by the English and Italian root layouts.

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Editorial display face for headlines. Single weight keeps it light.
export const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
