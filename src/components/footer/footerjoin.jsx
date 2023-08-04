import { Box, Button, Container, Typography, styled } from '@mui/material'
import React from 'react'






const StyledButton = styled('button')(({ theme }) => ({
  border: '1px solid rgb(75,75,221) ',
  marginTop: '10px',
  color: 'rgb(8,16,103)', 
  fontSize: '1em',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 20px',
  backgroundColor: 'rgb(46,234,250)',
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
  color: 'rgb(8, 16, 103)',
  fontSize: 'clamp(16px, 5vw, 44px)',
  fontWeight: 600,
  marginBottom: '50px',
  lineHeight: '36px',
  wordSpacing: '0.2em',
  fontFamily: '"Tiempos Headline", serif',
  paddingTop: '10px',
  padding: '0 150px 0 100px',
  [theme.breakpoints.down('lg')]: {
    fontSize: 'clamp(16px, 6vw, 38px)',
    padding: '0 100px 0 80px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(16px, 7vw, 32px)',
    padding: '0 50px 0 60px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(16px, 9vw, 26px)',
    padding: '0 30px 0 40px',
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
