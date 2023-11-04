/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    resgiter: true,
    skipWaiting: true,
  }),
};

module.exports = nextConfig;
