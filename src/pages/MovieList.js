import React from 'react';
import Box from '@mui/system/Box';

export default function MovieList({ movies }) {
  return (
    <>
      {movies.map((movie, index) => (
        <Box key={index}>
          <img src={movie.Poster} alt='movie'></img>
        </Box>
      ))}
    </>
  );
}
