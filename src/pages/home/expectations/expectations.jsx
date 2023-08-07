import { Box, Container,  List, ListItem, ListItemText, Typography, keyframes, styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import "./expectations.css"
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';






const ArrowButton = styled(KeyboardArrowDownOutlinedIcon)(({ arrowDirection }) => ({
  transform: arrowDirection ? 'rotate(180deg)' : 'rotate(0deg)',
  position: 'absolute',
  right: '-40px',
  bottom: '-30px',
  display: { xs: 'block', sm: 'block', md: 'block' },
  border: '1px solid rgb(75, 75, 221)',
  height: '20px',
  width: '20px',
  borderRadius: '15px',
  background: 'rgb(46, 234, 250)',
  color: 'rgb(75, 75, 221)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
}));




const WhatWrap = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  padding: "42px",

  [theme.breakpoints.down('xl')]: {
    marginLeft: "20px",
  },

  [theme.breakpoints.down('lg')]: {
    marginLeft: "40px",
  },

  [theme.breakpoints.down('md')]: {
    marginLeft: "10px",
    padding: "0px",
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: "0px",
    padding: "0px",
    paddingRight:"20px",
  },

  [theme.breakpoints.down('xs')]: {
    marginLeft: "0px",
    padding: "0px",
  },
}));

  




const Title = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  marginBottom: '10px',
  fontSize: '1em', // You can use '1.5rem' for better responsiveness across different devices
  color: 'rgb(75,75,221)',
  paddingLeft: "40px",

  [theme.breakpoints.down('xl')]: {
    fontSize: '1.2em',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '1em',
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
  fontSize: '2em',
  paddingTop: '10px',
  lineHeight: '26px',
  fontFamily: '"Tiempos Headline", serif',
  
  fontStyle: 'normal',
  
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

  

const fadeIn = keyframes`
  0% {
    opacity: 0;
    WebkitLineClamp: none;
  }
  100% {
    opacity: 1;
    WebkitLineClamp: 2; /* Adjust as needed */
  }
`;

const Desc = styled(Typography)(({ theme, showFullText }) => ({
  animation: `${fadeIn} 01s ease-in-out forwards`,
  maxHeight: showFullText ? '1000px' : '48px', 
  transition: 'max-height 1s ease-in-out',
  color: 'rgb(8, 16, 103)',
  fontWeight: '400',
  marginBottom: '30px',
  fontSize: '.8em',
  lineHeight: '24px',
  fontFamily: 'Archivo Narrow',
  paddingLeft: '65px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: showFullText ? 'none' : 2, // Show all lines if showFullText is true
  WebkitBoxOrient: 'vertical',
 

  [theme.breakpoints.down('xl')]: {
    fontSize: '1.1em',
    lineHeight: '24px',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '1em',
    lineHeight: '24px',
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
  const [arrowDirection, setArrowDirection] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText((prev) => !prev);
    setArrowDirection((prev) => !prev);
  };
  
  const items = [
    {
      id: 1,
      title: 'Honesty and respect for your opinion',
      description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
    },
    // {
    //     id: 2,
    //     title: 'Honesty and respect for your opinion',
    //     description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
    //   },
    //   {
    //     id: 3,
    //     title: 'Honesty and respect for your opinion',
    //     description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
    //   },
    //   {
    //     id: 4,
    //     title: 'Honesty and respect for your opinion',
    //     description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
    //   },
    //   {
    //     id: 5,
    //     title: 'Honesty and respect for your opinion',
    //     description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are.',
    //   },
    // Add other items as needed
  ];

  return (
    <Box>
    <Container
    maxWidth='xl'
    >
    <WhatWrap >
   
      <Header >What can you expect from <br/><span style={{color:"rgb(75,75,221)"}}>cooperation</span> with Solvd?</Header>
      <Title sx={{opacity:".5", fontWeight:"normal" ,display:"flex", paddingLeft:{sm:"40px", md:"100px",lg:"100px"}}}>Expertise, Solutions, Guidance.</Title>
      <Box sx={{display:"flex", justifyContent:"center", padding:{xs:"0px 30px 0px 0px", sm:"0px 100px 0px 100px", md:"0px 100px 0px 200px", lg:"0px 100px 0px 200px"}, marginLeft:{sm:"0px", md:"0px",lg:"100px"}}}>
      <Container >
        {items.map((item) => (
          <Box key={item.id} sx={{position:"relative"}}>
            <span style={{display:"flex"}}>
            <ExpandCircleDownIcon
             sx={{padding:" 0 0px 0 0", color:"rgb(75,75,221)"}}/><Title >{item.title}</Title>
            </span>
           
            <Desc
              showFullText={showFullText}>{item.description}</Desc>
              <ArrowButton
                arrowDirection={arrowDirection}
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
