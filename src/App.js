import { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router';
import MovieList from './pages/MovieList';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: grey,
  },
});

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const urls = `https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=${searchValue}`;
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1f686e53`;
    const response = await fetch(urls);
    const responseJson = await response.json();
    const results = responseJson;

    if (responseJson.results !== undefined) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path='/'
          element={
            <MovieList
              movies={movies}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
