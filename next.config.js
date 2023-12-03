/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  ...withPWA({
    dest: "public",
    regsiter: true,
    skipWaiting: true,
  }),
};

module.exports = nextConfig;
