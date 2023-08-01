import React from 'react';
import { Container, Grid, Typography, styled } from '@mui/material';
import ProjectCard from './projectCard'; // Replace './ProjectCard' with the actual path to your ProjectCard component

const ProjectSection = styled('div')({
  padding: '40px 0',
});

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1',
    imageUrl: 'https://example.com/project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2',
    imageUrl: 'https://example.com/project2.jpg',
  },
  // Add more projects here
];

const ProjectPage = () => {
  return (
    <ProjectSection>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Our Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectSection>
  );
};

export default ProjectPage;
