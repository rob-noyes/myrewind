import React, { useEffect, useState } from 'react';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import Trending from '../components/Trending';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        const json = await response.json();
        setMovies(json.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPI();
  }, []);
  console.log(movies);

  return (
    <Container>
      <Trending movies={movies} />
    </Container>
  );
}
