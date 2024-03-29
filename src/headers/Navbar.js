import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Grid} from "@mui/material";
import { Link } from "react-router-dom";
import SimpleAccordion from '../components/Accordion'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategorys, selectCategorys} from "../slices/categorySlice";
import {primary_color} from "../index";


const ResponsiveAppBar = () => {
    const {results: menuData} = useSelector(selectCategorys);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategorys(null))
    }, []);
    const [anchorElNav, setAnchorElNav] = React.useState("hidden");

    const handleClickNavMenu = () => {
      let visibility = anchorElNav === "hidden" ? "visible" : "hidden";
      setAnchorElNav(visibility);
    };

  const handleHover = (event) => {
      let id = event.target.id.includes("-id") ? event.target.id : event.target.id + "-id";
      let id2 = event.target.id.includes("-id") ? event.target.id.replace('-id', '') : event.target.id;
      document.getElementById(id).style.visibility = "visible";
      document.getElementById(id2).style.fontStyle = "italic";
      document.getElementById(id2).style.color = primary_color;
      document.getElementById(id2).style.transform = "scale(1.2)";
  };

  const handleUnhover = (event) => {
      let id = event.target.id.includes("-id") ? event.target.id : event.target.id + "-id";
      let id2 = event.target.id.includes("-id") ? event.target.id.replace('-id', '') : event.target.id;
      document.getElementById(id).style.visibility = "hidden";
      document.getElementById(id2).style.fontStyle = "";
      document.getElementById(id2).style.color = '#363636';
      document.getElementById(id2).style.transform = "scale(1.0)";
  };
  return (
<>
    <AppBar position="static" sx={{marginBottom: '1px', backgroundColor: '#ffffff', color: primary_color, height: {xs: '60px', sm: '60px', md: '150px'}}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
            <Box sx={{height: '10px', marginTop: '-50px', marginLeft: '10%', display: {xs: 'none', sm: "none", md: "inline-block"}}}>
                <Link to='/'>
                    <img style={{height: '120px', marginRight: 1, marginTop: -2}} src={require('../images/logo.jpg')} />
                </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClickNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{display: {xs: 'flex', md: "none"}, marginTop:{xs: '10px', sm: '0px'}, flexGrow: 1.4}}>
             <Link to='/'><img style={{height: '40px'}} src={require('../images/logo.png')} /></Link>
          </Box>
        </Toolbar>
          <Grid container alignItems='center' justifyContent='center' direction='column' >
            <Box sx={{ marginTop: '37px',maxHeight: '10px', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuData.map((page) => (
                <Link to={{
                        pathname: '/' + page.name,
                        state: {main_id: page.id}
                    }} style={{textDecoration: 'none'}}>
                <Button
                    id={page.name}
                    key={page.name}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnhover}
                    sx={{mx: 1,maxHeight: '35px', my: 2, fontWeight: 'bold', display: 'block', color: '#363636', fontSize: "12px", letterSpacing: "3.6px", lineHeight: "13px"}}
                    >
                    {page.name}
                </Button>
              </Link>
            ))}
            </Box>
          </Grid>
      </Container>
    </AppBar>
    <Box sx={{ zIndex: 1, display: { xs: 'block', md: 'none' }, visibility: anchorElNav, backgroundColor: 'white', marginTop: "0px", position: "absolute", right: 0, left: 0}}>
        <SimpleAccordion mainItems={menuData}/>
    </Box >
    {menuData.map((page) => (
        <div id={page.name + "-id"} onMouseEnter={handleHover} onMouseLeave={handleUnhover} style={{zIndex: 1, columnGap: '20px', display: 'flex', justifyContent: 'center', alignItems: "center", alignSelf: 'start', boxShadow: '0px 15px 10px -15px #111', visibility: "hidden", height: '330px', backgroundColor: 'white', marginTop: -6, position: "absolute", right: 0, left: 0}}>
            <span style={{marginLeft: '30px', height: '300px'}}>
                <Link to={{
                        pathname: '/' + page.name,
                        state: {main_id: page.id}
                }} style={{textDecoration: 'none', color: 'black'}}>
                    <h1 id="navbar_heading" style={{fontStyle: "italic"}}>{page.name}</h1>
                </Link>
                <p style={{color: '#7a7a7a', fontSize: '11px', maxWidth: '300px'}}>{page.description}</p>
            </span>
            {page.children.map((category) => (
                    <span style={{height: '250px'}}>
                    <Link to={{
                        pathname: '/' + page.name + '/' + category.name,
                        state: {main_id: page.id, sub_id: category.id}
                        }} style={{textDecoration: 'none', color: 'black'}}>
                        <h2 id="navbar_heading">{category.name}</h2>
                    </Link>
                    <ul style={{marginLeft: '-20px', marginTop: '-10px'}}>
                    {category.children.map((sub_category) => (
                        <Link to={{
                            pathname: '/' + page.name + '/' + category.name + '/' + sub_category.name,
                            state: {main_id: page.id, sub_id: category.id, sub_sub_id:sub_category.id}
                            }} style={{textDecoration: 'none', color: 'black'}}>
                            <li id="navbar_heading">{sub_category.name}</li>
                        </Link>
                    ))}
                    </ul>
                    </span>
            ))}
            <span style={{maxWidth: '300px', marginLeft: '40px'}}>
                <img style={{height: '110px'}} src={page.nav_image1}/>
                <img style={{marginTop: "15px", height: '110px'}} src={page.nav_image2}/>
            </span>
        </div >
    ))}
</>
    );
};
export default ResponsiveAppBar;



