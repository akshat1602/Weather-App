# Weather-App

Weather-App is a responsive React weather application built with Vite and Material UI. It lets users search any city or use their current location to view live weather data from the OpenWeather API in a clean and modern interface.

## Live Demo

[View the live app](https://akshat1602.github.io/Weather-App/)

## Features

- Search weather by city name.
- Use current location to fetch local weather.
- Display temperature in Celsius.
- Show humidity, wind speed, min temp, max temp, and feels-like temperature.
- Dynamic weather-based card styling and background.
- Dark mode and light mode support.
- Recent searches saved in local storage.
- Clear recent search history.
- 5-day weather forecast.
- Loading state while fetching data.
- Error messages for invalid cities or location issues.
- Responsive design for desktop and mobile.
- Deployed on GitHub Pages.

## Tech Stack

- React
- Vite
- Material UI
- OpenWeather API
- localStorage
- Geolocation API
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- An OpenWeather API key.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/akshat1602/Weather-App.git
```

2. Go to the project folder:
```bash
cd Weather-App
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your API key:
```env
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

## Usage

1. Open the app in your browser.
2. Enter a city name and click **Search**, or click **Use My Location**.
3. View the weather details for that place.
4. Switch between dark mode and light mode using the theme toggle.
5. Click any recent search chip to quickly open that city again.
6. Use the clear history button to remove saved recent searches.

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

This project is deployed using `gh-pages`.

```bash
npm run deploy
```

After deployment, the live app is available at:

`https://akshat1602.github.io/Weather-App/`

## Project Structure

```bash
src/
  App.jsx
  App.css
  WeatherApp.jsx
  SearchBox.jsx
  SearchBox.css
  ForecastBox.jsx
  ForecastBox.css
  InfoBox.jsx
  InfoBox.css
  index.css
  main.jsx
```

## Environment Variables

This project uses one environment variable:

- `VITE_OPENWEATHER_API_KEY` — your OpenWeather API key used to fetch weather data.

## API Data Used

The app uses OpenWeather current weather data and forecast data, including:
- city name,
- temperature,
- humidity,
- wind speed,
- minimum temperature,
- maximum temperature,
- feels-like temperature,
- weather description,
- 5-day forecast grouped from 3-hour forecast data. [web:220][web:704][web:564]

## Notes

- Do not commit your `.env` file to GitHub.
- If you change your GitHub repository name, update the `base` path in `vite.config.js`.
- Make sure the OpenWeather API key is active before running the app.
- If geolocation is blocked by the browser, the location feature may not work.
- The 5-day forecast is built from OpenWeather’s 3-hour step forecast data, so it is summarized into daily cards. [web:704][web:564][web:643]

## Preview

<img width="1891" height="908" alt="image" src="https://github.com/user-attachments/assets/e8cbf007-fdb1-4312-8b09-59889b69b173" />

<img width="1893" height="911" alt="image" src="https://github.com/user-attachments/assets/d2ca02e5-babe-42a0-ae70-ac32de71ee71" />
