import React, { useEffect, useState } from 'react';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/76341?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  console.log(movies);

  return (
    <div>
      <p>{movies.title}</p>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movies.poster_path}`}
        alt=''
      />
    </div>
  );
}
