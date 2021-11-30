import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const style = {
  trending: {
    background: '#f2f2f2',
    borderRadius: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default function Trending({ movies }) {
  return (
    <Container>
      <h2>Trending</h2>
      <Container sx={style.trending}>
        {movies.map((movie) => (
          <Button key={movie.id} m={1}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          </Button>
        ))}
      </Container>
    </Container>
  );
}
