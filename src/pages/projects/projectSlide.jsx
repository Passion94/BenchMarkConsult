import { Button, CardContent, Container, Typography, styled } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './projectSlide.css';






const Title = styled(Container)(({ theme }) => ({
  color: 'white',
  fontWeight: '600',
  justifyContent: 'center',
  
  fontSize: '1.2rem',
  fontFamily: 'Barlow Condensed',
  marginTop: '10px',
  opacity: '0.8',
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    paddingLeft: '30px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '.7rem',
    // paddingLeft: '20px',
    // marginBottom: '5px',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '.7rem',
    paddingLeft: '10px',
    marginBottom: '3px',
  },
}));

const Header = styled(Container)(({ theme }) => ({
  color: 'white',
  fontWeight: '900',
  justifyContent: 'center',
 
  fontSize: '1rem',
  fontFamily: 'Barlow Condensed',
  paddingTop: '10px',
  opacity: '0.7',
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '.7rem',
    paddingRight: '30px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '.7rem',
    paddingRight: '20px',
    marginBottom: '5px',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '.7rem',
    paddingRight: '10px',
    marginBottom: '3px',
  },
}));

const Desc = styled(Container)(({ theme }) => ({
  color: 'white',
  marginBottom: '10px',
  fontSize: '1rem',
  lineHeight: '36px',
  fontFamily: 'Archivo Narrow',
  opacity: '0.7',
 

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Adjust width for small screens and above
    fontSize: '.7rem',
    lineHeight: '30px',
    // paddingLeft: '30px', // Adjust padding for the left side on small screens
    // paddingRight: '30px', // Adjust padding for the right side on small screens
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%', // Adjust width for extra-small screens
    fontSize: '.7rem',
    lineHeight: '24px',
    // paddingLeft: '10px', // Adjust padding for the left side on extra-small screens
    // paddingRight: '10px', // Adjust padding for the right side on extra-small screens
  },
}));


// ... Your component code ...


   
    
  
    
const ProjectSlide = () => {
    const dotTexts = ['Services', 'Resources', 'Portfolio'];
    const customPaging = (i) => (
        // Add your custom content (text) for each dot here
        <div>
          {dotTexts[i]}
        </div>
      );
  

  const settings = {
    dots: false, // Show navigation dots
    customPaging,
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 2, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per interaction
    autoplay: true, // Auto play the carousel
    autoplaySpeed: 2000, // Time between slides in autoplay mode
    fade: false, // Use fade effect for transition
    cssEase: 'linear', // Specify the CSS easing for the fade animation
    wheel:true,
    
   

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
    <Slider {...settings} className='prosliderContainer'>
      {/* Your carousel slides */}
    
      <CardContent  className=' proslideBackground proslideOne '>
        <Title>
            Services we offer
        </Title>
        <Header>
            Lets give you the value you earn at the right time
        </Header>
        <Desc variant="body1" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat et illo
          veritatis sit repellendus doloribus, laborum hic ad aperiam soluta nobis pariatur
           ratione ullam? Doloremque perferendis officiis commodi tempore!
        </Desc>
       
      </CardContent>
      <CardContent  className='proslideBackground proslideTwo'>
        <Title>
         Rail road Industrialization Architecture in India
        </Title>
        <Header>
            Establishing a complete system for the automative rails
        </Header>
        <Desc variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat et illo
          veritatis sit repellendus doloribus, laborum hic ad aperiam soluta nobis pariatur
           ratione ullam? Doloremque perferendis officiis commodi tempore!
        </Desc>
      
      </CardContent>
      <CardContent  className='proslideBackground proslideThree'>
        <Title>
            Our Clients stories
        </Title>
        <Header>
            Hear what our clients has to say
        </Header>
        <Desc variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat et illo
          veritatis sit repellendus doloribus, laborum hic ad aperiam soluta nobis pariatur
           ratione ullam? Doloremque perferendis officiis commodi tempore!
        </Desc>
      
      </CardContent>
      {/* Add more slides as needed */}
      
    </Slider>
  );
};

export default ProjectSlide;
