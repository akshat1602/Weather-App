import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({
  updateInfo,
  onSearch,
  setLoading,
  loading,
  recentSearches = [],
  setRecentSearches,
}) {
  const [city, setCity] = useState("");
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const fetchWeather = async (searchCity) => {
    if (!searchCity.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "City not found");

      updateInfo({
        city: data.name,
        feelsLike: data.main.feels_like,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        weather: data.weather[0].main,
      });

      onSearch?.(data.name);
      setCity("");
    } catch (err) {
      alert(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  const handleRecentClick = (item) => {
    setCity(item);
    fetchWeather(item);
  };

  const clearRecentHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <div className="searchCard">
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="searchInputWrap">
          <span className="searchIcon">⌕</span>
          <input
            className="searchInput"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            aria-label="Search city"
          />
          {city && (
            <button
              type="button"
              className="clearBtn"
              onClick={() => setCity("")}
              aria-label="Clear search"
            >
              <svg viewBox="0 0 24 24" className="clearIcon" aria-hidden="true">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>

        <button className="searchBtn" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {recentSearches.length > 0 && (
        <div className="recentWrap">
          <div className="recentHeader">
            <p className="recentTitle">Recent</p>
            <button
              type="button"
              className="clearHistoryBtn"
              onClick={clearRecentHistory}
            >
              Clear history
            </button>
          </div>

          <div className="recentList">
            {recentSearches.map((item) => (
              <button
                key={item}
                type="button"
                className="recentChip"
                onClick={() => handleRecentClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}