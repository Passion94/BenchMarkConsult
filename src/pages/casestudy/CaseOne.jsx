import React from 'react'

import { Box, Container, Typography, styled } from '@mui/material'
import CaseCard from './CaseCard'
import { slides } from './CaseCard';



const Header = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: '600',
    marginBottom: '30px',
    fontSize: '2.4em',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
    
    lineHeight: '36px',
    letterSpacing:"normal",
   
    // paddingRight:"0%",
    fontStyle: 'normal',
    
    
  
   
  


   
  }));

  const Desc = styled(Typography)(({ theme }) => ({
    color:'white',
    
   
    fontWeight:"500",
    marginBottom: '30px',
    fontSize: '1.2em',
    lineHeight: '46px',
    
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
   
    [theme.breakpoints.down('415')]: {
      
      fontSize:".9em",
    },
   
  }));

  const PortfoliContCont = styled(Typography)(({ theme }) => ({
    display:"flex",
    gap:"170px",
    alignItems:"center",
    padding:" 50px 20px 50px 60px",
     background:"transparent",

     [theme.breakpoints.down('1441')]: {
      
      gap:"150px",
      padding:"50 0px 50px 40px ",
    },
    [theme.breakpoints.down('1367')]: {
      
      gap:"150px",
      padding:"50px 0px 50px 30px ",
    },
    [theme.breakpoints.down('1281')]: {
      
      gap:"150px",
      padding:"50px 0px 50px 16px ",
    },
    [theme.breakpoints.down('1025')]: {
      flexDirection:"column",
      gap:"0px",
      padding:"50px 0px 50px 6px ",
    },
    [theme.breakpoints.down('913')]: {
      
      
      padding:"50px 0px 50px 3px ",
    },
    [theme.breakpoints.down('821')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-16px",
    },
    [theme.breakpoints.down('811')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-20px",
    },
    [theme.breakpoints.down('801')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-14px",
    },
    [theme.breakpoints.down('602')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-26px",
    },
    [theme.breakpoints.down('541')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-3.5px",
    },
    [theme.breakpoints.down('481')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-14px",
    },
    [theme.breakpoints.down('415')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-10px",
    },
    [theme.breakpoints.down('413')]: {
      
      padding:"50px 0px 50px 0px ",
      marginLeft:"-13px",
    },
  }));
  
  const StyledButton = styled('button')(({ theme }) => ({
  
    marginTop: '10px',
    marginBottom:"30px",
    border:"1px solid rgb(75,75,221)",
    color:'white',
    borderRadius:'3px',
    fontSize: '.8em',
    fontWeight: '900',
    lineHeight: '17px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '16px 22px',
    background:"#00CC66",
    border:"none",
    outline:"none",
   
    transition: 'all 0.3s ease 0s',
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    cursor: 'pointer',
    // marginLeft: '42px',
  
  }));
  

export const CaseOne = () => {
  const slideIndex = 0; // Index of the slide you want to access
  const desc = slides[slideIndex].desc;
  return (
    <Box sx={{ background:"RGB(45, 45, 191)"}}>
<Container
maxWidth="xl">


    <PortfoliContCont >
        <Container
        >
            <Header>Portfolio</Header>
       <Desc>{desc}</Desc> 

        </Container>
        <Box >
    <CaseCard/>
        </Box>
       
    </PortfoliContCont >
    </Container>
    </Box>
  )
}
