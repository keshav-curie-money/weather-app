import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css'; // Import the CSS file

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isAvailable, setIsAvailable] = useState(true);

  const fetchData = async () => {
    try {
      setIsAvailable(true);
      const api_key = "fd213c1f69724e2aace141010240804";
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setWeatherData(null);
      setIsAvailable(false);
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("env var : ", process.env.REACT_APP_API_KEY)
  }, []);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit} className="weather-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className="weather-input"
        />
        <button type="submit" className="weather-button">Get Weather</button>
      </form>
      <div className="weather-card-container">
        {weatherData && (
          <div className="weather-card">
            <h2 className="weather-heading">{weatherData.location.name}</h2>
            <div className="weather-data">
              <p>Temperature: {weatherData.current.temp_c}°C</p>
              <p>Feels like : {weatherData.current.feelslike_c}°C</p>
              <p>Humidity : {weatherData.current.humidity}%</p>
              <p>Pressure : {weatherData.current.pressure_mb}mb</p>
              <p>Wind Speed : {weatherData.current.wind_kph}kph</p>
            </div>
          </div>
        )}
        {!weatherData && isAvailable && (
          <p className="weather-loading">Loading weather data...</p>
        )}
        {!isAvailable && (
          <p className="weather-error">Weather data not available</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
