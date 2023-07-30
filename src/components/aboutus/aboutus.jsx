import React from 'react';
import { Box, Button, CardContent, CardMedia, Container, Typography,ThemeProvider, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';







const ContainerBox = styled(Box)(({ theme }) => ({
  background: "white",
  boxSizing: "border-box",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",
  '&:hover': {
    background: "rgb(214, 235, 242)",
    transform: "scale(1.2)",
  },
}));



const Title = styled(Typography)(({ theme }) => ({
  color: 'rgb(117, 117, 117)',
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '1.5rem',
  fontFamily: 'Barlow Condensed',
  textTransform: 'uppercase',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem', // Adjust font size for small screens and above
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem', // Adjust font size for extra-small screens
  },
}));

const Desc = styled(Typography)({
  justifyContent: "center",
  color: "rgb(58, 58, 58)",
  marginBottom: '10px',
  fontSize: '1.2rem',
  lineHeight: "26px",
  fontFamily: 'Archivo Narrow',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': '4',
  '-webkit-box-orient': 'vertical',
});





const theme = createTheme();


const AboutusCard = ({ title, image, description, readMoreLink }) => {
  return (
    <ThemeProvider theme={theme}>
    <ContainerBox>
    <CardMedia
        sx={{ borderRadius: '6px' }}
        component="img"
        alt={title}
        height="200px"
        width="300px"
        image={image}
      />
      <CardContent>
        <Title gutterBottom variant="h5" align="center" component="div">
          {title}
        </Title>
        <Desc variant="body1" color="text.secondary" className="bodytypography">
          {description}
        </Desc>
        <Button
        
          sx={{ marginTop: '10px', color: 'red', fontSize: '10px' }}
          href={readMoreLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Button>
      </CardContent>

      
    </ContainerBox>
    </ThemeProvider>
  );
};





const ResponsiveContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  alignItems:"center",

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Change to a single column layout on medium screens and below
    gap: '20px', // Reduce the gap between items on medium screens and below
  },

  [theme.breakpoints.down('sm')]: {
    gap: '10px', // Further reduce the gap between items on small screens and below
  },
}));

const Aboutus = ({ aboutData }) => {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveContainer>
        {aboutData.map((item, index) => (
          <AboutusCard
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


export default Aboutus;
