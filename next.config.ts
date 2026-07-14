import type { NextConfig } from "next";

import "./src/env";

const config: NextConfig = {
  reactCompiler: true,
  images: { remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }] },
  experimental: { useTypeScriptCli: true },
};

export default config;
