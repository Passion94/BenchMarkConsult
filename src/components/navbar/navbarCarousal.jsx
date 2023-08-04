import { Box, Button, CardContent, Container, Typography, styled } from '@mui/material';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './navbarcarousal.css';






const Title = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
   
    marginLeft:"-20px"
  },
  
}));

const Header = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '3em',
  paddingTop: '10px',
  lineHeight:"26px",
  fontFamily: '"Tiempos Headline", serif',
  fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"uppercase",
 
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    paddingRight: '10px',
    
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '.7rem',
    paddingRight: '20px',
    marginBottom: '5px',
    marginLeft:"-20px"
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
    paddingRight: '10px',
    marginBottom: '3px',
  },
}));

const Desc = styled(Typography)(({ theme }) => ({
  color: 'white',
  width:"50%",
  fontWeight:"400",
  marginBottom: '30px',
  fontSize: '1.5em',
  lineHeight: '36px',
  fontFamily: 'Archivo Narrow',
  // opacity: '0.7',
  // paddingLeft: '42px',
  // Adjust paddingRight to create some space on both sides

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Adjust width for small screens and above
    fontSize: '1.2rem',
    lineHeight: '30px',
     // Adjust padding for the left side on small screens
    marginLeft:"-20px"
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%', // Adjust width for extra-small screens
    fontSize: '1rem',
    lineHeight: '24px',
    paddingLeft: '10px', // Adjust padding for the left side on extra-small screens
    paddingRight: '10px', // Adjust padding for the right side on extra-small screens
  },
}));

const StyledButton = styled('button')(({ theme }) => ({
  border: '1px solid white',
  marginTop: '10px',
  color: 'rgb(46,234,250)',
  fontSize: '1em',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 20px',
  backgroundColor: 'transparent',
  outline: '0px',
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

// ... Your component code ...


const slides = [
  { id :1,
    title: 'What we do',
    header: 'Solution delivery',
    description: ' Prehood is a global firm that empowers businesses and organizations with innovative digital solutions that drive growth, efficiency, and success. We are at the forefront of technological advancements.',
    buttonLabel: 'Get in touch',
  },
  {id:2,
    title: 'Services',
    header: 'Software development',
    description: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    buttonLabel: 'Get in touch',
  },
  { id:3,
    title: 'Services ',
    header: 'System analysis and design',
    description: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    buttonLabel: 'learn more',
  },
  {id:4,
    title: 'Services ',
    header: 'AI & Data analytics',
    description: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    buttonLabel: 'learn more',
    
  },
  {id:5,
    title: 'Services ',
    header: 'Cyber Security',
    description: ' Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    buttonLabel: 'Read More',
    
  },
];

    
  
    
const NavbarCarousal = () => {
 
  const sliderRef = useRef(null);
  const dotTexts = [ 'What we do','Software development', 'System analysis and design',
   'AI & Data analytics', 'Cyber security'];

  const handleDotClick = (index) => {
    // Change the active slide to the specified index
    sliderRef.current.slickGoTo(index);
  };

  const settings = {
    
    dots: true, // Show navigation dots
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per interaction
    autoplay: true, // Auto play the carousel
    autoplaySpeed: 5000, // Time between slides in autoplay mode
    fade: true, // Use fade effect for transition
    cssEase: 'linear', // Specify the CSS easing for the fade animation
   

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  

  return (
    <div className='sliderContainer'  >
     <Slider ref={sliderRef} {...settings}  style={{overflow:"hidden"}} >
      {slides.map((slide, index) => (
        <Box key={index} className={`slideBackground slide${index + 1}`}>
          <Title>{slide.title}</Title>
          <Header >{slide.header}</Header>
          <Desc variant="body1">{slide.description}</Desc>
          <StyledButton variant="outline">{slide.buttonLabel}</StyledButton>
        </Box >
      ))}
    </Slider>
     <div className='carousel-dots'>
     
     {dotTexts.map((text, index) => (
       <div key={index} className='carousel-dot' onClick={() => handleDotClick(index)}>
         {text}
       </div>
     ))}
   </div>
 </div>
  );
};

export default NavbarCarousal;


