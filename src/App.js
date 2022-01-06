import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { useEffect, useState } from 'react';
import Movie from './pages/Movie';
import Cast from './pages/Cast';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Movies from './pages/Movies';
import NowPlaying from './pages/NowPlaying';
import Account from './pages/Account';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState('');
  const [movieDetails, setMovieDetails] = useState([]);
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  //use effect for searching on any page
  useEffect(() => {
    const fetchSearch = async () => {
      //Gets search movie results from search input query
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=${search}`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchSearch();
  }, [search]);

  //use effect for movie specific page
  useEffect(() => {
    //Gets movie details for specific movie ID
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&append_to_response=videos,credits,recommendations,similar`
      );
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovieDetails();
  }, [movieId]);

  //use effect for front page
  useEffect(() => {
    //Gets trending movies from TMDB
    const fetchTrendingMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=8a2b9a4f857805da801ad11b8a954949`
      );
      const data = await response.json();
      setTrending(data.results);
    };

    //Gets Upcoming movies from TMDB
    const fetchUpcoming = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=8a2b9a4f857805da801ad11b8a954949`
      );
      const data = await response.json();
      setUpcoming(data.results);
    };

    fetchTrendingMovies();
    fetchUpcoming();
  }, []);

  //use effect for top rated movies page
  useEffect(() => {
    //Gets Top Rated movies from TMDB
    const fetchTopRated = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=8a2b9a4f857805da801ad11b8a954949&page=${page}`
      );
      const data = await response.json();
      setTopRated(data.results);
    };
    fetchTopRated();
  }, [page]);

  useEffect(() => {
    //Gets Top Rated movies from TMDB
    const fetchNowPlaying = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=8a2b9a4f857805da801ad11b8a954949&page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      setNowPlaying(data.results);
    };
    fetchNowPlaying();
  }, []);

  return (
    <div className='bg-black lg:bg-tertiary text-white w-full font-sans'>
      <Router>
        <Navbar
          setSearch={setSearch}
          search={search}
          movies={movies}
          movieId={movieId}
          setMovieId={setMovieId}
          setPage={setPage}
        />
        <ScrollToTop />
        <Routes>
          <Route
            path='/'
            element={
              <Homepage
                trending={trending}
                setMovieDetails={setMovieDetails}
                setMovieId={setMovieId}
                movieId={movieId}
                topRated={topRated}
                upcoming={upcoming}
              />
            }
          />
          <Route
            path='/movies'
            element={
              <Movies
                setMovieId={setMovieId}
                topRated={topRated}
                setPage={setPage}
                page={page}
              />
            }
          />
          <Route
            path='/now_playing'
            element={
              <NowPlaying
                setMovieId={setMovieId}
                nowPlaying={nowPlaying}
                setPage={setPage}
                page={page}
              />
            }
          />
          <Route
            path='/movie/:id'
            element={
              <Movie movieDetails={movieDetails} setMovieId={setMovieId} />
            }
          />
          <Route
            path='/movie/:id/cast'
            element={<Cast movieDetails={movieDetails} />}
          />
          <Route path='/account' element={<Account />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
