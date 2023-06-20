import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
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
  }, [city]);

  const handleClose = () => {
    setError(null);
  };

  return (
    <div>
      <h1 className="title">Weather App</h1>
      <SearchBar setCity={setCity} />
      {error && (
        <Modal open={Boolean(error)} onClose={handleClose}>
          <Box sx={{ width: 200, padding: 2, margin: 'auto', mt: '20%', bgcolor: 'background.paper', outline: 'none' }}>
            <Typography variant="h6" component="h2">
              Error
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {error}
            </Typography>
            <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
              Close
            </Button>
          </Box>
        </Modal>
      )}
      {weatherData && <CurrentWeather weatherData={weatherData} />}
      {forecastData && <Forecast forecastData={forecastData} />}
    </div>
  );
}

export default App;
