import { Link, Typography } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';

export default function MovieListHeading({ heading }) {
  return (
    <Box>
      <Link href='/' underline='none'>
        <Typography variant='h2'>{heading}</Typography>
      </Link>
    </Box>
  );
}
