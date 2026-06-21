import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

export default function InfoBox({ info, loading }) {
  const HOT_URL =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=687&auto=format&fit=crop";

  const weatherText = info.weather?.toLowerCase() || "";
  const isRainy =
    weatherText.includes("rain") ||
    weatherText.includes("thunder") ||
    info.humidity > 80;
  const isCold = weatherText.includes("snow") || info.temp <= 15;
  const isCloudy = weatherText.includes("cloud");
  const isHot = info.temp >= 30 || weatherText.includes("clear");

  const weatherIcon = isRainy ? (
    <ThunderstormIcon />
  ) : isCold ? (
    <AcUnitIcon />
  ) : (
    <SunnyIcon />
  );

  const backgroundImage = isRainy ? RAIN_URL : isCold ? COLD_URL : HOT_URL;

  const getCardThemeClass = () => {
    if (isRainy) return "card-rain";
    if (isCold) return "card-cold";
    if (isCloudy) return "card-cloudy";
    if (isHot) return "card-hot";
    return "card-default";
  };

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card className={`weather-card ${getCardThemeClass()}`}>
          {loading ? (
            <CardContent className="weather-content">
              <Typography variant="h6">Loading weather...</Typography>
            </CardContent>
          ) : (
            <>
              <CardMedia
                className="weather-image"
                image={backgroundImage}
                title="weather"
              />
              <CardContent className="weather-content">
                <Typography gutterBottom variant="h5" component="div">
                  {info.city} {weatherIcon}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="span">
                  <div>Temperature = {info.temp}&deg;C</div>
                  <div>Humidity = {info.humidity}%</div>
                  <div>Wind Speed = {info.windSpeed} m/s</div>
                  <div>Min Temp = {info.tempMin}&deg;C</div>
                  <div>Max Temp = {info.tempMax}&deg;C</div>
                  <div>
                    The weather can be described as <i>{info.weather}</i> and feels like ={" "}
                    {info.feelsLike}&deg;C
                  </div>
                </Typography>
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}