import React, { useState } from 'react'

import { Box, Button, Container, Typography, styled } from '@mui/material'
import CaseCard from './CaseCard'
import { slides } from './CaseCard';
import { Link } from 'react-router-dom';



const Header = styled(Typography)(({ theme }) => ({
  marginTop:"-260px",

  [theme.breakpoints.down('1281')]: {
    marginTop:"-240px",
    
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
      
      gap:"200px",
      padding:"50px 0px 50px 62px ",
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
  
  // const StyledButton = styled('button')(({ theme }) => ({
 
  //   marginTop: '10px',
  //   marginBottom:"30px",
  //   border:"none",
    
  //   borderRadius:'3px',
  //   fontSize: '.8em',
  //   fontWeight: '900',
  //   lineHeight: '17px',
  //   textDecoration: 'none',
  //   textTransform: 'uppercase',
  //   padding: '16px 22px',
  //   background:"#5c6bc0",
  //   border:"none",
  //   outline:"none",
   
  //   transition: 'all 0.3s ease 0s',
  //   fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  //   cursor: 'pointer',
  
  // }));
  

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






