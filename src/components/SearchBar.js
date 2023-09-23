import React, { useState, useEffect } from 'react';

// Mock data for city names. Replace this with real data.
const cityNames = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco"];

function SearchBar({ onCityChange, city }) {
  const [newCity, setNewCity] = useState(city || '');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (city !== undefined) {
      setNewCity(city);
    }
  }, [city]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setNewCity(value);

    // Filter the city names based on user input
    const filteredSuggestions = cityNames.filter(
      (name) => name.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(newCity);
    setSuggestions([]); // Clear suggestions
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center justify-center mt-8">
        <input
          type="text"
          placeholder="Enter city name"
          className="border border-gray-300 rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
          value={newCity}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => {
                setNewCity(suggestion);
                setSuggestions([]);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
