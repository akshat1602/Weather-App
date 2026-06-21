import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  const getWeatherInfo = async () => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return {
      city: data.name,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setError("");
    setLoading(true);

    try {
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError("No such place exists!");
    } finally {
      setLoading(false);
    }
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
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
        {error && <p className="error-text">{error}</p>}
      </form>
    </div>
  );
}