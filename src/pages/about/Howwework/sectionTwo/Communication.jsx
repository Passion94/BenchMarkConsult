import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'


const VisionCont = styled(Box)(({ theme }) => ({
    
}));

const Header = styled(Typography)(({ theme }) => ({
  color:'#403F3F',
  fontWeight: '900',
  
  marginBottom: '30px',
  fontSize: '1em',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  // fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"uppercase",
  lineHeight:"36px",
  [theme.breakpoints.down('913')]: {
    marginBottom: '20px',
  },
  [theme.breakpoints.down('541')]: {
      fontSize: '.9em',
  },
  [theme.breakpoints.down('482')]: {
      fontSize: '.8em',
      marginBottom: '15px',
  },
 
 
}));
const Title = styled(Typography)(({ theme }) => ({
  color:'#403F3F',
 
  fontWeight:"500",
  marginBottom: '30px',
  fontSize: '2.5em',
  lineHeight: '46px',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    
  
    [theme.breakpoints.down('913')]: {
      paddingRight:"29%",
      marginBottom: '20px',
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
      lineHeight: '38px', 
      marginBottom: '10px',
    },
    [theme.breakpoints.down('415')]: {
      paddingRight:"0%",
      fontSize:"1.55em",
      lineHeight: '30px', 
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
  color:'#403F3F',
  fontWeight:"500",
  
  paddingBottom: '30px',
  fontSize: '1.2em',
  lineHeight: '46px',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    [theme.breakpoints.down('541')]: {
      lineHeight: '38px', 
     
    },
  [theme.breakpoints.down('415')]: {
    fontSize:".9em",
  },
 
}));





export const Communication = () => {
  return (

    <VisionCont >

        
        
       <Header>Communication</Header>
       <Title> Fostering Effective <span style={{color:"RGB(45, 45, 191)", display:"inline-block"}}> Commuincation </span>   </Title> 
       <Desc >
       We believe that effective communication is the bridge that transforms ideas
       into tangible <span style={{color:"RGB(45, 45, 191)", display:"inline-block"}}>solutions </span> 
       . Our team excels in actively listening to our clients,
        ensuring that we grasp not only their requirements but also their aspirations. 
        Transparent and open communication is at the core of our process,
      fostering trust and alignment every step of the way.
        </Desc >
       
    </VisionCont>
  )
}
