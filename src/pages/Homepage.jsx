import { Link } from 'react-router-dom';
import { MdStar } from 'react-icons/md';

function Homepage({ trending, setMovieId, movieId, topRated, upcoming }) {
  const onClickRedirect = (movie) => {
    setMovieId(movie.id);
    console.log(movieId);
  };

  return (
    <div className='w-full lg:max-w-6xl lg:flex lg:flex-col m-auto lg:bg-tertiary'>
      <div className='bg-tertiary mb-4 pt-6 lg:mt-2'>
        <h1 className='mx-4 mt-2 text-textPrimary text-3xl font-semibold'>
          Popular Movies
        </h1>
        <div className='py-4 px-2 flex h-112 overflow-x-auto overflow-y-hidden '>
          {trending.map((movie) => (
            <div
              onClick={() => onClickRedirect(movie)}
              className=' mx-2 shadow-xl bg-secondary rounded-md border border-primary'
              key={movie.id}
            >
              <Link to={`/movie/${movie.id}`}>
                <div className='w-48 h-32 '>
                  <img
                    className='rounded-t-md'
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt=''
                  />
                  <div className='p-3  flex flex-col h-full'>
                    <span className='flex'>
                      <MdStar fill='#F4C518' className='text-lg -mx-px' />{' '}
                      <span className='text-sm px-2'>{movie.vote_average}</span>
                    </span>
                    <h3 className=' font-medium'>{movie.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-tertiary mt-4 pt-2'>
        <h1 className='mx-4 mt-2 text-textPrimary text-3xl font-semibold'>
          Upcoming
        </h1>
        <div className='py-4 px-2 flex h-112 overflow-x-auto '>
          {upcoming.map((movie) => (
            <div
              onClick={() => onClickRedirect(movie)}
              className=' mx-2 shadow-xl bg-secondary rounded-md border border-primary'
              key={movie.id}
            >
              <Link to={`/movie/${movie.id}`}>
                <div className='w-48 h-32 '>
                  <img
                    className='rounded-t-md'
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt=''
                  />
                  <div className='p-3  flex flex-col h-full'>
                    <span className='flex'>
                      <MdStar fill='#F4C518' className='text-lg -mx-px' />{' '}
                      <span className='text-sm px-2'>{movie.vote_average}</span>
                    </span>
                    <h3 className=' font-medium'>{movie.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-tertiary mt-4 pt-2 pb-10'>
        <Link to={'/movies'}>
          <h1 className='ml-4 mt-2 text-textPrimary text-3xl font-semibold'>
            Top Rated
          </h1>
        </Link>
        <div className='py-4 px-2 flex h-112 overflow-x-auto'>
          {topRated.map((movie) => (
            <div
              onClick={() => onClickRedirect(movie)}
              className=' mx-2 shadow-xl bg-secondary rounded-md border border-primary'
              key={movie.id}
            >
              <Link to={`/movie/${movie.id}`}>
                <div className='w-48 h-32 '>
                  <img
                    className='rounded-t-md'
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt=''
                  />
                  <div className='p-3  flex flex-col h-full'>
                    <span className='flex'>
                      <MdStar fill='#F4C518' className='text-lg -mx-px' />{' '}
                      <span className='text-sm px-2'>{movie.vote_average}</span>
                    </span>
                    <h3 className=' font-medium'>{movie.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
