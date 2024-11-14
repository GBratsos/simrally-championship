export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://erally.rallydiaries.eu/sitemap.xml',
  }
}
