import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Grid,
  Container,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';



const SecondAvatar = styled(Avatar)(({ theme }) => ({
  width: 60,
  height: 60,
  cursor: 'pointer',
}));
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://media.istockphoto.com/id/1207862195/photo/portrait-of-young-cheerful-african-american-woman.jpg?s=612x612&w=0&k=20&c=86-fDrR5FO1WQxTq8etA5VXV06A48DGM-wBErKc3lGM=',
  },
  {
    id: 2,
    name: 'Jane Smith',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://images.peopleimages.com/picture/202207/2468209-happy-confident-and-smiling-business-woman-standing-with-arms-crossed-outside-at-work-alone.-portrait-of-the-face-of-one-cheerful-joyful-and-proud-female-corporate-professional-with-arms-folded--fit_400_400.jpg',
  },
  {
    id: 3,
    name: 'John Doe',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://storage.googleapis.com/pai-images/be361ace02d14541ab68f464719a248a.jpeg',
  },
  {
    id: 4,
    name: 'Jane Smith',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://st5.depositphotos.com/62628780/65755/i/1600/depositphotos_657556100-stock-photo-portrait-career-woman-arms-crossed.jpg',
  },
  {
    id: 5,
    name: 'John Doe',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/8/2020/01/17161459/Best-hairstyles-for-men-with-round-faces-two-block.jpg',
  },
  {
    id: 6,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://media.istockphoto.com/id/1207862195/photo/portrait-of-young-cheerful-african-american-woman.jpg?s=612x612&w=0&k=20&c=86-fDrR5FO1WQxTq8etA5VXV06A48DGM-wBErKc3lGM=',
  },
  {
    id: 7,
    name: 'Jane Smith',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://images.peopleimages.com/picture/202207/2468209-happy-confident-and-smiling-business-woman-standing-with-arms-crossed-outside-at-work-alone.-portrait-of-the-face-of-one-cheerful-joyful-and-proud-female-corporate-professional-with-arms-folded--fit_400_400.jpg',
  },
  {
    id: 8,
    name: 'John Doe',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://storage.googleapis.com/pai-images/be361ace02d14541ab68f464719a248a.jpeg',
  },
  {
    id: 9,
    name: 'Jane Smith',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://st5.depositphotos.com/62628780/65755/i/1600/depositphotos_657556100-stock-photo-portrait-career-woman-arms-crossed.jpg',
  },
  {
    id: 10,
    name: 'John Doe',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/8/2020/01/17161459/Best-hairstyles-for-men-with-round-faces-two-block.jpg',
  },
  {
    id: 11,
    name: 'John Doe',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://media.istockphoto.com/id/1207862195/photo/portrait-of-young-cheerful-african-american-woman.jpg?s=612x612&w=0&k=20&c=86-fDrR5FO1WQxTq8etA5VXV06A48DGM-wBErKc3lGM=',
  },
  {
    id: 12,
    name: 'Jane Smith',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://images.peopleimages.com/picture/202207/2468209-happy-confident-and-smiling-business-woman-standing-with-arms-crossed-outside-at-work-alone.-portrait-of-the-face-of-one-cheerful-joyful-and-proud-female-corporate-professional-with-arms-folded--fit_400_400.jpg',
  },
  {
    id: 13,
    name: 'John Doe',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://storage.googleapis.com/pai-images/be361ace02d14541ab68f464719a248a.jpeg',
  },
  {
    id: 14,
    name: 'Jane Smith',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://st5.depositphotos.com/62628780/65755/i/1600/depositphotos_657556100-stock-photo-portrait-career-woman-arms-crossed.jpg',
  },
  {
    id: 15,
    name: 'John Doe',
    description:
      'Sed cursus auctor elit, eu gravida odio ullamcorper quis. Nulla facilisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget aliquet justo.',
    image: 'https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/8/2020/01/17161459/Best-hairstyles-for-men-with-round-faces-two-block.jpg',
  },
  
  // Add more testimonials here
];


const CustomerTestimonySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleAvatarClick = (index) => {
    setActiveIndex(index - 1); // Subtract 1 to match the array index
  };

  // Slice the testimonials array to include only the first 10 testimonials
  const displayedTestimonials = testimonials.slice(0, 10);

  return (
    <Container maxWidth="md" sx={{height:"700px", marginTop:"50px"}}>
      {/* Display the active testimonial */}
      <Typography variant='h1' align='center'> Hear what our customer has to say</Typography>
      <Grid container justifyContent="center" alignItems="center" sx={{height:"280px"}}>
        <Grid item xs={12} sm={4} className="testimonial-avatar">
          <Avatar
            alt={testimonials[activeIndex].name}
            src={testimonials[activeIndex].image}
            sx={{
              width: 120,
              height: 120,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={8} className="testimonial-details">
          <Typography variant="h2">{testimonials[activeIndex].name}</Typography>
          <Typography variant="body1">{testimonials[activeIndex].description}</Typography>
        </Grid>
      </Grid>

      {/* Navigation buttons */}
      <Box mt={2} display="flex" justifyContent="center">
        <IconButton onClick={prevTestimonial} className="nav-button">
          <ArrowBack />
        </IconButton>
        <IconButton onClick={nextTestimonial} className="nav-button">
          <ArrowForward />
        </IconButton>
      </Box>

      {/* Thumbnails for other testimonials */}
      <Grid container justifyContent="center" mt={2}>
        
          {displayedTestimonials.map((testimonial, index) => (
            <Grid item key={testimonial.id} className={`thumbnail ${testimonial.id === activeIndex + 1 ? 'active' : ''}`}>
              <SecondAvatar
                alt={testimonial.name}
                src={testimonial.image}
                onClick={() => handleAvatarClick(testimonial.id)}
              />
              
            </Grid>
          ))}
       <Link to="" className="link"><Typography variant='body2'>View all testimonials</Typography></Link>
      </Grid>
    </Container>
  );
};

export default CustomerTestimonySection;
