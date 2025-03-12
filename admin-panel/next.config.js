// admin-panel/next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use this if deploying to a custom domain or GitHub Pages subdirectory
  basePath: process.env.NODE_ENV === 'production' ? '/The-Daily-Catch' : '',
  trailingSlash: true,
}

module.exports = nextConfig