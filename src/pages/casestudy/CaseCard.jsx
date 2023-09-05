import { Box, Button, Container, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import "./case.css";
import { KeyboardArrowRight as KeyboardArrowRightIcon, KeyboardArrowLeft as KeyboardArrowLeftIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export const slides = [
  {id:1,
    imageSrc: 'https://www.wondriumdaily.com/wp-content/uploads/2022/11/Probability-In-Quantum-Mechanics_QBS_Featured.jpg',
    text: 'Edtify',
    keyword:"SAAS, Education",
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  { id:2,
    imageSrc: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/FGIPIBIUY5J33BOE7NP5KEIQYM.jpg',
    text: 'Afridemics',
    keyword:"SAAS, Utility",
    desc:"Second Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  { id:3,
    imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/mid-adult-woman-drinking-water-at-park-during-sunny-royalty-free-image-1646152435.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*',
    text: 'Ait Ghana',
    keyword:"SAAS, Education",
    desc:"Third Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];


const Header = styled(Typography)(({ theme }) => ({
  
    display:"flex",

    [theme.breakpoints.down('1025')]: {
      justifyContent:"center",
      
  
      
    },
    [theme.breakpoints.down('415')]: {
      
      fontSize:".8em",
  
      
    },
   
  }));
  const TitleOne = styled(Typography)(({ theme }) => ({
    textTransform:"initial",
    color: '#9F9F9F',
    
    
    [theme.breakpoints.down('1025')]: {
      display:"flex",
      justifyContent:"center",
      
    },
  }))



  const ArrowiconContainer = styled(Typography)(({ theme }) => ({
    
    display:"flex",
     gap:"485px", 
     position:"absolute",
     alignItems:"center",
      top:'170px',
       left:"39px",
        cursor:"pointer",
        [theme.breakpoints.down('602')]: {
      
          gap:"405px", 
          position:"absolute",
          top:'100px',
            left:"-50px",
        },
        [theme.breakpoints.down('541')]: {
      
          gap:"405px", 
          position:"absolute",
          top:'100px',
            left:"-50px",
        },
        [theme.breakpoints.down('481')]: {
      
          gap:"230px", 
          position:"absolute",
          top:'270px',
            left:"37px",
        },
        [theme.breakpoints.down('394')]: {
      
          gap:"230px", 
          position:"absolute",
          top:'250px',
            left:"20px",
        },
  }));




const Slide = ({ imageSrc, text, keyword, desc }) => (
  <div className="slide">
    <img src={imageSrc} alt="Slide" className='caseslideimg'/>
    <Header variant='h2'>{text}</Header>
    <TitleOne variant='body1'>{keyword}</TitleOne>
    
    
  </div>
);

const ImageTextSlider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex + 1) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="slider" >
      
        {/* <ArrowiconContainer >
        <KeyboardArrowLeftIcon onClick={prevSlide} sx={{borderRadius:"30px",  border:"1px solid green"}}/>
      <KeyboardArrowRightIcon onClick={nextSlide} sx={{borderRadius:"30px",  border:"1px solid green",  }}/>
        </ArrowiconContainer > */}
          
      <Slide
        imageSrc={slides[currentSlideIndex].imageSrc}
        text={slides[currentSlideIndex].text}
        keyword={slides[currentSlideIndex].keyword}
        desc={slides[currentSlideIndex].desc}

      />
{/* <Link to="/casestudy"><Button variant='contained'>Explore all our case study</Button></Link> */}
    </div>
  );
};

const CaseCard= () => {


  return (
    <Container className="" >
     
      <ImageTextSlider slides={slides} />
    </Container>
  );
};

export default CaseCard;

