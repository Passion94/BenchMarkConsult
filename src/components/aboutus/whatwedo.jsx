import { Box, Button, Container, Stack, Typography, styled } from '@mui/material'

import React from 'react'
import VerticalTabs from './VerticalTabs';
import {purple} from '@mui/material/colors';
import { Link } from 'react-router-dom';

const MainContainer = styled(Box)(({ theme }) => ({
  marginTop: '70px',
marginBottom: '20px',
padding: '50px 20px 50px 76px',
position: 'relative',
display: 'flex',
alignItems: 'center',

  
  
 
 
  [theme.breakpoints.down('1441')]: {
    
    padding:"50px 0px 50px 56px ",
    
  },
  [theme.breakpoints.down('1367')]: {
    
    padding:"50px 0px 50px 45px ",
    
  },
  [theme.breakpoints.down('1281')]: {
    
    padding:"50px 0px 50px 30px ",
    
  },
  [theme.breakpoints.down('1081')]: {
    
   flexDirection:"column",
   padding:"50px 0px 50px 0px ",
   marginLeft:"-14px"
    
  },
  [theme.breakpoints.down('1025')]: {
    
    padding:"50px 0px 50px 22px ",
    
  },
  [theme.breakpoints.down('913')]: {
    
    padding:"50px 0px 50px 20px ",
    
  },
  [theme.breakpoints.down('821')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-17px",

    
  },
  [theme.breakpoints.down('811')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-19px",

    
  },
  [theme.breakpoints.down('801')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-12px",

    
  },
  [theme.breakpoints.down('641')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-29px",

    
  },
  [theme.breakpoints.down('602')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-25px",

    
  },
  [theme.breakpoints.down('541')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-4px",

    
  },
  [theme.breakpoints.down('481')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-10px",

    
  },
  [theme.breakpoints.down('415')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-11px",

    
  },
  [theme.breakpoints.down('394')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-12px",

    
  },
  [theme.breakpoints.down('391')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-13px",

    
  },
  [theme.breakpoints.down('361')]: {
    
    padding:"50px 0px 50px 0px ",
    marginLeft:"-10px",

    
  },
}));





const Header = styled(Typography)(({ theme }) => ({
  
  fontWeight: '900',
  display:"flex",
  
  marginBottom: '30px',
  fontSize: '1em',
  paddingTop: '10px',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  // fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"uppercase",
  lineHeight:"46px",
  [theme.breakpoints.down('415')]: {
    
    fontSize:".8em",

    
  },
 
}));
const Title = styled(Typography)(({ theme }) => ({
  // color:'white',
  
  display:"flex",
  fontWeight:"500",
  marginBottom: '30px',
  fontSize: '2.5em',
  lineHeight: '46px',
  paddingRight:"10px",
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",

    
    [theme.breakpoints.down('1281')]: {
      fontSize:"2.1em",
      paddingRight:"0px"
      
    },
    [theme.breakpoints.down('415')]: {
    
      fontSize:"1.8em",
  
      
    },
 
}));

const Desc = styled(Typography)(({ theme }) => ({
  // color:'white',
  
  display:"flex",
  fontWeight:"500",
  marginBottom: '30px',
  fontSize: '1.2em',
  lineHeight: '46px',
  paddingRight:"10px",
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
 



  [theme.breakpoints.down('415')]: {
    
    fontSize:".9em",

    
  },
 
}));


const StyledButton = styled('button')(({ theme }) => ({
  
  marginTop: '10px',
  marginBottom:"30px",
  border:"0px",
  // color:'black',
  borderRadius:'3px',
  fontSize: '.8em',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 22px',
 
  border:"none",
  outline:"none",
 
  transition: 'all 0.3s ease 0s',
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
 
  // marginLeft: '42px',

}));

 
const StyledBox = styled(Box)({
    
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  });

export const Whatwedo = () => {
  return (
    <Box>
    <Container maxWidth="xl">
    <MainContainer >
      
      <Container>
        <Typography variant='h2'>
            What we do
        </Typography>

        <StyledBox>

           
        <Typography variant='h1'>
        We are at the forefront of technological advancements.
       
        </Typography>
        <Typography variant='body1'>
        Prehood is a global firm that empower's businesses and organizations with innovative digital 
        solutions that drive growth,efficiency, and success.
       
       
        </Typography>
       
        
        </StyledBox>
        <Box >
        <Link to="services"><Button
          variant="contained" 
         
        >
          Explore Our Services
        </Button> </Link>
       
      
      
        </Box>
        </Container>
        <Container>

        <VerticalTabs/>
        </Container>
       
       
    </MainContainer>
    </Container>
    </Box>
  )
}
