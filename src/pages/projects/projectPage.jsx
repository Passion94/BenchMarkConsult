import React from 'react';
import ProjectSlide from './projectSlide';
import { Projectinfo } from './projectinfo';
import { Container, Typography, styled } from '@mui/material';
import { All } from './all';




const Desc = styled(Typography)({
  fontWeight: '400',
  width:"40%",
  color: 'black',
  marginBottom:"5%",
  fontSize: 'clamp(8px, 3vw, 16px)',
  paddingLeft:"25px",
  paddingRight:"25px",
   // Responsive styles using media queries
  
'@media (max-width: 768px)': {
  fontSize: 'clamp(8px, 2.5vw, 14px)',
  paddingLeft: '20px',
  paddingRight: '10px',
},
'@media (max-width: 480px)': {
  fontSize: 'clamp(8px, 2vw, 12px)',
  paddingLeft: '5px',
  paddingRight: '5px',
},
'@media (min-width: 280px)': {
  // fontSize: 'clamp(8px, 2vw, 12px)',
  paddingLeft: '25px',
  paddingRight: '25px',
},
})


const Title = styled(Typography)({
  color: 'rgb(117, 117, 117)',
  fontWeight: '400',
  justifyContent: 'flex-Start',
  marginBottom:"10%",
  fontSize: 'clamp(32px, 5vw, 88px)',
  fontFamily: 'Barlow Condensed',
  marginTop:"10px",
  paddingLeft:"25px"
  
});



export const ProjectPage = () => {
  const components = [
    <All key="all" />,
    <All key="all" />,
    <All key="all" />,
    <All key="all" />,
    <All key="all" />,
    <All key="all" />,
    // Add more components to render inside the Container as needed
  ];

  return (

   
    <Container >
       <Title >
      Our projects
    </Title >
    <Desc>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it to make a type 
     specimen book. It has survived not only five centuries, but also the leap into 
     electronic typesetting, remaining essentially unchanged. It was popularised in 
     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
     and more recently with desktop publishing software like Aldus PageMaker including 
     versions of Lorem Ipsum
    </Desc>
      {components.map((component) => component)}
    </Container>
  );
};
