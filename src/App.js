import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast'; // Import the Forecast component
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null); // Add a state variable for the forecast data

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error('Error:', error));

      // Fetch the forecast data
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setForecastData(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [city]);

  if (weatherData) {
    console.log(weatherData);
  }

  return (
    <div>
      <h1 className="title">Weather App</h1>
      <SearchBar setCity={setCity} />
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />} 
    </div>
  );
}

export default App;
