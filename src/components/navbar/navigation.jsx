import React, { useState } from 'react';
import './Navigation.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { AppBar, Box, Container, styled } from '@mui/material';

const Bod= styled(Box)(({ to }) => ({
  padding: to === "/contact" ? '20px 20px' : '0px',
  backgroundColor: to === "/contact" ? 'rgb(46,234,250)' : 'transparent',
}))

const StyledLink = styled(Link)(({ to }) => ({
  textDecoration: 'none',
  color:  'rgb(8,16,103)',
  height: "40px",
  color: to === "/contact" ? 'red' : 'rgb(8,16,103)',
  // backgroundColor: to === "/contact" ? 'rgb(46,234,250)' : 'transparent',
  
  padding: to === "/contact" ? '20px 20px' : '0px',
  transition: 'color 0.3s, background-color 0.3s, border 0.3s', // Add a transition for smoother hover effect
borderRadius:"3px",
  '&:hover': {
    color: to === "/contact" ? ' (46, 234, 200)' : 'rgb(46,234,200)',
    backgroundColor: to === "/contact" ? ' (46, 234, 200)' : 'transparent',
   
  },

  // Media query for smaller screens
  '@media screen and (max-width: 912px)': {
    // padding: '15px 10px', // Adjust the padding for smaller screens
    lineHeight: '10px', // Adjust the line height for smaller screens
    fontSize: '14px', // Adjust the font size for smaller screens
   
    
  },

  // Add more media queries and responsive styles as needed for other screen sizes
}));





const NavItems=[
  
  {Id:1, Name:"Home", link:"/"},
    {Id:2, Name:"About ", link:"/aboutus"},
    {Id:3, Name:"Services", link:"/services"},
    {Id:4, Name:"Project", link:"/project"},
    {Id:5, Name:"Resources", link:"/resources"},
    // {Id:6, Name:"Stories", link:"/story"},
    {Id:7, Name:"Contact ", link:"/contact"},

  ]


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box sx={{positiion:"relative"}}>
    <Box className="navigation" >
     <Container sx={{display:"flex"}}
     maxWidth="xl">
      <Box ><img className="logo" src='images/Logo.png'/></Box>
      <div className={`menu ${showMenu ? 'show' : ''}`}>
      {NavItems.map((item,index) =>
      <Bod>
< StyledLink key={index} to={item.link}>
{/* {item.image } */}
  {item.Name}</ StyledLink>
  </Bod>
)}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </Container>
    </Box>
    </Box>
  );
};

export default Navigation;
