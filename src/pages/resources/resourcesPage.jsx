import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, styled } from '@mui/material';

const Section = styled('div')({
  padding: ({ theme }) => theme.spacing(4),
});

const ResourceCard = styled(Card)({
  padding: ({ theme }) => theme.spacing(2),
  borderRadius: ({ theme }) => theme.spacing(1),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const resources = [
  {
    title: 'Blog Posts',
    description: 'Read our latest blog posts on software development and technology trends.',
    link: 'https://www.example.com/blog',
  },
  {
    title: 'Ebooks',
    description: 'Download our free ebooks on various software development topics.',
    link: 'https://www.example.com/ebooks',
  },
  {
    title: 'Webinars',
    description: 'Watch our webinars to learn from industry experts on software solutions.',
    link: 'https://www.example.com/webinars',
  },
  {
    title: 'Case Studies',
    description: 'Explore our success stories and how we helped clients achieve their goals.',
    link: 'https://www.example.com/case-studies',
  },
  // Add more resources here
];

const ResourcesPage = () => {
  return (
    <Section>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Resources
        </Typography>
        <Grid container spacing={3}>
          {resources.map((resource, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <ResourceCard>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {resource.title}
                  </Typography>
                  <Typography variant="body1">{resource.description}</Typography>
                </CardContent>
                <Button variant="contained" color="primary" href={resource.link}>
                  Learn More
                </Button>
              </ResourceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ResourcesPage;
