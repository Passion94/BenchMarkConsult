import React, { useState } from 'react';
import './Navigation.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { AppBar, Box, Container, styled } from '@mui/material';



const StyledLink = styled(Link)(({ to }) => ({
  textDecoration: 'none',
  color:  'rgb(8,16,103)',
  height: "40px",
  backgroundColor: to === "/contact" ? 'rgb(46,234,250)' : 'transparent',
  transition: 'color 0.3s, background-color 0.3s, border 0.3s', // Add a transition for smoother hover effect

  '&:hover': {
    color:'rgb(46,234,250)',
    backgroundColor: to === "/contact" ? 'white' : 'transparent',
   
  },

  // Media query for smaller screens
  '@media screen and (max-width: 768px)': {
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
    <Box className="navigation">
     <Container sx={{display:"flex" }}
     maxWidth="xl">
      <Box ><img className="logo" src='images/Logo.png'/></Box>
      <div className={`menu ${showMenu ? 'show' : ''}`}>
      {NavItems.map((item,index) =>
< StyledLink key={index} to={item.link}>
{/* {item.image } */}
  {item.Name}</ StyledLink>

)}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      </Container>
    </Box>
  );
};

export default Navigation;
