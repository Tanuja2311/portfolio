import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats first; browser picks the best it supports
    formats: ["image/avif", "image/webp"],
    // Standard breakpoints + 2× retina variants
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
