import React from 'react';
import { Link } from 'react-router-dom';

function Cast({ movieDetails }) {
  const directingCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Directing'
  );

  const writingCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Writing'
  );

  const producingCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Production'
  );

  const soundCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Sound'
  );

  const artCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Art'
  );

  const directorOfPhotography = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Camera'
  );

  const visualCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Visual Effects'
  );

  const costumeCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Costume & Make-Up'
  );

  const editingCredit = movieDetails.credits.crew.filter(
    (crew) => crew.department === 'Editing'
  );

  console.log(movieDetails.credits.crew);

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
            <Link to={`/movie/${movieDetails.id}`}>
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

      <h3 className=' mt-4 mb-2 block text-white'>Produced by</h3>
      {producingCredit.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}

      <h3 className=' mt-4 mb-2 block text-white'>Sound by</h3>
      {soundCredit.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}

      <h3 className=' mt-4 mb-2 block text-white'>Cinematography by</h3>
      {directorOfPhotography.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}

      <h3 className=' mt-4 mb-2 block text-white'>Film Editing by</h3>
      {editingCredit.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}

      <h3 className=' mt-4 mb-2 block text-white'>Visual Effects by</h3>
      {visualCredit.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}

      <h3 className=' mt-4 mb-2 block text-white'>Art Direction by</h3>
      {artCredit.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}

      <h3 className=' mt-4 mb-2 block text-white'>Costume by</h3>
      {costumeCredit.map((credit) => (
        <p className='mx-2 text-textTertiary'>{credit.name}</p>
      ))}
    </div>
  );
}

export default Cast;
