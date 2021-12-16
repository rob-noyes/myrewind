import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
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
          ? 'bg-secondary flex justify-between items-center h-12'
          : 'flex justify-between items-center h-12 bg-primary'
      }
    >
      <input
        type='text'
        placeholder='Search'
        className={
          toggleSearch
            ? 'transition ease-in-out duration-300 transform translate-y-0 text-lg p-3 h-full w-full outline-none bg-secondary'
            : 'transition ease-in-out duration-300 transform -translate-y-10 w-0 bg-secondary'
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
        className={
          toggleSearch
            ? 'hidden'
            : 'transition-all ease-linear duration-150 scale-100 text-2xl p-2'
        }
        onClick={onClickSearch}
      >
        <FiSearch />
      </button>
    </nav>
  );
}

export default Navbar;
