import React from 'react';

function CurrentWeather({ weatherData }) {
  if (!weatherData) {
    return <div>Loading...</div>;
  }

  // Destructure the weatherData object
  const { main, weather, name } = weatherData;
  const iconUrl = `http://openweathermap.org/img/w/${weather[0].icon}.png`;

  // Round the temperature to the nearest whole number
  return (
    <div className="current-weather bg-gray-100 rounded-lg p-4 shadow-md">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="flex items-center justify-center mb-4">
        <img src={iconUrl} alt={weather[0].description} className="w-16 h-16 mr-4" />
        <div>
          <p className="text-lg font-bold">{weather[0].main}</p>
          <p className="text-4xl font-bold">{Math.round(main.temp)}°F</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-sm font-bold">Feels Like</p>
          <p className="text-lg">{Math.round(main.feels_like)}°F</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold">Humidity</p>
          <p className="text-lg">{main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-sm font-bold">Wind Speed</p>
          <p className="text-lg">{Math.round(weatherData.wind.speed)} mph</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;