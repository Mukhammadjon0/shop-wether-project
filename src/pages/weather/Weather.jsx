import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Weather.css";
function Weather() {
  const [city, setCity] = useState("Tashkent");
  const [inputVal, setInputVal] = useState("");
  const [xato, setXato] = useState(false);
  const [weather, setWeather] = useState({ name: "", main: { temp: 0 } });
  const WEATHER_API_KEY = "ea5ed02cbb9ed52893b65cabe260368e";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
      )
      .then((res) => {
        setWeather(res.data);
        setXato(false);
      })
      .catch((err) => setXato(true));
  }, [city]);
  console.log(weather);
  return (
    <div className="weather">
      <h1>Weather info</h1>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        type="text"
        placeholder="City"
      />
      <button onClick={() => setCity(inputVal)}>Show</button>
      <h2>{xato ? "Bunday shahar mavjud emas" : ""}</h2>
      {!xato && weather && (
        <div className="weather-info">
          <h1>{weather.name}</h1>
          <h1>
            {Math.round(weather.main.temp - 273.5)} <sup>o</sup>
          </h1>
        </div>
      )}
    </div>
  );
}

export default Weather;
