import React from 'react';
import Box from '@mui/system/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import AddFavorite from './AddFavorite';

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
};

export default function TrendingSection({ trending, handleFavoriteClick }) {
  return (
    <Box>
      <Typography variant='h3' fontWeight='light' m={1}>
        Trending
      </Typography>
      <Box sx={style.row}>
        {trending
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
  );
}
