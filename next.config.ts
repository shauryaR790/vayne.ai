import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the workspace root to this project to avoid lockfile auto-detection
    // picking a parent directory.
    root: __dirname,
  },
};

export default nextConfig;
