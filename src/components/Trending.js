import Box from '@mui/system/Box';
import React from 'react';

export default function Trending({ movies }) {
  return (
    <Box>
      <h2>Trending</h2>
      {movies.map((movie) => (
        <Box key={movie.id}>
          <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <p>{movie.overview}</p>
        </Box>
      ))}
    </Box>
  );
}
