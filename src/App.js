import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router';
import MovieList from './pages/MovieList';
import { grey } from '@mui/material/colors';
import FavoritesSection from './components/FavoritesSection';

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  // fetch movie API
  const getMovieRequest = async (searchValue) => {
    const urls = `https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=${searchValue}`;
    // const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1f686e53`;
    const response = await fetch(urls);
    const responseJson = await response.json();

    if (responseJson.results !== undefined) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path='/'
          element={
            <MovieList
              movies={movies}
              handleFavoriteClick={addFavoriteMovie}
              setSearchValue={setSearchValue}
              favorites={favorites}
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
