import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  favorite: {
    marginLeft: '1rem',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    marginLeft: '5px',
    fontSize: '20px',
  },
};
export default function RemoveFavorite() {
  return (
    <Box>
      <Typography sx={style.favorite}>
        Remove Favorite <DeleteIcon sx={style.heart} />
      </Typography>
    </Box>
  );
}
