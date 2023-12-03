/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    regsiter: true,
    skipWaiting: true,
  }),
};

module.exports = nextConfig;
