import { writeFileSync } from "fs";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="liBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1F242D" />
      <stop offset="50%" stop-color="#14171E" />
      <stop offset="100%" stop-color="#0B0D11" />
    </linearGradient>
    <linearGradient id="liSun" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <linearGradient id="liAzzurro" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#2563EB" />
    </linearGradient>
    <linearGradient id="liVerde" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22C55E" />
      <stop offset="100%" stop-color="#16A34A" />
    </linearGradient>
    <linearGradient id="liRosso" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#EF4444" />
      <stop offset="100%" stop-color="#DC2626" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Outer Rounded Arch Badge -->
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#liBg)" />
  <rect x="2" y="2" width="60" height="60" rx="16" stroke="#374151" stroke-width="1.2" stroke-opacity="0.6" />

  <!-- Italian Tricolor Pips (Top Crown) -->
  <circle cx="23" cy="11" r="2.2" fill="url(#liVerde)" />
  <circle cx="32" cy="11" r="2.2" fill="#F8FAFC" />
  <circle cx="41" cy="11" r="2.2" fill="url(#liRosso)" />

  <!-- Roman Arch Portal Frame -->
  <path d="M16 48 V27 C16 18.163 23.163 11 32 11 C40.837 11 48 18.163 48 27 V48" stroke="#E5E7EB" stroke-width="1.2" stroke-opacity="0.25" stroke-dasharray="2 2" />

  <!-- Radiant Tuscan Sun -->
  <circle cx="32" cy="23" r="6" fill="url(#liSun)" filter="url(#glow)" />

  <!-- Monogram "L" and "I" (Life in Italia) -->
  <!-- "L" -->
  <path d="M18 26 H23.5 V41.5 H32.5 V46 H18 Z" fill="#FFFFFF" />
  <!-- "I" -->
  <path d="M37.5 26 H43 V46 H37.5 Z" fill="#FFFFFF" />

  <!-- Mediterranean Blue Baseline Accent -->
  <rect x="18" y="49" width="25" height="3" rx="1.5" fill="url(#liAzzurro)" />
</svg>
`;

writeFileSync("public/test-logo.svg", svg);
console.log("SVG written successfully");
