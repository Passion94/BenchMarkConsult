import { useState, useEffect } from "react";
import { AppBar, Box, Container,styled} from "@mui/material";

import React from 'react'
import { Link } from "react-router-dom";



 const StyledBar=styled(AppBar)({
   background:"white",
  
    maxHeight:"100px",
    fontSize:'16px',
    fontWeight:'600',
    padding: "30px"
    
    
  })

  const StyledLink = styled(Link)(({ to }) => ({
    textDecoration: 'none',
    color: to === "/contact" ? 'white' : 'rgb(117, 117, 117)', // Apply red color if the link is "/contact"
    backgroundColor: to === "/contact" ? 'rgb(208,2,27)' : 'transparent',
    borderRadius: to === "/contact" ? '2px' : '0px',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '900',
    marginRight: "0px", // Add spacing between all links (except logo) on the right side
    padding: "30px",
    textTransform: "uppercase",
    lineHeight: "14px",
    position: to === "/logo" ? "absolute" : "static", // Position the logo absolutely
    left: to === "/logo" ? "80px" : "auto", // Create a gap between logo and other links on the left side
    top: to === "/logo" ? "-20px" : "auto",
    marginLeft: to === "/aboutus" ? "208px" : "0px",
    '&:hover': {
    
      color: to === "/contact" ? 'red' : "rgb(208,2,27)",
      backgroundColor: to === "/contact" ? 'white' : "transparent",
      border: to ==="/contact" ? "1px solid red" : "0px"
    }
    
  }));


export const Navbar = () => {

 
    const NavItems=[
      { Id:1, Name: "", link: "/logo", image: "/images/Logo.png" },
        {Id:2, Name:"About US", link:"/aboutus"},
        {Id:3, Name:"Services", link:"/services"},
        {Id:4, Name:"Projects", link:"/project"},
        {Id:5, Name:"Resources", link:"/resources"},
        {Id:6, Name:"Stories", link:"/story"},
        {Id:7, Name:"Contact Us", link:"/contact"},
        
        

      ]


const[Open,SetOpen]=useState(false);




  return (
    <StyledBar>
     
    <Container>
    {/* <img src={} alt="My Image" /> */}
{NavItems.map((item,index) =>
<StyledLink key={index} to={item.link}>
{item.image && <img src={process.env.PUBLIC_URL + item.image} alt={item.Name} style={{height:"70px", background:"transparent"}}  />}
  {item.Name}</StyledLink>

)}

    </Container>
    
    </StyledBar>
   
  )
}
