import { useMemo, useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import { fetchWeatherInfo } from './features/weather/weatherService'
import { fetchLatestNews } from './features/news/newsService'
import { fetchRates } from './features/rates/ratesService'
import { createGestureController } from './integrations/gesture/gestureController'
import { createVoiceController } from './integrations/voice/voiceController'

function App() {
  const [country, setCountry] = useState('India')
  const [baseCurrency, setBaseCurrency] = useState('USD')
  const [weather, setWeather] = useState(null)
  const [news, setNews] = useState(null)
  const [rates, setRates] = useState(null)
  const [gestureStatus, setGestureStatus] = useState('idle')
  const [voiceStatus, setVoiceStatus] = useState('idle')
  const [lastGesture, setLastGesture] = useState('none')
  const [lastVoiceCommand, setLastVoiceCommand] = useState('none')

  const gestureController = useMemo(
    () => createGestureController((gesture) => setLastGesture(gesture)),
    [],
  )

  const voiceController = useMemo(
    () => createVoiceController((command) => setLastVoiceCommand(command)),
    [],
  )

  const loadTaskData = async () => {
    const [weatherData, newsData, ratesData] = await Promise.all([
      fetchWeatherInfo(country),
      fetchLatestNews(country),
      fetchRates(baseCurrency),
    ])

    setWeather(weatherData)
    setNews(newsData)
    setRates(ratesData)
  }

  return (
    <main className="app-shell">
      <header>
        <h1>Interactive App Scaffold</h1>
        <p>
          Starter web app for gesture + voice controlled workflows (weather, news,
          and gold/exchange rates).
        </p>
      </header>

      <section className="control-row">
        <label>
          Country
          <input
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            placeholder="India"
          />
        </label>
        <label>
          Base currency
          <input
            value={baseCurrency}
            onChange={(event) => setBaseCurrency(event.target.value.toUpperCase())}
            placeholder="USD"
            maxLength={3}
          />
        </label>
        <button type="button" onClick={loadTaskData}>
          Load placeholder task data
        </button>
      </section>

      <section className="task-grid">
        <TaskCard
          title="Weather info"
          description="Task placeholder for country-based weather queries."
          details={[
            `Country: ${weather?.country ?? country}`,
            `Summary: ${weather?.summary ?? 'Not loaded'}`,
            `Temperature: ${weather?.temperatureC ?? '--'} °C`,
          ]}
        />
        <TaskCard
          title="Latest news"
          description="Task placeholder for country-specific latest news feed."
          details={[
            `Country: ${news?.country ?? country}`,
            `Headline: ${news?.headline ?? 'Not loaded'}`,
            `Source: ${news?.source ?? 'N/A'}`,
          ]}
        />
        <TaskCard
          title="Gold and exchange rates"
          description="Task placeholder for live gold and forex integration."
          details={[
            `Base currency: ${rates?.baseCurrency ?? baseCurrency}`,
            `Gold per gram: ${rates?.goldPerGram ?? '--'}`,
            `Exchange rate: ${rates?.exchangeRate ?? '1.00'}`,
          ]}
        />
      </section>

      <section className="integration-grid">
        <article className="integration-card">
          <h2>Gesture integration stub</h2>
          <p>Status: {gestureStatus}</p>
          <p>Last gesture: {lastGesture}</p>
          <div>
            <button
              type="button"
              onClick={() => setGestureStatus(gestureController.start())}
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => setGestureStatus(gestureController.stop())}
            >
              Stop
            </button>
            <button
              type="button"
              onClick={() => gestureController.simulateGesture('swipe_left')}
            >
              Simulate swipe_left
            </button>
          </div>
        </article>

        <article className="integration-card">
          <h2>Voice integration stub</h2>
          <p>Status: {voiceStatus}</p>
          <p>Last command: {lastVoiceCommand}</p>
          <div>
            <button
              type="button"
              onClick={() => setVoiceStatus(voiceController.start())}
            >
              Start
            </button>
            <button
              type="button"
              onClick={() => setVoiceStatus(voiceController.stop())}
            >
              Stop
            </button>
            <button
              type="button"
              onClick={() => voiceController.simulateCommand('show latest news')}
            >
              Simulate command
            </button>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
