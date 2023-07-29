import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, CardContent, Container, Image, Typography, keyframes, styled,Button} from '@mui/material'
import "./getstarted.css"

import React from 'react'
import { Link } from 'react-router-dom';



const Title = styled(Typography)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '600',
    justifyContent: 'center',
    marginBottom: '10px',
    fontSize: '1.5rem',
    fontFamily: 'Barlow Condensed',
    marginTop:"10px",
    textTransform:"uppercase"
  });

  const Header= styled(Typography)({
    color: 'black',
    fontWeight: '900',
    justifyContent: 'center',
    marginBottom: '10px',
    fontSize: '3rem',
    // lineHeight:"36px",
    fontFamily: '"Tiempos Headline", serif',
    paddingTop:"10px"
  });
  const Desc = styled(Typography)({
    width:"100%",
    color:"black",
    marginBottom: '10px',
    fontSize: '1.5rem',
    lineHeight:"36px",
    fontFamily: 'Archivo Narrow'
    
  });
  const StyledButton = styled(Link)({
    display:"inline-block",
    marginTop: '0px',
   color:"rgb(229, 95, 76)",
   fontSize:"1rem",
   fontWeight: '900',
  //  lineHeight:"19px",
   textDecoration:"none",
   textTransform:"uppercase",
   backgroundColor:"transparent",
  fontFamily: 'Archivo Narrow',
  letterSpacing:"0.2em",
  fontFamily:"Lato, sans-serif",
  fontKerning: "normal"
  
  });






export const Getstarted = () => {
  return (
    <Container sx={{display:"flex", alignItems:"center", paddingTop:"200px"}}>
        <CardContent sx={{ width:"50%",  padding:"0 140px 0 0"}} >
    <Title>
    Discover your solution
    </Title>
    <Header>
    Discover the solution to your unique challenge
    </Header>
    <Desc variant="body1" color="text.secondary">
    Discover the right solution that solves your problem using our cutting edge technology
    </Desc>
    <Button 
    className="beep-text"
    sx={{display:"flex", alignItems:"center",
     color:"rgb(208, 2, 27)"
    }}>
    <ArrowBack />
    <StyledButton
    >
      Get in touch
     
    </StyledButton>
    <ArrowForward/>
    </Button >
  </CardContent>

<Box >
     <img
      src="https://www.technologyhq.org/wp-content/uploads/2021/02/it-services.jpg"
      alt="Image"
      height="350px"
      width="100%"
      
    />
    
  </Box>
  </Container>
  )
}
