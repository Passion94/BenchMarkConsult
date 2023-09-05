import React, { useState } from 'react'

import { Box, Button, Container, Typography, styled } from '@mui/material'
import CaseCard from './CaseCard'
import { slides } from './CaseCard';
import { Link } from 'react-router-dom';



const Header = styled(Typography)(({ theme }) => ({


  [theme.breakpoints.down('1281')]: {
   
    
  },
  }));

  const Desc = styled(Typography)(({ theme }) => ({
   
    
    [theme.breakpoints.down('1281')]: {
      
      fontSize:".9em",
    },
   
  }));

  const PortfoliContCont = styled(Typography)(({ theme }) => ({
    display:"flex",
    gap:"170px",
    alignItems:"center",
    padding:" 50px 90px 50px 76px",
    border:"5px solid red",
    //  background:"transparent",
    [theme.breakpoints.down('1601')]: {
      padding:" 50px 90px 50px 75px",
      
    },
     [theme.breakpoints.down('1441')]: {
      marginLeft:"-19px",
      gap:"155px",
      padding:"50 0px 50px 10px ",
    },
    [theme.breakpoints.down('1367')]: {
      
      gap:"50px",
      margin:"50px 0px 50px 0px ",
    },
    [theme.breakpoints.down('1281')]: {
      
      gap:"150px",
      padding:"50px 0px 50px 49px ",
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
  


  

export const CaseOne = () => {
  const [slideIndex] = useState(0);
 // Index of the slide you want to access
  const desc = slides[slideIndex].desc;
  return (
    <Box >
<Container
maxWidth="xl">


    <PortfoliContCont >
        <Container
        >
            <Header variant='h1'>Case Study</Header>
       <Desc variant='body1'>{desc}</Desc> 

        </Container>
        <Box >
    <CaseCard/>
        </Box>
        
    </PortfoliContCont >
    {/* <Container sx={{ display:"flex",justifyContent:"center",}}>
    <Link to="/casestudy"> <Button variant='contained'>Explore all our case study</Button></Link>
    </Container> */}
    
    </Container>
    </Box>
  )
}






