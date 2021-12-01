import { useState, useEffect } from 'react';
import { Box } from '@mui/system';

import Nav from './components/Nav';
import Home from './pages/Home';
import { Routes, Route, useParams } from 'react-router-dom';
import Movie from './pages/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);

  // useEffect(() => {
  //   async function fetchMovies() {
  //     try {
  //       const response = await fetch('https://api.themoviedb.org/3');
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // });

  useEffect(() => {
    async function fetchAPI() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        );
        const json = await response.json();
        setTrending(json.results);
        setMovies(json.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPI();
  }, []);

  console.log(movies);
  const { id } = useParams();

  return (
    <Routes>
      <Route
        exact
        path='/'
        element={
          <Box>
            <Nav />
            <Home trending={trending} />
          </Box>
        }
      />
      <Route
        path='/movie/:id'
        element={
          <Box>
            <Nav />
            <Movie movies={movies} id={id} />
          </Box>
        }
      />
    </Routes>
  );
}

export default App;
