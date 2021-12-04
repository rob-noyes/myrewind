import { Link, Typography, TextField } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';

const style = {
  col: {
    background: '#ffffff',
    borderRadius: '1rem',
  },
  search: {
    width: '30rem',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginX: '.5rem',
    fontSize: '1.2rem',
  },
};

export default function MovieListHeading({ heading, setSearchValue }) {
  return (
    <Box sx={style.heading}>
      <Link href='/' underline='none'>
        <Typography variant='h2'>{heading}</Typography>
      </Link>
      <Box sx={style.col}>
        <TextField
          sx={style.search}
          placeholder='Search Movies'
          onChange={(e) => setSearchValue(e.target.value)}
        ></TextField>
      </Box>
    </Box>
  );
}
