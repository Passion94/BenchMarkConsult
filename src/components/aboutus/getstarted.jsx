import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, CardContent, Container, Typography, styled,Button} from '@mui/material'
import "./getstarted.css"

import React from 'react'
import { Link } from 'react-router-dom';






const StyledCardContent = styled(CardContent)(({ theme }) => ({
  


  
 
 


  [theme.breakpoints.down('811')]: {
    // width: '100%',
    // padding: '0 20px 0 17px',
    marginLeft:"-7px",
   
  },
  [theme.breakpoints.down('541')]: {
    // width: '100%',
    // padding: '0 20px 0 17px',
    marginLeft:"20px",
   
  },
}));












const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '1em',
  color: 'white',
  fontStyle:"normal",
  textTransform:"uppercase",
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5em',
    paddingLeft:"14px",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    marginLeft:"-10px",
    paddingLeft:"0px",
   
  },
 
}));



const Header = styled(Typography)(({ theme }) => ({
  color:'black',
  fontWeight: '900',

  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '2.5em',
  paddingTop: '10px',
 
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  
  fontStyle: "normal",
  textTransform:"initial",
  lineHeight:"46px",
 
 
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
    paddingRight: '10px',
    lineHeight:"46px",
    fontWeight: '900',
    paddingLeft:"14px",
    
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
    paddingRight: '0px',
    marginBottom: '15px',
    marginLeft:"-10px",
    fontWeight: '900',
    paddingLeft: '0px', 
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
    paddingRight: '0px',
    marginBottom: '3px',
    marginLeft:"0px",
    fontWeight: '900',
  },
}));








const Desc = styled(Typography)(({ theme }) => ({
  color:'black',
  width:"100%",
  fontWeight:"500",
  marginBottom: '30px',
  fontSize: '1.2em',
  lineHeight: '46px',
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  // opacity: '0.7',
  // paddingLeft: '42px',
  // Adjust paddingRight to create some space on both sides

  // Responsive styles using Material-UI breakpoints



  [theme.breakpoints.down('md')]: {
    fontSize: '1.5em',
    fontWeight:"400",
lineHeight:"26px",
    paddingLeft:"14px",
    
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%', // Adjust width for small screens and above
    fontSize: '1.5em',
    lineHeight: '30px',
    fontWeight:"400",
     // Adjust padding for the left side on small screens
    marginLeft:"-10px",
    paddingLeft: '0px', 
   
    
    
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%', // Adjust width for extra-small screens
    fontSize: '1rem',
    fontWeight:"400",
    lineHeight: '24px',
    paddingLeft: '0px', // Adjust padding for the left side on extra-small screens
    paddingRight: '0px', // Adjust padding for the right side on extra-small screens
    
  },
}));

const StyledButton = styled('button')(({ theme }) => ({
  
  marginTop: '10px',
  color:'white',
  fontSize: '.9em',
  fontWeight: '900',
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 22px',
  background:"#5c6bc0",
  borderRadius:'3px',
  border:"none",
  marginBottom:"20px",
  transition: 'all 0.3s ease 0s',
 
  cursor: 'pointer',
  marginLeft: '-8px',
  [theme.breakpoints.down('sm')]: {
    
    marginLeft:"-20px"
  },
  // Add responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem', // Adjust font size for extra-small screens
    padding: '12px 16px', // Adjust padding for extra-small screens
  },
  [theme.breakpoints.down('821')]: {
    marginLeft: '7px',
  },
  [theme.breakpoints.down('541')]: {
    marginLeft: '-18px',
  },
}));




export const Getstarted = () => {
  return (
    
    <Box sx={{background:"#F7F7F7"}}>
      <Container 
      maxWidth="xl">
    <div  className='getStartedmainContainer'>
        <StyledCardContent   >
    <Typography variant='h2'>
    Discover your solution
    </Typography>
    <Typography variant='h1'>
    Discover the solution to your unique challenge
    </Typography>
    <Typography variant="body1" >
    Discover the right solution that solves your problem using our cutting edge technology
    </Typography>
   
    
    <Link to=''><Button variant="contained" >Get in touch</Button></Link>
    
    
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
