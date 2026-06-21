# Weather-App

A responsive weather app built with React, Vite, and Material UI that lets you search any city and view live weather details like temperature, humidity, and feels-like temperature.

## Live Demo

[View the live app](https://akshat1602.github.io/Weather-App/)

## Features

- Search weather by city name.
- Shows temperature, humidity, min temp, max temp, and feels-like temperature.
- Dynamic weather card styling based on current conditions.
- Beautiful responsive UI built with Material UI.
- Deployed on GitHub Pages.

## Tech Stack

- React
- Vite
- Material UI
- OpenWeather API
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

- Enter a city name in the input field.
- Click **Search**.
- View the current weather details for that city.

## Build for Production

```bash
npm run build
```

## Deploy to GitHub Pages

This project is deployed using `gh-pages`.

```bash
npm run deploy
```

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

This project uses the following environment variable:

- `VITE_OPENWEATHER_API_KEY` — your OpenWeather API key.
