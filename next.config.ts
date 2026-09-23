import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      // Guest-post submissions include a featured image of up to 5 MB.
      bodySizeLimit: "6mb",
    },
  },
};

export default nextConfig;
