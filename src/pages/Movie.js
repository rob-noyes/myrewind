import { Typography } from '@mui/material';
import Box from '@mui/system/Box';
import Nav from '../components/Nav';
import React from 'react';

export default function Movie({ movies }) {
  const style = {
    contain: {
      marginTop: '5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    movieBase: {
      marginTop: '5rem',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '4rem',
      color: '#8694A1',
    },
  };
  return (
    <Box sx={style.contain}>
      {movies
        // Filters through movies and finds movie id based on pathname id
        .filter((movie) => `/movie/${movie.id}` === window.location.pathname)
        .map((movie) => (
          <Box key={movie.id} sx={style.movieBase}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
            <Typography variant='h2'>{movie.title}</Typography>
            <Typography variant='body'>{movie.overview}</Typography>
          </Box>
        ))}
    </Box>
  );
}
