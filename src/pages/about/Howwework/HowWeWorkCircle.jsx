import { Box, Container, Typography, styled } from '@mui/material';
import React from 'react'





const Prehood = styled('Typography')(({ theme }) => ({
 color:"white",
 position:"absolute",
 top:"190px",
 left:"230px",
 fontSize:"1em",
 fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
 fontWeight:"900",


 }));

const CircleOne = styled('button')(({ theme }) => ({
   color:"white",
    height:"300px",
    width:"300px",
    border:'5px solid blue',
   background:"transparent",
    borderRadius:"50%",
    fontWeight: '600',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
    textTransform:"initial",
    fontSize:"1em",
  }));
  const CircleTwo = styled('button')(({ theme }) => ({
    fontWeight: '900',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
    textTransform:"initial",
    fontSize:"1em",
    color:"white",
    height:"300px",
    width:"300px",
    border:'5px solid purple',
    background:"transparent",
    borderRadius:"50%",
    position:"absolute",
    top:"1px",
    left:"200px",
  }));
  const CircleThree = styled('button')(({ theme }) => ({
    color:"white",
   
    height:"300px",
    width:"300px",
    border:'5px solid gold',
    background:"transparent",
    borderRadius:"50%",
    position:"absolute",
    top:"160px",
    left:"125px",
    fontWeight: '900',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
    textTransform:"initial",
    fontSize:"1em",
  }));

export const HowWeWorkCircle = () => {
  return (
    <Box sx={{}} >
      <Container sx={{position:"relative"}}>
<CircleOne >
<Typography sx={{paddingRight:"80px"}}>Communication</Typography>

</CircleOne >

<CircleTwo >
  <Typography  sx={{paddingLeft:"80px"}}>Collaboration</Typography>

</CircleTwo >

<CircleThree >
<Typography  sx={{paddingTop:"80px"}}>Critical thinking</Typography>

</CircleThree >
<Prehood >PreHood</Prehood>
      </Container>

    </Box>
  )
}
