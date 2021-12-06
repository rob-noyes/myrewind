import { Link, Typography, TextField, Autocomplete } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';
import { Link as Linking } from 'react-router-dom';

const style = {
  col: {
    background: '#ffffff',
    borderRadius: '1rem',
  },
  search: {
    width: '30rem',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: '.5rem',
    fontSize: '1.2rem',
  },
};

export default function MovieListHeading({ heading, setSearchValue, movies }) {
  const moviesFilter = movies.map((movie) => movie.title);

  return (
    <Box sx={style.heading}>
      <Link href='/' underline='none'>
        <Typography variant='h2'>{heading}</Typography>
      </Link>
      <Box sx={style.col}>
        {/* <Autocomplete
          sx={style.search}
          filterOptions={(x) => x}
          options={moviesFilter}
          getOptionLabel={(option) => {
            return option;
          }}
          isOptionEqualToValue={(option, value) => option.title === value.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search Movies'
              InputProps={{ ...params.InputProps }}
            />
          )}
          onInputChange={(e) => setSearchValue(e.target.value)}
          onChange={(e, value) => (
            <Linking to={`/movie/${value}`}>{value}</Linking>
          )}
        /> */}
        <Autocomplete
          selectOnFocus
          sx={style.search}
          options={moviesFilter}
          renderInput={(params) => <TextField {...params} label='Search' />}
          onInputChange={(e) => setSearchValue(e.target.value)}
          onChange={(e, value) => setSearchValue(value)}
        />
        {/* <TextField
          sx={style.search}
          placeholder='Search Movies'
          onChange={(e) => setSearchValue(e.target.value)}
        ></TextField> */}
      </Box>
    </Box>
  );
}
