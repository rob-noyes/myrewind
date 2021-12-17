import React from 'react';

function Movie({ movieDetails }) {
  //   const moviepath = movies.filter(
  //     (movie) => movie.id === window.location.pathname
  //   );
  //   console.log(moviepath);
  return <div>{movieDetails.title}</div>;
}

export default Movie;
