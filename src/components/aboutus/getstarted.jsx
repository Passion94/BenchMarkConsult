import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, CardContent, Container, Typography, styled,Button} from '@mui/material'
import "./getstarted.css"

import React from 'react'
import { Link } from 'react-router-dom';




const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent:"flex-start",
  padding: '100px 30px 100px 50px',
  gap:"100px",
  overflow:"hidden",
  


  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('lg')]: {
    gap:"15px",
    
    // paddingTop: '100px',
    // flexDirection: 'column', // Stack elements vertically on small screens
    // textAlign: 'center', // Center text on small screens
  },
  [theme.breakpoints.down('md')]: {
    gap:"10px",
    padding: '100px 5px 80px 70px',
    // paddingTop: '100px',
    flexDirection: 'column', // Stack elements vertically on small screens
    textAlign: 'center', // Center text on small screens
  },
 
 
  [theme.breakpoints.down('sm')]: {
    // paddingTop: '10px',
    justifyContent:"flex-start",
    marginRight:"20px",
    // flexDirection: 'column', // Stack elements vertically on small screens
    textAlign: 'center', // Center text on small screens
    marginLeft:"-35px",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  // width: '50%',
  // padding: '0 140px 0 0',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('lg')]: {
    // width: '100%',
    padding: '0 0px 0 25px',
    
    // marginLeft:"20px",
  },

  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 20px 0 17px',
    marginLeft:"0px",
   
  },

  [theme.breakpoints.down('sm')]: {
    
    padding: '0 0px 0 27px',
    marginLeft:"0px",
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%',
    padding: '0 20px 0 20px',
  },
}));












const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '1em',
  color: 'rgb(8, 16, 103)',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5em',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
   
  },
 
}));



const Header = styled(Typography)(({ theme }) => ({
  color:'rgb(8,16,103)',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '2.5em',
  paddingTop: '10px',
 
  fontFamily: '"Tiempos Headline", serif',
  fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"uppercase",
  lineHeight:"46px",
 
 
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    paddingRight: '10px',
    lineHeight:"26px",
    fontWeight: '900',
    
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.7rem',
    paddingRight: '20px',
    marginBottom: '15px',
    marginLeft:"-10px",
    fontWeight: '900',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
    paddingRight: '10px',
    marginBottom: '3px',
    marginLeft:"0px",
    fontWeight: '900',
  },
}));








const Desc = styled(Typography)(({ theme }) => ({
  color:'rgb(8,16,103)',
  width:"100%",
  fontWeight:"400",
  marginBottom: '30px',
  fontSize: '1.5em',
  lineHeight: '46px',
  fontFamily: 'Archivo Narrow',
  // opacity: '0.7',
  // paddingLeft: '42px',
  // Adjust paddingRight to create some space on both sides

  // Responsive styles using Material-UI breakpoints



  [theme.breakpoints.down('md')]: {
    fontSize: '1.5em',
    fontWeight:"400",

    
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%', // Adjust width for small screens and above
    fontSize: '1.5em',
    lineHeight: '30px',
    fontWeight:"400",
     // Adjust padding for the left side on small screens
    marginLeft:"0px",
    
    
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%', // Adjust width for extra-small screens
    fontSize: '1rem',
    fontWeight:"400",
    lineHeight: '24px',
    paddingLeft: '0px', // Adjust padding for the left side on extra-small screens
    paddingRight: '10px', // Adjust padding for the right side on extra-small screens
    
  },
}));

const StyledButton = styled('button')(({ theme }) => ({
  
  marginTop: '10px',
  border:"1px solid rgb(75,75,221)",
  color:'rgb(46,234,250)',
  fontSize: '1em',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 20px',
  backgroundColor: 'rgb(8,16,103)',
  border:"1px solid rgb(8,16,103)",
  
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




export const Getstarted = () => {
  return (
    
    <Box sx={{  background:"rgb(218, 249, 254)",}}>
      <Container 
      maxWidth="xl">
    <div  className='getStartedmainContainer'>
        <StyledCardContent   >
    <Title>
    Discover your solution
    </Title>
    <Header>
    Discover the solution to your unique challenge
    </Header>
    <Desc variant="body1" color="text.secondary">
    Discover the right solution that solves your problem using our cutting edge technology
    </Desc>
    <Button 
    className="beep-text"
    // sx={{display:"flex", alignItems:"center",
    //  color:"rgb(208, 2, 27)"
    // }}
    >
    
    <StyledButton variant="outline">Get in touch</StyledButton>
    
    </Button >
  </StyledCardContent >

<Container >
     <img
      src="https://www.technologyhq.org/wp-content/uploads/2021/02/it-services.jpg"
      alt="Image"
      
      
      className='getImage'

      
    />
    
  </Container>
  </div>

  </Container>
  </Box>
  )
}
