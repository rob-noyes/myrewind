import { Search } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  Link,
  useScrollTrigger,
  Slide,
  TextField,
} from '@mui/material';
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
  field: {
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'block',
    background: '#ffffff',
    borderRadius: '1rem',
    width: '50%',
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
          <TextField
            hiddenLabel
            sx={style.field}
            fullWidth
            placeholder='Search'
          ></TextField>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
