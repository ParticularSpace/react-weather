import React, { useState, useEffect } from "react";

const cityNames = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Boston",
  "El Paso",
  "Detroit",
  "Nashville",
  "Portland",
  "Memphis",
  "Oklahoma City",
  "Las Vegas",
  "Louisville",
  "Baltimore",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Mesa",
  "Sacramento",
  "Atlanta",
  "Kansas City",
  "Colorado Springs",
  "Miami",
  "Raleigh",
  "Omaha",
  "Long Beach",
  "Virginia Beach",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Arlington",
  "Tampa",
  "New Orleans",
  "Wichita",
  "Bakersfield",
  "Cleveland",
  "Aurora",
  "Anaheim",
  "Honolulu",
  "Santa Ana",
  "Riverside",
  "Corpus Christi",
  "Lexington",
  "Stockton",
  "Henderson",
  "Saint Paul",
  "St. Louis",
  "Cincinnati",
  "Pittsburgh",
  "Greensboro",
  "Anchorage",
  "Plano",
  "Lincoln",
  "Orlando",
  "Irvine",
  "Newark",
  "Toledo",
  "Durham",
  "Silverdale",
  "Bremerton",
  "Port Orchard",
  "Poulsbo",
  "Bainbridge Island",
  "Kingston",
  "Belfair",
  "Gig Harbor",
  "Shelton",
  "Port Angeles",
  "Sequim",
  "Port Townsend",
  "Forks",
  "Quilcene",
  "Brinnon",
  "Hoodsport",
  "Lilliwaup",
  "Union",
  "Grapeview",
  "Allyn",
  "Belfair",
  "Tahuya",
  "Seabeck",
  "Bellevue",
  "Redmond",
  "Kirkland",
  "Sammamish",
  "Issaquah",

];

function SearchBar({ onCityChange, city }) {
  const [newCity, setNewCity] = useState(city || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (city !== undefined) {
      setNewCity(city);
    }
  }, [city]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(newCity);
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setNewCity(userInput);

    // Filter the suggestions
    const filteredSuggestions = cityNames.filter(
      (name) => name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Limit to 5 suggestions
    setSuggestions(filteredSuggestions.slice(0, 5));
    setShowSuggestions(userInput.length > 0);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          placeholder="Enter city name"
          className="border-2 border-blue-400 rounded-l px-4 py-2 w-64 focus:border-blue-500"
          value={newCity}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </form>
      {showSuggestions && (
        <ul className="absolute w-64 mt-2 bg-white border border-gray-300 rounded shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="cursor-pointer hover:bg-gray-200 p-2"
              onClick={() => {
                setNewCity(suggestion);
                setShowSuggestions(false);
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