import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const style = {
  favorite: {
    marginLeft: '1rem',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  heart: {
    marginLeft: '5px',
    fontSize: '20px',
  },
};

export default function AddFavorite() {
  return (
    <Box>
      <Typography sx={style.favorite}>
        Add Favorite <FavoriteIcon sx={style.heart} />
      </Typography>
    </Box>
  );
}
