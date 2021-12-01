import Box from '@mui/system/Box';
import Trending from '../components/Trending';

export default function Home({ trending }) {
  return (
    <Box>
      <Trending trending={trending} />
    </Box>
  );
}
