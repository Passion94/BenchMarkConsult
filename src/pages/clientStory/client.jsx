import React from 'react';
import { Box, Typography, styled } from '@mui/material';

// Define the client stories data
const clientStoriesData = [
  {
    clientName: 'John Doe',
    testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elit et arcu cursus mollis. Quisque non dapibus lorem, eu tristique purus.',
    company: 'ABC Inc.',
  },
  {
    clientName: 'Jane Smith',
    testimonial: 'Vestibulum id fermentum turpis. Nam ac justo ut erat blandit venenatis. Etiam bibendum velit ut mi ultrices, vel faucibus mauris convallis.',
    company: 'XYZ Corp.',
  },
  // Add more client stories as needed
];

// Styled components
const TestimonialWrapper = styled(Box)({
  marginTop: '30px',
  marginBottom: '30px',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
});

const Client = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom>
        Client Stories
      </Typography>
      {clientStoriesData.map((story, index) => (
        <TestimonialWrapper key={index}>
          <Typography variant="h4" gutterBottom>
            {story.clientName}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {story.testimonial}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {story.company}
          </Typography>
        </TestimonialWrapper>
      ))}
    </Box>
  );
};

export default Client;
