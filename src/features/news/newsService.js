export async function fetchLatestNews(country = 'India') {
  return {
    country,
    headline: 'News service stub: plug in your preferred news API here.',
    source: 'Pending integration',
    updatedAt: new Date().toISOString(),
  }
}
