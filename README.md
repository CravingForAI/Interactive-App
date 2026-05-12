# Interactive App (React + Vite Scaffold)

This repository contains an initial React.js web app scaffold for an interactive assistant controlled by **hand gestures** and **voice commands**.

## Included task placeholders

- Weather info by country
- Latest news by country
- Gold rates and exchange rates

## Included integration placeholders

- Gesture controller stub (`src/integrations/gesture/gestureController.js`)
- Voice controller stub (`src/integrations/voice/voiceController.js`)

These modules are intentionally simple so real providers (camera gesture model, speech-to-text, weather/news/forex APIs) can be connected later.

## Project structure

```text
src/
  components/
    TaskCard.jsx
  features/
    weather/weatherService.js
    news/newsService.js
    rates/ratesService.js
  integrations/
    gesture/gestureController.js
    voice/voiceController.js
  App.jsx
  App.css
  index.css
```

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the app:
   ```bash
   npm run dev
   ```
3. Open the shown local URL (typically `http://localhost:5173`).

## Validation commands

```bash
npm run lint
npm run build
```

## Next implementation hooks

- Replace `fetchWeatherInfo`, `fetchLatestNews`, and `fetchRates` with real API integrations.
- Wire browser/device gesture detection to `createGestureController` callbacks.
- Wire speech recognition + intent parsing to `createVoiceController` callbacks.
