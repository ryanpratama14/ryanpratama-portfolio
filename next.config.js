import withPWA from "next-pwa";
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  experimental: { reactCompiler: true },
  ...withPWA({ dest: "public", register: true, skipWaiting: true }),
};

export default config;
