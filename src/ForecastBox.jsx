import { useEffect, useState } from "react";
import "./ForecastBox.css";

export default function ForecastBox({ city }) {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      setError("");

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Forecast not found");
        }

        const grouped = {};

        data.list.forEach((item) => {
          const date = item.dt_txt.slice(0, 10);
          if (!grouped[date]) grouped[date] = [];
          grouped[date].push(item);
        });

        const dailyForecast = Object.values(grouped)
          .slice(0, 5)
          .map((items) => ({
            date: items[0].dt_txt.slice(0, 10),
            tempMin: Math.min(...items.map((i) => i.main.temp_min)),
            tempMax: Math.max(...items.map((i) => i.main.temp_max)),
            weather: items[0].weather[0].main,
          }));

        setForecast(dailyForecast);
      } catch (err) {
        setError(err.message || "Could not load forecast");
      }
    };

    fetchForecast();
  }, [city, API_KEY]);

  return (
    <div className="ForecastBox">
      <h3 className="forecastTitle">5-Day Forecast</h3>

      {error && <p className="forecastError">{error}</p>}

      <div className="forecastGrid">
        {forecast.map((day) => (
          <div key={day.date} className="forecastCard">
            <p className="forecastDate">{day.date}</p>
            <p className="forecastWeather">{day.weather}</p>
            <p className="forecastTemp">
              Min: {day.tempMin.toFixed(1)}°C
            </p>
            <p className="forecastTemp">
              Max: {day.tempMax.toFixed(1)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}