/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/assets/Logo_Only.png',
        destination: '/assets/Logo.JPG',
      },
    ];
  },
}

module.exports = nextConfig

