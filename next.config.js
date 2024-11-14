/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  output: 'export',
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss/')],
  },
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
  },
  // images: {
  //   minimumCacheTTL: 60,
  //   disableStaticImages: true,
  //   deviceSizes: [320, 375, 414, 650, 768, 850, 1024, 1280, 1440, 1920, 2560, 3840],
  // },
}

module.exports = nextConfig
