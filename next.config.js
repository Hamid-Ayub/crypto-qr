/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Remove experimental CSS optimization that causes critters error
};

module.exports = nextConfig; 