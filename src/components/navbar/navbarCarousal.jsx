import { Button, CardContent, Typography, styled } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './navbarcarousal.css';






const Title = styled(Typography)({
    color: 'white',
    fontWeight: '600',
    justifyContent: 'center',
    marginBottom: '10px',
    fontSize: '1.5rem',
    fontFamily: 'Barlow Condensed',
    marginTop:"150px",
    opacity:"0.8"
  });

  const Header= styled(Typography)({
    color: 'white',
    fontWeight: '900',
    justifyContent: 'center',
    marginBottom: '10px',
    fontSize: '3rem',
    // lineHeight:"36px",
    fontFamily: '"Tiempos Headline", serif',
    paddingTop:"10px",
    opacity:"0.7"
  });
  const Desc = styled(Typography)({
    width:"50%",
    color:"white",
    marginBottom: '10px',
    fontSize: '1.5rem',
    lineHeight:"36px",
    fontFamily: 'Archivo Narrow',
    opacity:"0.7"
    
  });
  const styledButton = {
   border:'1px solid white', 
   marginTop: '10px',
   color:"white",
   fontSize:"1rem",
   fontWeight: '900',
   lineHeight:"17px",
   textDecoration:"none",
   textTransform:"uppercase",
   padding: "16px 20px",
   backgroundColor:"transparent",
   outline:"0px",
   transition: "all 0.3s ease 0s",
   opacity:"0.5",
   cursor:"pointer",
   ":hover": {
    bgcolor: "#AF5",
    color: "white"
  }
   
  };

   
    
    
   
    
  
    
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
    
      <CardContent sx={{paddingLeft:"70px", margin:"0 auto"}} className=' slideBackground slideOne '>
        <Title>
            Services we offer
        </Title>
        <Header>
            Lets give you the value you earn at the right time
        </Header>
        <Desc variant="body1" color="text.secondary" className='navdesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat et illo
          veritatis sit repellendus doloribus, laborum hic ad aperiam soluta nobis pariatur
           ratione ullam? Doloremque perferendis officiis commodi tempore!
        </Desc>
        <Button
          variant="outline"
          style={styledButton}
         
        >
          Get a quote
        </Button>
      </CardContent>
      <CardContent sx={{paddingLeft:"70px"}} className='slideBackground slideTwo'>
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
        <Button
        style={styledButton}
          variant="outline"
         
         
        >
          View Resources
        </Button>
      </CardContent>
      <CardContent sx={{paddingLeft:"70px"}} className='slideBackground slideThree'>
        <Title>
            Our Clients stories
        </Title>
        <Header>
            Hear what ur clients has to say
        </Header>
        <Desc variant="body1" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat et illo
          veritatis sit repellendus doloribus, laborum hic ad aperiam soluta nobis pariatur
           ratione ullam? Doloremque perferendis officiis commodi tempore!
        </Desc>
        <Button
        style={styledButton}
          
         
        >
          Read More
        </Button>
      </CardContent>
      {/* Add more slides as needed */}
      
    </Slider>
  );
};

export default NavbarCarousal;
