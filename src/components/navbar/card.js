import React from 'react';
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import styled from '@emotion/styled';
// import './card.css';

const Title = styled(Typography)({
  color: 'teal',
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
  fontSize: '30px',
  fontFamily: 'Barlow Condensed'
});

const Card = () => {
  return (
    <Box >
      <CardMedia
        sx={{ borderRadius: '6px' }}
        component="img"
        alt="Ankara"
        height="100%"
        // image="https://www.shinesheets.com/wp-content/uploads/2019/07/graceous-woman-in-a-high-class-lady-room.jpg"
      />
      <CardContent>
        <Title gutterBottom variant="h5" align="center" component="div">
          Lorem ipsum generator.
        </Title>
        <Typography variant="body1" color="text.secondary" className="bodytypography">
          Ankara's are native made cloth's unique to the African culture, shared with the world at large.
          You look more original in Ankara natives, share the love today by getting one for a loved one.
        </Typography>
        <Button
          variant="outline"
          sx={{ border: '1px solid teal', marginTop: '10px', color: 'teal', fontSize: '10px' }}
        >
          Read more
        </Button>
      </CardContent>
    </Box>
  );
};

export default Card;
