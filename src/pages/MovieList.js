import React from 'react';
import Box from '@mui/system/Box';
import MovieListHeading from '../components/MovieListHeading';
import FavoritesSection from '../components/FavoritesSection';
import TrendingSection from '../components/TrendingSection';

const style = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    overflowY: 'hidden',
    justifyContent: 'start',
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },

  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: '.5rem',
    fontSize: '1.2rem',
  },

  headBox: {
    paddingBottom: '.75rem',
    borderBottom: '1px solid grey',
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
  addFavoriteMovie,
  favorites,
  removeFavoriteMovie,
  trending,
}) {
  return (
    <Box>
      <Box sx={style.headBox}>
        <MovieListHeading
          heading='My Rewind'
          setSearchValue={setSearchValue}
          movies={movies}
        />
      </Box>
      <Box>
        <TrendingSection
          trending={trending}
          addFavoriteMovie={addFavoriteMovie}
        />
      </Box>
      {/* <Box>
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
      </Box> */}

      <Box>
        <FavoritesSection
          favorites={favorites}
          removeFavoriteMovie={removeFavoriteMovie}
        />
      </Box>
    </Box>
  );
}
