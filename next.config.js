import createNextIntlPlugin from "next-intl/plugin";
import withPWA from "next-pwa";
await import("./src/env.js");

const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const config = { ...withPWA({ dest: "public", register: true, skipWaiting: true }) };

export default withNextIntl(config);
