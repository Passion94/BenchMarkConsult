import { Box, Button, Container, Typography, styled } from '@mui/material'
import React from 'react'






const StyledButton = styled('button')(({ theme }) => ({
  border: '0px',
  marginTop: '10px',
  color: 'white', 
  fontSize: '.8em',
  fontWeight: '900',
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 22px',
  backgroundColor: '#00CC66',
  outline: '0px',
  transition: 'all 0.3s ease 0s',

 
  cursor: 'pointer',
  // marginLeft: '42px',
  [theme.breakpoints.down('sm')]: {
    
    marginLeft:"-20px"
  },
  // Add responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem', // Adjust font size for extra-small screens
    padding: '12px 16px', // Adjust padding for extra-small screens
  },
}));





const Desc = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent:"center",
  color: 'rgb(8, 16, 103)',
  fontSize: '1.5em',
  fontWeight: 600,
  marginBottom: '50px',
  lineHeight: '36px',
  wordSpacing: '0.2em',
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  paddingTop: '10px',
 
  [theme.breakpoints.down('lg')]: {
   
   
  },
  [theme.breakpoints.down('md')]: {
   
   
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    // padding: '0 30px 0 40px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: 'clamp(16px, 10vw, 20px)',
    padding: '0 20px',
  },
}));




export const FooterJoin = () => {
  return (
    <Box sx={{marginTop:"150px", marginBottom:"150px" }}>
      <Container
      maxWidth="xl">
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
        </Container>
    </Box>
  )
}
