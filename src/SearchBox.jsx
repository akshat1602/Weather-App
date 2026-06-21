import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({
  updateInfo,
  onSearch,
  setLoading,
  loading,
  recentSearches,
}) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeatherInfoByCity = async (cityName) => {
    const response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    return {
      city: data.name,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      windSpeed: data.wind?.speed ?? 0,
      weather: data.weather[0].description,
    };
  };

  const searchWeather = async (cityName) => {
    setError("");
    setLoading(true);
    try {
      const newInfo = await getWeatherInfoByCity(cityName);
      updateInfo(newInfo);
      onSearch(newInfo.city);
      setCity("");
    } catch (err) {
      setError("No such place exists!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }
    await searchWeather(city.trim());
  };

  const useMyLocation = async () => {
    setError("");
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) throw new Error("Location weather failed");

          const data = await response.json();
          const newInfo = {
            city: data.name,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            windSpeed: data.wind?.speed ?? 0,
            weather: data.weather[0].description,
          };

          updateInfo(newInfo);
          onSearch(newInfo.city);
        } catch (err) {
          setError("Could not fetch weather for your location.");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location access denied.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <div className="buttonRow">
          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>

          <Button variant="outlined" type="button" onClick={useMyLocation} disabled={loading}>
            Use My Location
          </Button>
        </div>

        {error && <p className="error-text">{error}</p>}

        {recentSearches.length > 0 && (
          <div className="recentSearches">
            <p>Recent searches:</p>
            <div className="chips">
              {recentSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="chip"
                  onClick={() => searchWeather(item)}
                  disabled={loading}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}