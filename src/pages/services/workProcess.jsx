import { Box, Container, Grid, Typography, styled } from '@mui/material';
import React from 'react'















export const WorkProcess = () => {

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
        {
            title: 'Cloud Solutions',
            description: 'Move your business to the cloud and harness the power of scalability.',
          },
          {
            title: 'Cloud Solutions',
            description: 'Move your business to the cloud and harness the power of scalability.',
          },
        
        // Add more services here
      ];
    


  return (
    <div>
         <Box>
      <Box>
        
        <Box sx={{display:"flex"}}>
          {services.map((service, index) => (
            <Box key={index}  >
              <Box >
                <Typography >
                  {service.title}
                </Typography>
                <Typography >{service.description}</Typography>
                {/* Add CTA buttons or links to learn more about each service */}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
     
    </Box>
    </div>
  )
}
