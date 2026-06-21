# Weather-App

Weather-App is a responsive React weather app built with Vite and Material UI. It lets users search any city or use their current location to view live weather data from the OpenWeather API in a clean and modern interface.

## Live Demo

[View the live app](https://akshat1602.github.io/Weather-App/)

## Repository Details

This repository contains a weather application that fetches live weather data and displays it in a visually appealing card layout. The app updates its styling based on weather conditions and stores recent searches in the browser for a smoother user experience.

It is a small but polished project that demonstrates API integration, state management, local storage, geolocation, and responsive UI design.

## Features

- Search weather by city name.
- Use current location to fetch local weather.
- Display temperature in Celsius.
- Show humidity, wind speed, min temp, max temp, and feels-like temperature.
- Dynamic weather-based card styling and background.
- Recent searches saved in local storage.
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
4. Click any recent search chip to quickly open that city again.

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
  InfoBox.jsx
  InfoBox.css
  index.css
  main.jsx
```

## Environment Variables

This project uses one environment variable:

- `VITE_OPENWEATHER_API_KEY` — your OpenWeather API key used to fetch weather data.

## API Data Used

The app uses OpenWeather current weather data, including:
- city name,
- temperature,
- humidity,
- wind speed,
- minimum temperature,
- maximum temperature,
- feels-like temperature,
- weather description. [web:500][web:426][web:505]

## Notes

- Do not commit your `.env` file to GitHub.
- If you change your GitHub repository name, update the `base` path in `vite.config.js`.
- Make sure the OpenWeather API key is active before running the app.
- If geolocation is blocked by the browser, the location feature may not work.
