import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router';
import MovieList from './pages/MovieList';

function App() {
  const [movies, setMovies] = useState([
    {
      Title: 'Blade Runner',
      Year: '1982',
      imdbID: 'tt0083658',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
    },
    {
      Title: 'Blade Runner 2049',
      Year: '2017',
      imdbID: 'tt1856101',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg',
    },
    {
      Title: 'Blade',
      Year: '1998',
      imdbID: 'tt0120611',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg',
    },
    {
      Title: 'Blade II',
      Year: '2002',
      imdbID: 'tt0187738',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOWVjZTIzNDYtNTBlNC00NTJjLTkzOTEtOTE0MjlhYzI2YTcyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
  ]);

  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={<MovieList movies={movies} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
