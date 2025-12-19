import type { NextConfig } from "next";
import "./src/env.js";

const config: NextConfig = {
  reactCompiler: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] },
};

export default config;
