import { Box, Button, CardContent, Container, Typography, styled } from '@mui/material';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './navbarcarousal.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';






const Title = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '1em',
  zIndex:"1",
  fontStyle: "normal",
  textTransform:"uppercase",
  position:'relative',
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
 
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5em',
    marginLeft:"-20px"
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
   
  },
  
}));

const Header = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '30px',
  fontSize: '2em',
  paddingTop: '10px',
  lineHeight:"46px",
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"uppercase",
  zIndex:"1",
  position:'relative',
 
 
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    // fontSize: '2rem',
    paddingRight: '80px',
    marginLeft:"-20px"
    
  },

  [theme.breakpoints.down('sm')]: {
    // fontSize: '1.7rem',
    paddingRight: '40px',
    marginBottom: '20px',
    marginLeft:"-20px"
  },

  [theme.breakpoints.down('xs')]: {
    // fontSize: '1rem',
    paddingRight: '10px',
    marginBottom: '3px',
    
  },
}));

const Desc = styled(Typography)(({ theme }) => ({
  color: 'white',
  
  fontWeight:"500",
  marginBottom: '30px',
  fontSize: '1.2em',
  lineHeight: '46px',
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  padding:" 0 355px 0 0",
  zIndex:"1",
  position:'relative',
 
  // opacity: '0.7',
  // paddingLeft: '42px',
  // Adjust paddingRight to create some space on both sides

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    padding:" 0 50px 0 0",
    // fontSize: '1.5em',
    lineHeight: '36px',
    marginLeft:"-20px",
     // Adjust padding for the left side on small screens
    
  },
  [theme.breakpoints.down('sm')]: {
    fontWeight:"normal",
    // fontSize: '1.5em',
    padding:"0 60px 0px 0"
    
  },

  [theme.breakpoints.down('xs')]: {
    padding:"0 15px 0px 0",
    // fontSize: '2rem',
    lineHeight: '24px',
    paddingLeft: '0px', // Adjust padding for the left side on extra-small screens
    paddingRight: '0px', // Adjust padding for the right side on extra-small screens
    display:"flex",
    justifyContent:"center",
    marginLeft:"0px"
  },
  [theme.breakpoints.down('415')]: {
    
    fontSize:".9em",

    
  },
 
}));

const StyledButton = styled('button')(({ theme }) => ({
  border: '1px solid white',
  marginTop: '10px',
  color: 'rgb(46,234,250)',
  fontSize: '.8em',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 20px',
  backgroundColor: 'transparent',
  outline: '0px',
  transition: 'all 0.3s ease 0s',
  zIndex:"1",
  position:'relative',
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
 
  cursor: 'pointer',
  // marginLeft: '42px',

  [theme.breakpoints.down('md')]: {
    
    marginLeft:"-20px"
  },
  [theme.breakpoints.down('sm')]: {
    
    marginTop:"5px" // Adjust padding for extra-small screens

  },
 
  // Add responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('xs')]: {
    // fontSize: '0.9rem', 
    padding: '12px 16px',
    marginTop:"5px" // Adjust padding for extra-small screens

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
    subcategory:{
      one:"Api development",
      two:"Mobile development",
      three:"Web application development"
      }
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
  const dotTexts = ['What we do', 'Software development', 'System analysis and design', 'AI & Data analytics', 'Cyber security'];
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveSlideIndex(index);
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
    beforeChange: (current, next) => {
      setActiveSlideIndex(next);
    },

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
     {slides && slides.map((slide, index) => (
  <Box key={index} className={`slideBackground slide${index + 1}`}>
    
    <Container maxWidth="xl">
      <Title>{slide.title}</Title>
      <Header>{slide.header}</Header>
      <Desc variant="body1">{slide.description}</Desc>
      {slide.subcategory && (
        <Box sx={{paddingLeft:"5%"}}>
          <Desc><span style={{display:"flex", alignItems:"center", gap:"1%"}}><KeyboardDoubleArrowDownIcon  />{slide.subcategory.one}</span></Desc>
          <Desc><span style={{display:"flex", alignItems:"center", gap:"1%"}}><KeyboardDoubleArrowDownIcon  />{slide.subcategory.two}</span></Desc>
          <Desc><span style={{display:"flex", alignItems:"center", gap:"1%"}}><KeyboardDoubleArrowDownIcon  />{slide.subcategory.three}</span></Desc>
        </Box>
      )}
      <StyledButton variant="outline">{slide.buttonLabel}</StyledButton>
    </Container>
  </Box>
))}

        
    
      
    </Slider>
    <Container 
    maxWidth= "xl">
    
    <div className='carousel-dots'>
          {dotTexts.map((text, index) => (
            <div
              key={index}
              className={`carousel-dot ${index === activeSlideIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            >
              {text}
            </div>
          ))}
        </div>
   </Container>
 </div>
  );
};

export default NavbarCarousal;


