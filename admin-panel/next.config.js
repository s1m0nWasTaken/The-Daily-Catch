// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove the basePath - GitHub Pages already adds the repo name
  // basePath: process.env.NODE_ENV === 'production' ? '/The-Daily-Catch' : '', 
  assetPrefix: process.env.NODE_ENV === 'production' ? '/The-Daily-Catch/' : '',
  trailingSlash: true,
}

module.exports = nextConfig