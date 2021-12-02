import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route, useParams } from 'react-router-dom';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      light: grey[100],
      main: grey[500],
      dark: grey[200],
      contrastText: '#ffffff',
    },
    background: {
      default: '#1B1D20',
    },
  },
});

function App() {
  const [movies, setMovies] = useState('');
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState('');
  const [searchError, setSearchError] = useState(false);

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

  const { id } = useParams();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search === '') {
      setSearchError(true);
    } else {
      setMovies(search);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout search={search} setSearch={setSearch} handleSearch={handleSearch}>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Box>
                <Home trending={trending} />
              </Box>
            }
          />
          <Route
            path='/movie/:id'
            element={
              <Box>
                <Movie movies={movies} id={id} />
              </Box>
            }
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
