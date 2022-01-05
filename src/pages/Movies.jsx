import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
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
              className={index % 2 === 0 ? 'bg-secondary' : 'bg-tertiary'}
            >
              <td className='flex items-center'>
                <img
                  className='rounded-t-md w-10'
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
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-center p-4'>
        <button
          className='p-2'
          onClick={changePageBackward}
          disabled={page > 1 ? false : true}
        >
          <MdArrowBackIos className='text-2xl' />
        </button>
        <button className='p-2' onClick={changePageForward}>
          <MdArrowForwardIos className='text-2xl' />
        </button>
      </div>
    </div>
  );
}

export default Movies;
