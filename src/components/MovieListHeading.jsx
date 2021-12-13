import { Typography, TextField, Autocomplete } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';
import { Link as Linking } from 'react-router-dom';

const style = {
  col: {
    background: '#ffffff',
    borderRadius: '1rem',
    width: { xs: '100%', sm: '40%', md: '40%' },
    marginBottom: '.75rem',
  },
  search: {
    maxWidth: '100%',
  },

  heading: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: '.5rem',
    fontSize: '1.2rem',
    paddingBottom: '.75rem',
    borderBottom: '1px solid grey',
  },

  movieItem: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    color: '#000000',
    textDecoration: 'none',
  },
  title: {
    color: '#ffffff',
    textDecoration: 'none',
    underline: 'none',
    marginY: '1rem',
  },
};

export default function MovieListHeading({
  heading,
  setSearchValue,
  movies,
  trending,
}) {
  return (
    <Box sx={style.heading}>
      <Linking to='/' className='title' underline='none'>
        <Typography underline='none' sx={style.title} variant='h3'>
          {heading}
        </Typography>
      </Linking>
      <Box sx={style.col}>
        <Autocomplete
          selectOnFocus
          sx={style.search}
          options={movies}
          getOptionLabel={(option) => option.title}
          renderOption={(option) => (
            <Linking
              key={option.key}
              to={`/movie/${option.key.replace(/[.':\s]/g, '')}`}
            >
              <Typography underline='none' sx={style.movieItem}>
                {option.key}
              </Typography>
            </Linking>
          )}
          renderInput={(params) => <TextField {...params} label='Search' />}
          onInputChange={(e) => setSearchValue(e.target.value)}
          onChange={(e, value) => {
            setSearchValue(value);
          }}
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
