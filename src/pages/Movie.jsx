import React from 'react';

function Movie({ movieDetails }) {
  const convertTime = (time) => {
    let num = time;
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = Math.round((hours - rhours) * 60);
    return `${rhours}h ${minutes}m`;
  };

  if (movieDetails.status_code === 34) {
    return <h2>Movie Database Error</h2>;
  }

  console.log(movieDetails);
  return (
    <div className='h-full'>
      <div className='w-full'>
        <div
          style={{
            backgroundImage: `linear-gradient(transparent, rgba(31, 31, 31, .5) 75%, rgba(31, 31, 31, 1) 100%), url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})`,
            height: '12rem',
            width: '100%',
            backgroundSize: 'cover',
          }}
        ></div>
        {/* <img
          className='h-48 w-full bg-gradient-to-t from-secondary to-transparent'
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
          alt={`${movieDetails.title}`}
        /> */}
      </div>

      <div className='bg-secondary p-4 flex justify-between'>
        <div className='flex flex-col'>
          <h2 className='text-xl py-2'>{movieDetails.title}</h2>
          <span className='text-textSecondary py-4 text-sm'>
            {movieDetails.release_date === undefined
              ? ''
              : movieDetails.release_date.slice(0, 4)}
            {movieDetails.runtime === 0
              ? ''
              : ' • ' + convertTime(movieDetails.runtime)}
          </span>
        </div>
        <img
          className='w-5/12'
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt=''
        />
      </div>

      <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'>
        {/* <iframe
          className=' overflow-hidden '
          title={movieDetails.id}
          // className={
          //   movieDetails.videos.results[0] === undefined
          //     ? 'w-0 h-0'
          //     : ' p-4 h-64 w-full'
          // }
          src={
            movieDetails.videos.results[0] === undefined
              ? ''
              : `https://www.youtube.com/embed/${movieDetails.videos.results[0].key}`
          }
          allowfullscreen='allowfullscreen'
          mozallowfullscreen='mozallowfullscreen'
          msallowfullscreen='msallowfullscreen'
          oallowfullscreen='oallowfullscreen'
          webkitallowfullscreen='webkitallowfullscreen'
        /> */}
      </div>
      <div className='bg-secondary'>
        <p className='p-4 text-textSecondary'>{movieDetails.tagline}</p>
        <p className='px-4 pb-4'>{movieDetails.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
