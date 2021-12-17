import React, { useState, useEffect } from 'react';

function Homepage({ movies }) {
  if (movies === undefined) {
    return <h2>No movies searched</h2>;
  }

  return (
    <div>
      {movies
        .filter((movie) => movie.poster_path !== null)
        .map((movie) => (
          <div className='flex' key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt=''
              className=' w-2/12'
            />
            <p>{movie.title}</p>
          </div>
        ))}
    </div>
  );
}

export default Homepage;
