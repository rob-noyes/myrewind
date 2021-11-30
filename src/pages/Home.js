import React, { useEffect, useState } from 'react';
import Box from '@mui/system/Box';
import Trending from '../components/Trending';

export default function Home({ movies }) {
  console.log(movies);

  return (
    <Box>
      <Trending movies={movies} />
    </Box>
  );
}
