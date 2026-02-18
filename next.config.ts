import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Cloudflare Pages compatible output - static export
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
