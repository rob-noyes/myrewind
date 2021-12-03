import { Link } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';

export default function MovieListHeading({ heading }) {
  return (
    <Box>
      <Link href='/' underline='none'>
        <h1>{heading}</h1>
      </Link>
    </Box>
  );
}
