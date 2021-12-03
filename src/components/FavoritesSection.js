import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import RemoveFavorite from './RemoveFavorite';

const style = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    justifyContent: 'start',
  },

  button: {
    paddingY: '1rem',
    padding: '.75rem',
    opacity: 1,
  },
};

export default function FavoritesSection({ favorites, removeFavoriteMovie }) {
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
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt='movie'
                />
              </Button>
              <Box
                className='overlay'
                onClick={() => removeFavoriteMovie(movie)}
              >
                <RemoveFavorite />
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
