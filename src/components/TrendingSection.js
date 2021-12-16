import React from 'react';
import AddFavorite from './AddFavorite';
import { Link } from 'react-router-dom';

export default function TrendingSection({ trending, addFavoriteMovie }) {
  return (
    <div className='flex flex-row'>
      <h3 className='text-xl'>Trending</h3>
      <div className='flex flex-row'>
        {trending
          .filter((movie) => movie.poster_path !== null)
          .map((movie, index) => (
            <div className='flex' key={index}>
              <button>
                <Link to={`/movie/${movie.title.replace(/[.':\s]/g, '')}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt='movie'
                  />
                </Link>
                <div
                  className='overlay'
                  onClick={() => addFavoriteMovie(movie)}
                >
                  <AddFavorite />
                </div>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
