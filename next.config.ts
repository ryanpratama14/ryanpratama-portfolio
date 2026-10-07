import type { NextConfig } from "next";

import "./src/env";

const config: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] },
  experimental: {
    agentUpgrade: "security",
  },
};

export default config;
