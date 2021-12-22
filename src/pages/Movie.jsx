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
          <h2 className='text-2xl'>{movieDetails.title}</h2>
          <span className='text-textSecondary pt-4 text-sm'>
            {movieDetails.release_date === undefined
              ? ''
              : movieDetails.release_date.slice(0, 4)}
            {movieDetails.runtime === 0
              ? ''
              : ' • ' + convertTime(movieDetails.runtime)}
          </span>
          <span className='text-textSecondary py-1 text-sm'>
            {movieDetails.credits.cast[0].name},{' '}
            {movieDetails.credits.cast[1].name}
          </span>
        </div>
        <img
          className='w-5/12'
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt=''
        />
      </div>

      <div className='w-full h-full flex flex-col md:flex-row justify-center items-center'></div>
      <div className='bg-secondary pb-4'>
        <p className='p-4 text-textSecondary'>{movieDetails.tagline}</p>
        <p className='px-4 pb-4'>{movieDetails.overview}</p>
      </div>
      <div className='flex flex-col'>
        <h3 className='text-xl m-4'>Top Cast</h3>
        <ul className='flex no-wrap overflow-scroll overflow-y-hidden h-48'>
          {movieDetails.credits.cast.slice(0, 12).map((credit) => (
            <div className='' key={credit.name}>
              <li className='w-28'>
                <div className='h-20 w-20 object-contain mx-4'>
                  <img
                    className='rounded-half object-cover h-20 w-20'
                    src={
                      credit.profile_path === null
                        ? '/images/blankProfile.png'
                        : `https://image.tmdb.org/t/p/w300/${credit.profile_path}`
                    }
                    alt=''
                  />
                  <p className='text-sm text-center font-semibold'>
                    {credit.name}
                  </p>
                  <p className='text-xs line-clamp-2 text-center text-textSecondary'>
                    {credit.character}
                  </p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
