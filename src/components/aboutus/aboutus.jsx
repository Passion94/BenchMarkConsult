import React from 'react';
import { Box, Button, CardContent, CardMedia, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



const ContainerBox = styled(Box)({
  background:"white",
  boxSizing: "border-box",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", /* x-offset y-offset blur spread color */
  transition: "transform 0.3s",
  '&:hover': {   // Changed onhover to ':hover'
    background: "rgb(214, 235, 242)", // Added spaces between rgb values for consistency
    transform: "scale(1.2)"
  
  }
  
});
const Title = styled(Typography)({
  color: 'teal',
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '30px',
  fontFamily: 'Barlow Condensed'
  
});
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
  '-webkit-box-orient': 'vertical'
});


const AboutusCard = ({ title, image, description, readMoreLink }) => {
  return (
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
          variant="outline"
          sx={{ border: '1px solid teal', marginTop: '10px', color: 'teal', fontSize: '10px' }}
          href={readMoreLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Button>
      </CardContent>

      
    </ContainerBox>
  );
};

const Aboutus = ({ aboutData }) => {
  return (
    <Container sx={{ display: "flex", gap: "30px" }}>
      {aboutData.map((item, index) => (
        <AboutusCard
          key={index}
          title={item.title}
          image={item.image}
          description={item.description}
          readMoreLink={item.readMoreLink}
        />
      ))}
    </Container>
  );
};

export default Aboutus;
