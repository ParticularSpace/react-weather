import React, { useState } from 'react';

function SearchBar({ onCityChange }) {
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCityChange(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mt-8">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        className="border border-gray-300 rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;