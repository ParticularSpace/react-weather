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
    
     <div className="bg-white rounded-lg p-4 shadow-lg mb-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <img src={iconUrl} alt={weather[0].description} className="w-16 h-16" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg font-bold">{Math.round(main.temp)}°F</p>
          <p className="text-sm font-bold text-gray-500">Temperature</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg">{weather[0].main}</p>
          <p className="text-sm font-bold text-gray-500">Weather</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg">{Math.round(weatherData.wind.speed)} mph</p>
          <p className="text-sm font-bold text-gray-500">Wind Speed</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg">{Math.round(main.feels_like)}°F</p>
          <p className="text-sm font-bold text-gray-500">Feels Like</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg">{main.humidity}%</p>
          <p className="text-sm font-bold text-gray-500">Humidity</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg">{Math.round(main.pressure)} hPa</p>
          <p className="text-sm font-bold text-gray-500">Pressure</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;