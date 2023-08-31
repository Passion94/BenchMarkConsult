import React from 'react';
import { Container, Grid, Typography, styled } from '@mui/material';
import { Animet } from '../../components/animet/animet';
import { Work } from '@mui/icons-material';
import { WorkProcess } from './workProcess';

const SectionOne = styled('div')(({ theme }) => ({
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
    <div>

        
    <SectionOne>
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
     
    </SectionOne>
    <div className="project-page">
        <h1>IT Consulting Project Page</h1>
        <p>This project is a web app that provides IT consulting services to businesses of all sizes. The app allows businesses to post their IT needs, and consultants can then submit proposals to provide those services. The app also includes a messaging system so that businesses and consultants can communicate directly.</p>
        <ul>
          <li>Post IT needs: Businesses can post their IT needs, including the type of IT services they need, their budget, and their timeline.</li>
          <li>Submit proposals: Consultants can submit proposals to provide the IT services that businesses need.</li>
          <li>Messaging system: Businesses and consultants can communicate directly through the app's messaging system.</li>
          <li>Payment processing: The app can integrate with payment processors to make it easy for businesses to pay for IT consulting services.</li>
        </ul>
        <p>The benefits of using this app include:</p>
        <ul>
          <li>Save time and money: The app can save businesses time and money by streamlining the IT consulting process.</li>
          <li>Get the best possible service: Businesses can be confident that they are getting the best possible service by comparing proposals from multiple consultants.</li>
          <li>Build relationships: The app can help businesses build relationships with trusted consultants who can provide them with ongoing IT consulting services.</li>
        </ul>
        <p>To get started, sign up for a free trial today!</p>
        <div className="cta">
          <a href="/signup">Sign Up for Free Trial</a>
        </div>
        </div>

    {/* <WorkProcess/> */}
    </div>
  );
};

export default ServicesPage;






