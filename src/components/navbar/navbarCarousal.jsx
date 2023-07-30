import { Button, CardContent, Typography, styled } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './navbarcarousal.css';






const Title = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '600',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '1.5rem',
  fontFamily: 'Barlow Condensed',
  marginTop: '10px',
  opacity: '0.8',
  paddingLeft: '50px',

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
    paddingLeft: '30px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    paddingLeft: '20px',
    marginBottom: '5px',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
    paddingLeft: '10px',
    marginBottom: '3px',
  },
}));

const Header = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontWeight: '900',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '3rem',
  fontFamily: '"Tiempos Headline", serif',
  paddingTop: '10px',
  opacity: '0.7',
  paddingLeft: '50px',
  paddingRight: '50px', // Adjust paddingRight to create some space on both sides

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
    paddingRight: '30px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
    paddingRight: '20px',
    marginBottom: '5px',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1.5rem',
    paddingRight: '10px',
    marginBottom: '3px',
  },
}));

const Desc = styled(Typography)(({ theme }) => ({
  color: 'white',
  marginBottom: '10px',
  fontSize: '1.5rem',
  lineHeight: '36px',
  fontFamily: 'Archivo Narrow',
  opacity: '0.7',
  paddingLeft: '50px',
  paddingRight: '50px', // Adjust paddingRight to create some space on both sides

  // Responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Adjust width for small screens and above
    fontSize: '1.2rem',
    lineHeight: '30px',
    paddingLeft: '30px', // Adjust padding for the left side on small screens
    paddingRight: '30px', // Adjust padding for the right side on small screens
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
  color: 'white',
  fontSize: '1rem',
  fontWeight: '900',
  lineHeight: '17px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  padding: '16px 20px',
  backgroundColor: 'transparent',
  outline: '0px',
  transition: 'all 0.3s ease 0s',
  opacity: '0.5',
  cursor: 'pointer',
  marginLeft: '50px',

  // Add responsive styles using Material-UI breakpoints
  [theme.breakpoints.down('xs')]: {
    fontSize: '0.9rem', // Adjust font size for extra-small screens
    padding: '12px 16px', // Adjust padding for extra-small screens
  },
}));

// ... Your component code ...


   
    
  
    
const NavbarCarousal = () => {
    const dotTexts = ['Services', 'Resources', 'Portfolio'];
    const customPaging = (i) => (
        // Add your custom content (text) for each dot here
        <div>
          {dotTexts[i]}
        </div>
      );
  

  const settings = {
    dots: true, // Show navigation dots
    customPaging,
    infinite: true, // Loop the carousel
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per interaction
    autoplay: true, // Auto play the carousel
    autoplaySpeed: 2000, // Time between slides in autoplay mode
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
    <Slider {...settings} className='sliderContainer'>
      {/* Your carousel slides */}
    
      <CardContent  className=' slideBackground slideOne '>
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
        <StyledButton
          variant="outline"
          
         
        >
          Get a quote
        </StyledButton>
      </CardContent>
      <CardContent  className='slideBackground slideTwo'>
        <Title>
          Resources
        </Title>
        <Header>
            Get access to every resurces needed for the growths
        </Header>
        <Desc variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat et illo
          veritatis sit repellendus doloribus, laborum hic ad aperiam soluta nobis pariatur
           ratione ullam? Doloremque perferendis officiis commodi tempore!
        </Desc>
        <StyledButton
        
          variant="outline"
         
         
        >
          View Resources
        </StyledButton>
      </CardContent>
      <CardContent  className='slideBackground slideThree'>
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
        <StyledButton
        
          
         
        >
          Read More
        </StyledButton>
      </CardContent>
      {/* Add more slides as needed */}
      
    </Slider>
  );
};

export default NavbarCarousal;
