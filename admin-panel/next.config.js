// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath - GitHub Actions deployment doesn't need it
  // basePath: process.env.NODE_ENV === 'production' ? '/The-Daily-Catch' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  trailingSlash: true,
}

module.exports = nextConfig