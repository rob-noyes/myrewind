import Box from '@mui/system/Box';
import React from 'react';

export default function Movie({ movies }) {
  return (
    <Box>
      {movies.map((movie) => (
        <Box key={movie.id}>{console.log(movie.title)}</Box>
      ))}
    </Box>
  );
}
