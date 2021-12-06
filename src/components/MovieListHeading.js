import {
  Link,
  Typography,
  TextField,
  Autocomplete,
  Button,
} from '@mui/material';
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
  movieItem: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1rem',
    color: '#000000',
    textDecoration: 'none',
  },
};

export default function MovieListHeading({ heading, setSearchValue, movies }) {
  const moviesFilter = movies.map((movie) => {
    return {
      title: movie.title,
      key: movie.id,
    };
  });

  return (
    <Box sx={style.heading}>
      <Link href='/' underline='none'>
        <Typography variant='h2'>{heading}</Typography>
      </Link>
      <Box sx={style.col}>
        <Autocomplete
          selectOnFocus
          sx={style.search}
          options={movies}
          getOptionLabel={(option) => option.title}
          renderOption={(option) => (
            console.log(option),
            (
              <Linking
                key={option.key}
                to={`/movie/${option.key.replace(/[.':\s]/g, '')}`}
              >
                <Typography underline='none' sx={style.movieItem}>
                  {option.key}
                </Typography>
              </Linking>
            )
          )}
          renderInput={(params) => <TextField {...params} label='Search' />}
          onInputChange={(e) => setSearchValue(e.target.value)}
          onChange={(e, value) => {
            console.log(e);
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
