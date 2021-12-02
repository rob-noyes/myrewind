import { Box } from '@mui/system';
import React from 'react';

export default function Search({ queryResults }) {
  const style = {
    text: {
      color: '#ffffff',
      fontSize: '1.5rem',
    },
  };
  return (
    <Box sx={style.text}>
      {queryResults.map((m) => (
        <p>{m.title}</p>
      ))}
    </Box>
  );
}
