import React from 'react';
import { Link } from 'react-router-dom';

function MovieSearch({
  movies,
  toggleSearch,
  movieId,
  setMovieId,
  setToggleSearch,
}) {
  if (movies === undefined || movies.length === 0) {
    return (
      <p
        className={toggleSearch ? 'w-full h-screen p-2 text-center' : 'hidden'}
      >
        No Movies Found :(
      </p>
    );
  }

  const getMovie = (movie) => {
    setMovieId(movie);
    setToggleSearch(!toggleSearch);
  };

  return (
    <div
      className={
        toggleSearch
          ? 'm-auto  w-full max-w-3.5 xl:h-search overflow-y-scroll bg-secondary'
          : 'hidden'
      }
    >
      {movies
        .filter((movie) => movie.poster_path !== null)
        .map((movie, index) => (
          <Link to={`/movie/${movie.id}`} value={movie} key={movie.id}>
            <div
              className={
                index % 2 === 0
                  ? `flex flex-row px-4 py-4 border-b border-primary hover:bg-iconPrimary`
                  : `flex flex-row px-4 py-4 border-b bg-tertiary border-primary hover:bg-iconPrimary`
              }
              key={movie.id}
              onClick={() => getMovie(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=''
                className='max-w-xs'
              />
              <div className='flex flex-col p-4'>
                <h2 className='text-lg'>{movie.title}</h2>
                <p className='text-sm py-3 text-textSecondary'>
                  {movie.release_date === undefined
                    ? ''
                    : movie.release_date.slice(0, 4)}
                </p>
                <p className='text-sm text-textSecondary'>
                  Rating: {movie.vote_average}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default MovieSearch;
