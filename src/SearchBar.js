import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ setCity }) {
  const [localCity, setLocalCity] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(localCity);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        name="city"
        value={localCity}
        onChange={(event) => setLocalCity(event.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
