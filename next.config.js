/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/unicorner',
  assetPrefix: '/unicorner/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
