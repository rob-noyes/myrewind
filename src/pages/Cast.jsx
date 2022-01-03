import React from 'react';
import { Link } from 'react-router-dom';

function Cast({ movieDetails }) {
  const directingCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Directing'
  );

  const writingCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Writing'
  );

  console.log(directingCredit);

  return (
    <div className='flex flex-wrap flex-col h-full w-full lg:max-w-6xl lg:flex lg:flex-col lg:m-auto p-4 bg-black '>
      <div className='flex flex-col mb-4 text-white'>
        <div className='flex flex-row'>
          <img
            className='w-20 h-full'
            src={`https://image.tmdb.org/t/p/w200/${movieDetails.poster_path}`}
            alt=''
          />
          <div className='ml-4'>
            <Link to={`/movie/:id`}>
              <h2 className='text-2xl text-textPrimary'>
                {movieDetails.title}
              </h2>
            </Link>
            <h2 className='text-3xl mt-4'>Full Cast & Crew</h2>
          </div>
        </div>
      </div>

      <h2>Directed by</h2>
      <h5 className='text-textTertiary m-3'>{directingCredit[0].name}</h5>

      <h3>Written by</h3>
      <h5 className='text-textTertiary m-3'>{writingCredit[0].name}</h5>

      <h3 className=' mb-4 text-white'>
        Cast <span className='text-textSecondary'>(In Credits Order)</span>
      </h3>
      <table className='h-14 table-auto max-w-6xl'>
        {movieDetails.credits.cast.map((credit, index) => (
          <tbody key={credit.id} className='w-full'>
            <tr
              className={
                index % 2 === 0
                  ? `bg-castRow border-b-2 border-b-black`
                  : `bg-castRowTwo border-b-2 border-b-black`
              }
            >
              <td>
                <img
                  className='object-cover w-16 h-12 lg:w-10 lg:h-14'
                  src={
                    credit.profile_path === null
                      ? '/images/blankProfile.png'
                      : `https://image.tmdb.org/t/p/w300/${credit.profile_path}`
                  }
                  alt=''
                />
              </td>
              <td>
                <p className='text-textTertiary ml-2'>{credit.name}</p>
              </td>
              <td>
                <p className='text-textSecondary'>{credit.character}</p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {/* {movieDetails.credits.cast.map(
        (credit) => (
          console.log(credit),
          (
            <li
              className='list-none border-b text-blue-600 bg-textSecondary h-14 object-contain flex flex-row justify-between  '
              key={credit.name}
            >
              <div className='flex flex-row w-full justify-between items-center md:justify-start   '>
                <div className='flex items-center'>
                  <img
                    className='object-cover w-8 h-12 '
                    src={
                      credit.profile_path === null
                        ? '/images/blankProfile.png'
                        : `https://image.tmdb.org/t/p/w300/${credit.profile_path}`
                    }
                    alt=''
                  />
                  <Link to={`/name/${credit.id}`}>
                    <h2 className='pl-3 text-sm font-semibold md:w-96'>
                      {credit.name}
                    </h2>
                  </Link>
                </div>
                <p className='text-xs text-left text-primary mr-1 line-clamp-1 lg:line-clamp-none'>
                  {credit.character}
                </p>
              </div>
            </li>
          )
        )
      )} */}
    </div>
  );
}

export default Cast;
