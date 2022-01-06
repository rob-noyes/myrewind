import React, { useState } from 'react';
import {
  MdHome,
  MdClose,
  MdLocalMovies,
  MdCollections,
  MdAccountBox,
} from 'react-icons/md';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MovieSearch from './MovieSearch';

function Navbar({ setSearch, movies, movieId, setMovieId, setPage }) {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const resetTopRated = () => {
    setPage(1);
  };

  const onClickSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const onClickMenu = () => {
    setToggleMenu(!toggleMenu);
    resetTopRated();
  };

  const clickMenuNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const onChangeSearch = (e) => {
    const searchingQuery = e.target.value;
    setSearch(searchingQuery);
  };

  return (
    <div className='w-full flex flex-col'>
      <nav
        className={
          toggleSearch
            ? 'bg-navcolor items-center h-14 z-10 shadow-bg'
            : 'flex justify-between items-center h-14 bg-navcolor shadow-lg '
        }
      >
        <div className='flex flex-col w-full'>
          <div
            className={
              toggleMenu
                ? 'transition-all ease-in-out duration-300 transform translate-none fixed top-0 left-0  bg-secondary w-9/12 md:w-3/12 h-full shadow-bg'
                : 'transition-all ease-in duration-50 transform -translate-x-50 fixed w-0'
            }
          >
            <div
              className={
                toggleMenu
                  ? 'h-14 flex justify-end bg-secondary'
                  : 'fixed -left-48 top-0'
              }
            >
              <button
                className='white right-0 text-2xl pr-4'
                onClick={onClickMenu}
              >
                <MdClose />
              </button>
            </div>
            <div
              className={toggleMenu ? 'flex left-0 text-xl' : 'fixed -left-48'}
            >
              <ul className='px-4 py-4'>
                <Link
                  to='/'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdHome className='text-2xl' fill='#1BB6E7' />

                  <li className='pl-3'>Home</li>
                </Link>
                <Link
                  to='/movies'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdLocalMovies className='text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>Top Movies</li>
                </Link>
                <Link
                  to='/now_playing'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdCollections className=' text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>Now Playing</li>
                </Link>
                <Link
                  to='/account'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdAccountBox className=' text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>Account</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='flex justify-center bg-navcolor'>
            <div
              className={
                toggleSearch ? 'hidden' : 'flex items-center max-w-3xl w-full '
              }
            >
              <button
                className='p-2 text-2xl text-white'
                onClick={clickMenuNav}
              >
                <FiMenu />
              </button>
              <Link to='/' className='w-32' onClick={resetTopRated}>
                <img src='../images/logo.png' className='' alt='' />
              </Link>
            </div>
            <input
              type='text'
              placeholder='Search'
              className={
                toggleSearch
                  ? 'transition ease-in-out duration-300 transform translate-y-0 text-lg h-14 w-full p-3 outline-none bg-tertiary flex justify-center items-center  max-w-3xl'
                  : '-translate-y-10 w-0 h-0 bg-tertiary'
              }
              onChange={onChangeSearch}
            />
            <button
              className={
                toggleSearch ? 'text-2xl p-2 text-white bg-tertiary' : 'hidden'
              }
              onClick={onClickSearch}
            >
              <MdClose />
            </button>
            <button
              className={
                toggleSearch
                  ? 'hidden'
                  : 'relative text-2xl pr-2' && toggleMenu
                  ? 'hidden'
                  : 'relative text-2xl pr-2'
              }
              onClick={onClickSearch}
            >
              <FiSearch />
            </button>
          </div>
        </div>
        <MovieSearch
          movies={movies}
          setToggleSearch={setToggleSearch}
          toggleSearch={toggleSearch}
          movieId={movieId}
          setMovieId={setMovieId}
        />
      </nav>
    </div>
  );
}

export default Navbar;
