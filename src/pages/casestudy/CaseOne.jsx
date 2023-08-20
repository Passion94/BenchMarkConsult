import React from 'react'

import { Box, Container, Typography, styled } from '@mui/material'
import CaseCard from './CaseCard'



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
    padding:" 100px 20px 100px 60px",
     background:"rgb(0, 77, 64)",

     [theme.breakpoints.down('1441')]: {
      
      gap:"150px",
      padding:"100px 0px 100px 40px ",
    },
    [theme.breakpoints.down('1367')]: {
      
      gap:"150px",
      padding:"100px 0px 100px 30px ",
    },
    [theme.breakpoints.down('1281')]: {
      
      gap:"150px",
      padding:"100px 0px 100px 16px ",
    },
    [theme.breakpoints.down('1025')]: {
      flexDirection:"column",
      gap:"0px",
      padding:"100px 0px 100px 6px ",
    },
    [theme.breakpoints.down('913')]: {
      
      
      padding:"100px 0px 100px 3px ",
    },
    [theme.breakpoints.down('821')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-16px",
    },
    [theme.breakpoints.down('811')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-20px",
    },
    [theme.breakpoints.down('801')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-14px",
    },
    [theme.breakpoints.down('602')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-26px",
    },
    [theme.breakpoints.down('541')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-3.5px",
    },
    [theme.breakpoints.down('481')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-14px",
    },
    [theme.breakpoints.down('415')]: {
      
      padding:"100px 0px 100px 0px ",
      marginLeft:"-10px",
    },
    [theme.breakpoints.down('413')]: {
      
      padding:"100px 0px 100px 0px ",
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
  return (
    <Box sx={{ background:"rgb(0, 77, 64)"}}>
<Container
maxWidth="xl">


    <PortfoliContCont >
        <Container
        >
            <Header>Portfolio</Header>
       <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type
         specimen book. It has survived not only five centuries, but also the leap into 
         electronic typesetting, remaining essentially unchanged. 
            </Desc> 

        </Container>
        <Box >
    <CaseCard/>
        </Box>
       
    </PortfoliContCont >
    </Container>
    </Box>
  )
}
