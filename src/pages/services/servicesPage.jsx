import React from 'react';
import { Container, Grid, Typography, styled } from '@mui/material';

const Section = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
}));

const ServiceCard = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(1),
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const ServicesPage = () => {
  const services = [
    {
      title: 'Software Development',
      description: 'We provide custom software development solutions for your business needs.',
    },
    {
      title: 'Data Analytics',
      description: 'Unlock the potential of your data with our advanced analytics services.',
    },
    {
      title: 'Cloud Solutions',
      description: 'Move your business to the cloud and harness the power of scalability.',
    },
    // Add more services here
  ];

  return (
    <Section>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <ServiceCard>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
                {/* Add CTA buttons or links to learn more about each service */}
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ServicesPage;
