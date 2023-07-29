import { Box, Button, Container, Stack, Typography, styled } from '@mui/material'

import React from 'react'
import { Anime } from '../anime/anime'

const Title = styled(Typography)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '900',
    justifyContent: 'center',
    marginBottom: '10px',
    fontSize: '3rem',
    fontFamily: 'Barlow Condensed',
    display:"flex",
    justifyContent:"center",
   alignItems:"center",
    textTransform:'uppercase',
    
  });

  const Desc = styled(Typography)({
    display:"flex",
     alignItems:"center",
    color:" rgb(58, 58, 58)",
    fontSize: '1.5rem',
    lineHeight:"36px",
    fontWeight: '6git00',
    marginBottom: '50px',
    lineHeight:"36px",
    wordSpacing:"0.2em",
    fontFamily: '"Tiempos Headline", serif',
    paddingTop:"10px",
    padding:"0 150px 0 100px"
    
  });


  const StyledButton = styled(Button)({
    // display:"flex",
    // justifyContent:"center",
    // alignItems:"center",
    border:'1px solid rgb(229, 95, 76)', 
    marginTop: '10px',
   color:"rgb(229, 95, 76)",
   fontSize:"1rem",
   fontWeight: '900',
   lineHeight:"17px",
   textDecoration:"none",
   textTransform:"uppercase",
   padding: "16px 20px",
   backgroundColor:"transparent",
   outline:"0px",
   transition: "all 0.3s ease 0s",
  
   
  });

 
const StyledBox = styled(Box)({
    
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  });

export const Whatwedo = () => {
  return (
    <Container sx={{marginTop:'200px', marginBottom:"100px"}}>
        <Title>
            What we do
        </Title>

        <StyledBox>

           
        <Desc >
        Benchmark is a global firm that empower's businesses and organizations with innovative digital 
        solutions that drive growth,efficiency, and success. We are at the forefront of technological advancements.
        </Desc>
        
        
        </StyledBox>
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <StyledButton
          variant="outline"
         
        >
          Explore Our Services
        </StyledButton>
        {/* <StyledButton
          variant="outline"
         
        >
          View Our Works
        </StyledButton> */}
        </Box>
       
     
    </Container>
  )
}
