import { AppBar, Toolbar, Link, useScrollTrigger, Slide } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import image from '../images/logo.png';

const style = {
  appbar: {
    background: '#13181B',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
  },
  imageIcon: {
    height: '1rem',
    color: '#ffffff',
  },
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Nav(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar sx={style.appbar} position=''>
          <Link href='/' underline='none' sx={style.title}>
            <img className='imageTitle' src={image} alt='' />
          </Link>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
