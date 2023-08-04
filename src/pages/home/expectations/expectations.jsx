import { Box, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import "./expectations.css"






const Expectations = () => {
  const items = [
    {
      id: 1,
      title: 'Honesty and respect for your opinion',
      description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
    },
    // Add other items as needed
  ];

  return (
    <div style={{ marginTop: "100px" }}>
      <div className='header ' >What to expect from us</div>
      <div className='subHeader'>Expertise, Solutions, Guidance.</div>
      <div className='listContainer'>
      <Container className='centeredUl' >
        {items.map((item) => (
          <Box key={item.id} className='itemContainer'>
            <Typography className='title'>{item.title}</Typography>
            <Typography className='desc'>{item.description}</Typography>
            
          </Box>
        ))}
      </Container >
      </div>
    </div>
  );
};

export default Expectations;
