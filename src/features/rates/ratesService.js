export async function fetchRates(baseCurrency = 'USD') {
  return {
    baseCurrency,
    goldPerGram: '--',
    exchangeRate: '1.00',
    note: 'Rates service stub: integrate live gold and forex data source.',
    updatedAt: new Date().toISOString(),
  }
}
