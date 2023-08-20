import { Box, Button, Container, Stack, Typography, styled } from '@mui/material'

import React from 'react'
import VerticalTabs from './VerticalTabs';

const MainContainer = styled(Box)(({ theme }) => ({
  marginTop:'12px', 
  marginBottom:"100px",
  padding:"120px 20px 130px 62px ",
  
 display:"flex",
 alignItems:"center",
  backgroundColor: "rgb(0, 77, 64)",
  
 
 
 
  [theme.breakpoints.down('1441')]: {
    
    padding:"120px 20px 130px 43px ",
    
  },
  [theme.breakpoints.down('1367')]: {
    
    padding:"120px 10px 130px 31px ",
    
  },
  [theme.breakpoints.down('1281')]: {
    
    padding:"120px 10px 130px 17px ",
    
  },
  [theme.breakpoints.down('1081')]: {
    
   flexDirection:"column",
   padding:"120px 0px 130px 0px ",
   marginLeft:"-14px"
    
  },
  [theme.breakpoints.down('1025')]: {
    
    padding:"120px 0px 130px 22px ",
    
  },
  [theme.breakpoints.down('913')]: {
    
    padding:"120px 0px 130px 20px ",
    
  },
  [theme.breakpoints.down('821')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-17px",

    
  },
  [theme.breakpoints.down('811')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-19px",

    
  },
  [theme.breakpoints.down('801')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-12px",

    
  },
  [theme.breakpoints.down('641')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-29px",

    
  },
  [theme.breakpoints.down('602')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-25px",

    
  },
  [theme.breakpoints.down('541')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-4px",

    
  },
  [theme.breakpoints.down('481')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-10px",

    
  },
  [theme.breakpoints.down('415')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-11px",

    
  },
  [theme.breakpoints.down('394')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-12px",

    
  },
  [theme.breakpoints.down('391')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-13px",

    
  },
  [theme.breakpoints.down('361')]: {
    
    padding:"120px 0px 130px 0px ",
    marginLeft:"-10px",

    
  },
}));





const Header = styled(Typography)(({ theme }) => ({
  color:'white',
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
  color:'white',
  
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
  color:'white',
  
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
  border:"1px solid rgb(75,75,221)",
  color:'white',
  fontSize: '1em',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 22px',
  background: 'linear-gradient(to right, rgb(8, 16, 103), rgb(46, 234, 250))',
  border:"1px solid rgb(8,16,103)",
 
  transition: 'all 0.3s ease 0s',
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  cursor: 'pointer',
  // marginLeft: '42px',

}));

 
const StyledBox = styled(Box)({
    
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  });

export const Whatwedo = () => {
  return (
    <Box sx={{backgroundColor: "rgb(0, 77, 64)"}}>
    <Container maxWidth="xl">
    <MainContainer >
      
      <Container>
        <Header>
            What we do
        </Header>

        <StyledBox>

           
        <Title>
        We are at the forefront of technological advancements.
       
        </Title>
        <Desc >
        Prehood is a global firm that empower's businesses and organizations with innovative digital 
        solutions that drive growth,efficiency, and success.
       
        </Desc>
       
        
        </StyledBox>
        <Box >
        <StyledButton
          variant="contained"
         
        >
          Explore Our Services
        </StyledButton>
       
      
      
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
