import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'


const VisionCont = styled(Box)(({ theme }) => ({
    paddingLeft:"170px",
     marginTop:"100px",
     [theme.breakpoints.down('1601')]: {
        paddingLeft:"119px",
      },
      [theme.breakpoints.down('1441')]: {
        paddingLeft:"68px",
      },
      [theme.breakpoints.down('1367')]: {
        paddingLeft:"57px",
      },
      [theme.breakpoints.down('1281')]: {
        paddingLeft:"40px",
      },
      [theme.breakpoints.down('1025')]: {
        paddingLeft:"31px",
      },
      [theme.breakpoints.down('1025')]: {
        paddingLeft:"31px",
      },
      [theme.breakpoints.down('821')]: {
        paddingLeft:"8px",
      },

      [theme.breakpoints.down('811')]: {
        paddingLeft:"4px",
      },
   
      [theme.breakpoints.down('801')]: {
        paddingLeft:"13px",
      },
      
      [theme.breakpoints.down('641')]: {
        paddingLeft:"0px",
        marginLeft:"-3px"
      },
      [theme.breakpoints.down('602')]: {
        paddingLeft:"0px",
        marginLeft:"0px"
      },
      [theme.breakpoints.down('541')]: {
        paddingLeft:"13px",
        marginLeft:"0px"
      },
      [theme.breakpoints.down('415')]: {
        paddingLeft:"6px",
        marginLeft:"0px"
      },
      [theme.breakpoints.down('394')]: {
        paddingLeft:"5px",
        marginLeft:"0px"
      },
      [theme.breakpoints.down('376')]: {
        paddingLeft:"2px",
        marginLeft:"0px"
      },
  }));

const Header = styled(Typography)(({ theme }) => ({
    color:'black',
    fontWeight: '900',
    
    marginBottom: '30px',
    fontSize: '1em',
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    // fontWeight: "normal",
    fontStyle: "normal",
    textTransform:"uppercase",
    lineHeight:"36px",
    [theme.breakpoints.down('541')]: {
        fontSize: '.9em',
    },
    [theme.breakpoints.down('482')]: {
        fontSize: '.8em',
    },
   
   
  }));
  const Title = styled(Typography)(({ theme }) => ({
    color:'black',
    paddingRight:"52%",
    fontWeight:"500",
    marginBottom: '30px',
    fontSize: '2.5em',
    lineHeight: '46px',
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
      
      [theme.breakpoints.down('1281')]: {
        paddingRight:"49%",
      },
      [theme.breakpoints.down('1025')]: {
        paddingRight:"37%",
      },
      [theme.breakpoints.down('913')]: {
        paddingRight:"29%",
      },
      [theme.breakpoints.down('821')]: {
        paddingRight:"22%",
      },
      [theme.breakpoints.down('801')]: {
        paddingRight:"20%",
      },
      [theme.breakpoints.down('769')]: {
        paddingRight:"15%",
      },
      [theme.breakpoints.down('641')]: {
        paddingRight:"0%",
      },
      [theme.breakpoints.down('602')]: {
        paddingRight:"0%",
        fontSize:"2.3em",
      },
      [theme.breakpoints.down('541')]: {
        paddingRight:"3%",
        fontSize:"2em",
      },
      [theme.breakpoints.down('481')]: {
        paddingRight:"0%",
        fontSize:"1.8em",
      },
      [theme.breakpoints.down('415')]: {
        paddingRight:"0%",
        fontSize:"1.55em",
      },
      [theme.breakpoints.down('394')]: {
        paddingRight:"0%",
        fontSize:"1.5em",
      },
      [theme.breakpoints.down('391')]: {
        paddingRight:"0%",
        fontSize:"1.45em",
      },
      [theme.breakpoints.down('376')]: {
        paddingRight:"0%",
        fontSize:"1.4em",
      },
  }));
  
  const Desc = styled(Typography)(({ theme }) => ({
    color:'black',
    fontWeight:"500",
    paddingRight:"52%",
    paddingBottom: '100px',
    fontSize: '1.2em',
    lineHeight: '46px',
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
   
  
    [theme.breakpoints.down('1281')]: {
        paddingRight:"49%",
      },
      [theme.breakpoints.down('1025')]: {
        paddingRight:"37%",
      },
      [theme.breakpoints.down('913')]: {
        paddingRight:"29%",
      },
      [theme.breakpoints.down('821')]: {
        paddingRight:"12%",
      },
      [theme.breakpoints.down('801')]: {
        paddingRight:"20%",
      },
      [theme.breakpoints.down('769')]: {
        paddingRight:"15%",
      },
      [theme.breakpoints.down('641')]: {
        paddingRight:"0%",
      },
      [theme.breakpoints.down('541')]: {
        paddingRight:"3%",
       
      },
    [theme.breakpoints.down('415')]: {
      
      fontSize:".9em",
  
      
    },
   
  }));





export const OurVision = () => {
  return (

    <VisionCont >

        <Container maxWidth="xl" sx={{}}>
        
       <Header>Our Vision</Header>
       <Title> Empowering <span style={{color:"#00CC66", display:"inline-block"}}> Innovation </span>  through Technology Excellence</Title> 
       <Desc >
      We are a driving force behind transformative technological <span style={{color:"#00CC66", display:"inline-block"}}>innovations </span> that empower businesses across industries.We strive to provide cutting-edge software 
      solutions that inspire progress, growth, and enduring success.
        </Desc >
        </Container>
    </VisionCont>
  )
}
