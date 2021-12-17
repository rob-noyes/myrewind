import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import { useEffect, useState } from 'react';
import MovieSearch from './components/MovieSearch';

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [movieId, setMovieId] = useState([]);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US&query=${search}&${page}`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(movies);
    };
    fetchSearch();
  }, [search]);

  // useEffect(() => {
  //   const fetchMovieId = async () => {
  //     setMovieId(
  //       movies
  //         .filter((movie) => movie.poster_path !== null)
  //         .map((movie) => {
  //           return movie.id;
  //         }),
  //       console.log(movieId)
  //     );
  //   };

  //   fetchMovieId();

  //   const fetchMovieDetails = async () => {
  //     const response = await fetch(`
  //     https://api.themoviedb.org/3/movie/${movieId.map(
  //       (id) => id
  //     )}?api_key=8a2b9a4f857805da801ad11b8a954949&language=en-US`);
  //     const data = await response.json();
  //     setMovieDetails(data);
  //     console.log(movieDetails);
  //   };

  //   fetchMovieDetails();
  // }, [search]);

  return (
    <div className='bg-black text-white w-full'>
      <Router>
        <Navbar setSearch={setSearch} search={search} movies={movies} />
        <Routes>
          <Route path='/' element={<Homepage movies={movies} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
