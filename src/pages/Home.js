import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';

function Home() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);  // Define error state

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleCityChange = (city) => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === '404') {
            setError(data.message);
            setWeatherData(null);
            setForecastData(null);
          } else {
            setWeatherData(data);
            setError(null);
          }
        })
        .catch((error) => console.error('Error:', error));

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === '404') {
            setError(data.message);
            setWeatherData(null);
            setForecastData(null);
          } else {
            setForecastData(data);
            setError(null);
          }
        })
        .catch((error) => console.error('Error:', error));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mt-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Weather App</h1>
          <SearchBar onCityChange={handleCityChange} />

          {error && (
            <div className="bg-red-500 text-white p-4 rounded mt-4">
              <p>{error}</p>
              <button className="bg-white text-red-500 p-2 mt-2" onClick={() => setError(null)}>
                Close
              </button>
            </div>
          )}

          {weatherData && <CurrentWeather weatherData={weatherData} />}
          {forecastData && <Forecast forecastData={forecastData} />}
        </div>
      </div>
    </div>
  );
}

export default Home;