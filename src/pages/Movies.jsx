import { MdArrowForwardIos, MdArrowBackIos, MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Movies({ setMovieId, topRated, setPage, page }) {
  const pageSize = 20;
  const changePageForward = () => {
    if (page > 0) {
      setPage(page + 1);
    }
  };

  const changePageBackward = () => {
    if (page >= 2) {
      setPage(page - 1);
    }
  };

  const onClickRedirect = (movie) => {
    setMovieId(movie.id);
  };

  return (
    <div className='max-w-6xl w-full m-auto bg-secondary'>
      <h2 className='text-2xl text-textPrimary px-3 py-4'>Top Movies</h2>
      <table className='w-full '>
        <tbody className='flex flex-col px-3'>
          {topRated.map((movie, index) => (
            <tr
              key={movie.id}
              className={
                index % 2 === 0
                  ? 'bg-secondary flex justify-between items-center'
                  : 'bg-tertiary flex justify-between items-center'
              }
            >
              <td className='flex items-center'>
                <img
                  className=' w-10 my-1'
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt=''
                />
                <p className='text-sm px-2'>
                  {page > 1 ? (page - 1) * pageSize + (index + 1) : index + 1}.{' '}
                </p>
                <Link
                  to={`/movie/${movie.id}`}
                  onClick={() => onClickRedirect(movie)}
                >
                  <h2 className='text-sm text-textTertiary'>{movie.title}</h2>
                </Link>
                <span className='text-sm text-textSecondary px-1'>
                  ({movie.release_date.slice(0, 4)})
                </span>
              </td>
              <td className='flex items-center'>
                <MdStar fill='#F4C518' className=' mx-1 ' />{' '}
                <span className='text-sm text-textSecondary'>
                  {movie.vote_average.toFixed(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center items-center'>
        <button
          className={page > 1 ? 'p-2 pr-0' : 'text-primary'}
          onClick={changePageBackward}
          disabled={page > 1 ? false : true}
        >
          <MdArrowBackIos className='text-2xl' />
        </button>
        <span>{page}</span>
        <button className='p-2' onClick={changePageForward}>
          <MdArrowForwardIos className='text-2xl' />
        </button>
      </div>
    </div>
  );
}

export default Movies;
