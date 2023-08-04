import { Box, Container,  List, ListItem, ListItemText, Typography, styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import "./expectations.css"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';





const WhatWrap= styled(Box)(({ theme }) => ({
     marginTop: "100px",
     padding:"50px",

     [theme.breakpoints.down('xl')]: {
        
        marginLeft:"20px",
        
      },
  }));
  


const Title = styled(Typography)({
    fontWeight: '900',
   
    marginBottom: '30px',
    fontSize: '1eem',
    color:'rgb(8,16,103)',
    paddingLeft:"40px"
  });
  
  const Header = styled(Typography)(({ theme }) => ({
    color:'rgb(8,16,103)',
    fontWeight: '900',
   
    marginBottom: '30px',
    fontSize: '3em',
    paddingTop: '10px',
    lineHeight:"26px",
    fontFamily: '"Tiempos Headline", serif',
    fontWeight: "normal",
    fontStyle: "normal",
    textTransform:"uppercase",
    lineHeight: "46px",
    
   
  }));
  
  const Desc = styled(Typography)(({ theme, showFullText }) => ({
    color: 'rgb(8,16,103)',
    width: '100%',
    fontWeight: '400',
    marginBottom: '30px',
    fontSize: '1.5em',
    lineHeight: '36px',
    fontFamily: 'Archivo Narrow',
    paddingLeft: '65px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: showFullText ? 'none' : '3', // Show all lines if showFullText is true
    WebkitBoxOrient: 'vertical',
  }));
  




 


const Expectations = () => {
    
    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
      setShowFullText((prev) => !prev); // Toggle the showFullText state
    };
  
  const items = [
    {
      id: 1,
      title: 'Honesty and respect for your opinion',
      description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
    },
    {
        id: 2,
        title: 'Honesty and respect for your opinion',
        description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
      },
      {
        id: 3,
        title: 'Honesty and respect for your opinion',
        description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
      },
      {
        id: 4,
        title: 'Honesty and respect for your opinion',
        description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
      },
      {
        id: 5,
        title: 'Honesty and respect for your opinion',
        description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
      },
    // Add other items as needed
  ];

  return (
    <Box>
    <Container
    maxWidth='xl'
    >
    <WhatWrap >
   
      <Header >What to expect from us</Header>
      <Title sx={{opacity:".5", display:"flex", paddingLeft:"250px"}}>Expertise, Solutions, Guidance.</Title>
      <Box sx={{display:"flex", justifyContent:"center", padding:"0px 200px 0px 0px", marginLeft:"330px"}}>
      <Container  >
        {items.map((item) => (
          <Box key={item.id} sx={{position:"relative"}}>
            <span style={{display:"flex"}}>
            <ExpandCircleDownIcon
             sx={{padding:" 0 0px 0 0", color:"rgb(75,75,221)"}}/><Title className='title'>{item.title}</Title>
            </span>
           
            <Desc
              showFullText={showFullText}>{item.description}</Desc>
              <KeyboardArrowDownOutlinedIcon
              sx={{position:"absolute", right:"-90px", bottom:"0px", 
              border:"1px solid rgb(75,75,221)", borderRadius:"5px", background:"rgb(46,234,250)", fontWeight:"900", color:"rgb(75,75,221)"}}
              
              
              onClick={toggleShowFullText}
              />
          </Box>
        ))}
      </Container >
      </Box>
      
    </WhatWrap>
    </Container>
    </Box>
  );
};

export default Expectations;
