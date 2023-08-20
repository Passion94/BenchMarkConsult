import { Container } from '@mui/material';
import React, { useState } from 'react';

const Slide = ({ imageSrc, text }) => (
  <div className="slide">
    <img src={imageSrc} alt="Slide" style={{width:"460px", height:"345px"}}/>
    <p>{text}</p>
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
    <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <Slide
        imageSrc={slides[currentSlideIndex].imageSrc}
        text={slides[currentSlideIndex].text}
      />
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

const CaseCard= () => {
  const slides = [
    {
      imageSrc: 'https://www.wondriumdaily.com/wp-content/uploads/2022/11/Probability-In-Quantum-Mechanics_QBS_Featured.jpg',
      text: 'Slide 1 Text',
    },
    {
      imageSrc: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/FGIPIBIUY5J33BOE7NP5KEIQYM.jpg',
      text: 'Slide 2 Text',
    },
    {
      imageSrc: 'https://hips.hearstapps.com/hmg-prod/images/mid-adult-woman-drinking-water-at-park-during-sunny-royalty-free-image-1646152435.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*',
      text: 'Slide 3 Text',
    },
  ];

  return (
    <Container className="app">
     
      <ImageTextSlider slides={slides} />
    </Container>
  );
};

export default CaseCard;
