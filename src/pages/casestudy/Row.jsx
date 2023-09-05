import React from 'react';
import './Row.css'; // Include your Row CSS file
import { Container, Box, Button, Typography } from '@mui/material';

function Row({ text, buttonText, imageSrc, imageText, backgroundColor, isSticky, top }) {
  const rowClassName = `sticky-row ${isSticky ? 'sticky' : ''}`;

  return (
    <Container className={rowClassName} style={{ backgroundColor, top: `${top}px` }}>
      <Box display="flex" alignItems="center">
        <div className="left-content">
          <Typography variant="h6">{text}</Typography>
          <Button variant="contained" >
            {buttonText}
          </Button>
        </div>
        <div className="right-content">
          <img src={imageSrc} alt={imageText} />
          <Typography variant="caption">
            {imageText}
          </Typography>
        </div>
      </Box>
    </Container>
  );
}

export default Row;
