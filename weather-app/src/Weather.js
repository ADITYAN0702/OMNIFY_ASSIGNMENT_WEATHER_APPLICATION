import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (city) => {
    const response = await axios.get(`http://127.0.0.1:8000/weather/?city=${city}`);
    setWeatherData(response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherData(city);
    setCity('');
  };

  return (
    <div>
      <h1 className="heading">Weather App</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div className="weather-data">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
