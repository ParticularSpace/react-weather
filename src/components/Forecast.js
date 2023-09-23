import React from 'react';

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
        const date = new Date(item.dt_txt);

        return (
          <div key={index} className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg p-4 shadow-md mb-4">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={iconUrl} alt={item.weather[0].description} className="w-12 h-12" />
              <div className="ml-4">
                <p className="text-lg font-bold">{date.toLocaleDateString()}</p>
                <p className="text-sm font-bold text-gray-500">{item.weather[0].description}</p>
              </div>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-lg font-bold">{Math.round(item.main.temp)}°F</p>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-500">Feels Like</p>
                <p className="text-lg">{Math.round(item.main.feels_like)}°F</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-lg">{item.main.humidity}%</p>
              <div className="ml-4">
                <p className="text-sm font-bold text-gray-500">Humidity</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
