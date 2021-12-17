import React from 'react';

function MovieSearch({ movies, toggleSearch }) {
  if (movies === undefined) {
    return (
      <p className={toggleSearch ? 'w-full h-screen' : 'hidden'}>
        No Movies Searched
      </p>
    );
  }
  return (
    <div
      className={
        toggleSearch ? 'relative w-full h-full bg-secondary' : 'hidden'
      }
    >
      {movies
        .filter((movie) => movie.poster_path !== null)
        .map((movie) => (
          <div
            className='flex flex-row px-4 py-2 border-b-2 border-b-primary'
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt=''
              className=' w-2/12'
            />
            <div className='flex flex-col p-4'>
              <h2 className='text-lg'>{movie.title}</h2>
              <p className='text-sm text-primary'>
                {movie.release_date.slice(0, 4)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MovieSearch;
