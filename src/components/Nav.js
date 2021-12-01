import { AppBar, Toolbar, Link } from '@mui/material';
import React from 'react';

const style = {
  appbar: {
    background: '#2f2f2f',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: '2rem',
  },
};

export default function Nav() {
  return (
    <AppBar>
      <Toolbar sx={style.appbar}>
        <Link href='/' color='inherit' underline='none' sx={style.title}>
          Cinema List
        </Link>
      </Toolbar>
    </AppBar>
  );
}
