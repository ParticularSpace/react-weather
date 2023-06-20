import React from 'react';
import './Forecast.css';

function Forecast({ forecastData }) {
  
  const dailyData = forecastData && forecastData.list 
    ? forecastData.list.filter((item, index, array) => {
        return index === 0 || item.dt_txt.split(' ')[0] !== array[index - 1].dt_txt.split(' ')[0];
      })
    : [];

  return (
    <div className="forecast-container">
      {dailyData.map((item, index) => {
        const iconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;

        // Convert the date and time string to a Date object
        const date = new Date(item.dt_txt);

        // Get the day of the week
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

        return (
          <div key={index} className="forecast-item">
            <h3>{dayOfWeek}</h3> {/* Display the day of the week */}
            <img src={iconUrl} alt="Weather icon" /> {/* Display the icon */}
            <div>
              <p>Temperature: {item.main.temp}°F</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
