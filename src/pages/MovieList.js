import React from 'react';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import MovieListHeading from '../components/MovieListHeading';
import Search from '../components/Search';

const style = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflowX: 'auto',
    justifyContent: 'start',
  },
  movieRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: '.5rem',
    fontSize: '1.2rem',
  },
};

export default function MovieList({ movies, setSearchValue }) {
  return (
    <Box>
      <Box sx={style.movieRow}>
        <MovieListHeading heading='Movies' />
        <Search setSearchValue={setSearchValue} />
      </Box>
      <Box sx={style.row}>
        {movies
          .filter((movie) => movie.poster_path !== null)
          .map((movie, index) => (
            <Box sx={style.movieRow} key={index}>
              <Button>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt='movie'
                />
              </Button>
            </Box>
          ))}
      </Box>
    </Box>
  );
}
