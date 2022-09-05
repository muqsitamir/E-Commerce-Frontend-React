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
import {Grid, Stack} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const pages = ['Products','ali', "wadood", "amer", 'Islam'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = {
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers': "*",
    // 'Accept': '*/*'
};


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hoverStyle, setHoverStyle] = React.useState({weight: '', scale: ''});
  const [menuData, setMenuData] = React.useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
        dispatch(getMenuData())
    }, []);

  const getMenuData = () => (dispatch) => {
        let config = {
            headers: Header,
        };
        axios.get(`http://0.0.0.0:8000/shop/api/sports/`, config).then((res) => {
            dispatch(setMenuData(res.data.results));
        }).catch((err) => {
            // dispatch(setSnackBar(err.response.data.non_field_errors[0]));
        }).finally(() => {
            // dispatch(showLoadingScreen(false));
        })
  }

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

  const handleHover = (event) => {
      let id = event.target.id.includes("-id") ? event.target.id : event.target.id + "-id";
      document.getElementById(id).style.visibility = "visible";
      setHoverStyle({style: 'italic', color: '#1976d2', scale: 'scale(1.2)'});
  };

  const handleUnhover = (event) => {
      let id = event.target.id.includes("-id") ? event.target.id : event.target.id + "-id";
      document.getElementById(id).style.visibility = "hidden";
      setHoverStyle({weight: 'bold', color: '#363636', scale: 'scale(1.0)'});
  };
  return (
<>
    <AppBar position="static" sx={{backgroundColor: '#ffffff', color: '#1976d2', height: {xs: '60px', sm: '60px', md: '150px'}}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
            <Box sx={{height: '10px', marginTop: '-50px', marginLeft: '20%', display: {xs: 'none', sm: "none", md: "inline-block"}}}>
                <Link to='/'>
                    <img style={{height: '120px', marginRight: 1}} src={require('../images/logo.png')} />
                </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{display: {xs: 'flex', md: "none"}, marginTop:{xs: '10px', sm: '0px'}, flexGrow: 1.4}}>
             <Link to='/'><img style={{height: '40px'}} src={require('../images/logo.png')} /></Link>
          </Box>
          <Box sx={{ flexGrow: 0, position: 'fixed', right: 20}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
          <Grid container alignItems='center' justifyContent='center' direction='column' >
            <Box sx={{ marginTop: '30px',maxHeight: '10px', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuData.map((page) => (
              <Link to={'/'+ page.name} style={{textDecoration: 'none'}}>
                <Button
                    id={page.name}
                    key={page.name}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnhover}
                    onClick={handleCloseNavMenu}
                    sx={{mx: 1,maxHeight: '35px', my: 2, fontWeight: 'bold',display: 'block', color: hoverStyle.color, fontStyle: hoverStyle.style, transform: hoverStyle.scale }}
                    >
                    {page.name}
                </Button>
              </Link>
            ))}
            </Box>
          </Grid>
      </Container>
    </AppBar>
    {menuData.map((page) => (
        <div id={page.name + "-id"} onMouseEnter={handleHover} onMouseLeave={handleUnhover} style={{columnGap: '30px', display: 'flex', justifyContent: 'center', alignItems: "center", alignSelf: 'start', boxShadow: '0px 15px 10px -15px #111', visibility: "hidden", height: '330px', backgroundColor: 'white', marginTop: -6, position: "fixed", right: 0, left: 0}}>
            <span style={{height: '300px'}}>
                 <h1 style={{fontStyle: "italic"}}>{page.name}</h1>
                 <p style={{color: '#7a7a7a', fontSize: '11px', maxWidth: '300px'}}>{page.description}</p>
            </span>
            {page.categories.map((category) => (
                    <span style={{height: '250px'}}>
                    <h2>{category.name}</h2>
                    <ul style={{marginLeft: '-20px', marginTop: '-10px'}}>
                    {category.sub_categories.map((sub_category) => (
                        <li>{sub_category.name}</li>
                    ))}
                    </ul>
                    </span>
            ))}
        </div >
    ))}
</>
    );
};
export default ResponsiveAppBar;



