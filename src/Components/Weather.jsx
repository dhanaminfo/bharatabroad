// Weather.js

import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useGeoLocation } from "./GeoLocation";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const apiKey = "e9c3ea0184ae49849a290843241707"; // Replace with your actual WeatherAPI API key
  const { city } = useGeoLocation();

  useEffect(() => {
    // Fetch weather data for the obtained city
    if (city) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => setWeatherData(data))
        .catch((error) => console.error("Error fetching weather data:", error));
    }
  }, [apiKey, city]);

  const convertToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(1);

  return (
    <div>
      {weatherData.current && (
        <>
          <small>{weatherData.current.temp_c}°C</small>
          {"  "}
          <small>{convertToFahrenheit(weatherData.current.temp_c)}°F</small>
          {"  "}|{"  "}
          <small className="text-primary fw-bold">{city}</small>
          {/* <p>{weatherData.current.condition.text}</p> */}
        </>
      )}
    </div>
  );
};

export default Weather;
