import React, { useState } from 'react';
import {
  MdHome,
  MdClose,
  MdLocalMovies,
  MdTv,
  MdCollections,
  MdAccountBox,
} from 'react-icons/md';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MovieSearch from './MovieSearch';

function Navbar({ setSearch, movies, movieId, setMovieId }) {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const onClickMenu = () => {
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
            ? 'bg-secondary items-center h-14 '
            : 'flex justify-between items-center h-14 bg-navcolor '
        }
      >
        <div className='flex flex-col w-full'>
          <div
            className={
              toggleMenu
                ? 'transition-all ease-in-out duration-300 transform translate-none fixed top-0 left-0  bg-secondary w-9/12 md:w-3/12 h-full'
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
                  to='/'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdLocalMovies className='text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>Movies</li>
                </Link>
                <Link
                  to='/'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdTv className=' text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>TV Shows</li>
                </Link>
                <Link
                  to='/'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdCollections className=' text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>Collections</li>
                </Link>
                <Link
                  to='/'
                  onClick={onClickMenu}
                  className='flex items-center pb-3'
                >
                  <MdAccountBox className=' text-2xl' fill='#1BB6E7' />
                  <li className='pl-3'>Account</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className='flex justify-between  xl:justify-center'>
            <div
              className={
                toggleSearch
                  ? 'hidden'
                  : 'flex items-center md:w-10/12 lg:w-7/12'
              }
            >
              <button className='p-2 text-2xl text-white' onClick={onClickMenu}>
                <FiMenu />
              </button>
              <Link to='/' className='w-32'>
                <img src='../images/logo.png' className='' alt='' />
              </Link>
            </div>
            <input
              type='text'
              placeholder='Search'
              className={
                toggleSearch
                  ? 'transition ease-in-out duration-300 transform translate-y-0 text-lg h-14 w-full p-3 outline-none bg-secondary flex justify-center items-center xl:w-7/12'
                  : '-translate-y-10 w-0 h-0 bg-secondary'
              }
              onChange={onChangeSearch}
            />
            <button
              className={toggleSearch ? 'text-2xl p-2 text-white' : 'hidden'}
              onClick={onClickSearch}
            >
              <MdClose />
            </button>
            <button
              className={toggleSearch ? 'hidden' : 'relative text-2xl pr-2'}
              onClick={onClickSearch}
            >
              <FiSearch />
            </button>
          </div>
        </div>
      </nav>
      <MovieSearch
        movies={movies}
        setToggleSearch={setToggleSearch}
        toggleSearch={toggleSearch}
        movieId={movieId}
        setMovieId={setMovieId}
      />
    </div>
  );
}

export default Navbar;
