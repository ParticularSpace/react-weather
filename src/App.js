import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error('Error:', error));
    }
  }, [city]);
  

  console.log(weatherData);

  return (
    <div>
      <h1 className="title">Weather App</h1>
      <SearchBar setCity={setCity} />
      {<CurrentWeather weatherData={weatherData} />}
    </div>
  );
  
}

export default App;
