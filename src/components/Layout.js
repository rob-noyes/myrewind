import Box from '@mui/system/Box';
import React from 'react';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <Box>
      <Box>
        <Nav />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
