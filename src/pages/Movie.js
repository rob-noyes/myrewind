import { Box } from '@mui/system';
import React from 'react';

export default function Movie({ movies }) {
  return (
    <Box>
      {movies
        .filter((movie) => `/movie/${movie.id}` === window.location.pathname)
        .map((movie) => (
          <Box>{movie.title}</Box>
        ))}
    </Box>
  );
}
