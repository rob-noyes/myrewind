import React, { useState } from 'react';
import { MdClose, MdLocalMovies } from 'react-icons/md';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClickSearch = () => {
    setToggleSearch(!toggleSearch);
  };

  const onClickMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav
      className={
        toggleSearch
          ? 'bg-secondary  items-center h-14'
          : 'flex justify-between items-center h-14 bg-navcolor'
      }
    >
      <div
        className={
          toggleMenu
            ? 'transition-all ease-in-out duration-300 transform translate-none fixed top-0 left-0  bg-secondary w-9/12 h-full'
            : 'transition-all ease-in duration-50 transform -translate-x-50 w-0'
        }
      >
        <div
          className={
            toggleMenu
              ? 'h-14 flex justify-end bg-secondary'
              : 'fixed -left-48 top-0'
          }
        >
          <button className='white right-0 text-2xl' onClick={onClickMenu}>
            <MdClose />
          </button>
        </div>
        <div className={toggleMenu ? 'flex left-0 text-xl' : 'fixed -left-48'}>
          <ul className='px-4 py-4'>
            <li className='pb-3'>Search</li>
            <Link
              to='/movies'
              onClick={onClickMenu}
              className='flex items-center pb-3'
            >
              <MdLocalMovies className=' text-iconPrimary text-2xl' />
              <li className='pl-3'>Movies</li>
            </Link>
            <li className='pb-3'>TV Shows</li>
            <li className='pb-3'>Collections</li>
            <li className='pb-3'>Account</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center'>
        <input
          type='text'
          placeholder='Search'
          className={
            toggleSearch
              ? 'transition ease-in-out duration-300 transform translate-y-0 text-lg h-14 w-full p-3 outline-none bg-secondary flex justify-center items-center'
              : '-translate-y-10 w-0 h-0 bg-secondary'
          }
        />
        <button
          className={toggleSearch ? 'text-2xl p-2 text-white' : 'hidden'}
          onClick={onClickSearch}
        >
          <MdClose />
        </button>
        <div className={toggleSearch ? 'hidden' : 'flex items-center'}>
          <button className='p-2 text-2xl text-white' onClick={onClickMenu}>
            <FiMenu />
          </button>
          <Link to='/' className='w-2/6'>
            <img src='../images/logo.png' className='' alt='' />
          </Link>
        </div>
        <button
          className={toggleSearch ? 'hidden' : 'right-0 text-2xl p-2'}
          onClick={onClickSearch}
        >
          <FiSearch />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
