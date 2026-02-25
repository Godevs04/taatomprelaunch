/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/app-ads.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=3600' },
        ],
      },
    ];
  },
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

