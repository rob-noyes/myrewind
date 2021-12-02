import Box from '@mui/system/Box';
import React from 'react';
import Nav from './Nav';

export default function Layout({ children, search, setSearch, handleSearch }) {
  return (
    <Box>
      <Box>
        <Nav
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}
