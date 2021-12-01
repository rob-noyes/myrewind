import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const style = {
  contain: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#8694A1',
  },
  trending: {
    borderRadius: '5px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    color: '#8694A1',
  },
};

export default function Trending({ trending }) {
  return (
    <Container sx={style.contain}>
      <h2>Trending</h2>
      <Container sx={style.trending}>
        {trending.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`}>
            <Button elevation={2}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            </Button>
          </Link>
        ))}
      </Container>
    </Container>
  );
}
