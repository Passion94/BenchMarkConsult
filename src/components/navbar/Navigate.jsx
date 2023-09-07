import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

const Appbar = styled(AppBar)(({ to }) => ({
  position:"fixed",
   background: "white",
   
 
  
 


  '@media screen and (max-width: 3841px)': {
    padding:"0px 1251.5px",
  },
  '@media screen and (max-width: 3201px)': {
    padding:"0px 929.5px",
  },
  '@media screen and (max-width: 2737px)': {
    padding:"0px 700px",
  },
  '@media screen and (max-width: 2257px)': {
    padding:"0px 459.5px",
  },
  '@media screen and (max-width: 1921px)': {
    padding:"0px 283px",
  },
  '@media screen and (max-width: 1601px)': {
    padding:"0px 130.5px",
  },
  '@media screen and (max-width: 1441px)': {
    padding:"0px 81px",
  },
  '@media screen and (max-width: 1367px)': {
    padding:"0px 68.4px",
  },
  '@media screen and (max-width: 1281px)': {
    padding:"0px 55.5px",
  },
}));

const pages = ['Home', 'About', 'Services', 'Projects', 'Resources', 'Blogs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navigate() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Appbar >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <img src="images/Logo.png" width='130px' sx={{ display: { xs: 'none', md: 'flex', color: '#4B4BDD' }, mr: 1 }} />
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#4B4BDD',
                textDecoration: 'none',
                
              }}
            >
              PREHOOD
            </Typography> */}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="blue"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color=''>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Typography variant='body2'
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{  display: 'block', textDecoration:"none" }}
                >
                  <Link className='link' to="">{page}</Link>
                  
                </Typography>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
             <Link to="/Form"> <Button variant='contained' onClick={handleOpenUserMenu} sx={{ my: 2, color: "secondary" }}>
                Contact
              </Button> </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Appbar>
  );
}

export default Navigate;
