import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, styled } from '@mui/material';

const ProjectCardContainer = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  borderRadius: '8px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
});

const ProjectCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  flex: '1 1 auto',
});

const ProjectCardMedia = styled(CardMedia)({
  height: '200px',
  width: '100%',
  borderRadius: '8px 8px 0 0',
});

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <ProjectCardContainer>
      <ProjectCardMedia image={imageUrl} />
      <ProjectCardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </ProjectCardContent>
      <Button variant="contained" color="primary">
        View Details
      </Button>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
