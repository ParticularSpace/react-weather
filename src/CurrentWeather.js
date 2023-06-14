import React from 'react';
import './CurrentWeather.css'; // Importing a CSS file for styling

function CurrentWeather({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, weather, name } = weatherData;
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  return (
    <div className="current-weather">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <div>
        <p>{weather[0].main}</p>
        <p>{Math.round(main.temp)}°F</p>
      </div>
    </div>
  );
}

export default CurrentWeather;
