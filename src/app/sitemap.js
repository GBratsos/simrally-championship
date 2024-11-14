export default function sitemap() {
  return [
    {
      url: 'https://erally.rallydiaries.eu',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://erally.rallydiaries.eu/season-information',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://erally.rallydiaries.eu/erally-championship-information',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
