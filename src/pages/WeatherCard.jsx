import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <h3>{data.name}</h3>
      <p>{data.weather[0].description}</p>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
