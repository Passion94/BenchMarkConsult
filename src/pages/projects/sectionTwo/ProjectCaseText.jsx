import { Container, Typography, styled } from '@mui/material'
import React from 'react'




const Header = styled(Typography)(({ theme }) => ({
    color:'#403F3F',
    fontWeight: '900',
    display:"flex",
    paddingTop:"10px",
   paddingBottom:"30px",
    fontSize: '2.4em',
   
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    fontStyle: "normal",
    textTransform:"initial",
    lineHeight:"46px",
    
    [theme.breakpoints.down('769')]: {
     position:'absolute',
     top:"-630px",
    

    },
    [theme.breakpoints.down('641')]: {
      position:'absolute',
      top:"-570px",
     },
     [theme.breakpoints.down('541')]: {
     fontSize:"2em",
     top:"-567px",
     },
     [theme.breakpoints.down('481')]: {
      position:'absolute',
      top:"-545px",
     
 
     },
    
     [theme.breakpoints.down('415')]: {
      position:'absolute',
     
      fontSize:"1.7em",
      left:"67px"
     
 
     },
     [theme.breakpoints.down('413')]: {
      fontSize:"1.68em",
     
 
     },
     [theme.breakpoints.down('394')]: {
      fontSize:"1.6em",
     
 
     },
     [theme.breakpoints.down('385')]: {
      position:'absolute',
      top:"-517px",
      
      fontSize:"1.57em",
 
     },
     [theme.breakpoints.down('376')]: {
      position:'absolute',
      top:"-530px",
     
      fontSize:"1.55em",
 
     },
     [theme.breakpoints.down('361')]: {
      
      fontSize:"1.5em",
      },
  }));

  const Desc = styled(Typography)(({ theme }) => ({
    color: '#403F3F',
   
    fontWeight: 500, /* Remove quotes around 500 */
    
    fontSize: '1em',
    lineHeight: '46px',
    
    fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
   
    [theme.breakpoints.down('1025')]: {
        lineHeight: '30px',
    },
    [theme.breakpoints.down('913')]: {
        lineHeight: '28px',
        fontSize:".9em",
    },
    [theme.breakpoints.down('769')]: {
      lineHeight: '36px',
      fontSize:"1em",
  },
  }));
  




export const ProjectCaseText = () => {
  return (
    <Container sx={{position:"relative"}}>
<Header>
   Our Projects
</Header>
<Desc>
At Prehood, our work philosophy is built on the pillars of communication,
collaboration, and critical thinking. We believe that successful software
development and consultancy go beyond technical expertise – they thrive
on effective teamwork, innovative problem-solvings, and transparent client relationships.
</Desc>

    </Container>
  )
}
