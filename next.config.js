/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles/scss/')],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    minimumCacheTTL: 60,
    disableStaticImages: true,
    deviceSizes: [320, 375, 414, 650, 768, 850, 1024, 1280, 1440, 1920, 2560, 3840],
  },
}

module.exports = nextConfig
