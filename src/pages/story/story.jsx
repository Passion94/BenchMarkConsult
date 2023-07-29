import { Box, CardMedia, Container, Paper, Typography } from '@mui/material'
import React from 'react'






const backgroundImageUrl = 'https://dcblog.b-cdn.net/wp-content/uploads/2020/08/importance-of-elearning-in-education-1024x683.jpg';

const paperStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 500,
  width: "100%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  color: 'black',
  fontWeight: 'bold',
position:"relative"
};

const boxStyle = {
    background: "rgb(215, 236, 243)",
    position:"absolute",
bottom:"-80px",
    
    height: "300px",
    width: "85%",
    fontSize: "1rem",
    cursor:"pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", /* x-offset y-offset blur spread color */
    opacity:"1",
    '&:hover': {
      backgroundColor: "rgb(215, 236, 243)"

    }
  };
    const secBox = {
      display:"flex",
      gap:"30px",
      marginTop:'200px'
     };
   
 
  const title = {
   textTransform:"uppercase",
   fontWeight:"600",
    fontSize:"1rem",
    color:"rgb(117, 117, 117)",
    fontFamily:  '"Lato", "sans-serif"',
    padding:"20px 0px 10px 20px ",
   
    
  };


  const header = {
    fontWeight:"900",
     fontSize:"2.5rem",
     fontFamily: '"Tiempos Headline", "serif"',
     padding:"0px 20px 10px 20px "
   };


   const secHeader = {
    fontWeight:"900",
     fontSize:"1.5rem",
     fontFamily: '"Tiempos Headline", "serif"',
     padding:"0px 10px 10px 20px "
   };


   const desc= {
    fontFamily:  '"Lato", "sans-serif"',
    fontWeight:"400",
     fontSize:"1.1rem",
     color:"black",
     padding:"0px 20px 10px 20px "
   };
   
   const tags= {
    fontFamily:  '"Lato", "sans-serif"',
    fontWeight:"400",
     fontSize:"1rem",
     color: "red",
     fontStyle:"italic",
     padding:"0px 20px 0px 20px "
   };


export const Story = () => {
  return (
    <Container sx={{marginTop:"150px"}}>
        <Typography sx={{color:"rgb(117, 117, 117)", fontSize:"1.5rem", 
        fontWeight:"600",textTransform:"uppercase",
         marginBottom:"70px", display:"flex", justifyContent:"center"}}>
            Discover a few of our clients portfolios
        </Typography>

        <Paper style={paperStyle}>
      <Box style={boxStyle}>
        <Typography variant="body1" style={title} >
          A leading Digital educational platform
        </Typography>
        <Typography variant="h5" style={header}>
          Scaling cheap education with a personalized approach globally
        </Typography>
        <Typography variant="h5" style={desc}>
        A leading global educational company engaged Benchmark to create a complete educational platform,
         create customer engagement and organizational process,  
         managed their marketing through a portfolio of international brands.


        </Typography>
        <Typography variant="h5" style={tags}>
        Project management, Customer & Marketing Strategy, Business Analytics & Insights, Artificial intelligence approach, Process Automation
        </Typography>
      </Box>
    </Paper>

     <Box  style={secBox }>

      
     <Paper style={paperStyle}>
      <Box style={boxStyle}>
        <Typography variant="body1" style={title} >
          A leading Digital educational platform
        </Typography>
        <Typography variant="h5" style={secHeader}>
          Scaling cheap education with a personalized approach globally
        </Typography>
        <Typography variant="h5" style={desc}>
        A leading global educational company engaged Benchmark to create a complete educational platform,
         create customer engagement and organizational process,  
         managed their marketing through a portfolio of international brands.


        </Typography>
        <Typography variant="h5" style={tags}>
        Project management, Customer & Marketing Strategy, Business Analytics & Insights, Artificial intelligence approach, Process Automation
        </Typography>
      </Box>
    </Paper>
    
    <Paper style={paperStyle}>
      <Box style={boxStyle}>
        <Typography variant="body1" style={title} >
          A leading Digital educational platform
        </Typography>
        <Typography variant="h5" style={secHeader}>
          Scaling cheap education with a personalized approach globally
        </Typography>
        <Typography variant="h5" style={desc}>
        A leading global educational company engaged Benchmark to create a complete educational platform,
         create customer engagement and organizational process,  
         managed their marketing through a portfolio of international brands.


        </Typography>
        <Typography variant="h5" style={tags}>
        Project management, Customer & Marketing Strategy, Business Analytics & Insights, Artificial intelligence approach, Process Automation
        </Typography>
      </Box>
    </Paper>
     </Box>

    </Container>
  )
}
