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
    <div>
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
      {showSuggestions && (
        <ul className="suggestions-list mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
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
