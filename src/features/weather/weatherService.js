export async function fetchWeatherInfo(country = 'India') {
  return {
    country,
    summary: 'Weather service stub: connect your weather API provider here.',
    temperatureC: '--',
    updatedAt: new Date().toISOString(),
  }
}
