import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

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

  const directorCredit = movieDetails.credits.crew.filter(
    (credit) => credit.department === 'Directing'
  );

  const writing = movieDetails.credits.crew.filter(
    (credit) => credit.department === 'Writing'
  );
  console.log(writing);

  const writingCredit = writing.filter(
    (tag, index, array) => array.findIndex((t) => t.name === tag.name) === index
  );

  return (
    <div className='h-full w-full lg:max-w-6xl lg:flex lg:flex-col lg:m-auto '>
      <div className='w-full'>
        <div
          className='h-48 md:h-72 lg:h-96 xl:h-120'
          style={{
            backgroundImage: `linear-gradient(transparent, rgba(31, 31, 31, .5) 75%, rgba(31, 31, 31, 1) 100%), url(https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path})`,

            width: '100%',
            backgroundSize: 'cover',
          }}
        ></div>
      </div>

      <div className='bg-secondary p-4 flex justify-between'>
        <div className='flex flex-col'>
          <h2 className='text-2xl lg:mt-10 lg:mx-10'>{movieDetails.title}</h2>
          <span className='text-textSecondary pt-4 text-sm lg:mx-10'>
            {movieDetails.release_date === undefined
              ? ''
              : movieDetails.release_date.slice(0, 4)}
            {movieDetails.runtime === 0
              ? ''
              : ' • ' + convertTime(movieDetails.runtime)}
          </span>
          <span className='text-textSecondary py-1 text-sm lg:mx-10'>
            {movieDetails.credits.cast[0].name},{' '}
            {movieDetails.credits.cast[1].name}
          </span>
          <p className='text-sm italic text-textSecondary py-6 lg:mx-10'>
            {movieDetails.tagline}
          </p>

          <div className='lg:flex lg:flex-col lg:items-center'>
            <p className='lg:mx-10 py-4 lg:max-w-lg'>{movieDetails.overview}</p>
          </div>
        </div>
        <img
          className='w-2/6 h-4/6 xl:w-3/12'
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt=''
        />
      </div>

      {/* <div className='bg-secondary py-4 lg:flex lg:flex-col lg:items-center'>
        <p className='px-4 pb-4 lg:max-w-2xl'>{movieDetails.overview}</p>
      </div> */}
      <div className='flex flex-col'>
        <Link to={`/movie/${movieDetails.id}/cast`} className='w-48'>
          <h3 className='text-xl m-4 lg:m-10 flex items-center '>
            Top Cast <MdKeyboardArrowRight className='text-3xl' />
          </h3>
        </Link>
        <ul className='flex no-wrap overflow-scroll overflow-y-hidden h-48'>
          {movieDetails.credits.cast.slice(0, 12).map((credit) => (
            <li className='w-28' key={credit.name}>
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
          ))}
          <li className='w-28'>
            <div className='h-20 w-20 object-contain mx-4'>
              <Link className='h-20 w-20' to={`/movie/${movieDetails.id}/cast`}>
                <h4 className='text-center text-3xl font-light'>See All</h4>
              </Link>
            </div>
          </li>
        </ul>
        <div className='px-4 py-2 lg:mt-10 lg:px-10 flex items-center border-y'>
          <h2 className='text-lg'>Director</h2>
          <p className='ml-4 text-textTertiary'>{directorCredit[0].name}</p>
        </div>
        <div className='px-4 py-2 lg:px-10 flex items-center border-b'>
          <h2 className='text-lg'>Writers</h2>
          <p className='ml-6 text-textTertiary'>
            {writingCredit.map((credit) => (
              <p>{credit.name}</p>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
