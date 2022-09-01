/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    path: '/',
    minimumCacheTTL: 60,
    disableStaticImages: true,
    deviceSizes: [320, 375, 414, 650, 768, 850, 1024, 1280, 1440, 1920, 2560, 3840],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss/')],
  },
}

module.exports = nextConfig
