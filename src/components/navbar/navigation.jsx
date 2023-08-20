import React, { useState } from 'react';
import './Navigation.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { AppBar, Box, Container, styled } from '@mui/material';

const Bod= styled(Box)(({ to }) => ({
  // padding: to === "/contact" ? '30px 30px' : '0px',
  // backgroundColor: to === "/contact" ? 'rgb(46,234,250)' : 'transparent',
}))

const StyledLink = styled(Link)(({ to }) => ({
  textDecoration: 'none',
  height: "40px",
  color: to === "/contact" ? 'white' : 'black',
  fontWeight: to === "/contact" ? '900' : '700',
  
  // backgroundColor: to === "/contact" ? 'red' : 'transparent',
  
  // padding: to === "/contact" ? '50px 30px' : '0px',
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

const ContactLink = styled(Link)(({ to }) => ({
  textDecoration: 'none',
 
  
  fontWeight: "700",
  color:"white",
  
  background:"#00CC66",
  fontSize: "1em",
  fontWeight: "700",
  textTransform: "uppercase",
  lineHeight: "40px",
  padding: "4px 25px",
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",

  transition: 'color 0.3s, background-color 0.3s, border 0.3s', // Add a transition for smoother hover effect
borderRadius:"3px",
  '&:hover': {
    color: to === "/contact" ? ' (46, 234, 200)' : 'rgb(46,234,200)',
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
  gap: "75px",
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
    // {Id:6, Name:"Stories", link:"/story"},
    // {Id:7, Name:"Contact ", link:"/contact"},

  ]


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box sx={{positiion:"relative"}}>
    <Box className="navigation" >
     <NavCont 
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
      <ContactLink>Contact</ContactLink>
      </NavCont>
    </Box>
    </Box>
  );
};

export default Navigation;
