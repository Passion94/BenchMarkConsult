import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, CardContent, Container, Typography, styled,Button} from '@mui/material'
import "./getstarted.css"

import React from 'react'
import { Link } from 'react-router-dom';




const MainContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '200px',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    paddingTop: '100px',
    flexDirection: 'column', // Stack elements vertically on small screens
    textAlign: 'center', // Center text on small screens
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: '50%',
  padding: '0 140px 0 0',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('lg')]: {
    width: '60%',
    padding: '0 100px 0 0',
  },

  [theme.breakpoints.down('md')]: {
    width: '70%',
    padding: '0 80px 0 0',
  },

  [theme.breakpoints.down('sm')]: {
    width: '80%',
    padding: '0 60px 0 0',
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%',
    padding: '0 20px 0 20px',
  },
}));

const Title = styled(Typography)({
  color: 'rgb(117, 117, 117)',
  fontWeight: '600',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '1.5rem',
  fontFamily: 'Barlow Condensed',
  marginTop: '10px',
  textTransform: 'uppercase',
});

const Header = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '3rem',
  fontFamily: '"Tiempos Headline", serif',
  paddingTop: '10px',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
  },
}));

const Desc = styled(Typography)({
  // width: '100%',
  color: 'black',
  marginBottom: '10px',
  fontSize: '1.5rem',
  lineHeight: '36px',
  fontFamily: 'Archivo Narrow',
  display:"flex",
  alignItems:"center",
 justifyContent:"center"
});

const StyledButton = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  marginTop: '0px',
  color: 'rgb(229, 95, 76)',
  fontSize: '1rem',
  fontWeight: '900',
  textDecoration: 'none',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  fontFamily: 'Archivo Narrow',
  letterSpacing: '0.2em',
  fontFamily: 'Lato, sans-serif',
  fontKerning: 'normal',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    marginLeft:"50px"
  },
}));





export const Getstarted = () => {
  return (
    <MainContainer >
        <StyledCardContent   >
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
    // sx={{display:"flex", alignItems:"center",
    //  color:"rgb(208, 2, 27)"
    // }}
    >
    
    <StyledButton
    >
      <ArrowBack />
      Get in touch
      <ArrowForward/>
    </StyledButton>
    
    </Button >
  </StyledCardContent >

<Box >
     <img
      src="https://www.technologyhq.org/wp-content/uploads/2021/02/it-services.jpg"
      alt="Image"
      height="350px"
      width="100%"
      
    />
    
  </Box>
  </MainContainer>
  )
}
