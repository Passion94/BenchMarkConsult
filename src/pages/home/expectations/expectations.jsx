import { Box, Container,  List, ListItem, ListItemText, Typography, styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import "./expectations.css"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';







const WhatWrap = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  padding: "40px",

  [theme.breakpoints.down('xl')]: {
    marginLeft: "20px",
  },

  [theme.breakpoints.down('lg')]: {
    marginLeft: "40px",
  },

  [theme.breakpoints.down('md')]: {
    marginLeft: "30px",
    padding: "40px",
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: "0px",
    padding: "10px",
  },

  [theme.breakpoints.down('xs')]: {
    marginLeft: "0px",
    padding: "0px",
  },
}));

  




const Title = styled(Typography)(({ theme }) => ({
  fontWeight: '900',
  marginBottom: '30px',
  fontSize: '1.5em', // You can use '1.5rem' for better responsiveness across different devices
  color: 'rgb(8, 16, 103)',
  paddingLeft: "40px",

  [theme.breakpoints.down('xl')]: {
    fontSize: '1.4em',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '1.3em',
    paddingLeft: "40px",
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1em',
    paddingLeft: "40px",
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1em',
  },
}));

  


const Header = styled(Typography)(({ theme }) => ({
  color: 'rgb(8, 16, 103)',
  fontWeight: '900',
  marginBottom: '30px',
  fontSize: '3em',
  paddingTop: '10px',
  lineHeight: '26px',
  fontFamily: '"Tiempos Headline", serif',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textTransform: 'uppercase',
  lineHeight: '46px',

  [theme.breakpoints.down('xl')]: {
    fontSize: '2.5em',
    lineHeight: '36px',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '2.2em',
    lineHeight: '32px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.8em',
    lineHeight: '28px',
    paddingLeft:"20px",
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6em',
    lineHeight: '24px',
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1.4em',
    lineHeight: '20px',
  },
}));

  


const Desc = styled(Typography)(({ theme, showFullText }) => ({
  color: 'rgb(8, 16, 103)',
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
  WebkitLineClamp: showFullText ? 'none' : 3, // Show all lines if showFullText is true
  WebkitBoxOrient: 'vertical',

  [theme.breakpoints.down('xl')]: {
    fontSize: '1.4em',
    lineHeight: '32px',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '1.3em',
    lineHeight: '28px',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1.2em',
    lineHeight: '24px',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1.1em',
    lineHeight: '20px',

  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1em',
    lineHeight: '18px',
  },
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
      <Title sx={{opacity:".5", display:"flex", paddingLeft:{sm:"10px", md:"100px",lg:"100px"}}}>Expertise, Solutions, Guidance.</Title>
      <Box sx={{display:"flex", justifyContent:"center", padding:{xs:"0px 100px 0px 0px", sm:"0px 100px 0px 100px", md:"0px 100px 0px 200px", lg:"0px 100px 0px 200px"}, marginLeft:{sm:"0px", md:"0px",lg:"100px"}}}>
      <Container >
        {items.map((item) => (
          <Box key={item.id} sx={{position:"relative"}}>
            <span style={{display:"flex"}}>
            <ExpandCircleDownIcon
             sx={{padding:" 0 0px 0 0", color:"rgb(75,75,221)"}}/><Title >{item.title}</Title>
            </span>
           
            <Desc
              showFullText={showFullText}>{item.description}</Desc>
              <KeyboardArrowDownOutlinedIcon
              sx={{position:"absolute", right:"-90px", bottom:"0px", display:{xs:"block",sm:"block", md:"block"},
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
