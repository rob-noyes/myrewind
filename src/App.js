import { useState, useEffect } from 'react';
import { Box } from '@mui/system';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Layout from './components/Layout';
import Search from './pages/Search';

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
  let navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [search, setSearch] = useState('');
  const [queryResults, setQueryResults] = useState([]);

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
      console.log('Please enter a value');
    } else {
      //fetch api movie and add to the movie list, unless already added.
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&query=${search}`
      )
        .then((response) => response.json())
        .then((data) => setQueryResults(data.results));
      //After fetch, go to movie page
      navigate(`/search/`);
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
          <Route
            path={`/search/`}
            element={<Search queryResults={queryResults} />}
          />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
