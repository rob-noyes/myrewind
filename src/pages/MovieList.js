import React from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import MovieListHeading from '../components/MovieListHeading';
import Search from '../components/Search';
import AddFavorite from '../components/AddFavorite';
import FavoritesSection from '../components/FavoritesSection';
import TrendingSection from '../components/TrendingSection';
import { Typography } from '@mui/material';

const style = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    overflowY: 'hidden',
    justifyContent: 'start',
  },

  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: '.5rem',
    fontSize: '1.2rem',
  },

  movieRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginY: '1rem',
    padding: '.75rem',
    fontSize: '1.2rem',
    transition: 'transform .5s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },

  button: {
    paddingY: '1rem',
    padding: '.75rem',
    opacity: 1,
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
};

export default function MovieList({
  movies,
  setSearchValue,
  handleFavoriteClick,
  favorites,
  removeFavoriteMovie,
  trending,
}) {
  return (
    <Box>
      <Box sx={style.heading}>
        <MovieListHeading heading='Cinema List' />
        <Search setSearchValue={setSearchValue} />
      </Box>
      <Box>
        <TrendingSection
          trending={trending}
          handleFavoriteClick={handleFavoriteClick}
        />
      </Box>
      <Box>
        <Typography variant='h3' fontWeight='light' m={1}>
          Search Results
        </Typography>
        <Box sx={style.row}>
          {movies
            .filter((movie) => movie.poster_path !== null)
            .map((movie, index) => (
              <Box className='image-container' key={index}>
                <Button sx={style.button}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt='movie'
                  />
                  <Box
                    className='overlay'
                    onClick={() => handleFavoriteClick(movie)}
                  >
                    <AddFavorite />
                  </Box>
                </Button>
              </Box>
            ))}
        </Box>
      </Box>

      <Box>
        <FavoritesSection
          favorites={favorites}
          removeFavoriteMovie={removeFavoriteMovie}
        />
      </Box>
    </Box>
  );
}
