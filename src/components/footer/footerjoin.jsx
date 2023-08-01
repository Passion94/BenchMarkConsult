import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'






const StyledButton = styled(Button)({
    marginTop: '10px',
    color:"white",
    background:"rgb(229, 95, 76)",
    fontSize:"1rem",
    fontWeight: '900',
    lineHeight:"17px",
    textDecoration:"none",
    textTransform:"uppercase",
    padding: "16px 20px",
   
    outline:"0px",
    transition: "all 0.3s ease 0s",
   
    '&:hover':{
     
     background:"rgb(229, 55, 56)",
     color:""
    }
   });


   const Desc = styled(Typography)({
    display:"flex",
     alignItems:"center",
    color:" rgb(58, 58, 58)",
    fontSize: 'clamp(16px, 5vw, 44px)',
    lineHeight:"36px",
    fontWeight:"600",
    fontWeight: '6git00',
    marginBottom: '50px',
    lineHeight:"36px",
    wordSpacing:"0.2em",
    fontFamily: '"Tiempos Headline", serif',
    paddingTop:"10px",
    padding:"0 150px 0 100px"
    
  });


export const FooterJoin = () => {
  return (
    <Box sx={{marginTop:"150px", marginBottom:"150px" }}>
        <Desc>
            Ready to Kickstart your project ?
        </Desc>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <StyledButton
          variant="contained"
         
        >
          Explore Our Services
        </StyledButton>
        </Box>
    </Box>
  )
}
