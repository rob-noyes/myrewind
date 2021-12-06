import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import RemoveFavorite from './RemoveFavorite';
import { Link } from 'react-router-dom';

const style = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    overflowY: 'hidden',
    justifyContent: 'start',
  },

  button: {
    paddingY: '1rem',
    padding: '.75rem',
    opacity: 1,
  },
  remove: {
    zIndex: 10,
  },
};

export default function FavoritesSection({ favorites, removeFavoriteMovie }) {
  if (favorites === null) {
    return (
      <Box>
        <Typography variant='h3' fontWeight='light' m={1}>
          Favorites
        </Typography>
      </Box>
    );
  }
  return (
    <Box>
      <Typography variant='h3' fontWeight='light' m={1}>
        Favorites
      </Typography>
      <Box sx={style.row}>
        {favorites
          .filter((movie) => movie.poster_path !== null)
          .map((movie, index) => (
            <Box className='image-container' key={index}>
              <Button sx={style.button}>
                <Link to={`/movie/${movie.title.replace(/[.':\s]/g, '')}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt='movie'
                  />
                </Link>
                <Box
                  className='overlay'
                  onClick={() => removeFavoriteMovie(movie)}
                >
                  <RemoveFavorite />
                </Box>
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
