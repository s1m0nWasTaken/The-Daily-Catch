// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Restore basePath - we DO need it for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/The-Daily-Catch' : '',
  // Fix assetPrefix to match the repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/The-Daily-Catch' : '',
  trailingSlash: true,
}

module.exports = nextConfig