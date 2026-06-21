import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css";

const defaultWeather = {
  city: "Delhi",
  feelsLike: 24.84,
  temp: 25.09,
  tempMin: 22.4,
  tempMax: 26.07,
  humidity: 47,
  windSpeed: 3.2,
  weather: "haze",
};

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(defaultWeather);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem("recentSearches");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addRecentSearch = (city) => {
    if (!city) return;
    setRecentSearches((prev) => {
      const updated = [city, ...prev.filter((item) => item !== city)].slice(0, 5);
      return updated;
    });
  };

  const getThemeClass = () => {
    const weather = weatherInfo.weather?.toLowerCase() || "";
    const temp = weatherInfo.temp || 0;
    const humidity = weatherInfo.humidity || 0;

    if (weather.includes("rain") || weather.includes("thunder")) return "theme-rain";
    if (weather.includes("snow") || temp <= 15) return "theme-cold";
    if (weather.includes("cloud")) return "theme-cloudy";
    if (temp >= 30 || weather.includes("clear")) return "theme-hot";
    if (humidity > 80) return "theme-rain";
    return "theme-default";
  };

  return (
    <div className={`App ${getThemeClass()}`}>
      <div className="weather-shell">
        <h2 className="weather-title">Weather App</h2>
        <SearchBox
          updateInfo={setWeatherInfo}
          onSearch={addRecentSearch}
          setLoading={setLoading}
          loading={loading}
          recentSearches={recentSearches}
          setRecentSearches={setRecentSearches}
        />
        <InfoBox info={weatherInfo} loading={loading} />
      </div>
    </div>
  );
}