/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export
  images: {
    domains: [], // Add if you have external image domains
  },
};

module.exports = nextConfig;  