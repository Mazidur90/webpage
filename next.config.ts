import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/webpage",
  assetPrefix: "/webpage",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
