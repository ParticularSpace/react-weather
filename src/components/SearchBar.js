import React, { useState } from 'react';

function SearchBar({ onCityChange, city }) {
  const [newCity, setNewCity] = useState(city);

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(newCity);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Enter city name"
        className="border border-gray-300 rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
        value={newCity}
        onChange={(event) => setNewCity(event.target.value)}
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;