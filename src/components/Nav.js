import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import PropTypes from 'prop-types';
import image from '../images/logo.png';

const style = {
  appbar: {
    background: '#13181B',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '2rem',
  },
  imageIcon: {
    height: '1rem',
    color: '#ffffff',
  },
  form: {
    width: '40rem',
  },
  field: {
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'block',
    background: '#ffffff',
    borderRadius: '1rem',
  },
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Nav({ props, search, setSearch, handleSearch }) {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar sx={style.appbar} position=''>
          <Link href='/' underline='none' sx={style.title}>
            <img className='imageTitle' src={image} alt='' />
          </Link>
          <form noValidate autoComplete='off' onSubmit={handleSearch}>
            <TextField
              onChange={(e) => setSearch(e.target.value)}
              hiddenLabel
              sx={style.field}
              fullWidth
              placeholder='Search'
            ></TextField>
          </form>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
