import React, { useState } from 'react';
import './Navigation.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, Typography, styled } from '@mui/material';

const Bod= styled(Box)(({ to }) => ({
  // padding: to === "/contact" ? '30px 30px' : '0px',
  // backgroundColor: to === "/contact" ? 'rgb(46,234,250)' : 'transparent',
}))

const StyledLink = styled(Link)(({ to }) => ({
  textDecoration: 'none',
  height: "40px",
  
  fontWeight: to === "/contact" ? '900' : '700',
  zIndex:"1",
  lineHeight:"36px",
  marginBottom:'0px',
  // padding: to === "/contact" ? '50px 30px' : '0px',
borderRadius:"3px",
  '&:hover': {
   color:"#00e5ff",
  },
  '@media screen and (max-width: 912px)': {
    // padding: '15px 10px', // Adjust the padding for smaller screens
    lineHeight: '10px', // Adjust the line height for smaller screens
    fontSize: '14px', // Adjust the font size for smaller screens
   
  },
}));

const ContactLink = styled(Button)(({ to }) => ({

 
  background:"#5c6bc0",
  
 

  transition: 'color 0.3s, background-color 0.3s, border 0.3s', // Add a transition for smoother hover effect

  '&:hover': {
   color:"#00e5ff",
    backgroundColor: to === "/contact" ? ' (46, 234, 200)' : 'transparent',
   
  },
  '@media screen and (max-width: 913px)': {
   display:"none" 
  },
}));
const NavCont = styled(Container)(({ theme }) => ({
  display:"flex",
  alignItems:"center",
  justifyContent:"space-around",
  gap: "55px",
  zIndex:"1",
  [theme.breakpoints.down('1025')]: {
    gap: "45px",
  },
  [theme.breakpoints.down('913')]: {
    gap: "630px",
  },
  [theme.breakpoints.down('821')]: {
    gap: "600px",
  },
  [theme.breakpoints.down('811')]: {
   
  },
  [theme.breakpoints.down('801')]: {
    gap: "30px",
  },
  [theme.breakpoints.down('769')]: {
    gap: "0px",
  },
  [theme.breakpoints.down('713')]: {
    gap: "410px",
  },
  [theme.breakpoints.down('640')]: {
    gap: "338px",
  },
  [theme.breakpoints.down('602')]: {
    gap: "350px",
  },
  [theme.breakpoints.down('541')]: {
    gap: "250px",
  },
  [theme.breakpoints.down('501')]: {
    gap: "250px",
  },
  [theme.breakpoints.down('481')]: {
    gap: "233px",
  },
  [theme.breakpoints.down('415')]: {
    gap: "160px",
  },
  [theme.breakpoints.down('413')]: {
    gap: "160px",
  },
  [theme.breakpoints.down('394')]: {
    gap: "143px",
  },
  [theme.breakpoints.down('385')]: {
    gap: "135px",
  },
}));





const NavItems=[
  
  {Id:1, Name:"Home", link:"/"},
    {Id:2, Name:"About ", link:"/aboutus"},
    {Id:3, Name:"Services", link:"/services"},
    {Id:4, Name:"Project", link:"/project"},
    {Id:5, Name:"Resources", link:"/resources"},
    

  ]


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box sx={{positiion:"relative", zIndex:"1"}}>
    <Box className="navigation" >
     <NavCont 
     maxWidth="xl">
      <Box ><img className="logo" src='images/Logo.png'/></Box>
      
      <div className={`menu ${showMenu ? 'show' : ''}`}>
      {NavItems.map((item,index) =>
      <Bod>
< Button  key={index} to={item.link}>
{/* {item.image } */}
  {item.Name}</Button>
 
  </Bod>
)}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ContactLink variant='contained'>Contact</ContactLink>
      </NavCont>
    </Box>
    </Box>
  );
};

export default Navigation;
