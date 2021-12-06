import Typography from '@mui/material/Typography';
import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MovieListHeading from '../components/MovieListHeading';

const style = {
  headBox: {
    paddingBottom: '.75rem',
    borderBottom: '1px solid grey',
    display: 'flex',
    flexDirection: 'column',
  },
  overlay: {
    position: 'absolute',
    background: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    transition: '0.5 ease',
    opacity: 0,
    bottom: 0,
    fontSize: '1.2rem',
    padding: '20px',
    textAlign: 'center',
    '&:hover': {
      opacity: '1',
    },
  },

  movieCard: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'center',
    alignItems: 'center',
    background: '#0f0f0f',
    padding: '5%',
    margin: { xl: '5% 20%' },
    color: '#ffffff',
  },

  movieContent: {
    padding: '5%',
  },

  movieDetails: {
    marginY: '1rem',
  },

  movieButtons: {
    marginY: '1rem',
    display: 'flex',
  },

  button: {
    marginRight: '1rem',
    marginBottom: '1rem',
    width: '100%',
  },
};

export default function Movie({
  movies,
  setSearchValue,
  trending,
  addFavoriteMovie,
  removeFavoriteMovie,
}) {
  const movieList = trending.concat(movies);
  console.log(movieList);
  return (
    <Box>
      <Box sx={style.headBox}>
        <MovieListHeading
          heading='My Rewind'
          setSearchValue={setSearchValue}
          movies={movies}
        />
      </Box>
      {movieList
        .filter(
          (movie) =>
            `/movie/${movie.title.replace(/[.':\s]/g, '')}` ===
            window.location.pathname
        )
        //Maps each movie with poster, title, release date, rating, and overview
        .map((movie) => (
          <Paper key={movie.id} sx={style.movieCard} elevation={8}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt='movie'
            />
            <Box sx={style.movieContent}>
              <Box>
                <Typography sx={style.movieDetails} variant='h2'>
                  {movie.title}
                </Typography>
                <Typography sx={style.movieDetails} variant='h6'>
                  Released: {movie.release_date.slice(0, 4)}
                </Typography>
                <Typography sx={style.movieDetails} variant='h6'>
                  Rating: {movie.vote_average} / 10
                </Typography>
                <Typography sx={style.movieDetails}>
                  {movie.overview}
                </Typography>
              </Box>
              <Box sx={style.movieButtons}>
                <Button
                  variant='contained'
                  sx={style.button}
                  onClick={() => addFavoriteMovie(movie)}
                >
                  Add Favorite
                </Button>
                <Button
                  variant='contained'
                  sx={style.button}
                  onClick={() => removeFavoriteMovie(movie)}
                >
                  Remove Favorite
                </Button>
              </Box>
            </Box>
          </Paper>
        ))}
    </Box>
  );
}
