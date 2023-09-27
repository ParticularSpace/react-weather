import React from 'react';

function Forecast({ forecastData }) {
  const dailyData = forecastData && forecastData.list 
    ? forecastData.list.filter((item, index, array) => {
        return index === 0 || item.dt_txt.split(' ')[0] !== array[index - 1].dt_txt.split(' ')[0];
      })
    : [];

    return (
      <div className="forecast-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dailyData.map((item, index) => {
          const iconUrl = `http://openweathermap.org/img/w/${item.weather[0].icon}.png`;
          const date = new Date(item.dt_txt);
    
          return (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <p className="text-lg font-bold">{date.toLocaleDateString()}</p>
                <img src={iconUrl} alt={item.weather[0].description} className="w-12 h-12" />
              </div>
              <div className="text-center mb-4">
                <p className="text-xl font-bold">{Math.round(item.main.temp)}°F</p>
                <p className="text-sm font-medium text-gray-500">{item.weather[0].description}</p>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <div>
                  <p className="text-gray-500">Feels Like</p>
                  <p>{Math.round(item.main.feels_like)}°F</p>
                </div>
                <div>
                  <p className="text-gray-500">Humidity</p>
                  <p>{item.main.humidity}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
    
}

export default Forecast;
