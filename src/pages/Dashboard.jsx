import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import "./Dashboard.css";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '6b25fee3026b75311cde70ce16b23fef'; // Replace with your API key

  const handleSearch = () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        setWeather(res.data);
        setError(null);
      })
      .catch((err) => {
        setError("City not found. Please try again.");
        setWeather(null);
      });
  };

  return (
    <div className="dashboard-container">
      <h2>Weather Dashboard</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error-message">{error}</p>}
      {weather ? <WeatherCard data={weather} /> : <p>No data available</p>}
    </div>
  );
};

export default Dashboard;




