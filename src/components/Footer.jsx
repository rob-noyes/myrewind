import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <div className='h-12 bg-primary flex justify-center items-center'>
      <h5 className='mx-2 font-montserrat font-thin'>Developed By Rob Noyes</h5>
      <a href='https://github.com/rob-noyes'>
        <BsGithub className='text-xl' fill='#f0f0f0' />
      </a>
    </div>
  );
}

export default Footer;
