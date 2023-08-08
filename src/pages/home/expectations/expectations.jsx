import { Box, Container,  List, ListItem, ListItemText, Typography, keyframes, styled } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import "./expectations.css"
import CircleIcon from '@mui/icons-material/Circle';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';





const items = [
  {
    id: 1,
    title: 'Honesty and respect for your opinion',
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
  },

  {
    id: 2,
    title: 'Honesty and respect for your opinion',
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
  },
  {
    id: 3,
    title: 'Honesty and respect for your opinion',
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
  },
  {
    id: 4,
    title: 'Honesty and respect for your opinion',
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
  },
  {
    id: 5,
    title: 'Honesty and respect for your opinion',
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
  },
  {
    id: 6,
    title: 'Honesty and respect for your opinion',
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
  },
];







const ArrowButton = styled(KeyboardArrowDownOutlinedIcon)(({theme, arrowDirection }) => ({
  transform: arrowDirection ? 'rotate(180deg)' : 'rotate(0deg)',
  position: 'absolute',
  right: '25%', // Adjust the right position as needed
  bottom: '-3px',
  display: 'block', // Display is already defined based on breakpoints
  border: '1px solid rgb(75, 75, 221)',
  height: '15px',
  width: '30px',
  borderRadius: '15px',
  color: 'rgb(75, 75, 221)',
  cursor: 'pointer',
  // transition: 'transform 0.3s ease',
  [theme.breakpoints.down('lg')]: {
    right: '5%',
  },
  [theme.breakpoints.down('md')]: {
    right: '0%',
  },
  [theme.breakpoints.down('sm')]: {
    right: '2%',
  },
  [theme.breakpoints.down('xs')]: {
    right: '3%',
  },
}));





const WhatWrap = styled(Box)(({ theme }) => ({
  marginTop: "100px",
  padding: " 42px 5.9%",

 
  [theme.breakpoints.down('xl')]: {
    padding: " 42px 30px 42px 0%" ,
  },

  [theme.breakpoints.down('lg')]: {
    padding: " 42px 30px 42px 0%px" ,
  },

  [theme.breakpoints.down('md')]: {
    padding: " 42px 10px 42px 0px" ,
    // padding: "0px",
    
  },

  [theme.breakpoints.down('sm')]: {
    marginLeft: "-30px",
    padding: "0px",
    paddingRight:"0px",
  },

  [theme.breakpoints.down('xs')]: {
    marginLeft: "0px",
    padding: "0px",
  },
  [theme.breakpoints.down('3201')]: {
    paddingLeft: " 6%" ,
  },
  [theme.breakpoints.down('1921')]: {
    paddingLeft: " 5%" ,
  },
  [theme.breakpoints.down('1367')]: {
    paddingLeft: " 4.3%" ,
  },
  [theme.breakpoints.down('1281')]: {
    paddingLeft: " 4%" ,
  },
  [theme.breakpoints.down('1025')]: {
    paddingLeft: " 1%" ,
  },
  [theme.breakpoints.down('913')]: {
    paddingLeft: " 4%" ,
  },
  [theme.breakpoints.down('821')]: {
    paddingLeft: " 0px" ,
  },
  [theme.breakpoints.down('769')]: {
    paddingLeft:"22px",
    
  },
  [theme.breakpoints.down('361')]: {
    paddingLeft:"25px",
    
  },
}));

  
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  marginBottom: '10px',
  fontSize: '1em', // You can use '1.5rem' for better responsiveness across different devices
  color: 'rgb(75, 75, 221)',
 

  [theme.breakpoints.down('xl')]: {
    fontSize: '1em',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '1em',
    
    
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1em',
    // composes: 'custom-header-md'
    
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    lineHeight:"36px",
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1em',
  },
 
}));



const TitleOne = styled(Typography)(({ theme }) => ({
  fontWeight: '600',
  marginBottom: '20px',
  fontSize: '1em', // You can use '1.5rem' for better responsiveness across different devices
  color: 'rgb(75, 75, 221)',
  paddingLeft: "20%",
  opacity: ".5",


  [theme.breakpoints.down('xl')]: {
    fontSize: '1em',
  },

  [theme.breakpoints.down('lg')]: {
    fontSize: '1em',
    paddingLeft: "40px",
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1em',
    paddingLeft: "40px",
    paddingLeft: "20%",
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    paddingLeft: "7%",
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
  paddingRight:"60%",
  fontStyle: 'normal',
  
  lineHeight: '46px',

  [theme.breakpoints.down('xl')]: {
    fontSize: '2em',
    lineHeight: '36px',
  },

  [theme.breakpoints.down('lg')]: {
    
    lineHeight: '32px',
    padding:"0px 0px 0px 10px",
    paddingRight:"45%",
    paddingLeft:"3.3%",
  },

  [theme.breakpoints.down('md')]: {
   
    lineHeight: '28px',
    paddingLeft:"20px",
    paddingRight:"10%",
  },

  [theme.breakpoints.down('sm')]: {
    
    lineHeight: '36px',
    paddingRight:"10px",
    paddingRight:"20%",
    paddingRight:"5%",
  },

  [theme.breakpoints.down('xs')]: {
    
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
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: showFullText ? 'none' : 2, // Show all lines if showFullText is true
  WebkitBoxOrient: 'vertical',
 paddingLeft:"38px",

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
    padding:" 0 35px 0 33px",


  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1em',
    lineHeight: '18px',
  },
}));

const Oxbor = styled(Box)(({ theme }) => ({
  padding: "0 335px",
  [theme.breakpoints.down('xl')]: {
    padding: "0 335px", // Keep the same padding for xl screens
  },
  [theme.breakpoints.down('lg')]: {
    padding: "0px 100px 0px 170px", // Adjust padding for lg screens
  },
  [theme.breakpoints.down('md')]: {
    padding: "0px 40px 0px 30px", // Adjust padding for md screens
  },
  [theme.breakpoints.down('sm')]: {
    padding: "0px 0px", // Adjust padding for sm screens
  },
  [theme.breakpoints.down('xs')]: {
    padding: "0px 10px", // Adjust padding for xs screens
  },
}));





 


const Expectations = () => {
    
  // const [showFullText, setShowFullText] = useState(false);
  // const [arrowDirection, setArrowDirection] = useState(false);
  const [openStates, setOpenStates] = useState(new Array(items.length).fill(false));
  const toggleShowFullText = (index) => {
    setOpenStates((prevStates) =>
      prevStates.map((prevState, i) => (i === index ? !prevState : false))
    );
  };

  // const toggleShowFullText = () => {
  //   setShowFullText((prev) => !prev);
  //   setArrowDirection((prev) => !prev);
  // };
  
 
  return (
    <Box>
    <Container
    maxWidth='xl'
    >
    <WhatWrap className='whatWarp'>
   
      <Header >What can you expect from <span style={{color:"rgb(75,75,221)"}}>cooperation</span> with Prehood?</Header>
      <TitleOne>Expertise, Solutions, Guidance.</TitleOne>
      <Box >
      <Container>
              {items.map((item, index) => (
                <Oxbor key={item.id} sx={{ position: "relative" }}>
                  <span style={{ display: "flex", gap: "3%" }}>
                    <CircleIcon
                      sx={{
                        padding: "0 0px 0 0",
                        height: "12px",
                        width: "12px",
                        color: "rgb(75,75,221)",
                        border: "5px solid white",
                        borderRadius: "30px",
                      }}
                    />
             <Title >{item.title}</Title>
            </span>
            <Desc showFullText={openStates[index]}>{item.description}</Desc>
                  <ArrowButton
                    arrowDirection={openStates[index]}
                    onClick={() => toggleShowFullText(index)}
                  />
          </Oxbor>
        ))}
      </Container >
      </Box>
      
    </WhatWrap>
    </Container>
    </Box>
  );
};

export default Expectations;
