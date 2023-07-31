import React, { useState } from 'react';
import './Navigation.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { AppBar, styled } from '@mui/material';



const StyledLink = styled(Link)(({ to }) => ({
  textDecoration: 'none',
  color: to === "/contact" ? 'white' : 'rgb(117, 117, 117)',
  backgroundColor: to === "/contact" ? 'rgb(208, 2, 27)' : 'transparent',
  borderRadius: to === "/contact" ? '2px' : '0px',
  padding: to === "/contact" ? '20px 10px 20px 10px' : '20px 20px 20px 20px',
  lineHeight: to === "/contact" ? '35px' : '40px',
  transition: 'color 0.3s, background-color 0.3s, border 0.3s', // Add a transition for smoother hover effect

  '&:hover': {
    color: to === "/contact" ? 'red' : 'rgb(208, 2, 27)',
    backgroundColor: to === "/contact" ? 'white' : 'transparent',
    border: to === "/contact" ? '1px solid red' : '0px',
  },

  // Media query for smaller screens
  '@media screen and (max-width: 768px)': {
    padding: '15px 10px', // Adjust the padding for smaller screens
    lineHeight: '30px', // Adjust the line height for smaller screens
    fontSize: '14px', // Adjust the font size for smaller screens
  },

  // Add more media queries and responsive styles as needed for other screen sizes
}));





const NavItems=[
  
  {Id:1, Name:"Home", link:"/"},
    {Id:2, Name:"About US", link:"/aboutus"},
    {Id:3, Name:"Services", link:"/services"},
    {Id:4, Name:"Projects", link:"/project"},
    {Id:5, Name:"Resources", link:"/resources"},
    {Id:6, Name:"Stories", link:"/story"},
    {Id:7, Name:"Contact Us", link:"/contact"},

  ]


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navigation">
      <div className="logo"><img src='images/logo.png'/></div>
      <div className={`menu ${showMenu ? 'show' : ''}`}>
      {NavItems.map((item,index) =>
< StyledLink key={index} to={item.link}>
{item.image }
  {item.Name}</ StyledLink>

)}
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navigation;
