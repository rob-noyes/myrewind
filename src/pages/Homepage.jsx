import { Link } from 'react-router-dom';

function Homepage({ trending, setMovieId, movieId }) {
  const onClickRedirect = (movie) => {
    setMovieId(movie.id);
    console.log(movieId);
  };

  return (
    <div>
      <h1 className='ml-2 mt-2 text-textPrimary text-3xl '>Popular Movies</h1>
      <div className=' flex overflow-x-scroll h-96'>
        {trending.map((movie) => (
          <div
            onClick={() => onClickRedirect(movie)}
            className='m-2'
            key={movie.id}
          >
            <Link to={`/movie/${movie.id}`}>
              <div className='w-48 h-24'>
                <img
                  className=''
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt=''
                />
                <p>{movie.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
