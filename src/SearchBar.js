import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function SearchBar({ setCity }) {
  const [localCity, setLocalCity] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(localCity);
    setLocalCity('');
  };

  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <form onSubmit={handleSubmit} className="search-bar">
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={8} sm={10}>
            <TextField
              name="city"
              value={localCity}
              onChange={(event) => setLocalCity(event.target.value)}
              label="Enter city"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default SearchBar;
