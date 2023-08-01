import React from 'react';
import { Box, Button, CardContent, CardMedia, Container, Typography,ThemeProvider, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';







const ContainerBox = styled(Box)(({ theme }) => ({
  background: "whitesmoke",
  boxSizing: "border-box",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s"
 
  
}));



const Title = styled(Typography)(({ theme }) => ({
  color: 'rgb(117, 117, 117)',
  fontWeight: '600',
  
  fontSize: '.7rem',
  fontFamily: 'Barlow Condensed',
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem', // Adjust font size for small screens and above
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem', // Adjust font size for extra-small screens
  },
}));

const Desc = styled(Typography)({
  
  color: "rgb(58, 58, 58)",
 
  fontSize: '.7rem',
  lineHeight: "26px",
  fontFamily: 'Archivo Narrow',

});





const theme = createTheme();


const FounderCard = ({ title, image, description, readMoreLink }) => {
  return (
    <ThemeProvider theme={theme}>
    <ContainerBox sx={{width:{xs:"100%", sm:"50%", md:"50%", lg:"40%"}, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', }}>
    <CardMedia
        sx={{ borderRadius: '6px'}}
        component="img"
        alt={title}
        height="40%"
       
        // flexWrap="wrap"
        image={image}
      />
      <CardContent
     
      >
        <Title gutterBottom variant="h5"  component="div">
          {title}
        </Title>
        <Desc variant="body1" color="text.secondary" className="bodytypography">
          {description}
        </Desc>
      
      </CardContent>

      
    </ContainerBox>
    </ThemeProvider>
  );
};





const ResponsiveContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  alignItems:"flex-start",
  flexWrap:"wrap",

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Change to a single column layout on medium screens and below
    gap: '20px', // Reduce the gap between items on medium screens and below
  },

  [theme.breakpoints.down('sm')]: {
    gap: '10px', // Further reduce the gap between items on small screens and below
  },
}));

const Founder = ({ founderData }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveContainer>
        {founderData.map((item, index) => (
          <FounderCard
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            readMoreLink={item.readMoreLink}
          />
        ))}
      </ResponsiveContainer>
    </ThemeProvider>
  );
};


export default Founder;
