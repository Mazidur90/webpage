import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/webpage",
  assetPrefix: "/webpage",
  images: {
    unoptimized: true, // Required for next/image on GitHub Pages/Static Exports
  },
};

export default nextConfig;
