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
    description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. ',
  },

  {
    id: 2,
    title: 'Not just skills, but talent',
    description: 'Senior developers make up 80% of the workforce at Solvd software engineering company. We also have an internal education project, Solvd.laba, that is a rich source of talented developers and an opportunity to improve testing and development skills',
  },
  {
    id: 3,
    title: "We're ready to be your perfect fit",
    description: "Since we're a growing multinational software development company, Solvd has over 780 English-speaking employees in 8 countries. This allows us to set up a dedicated team for you that matches your geographical and time zone requirements. ",
  },
  {
    id: 4,
    title: 'Our cost estimates and plans/timelines are made specifically, carefully and are fully disclosed',
    description: "Once we learn and understand your specific needs and goals, we analyze your project's details and requirements with a fine-toothed comb and then we prioritize the tasks that need to be implemented. This helps us give you a highly accurate cost estimate and timeline with full disclosure. That's our way of helping to eliminate any possible misunderstandings and unexpected charges. You can review our plans and estimates with full confidence.",
  },
 
];







const ArrowButton = styled(KeyboardArrowDownOutlinedIcon)(({theme, arrowDirection }) => ({
  transform: arrowDirection ? 'rotate(180deg)' : 'rotate(0deg)',
  position: 'absolute',
  right: '-4%', // Adjust the right position as needed
  bottom: '3px',
  display: 'block', // Display is already defined based on breakpoints
  border: '1px solid RGB(45, 45, 191)',
  height: '18px',
  minWidth: '30px',
  borderRadius: '15px',
  color: 'RGB(45, 45, 191)',
  cursor: 'pointer',
  '&:hover':{
    backgroundColor:"#D0FFFF"
  },
  // transition: 'transform 0.3s ease',
  [theme.breakpoints.down('1441')]: {
    right: '6.5%',
  },
 
  [theme.breakpoints.down('1367')]: {
    right: '23%',
  },
  [theme.breakpoints.down('1281')]: {
    right: '21%',
  },
  [theme.breakpoints.down('1081')]: {
    right: '18%',
    
  },
  [theme.breakpoints.down('1025')]: {
    right: '15%',
    
  },
  [theme.breakpoints.down('913')]: {
    right: '10%',
    
  },
  [theme.breakpoints.down('913')]: {
    right: '9%',
    
  },
  [theme.breakpoints.down('811')]: {
    right: '8.7%',
    
  },
  [theme.breakpoints.down('769')]: {
    right: '3%',
    
  },
  [theme.breakpoints.down('641')]: {
    right: '-1.5%',
    
  },
  [theme.breakpoints.down('541')]: {
    right: '-4.7%',
    
  },
  [theme.breakpoints.down('481')]: {
    right: '-5.3%',
    
  },
  [theme.breakpoints.down('415')]: {
    right: '-7%',
    
  },
  [theme.breakpoints.down('385')]: {
    right: '-8.7%',
    
  },
  [theme.breakpoints.down('376')]: {
    right: '-10%',
    
  },
}));





const WhatWrap = styled(Box)(({ theme }) => ({
  position: 'relative', // Ensure the container is relatively positioned
  marginTop: '50px',
  padding: '42px 2%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backgroundAttachment: 'local',
  overflow: 'hidden', // Hide overflow from the container


  

  '&::before': {
    content: '""',
    position: 'absolute',
    top: "160px",
    left: "-15px",
    width: '100%',
    height: '100%',
    backgroundImage: 'url("images/expectationbackground.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300px',
    backgroundPosition: '20px 10px',
    zIndex: -1, // Place the background behind the content
  },

  // ... (rest of the styling)

  [theme.breakpoints.down('3841')]: {
    padding: " 42px 5.8%" ,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "24px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  
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
  [theme.breakpoints.down('3840')]: {
    paddingLeft: " 12%" ,
  },
  [theme.breakpoints.down('3201')]: {
    paddingLeft: " 6%" ,
  },
  [theme.breakpoints.down('1921')]: {
    paddingLeft: " 5%" ,
  },
  [theme.breakpoints.down('1441')]: {
    
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "0px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  


  },
  [theme.breakpoints.down('1367')]: {
    paddingLeft: " 4.3%" ,


    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-12px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  },
  [theme.breakpoints.down('1281')]: {
    paddingLeft: " 3.3%" ,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-25px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  },
  [theme.breakpoints.down('1081')]: {
    paddingLeft: " 1.2%" ,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-55px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  },
  [theme.breakpoints.down('1025')]: {
    paddingLeft: " 3.3%" ,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-35px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  },
  [theme.breakpoints.down('913')]: {
    paddingLeft: " 3.3%" ,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-38px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  },
  [theme.breakpoints.down('821')]: {
    paddingLeft: " 1.1%" ,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-60px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    },
  },
  [theme.breakpoints.down('811')]: {
    paddingLeft: " 0.8%" ,
  },
  [theme.breakpoints.down('801')]: {
    paddingLeft: " 1.7%" ,


    '&::before': {
      content: '""',
      position: 'absolute',
      top: "160px",
      left: "-56px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    }

  },
  [theme.breakpoints.down('769')]: {
    paddingLeft:"14px",
    
  },
  [theme.breakpoints.down('641')]: {
    paddingLeft:"0px",
    marginLeft:'-3px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "-10px",
      left: "-156px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    }
    
  },
  [theme.breakpoints.down('602')]: {
    paddingLeft:"6px",
    marginLeft:'-3px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "-10px",
      left: "-160px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    }
    
  },
  [theme.breakpoints.down('541')]: {
    paddingLeft:"18px",
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "-50px",
      left: "-150px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    }
    
  },
  [theme.breakpoints.down('481')]: {
    paddingLeft:"9px",
    '&::before': {
      content: '""',
      position: 'absolute',
      top: "-50px",
      left: "-150px",
      width: '100%',
      height: '100%',
      backgroundImage: 'url("images/expectationbackground.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '300px',
      backgroundPosition: '20px 10px',
      zIndex: -1, // Place the background behind the content
    }
    
  },
  [theme.breakpoints.down('376')]: {
    paddingLeft:"5px",
    
  },
}));

  
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: '900',
  marginBottom: '10px',
  fontSize: '1.2em', // You can use '1.5rem' for better responsiveness across different devices
  color: '#403F3F',
  letterSpacing:"normal",
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
 





  
  [theme.breakpoints.down('415')]: {
    fontSize: '1.1em',
   
  },
  [theme.breakpoints.down('385')]: {
    fontSize: '1em',
   
  },
  
 
}));



const TitleOne = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  marginTop:"-13px",
  marginBottom: '65px',
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  fontSize: '.9em', // You can use '1.5rem' for better responsiveness across different devices
  color: '#9F9F9F',
  paddingLeft: "24%",
  // opacity: ".5",
  textTransform:"uppercase",


  

  [theme.breakpoints.down('xl')]: {
    
    paddingLeft: "160px",
  },

  [theme.breakpoints.down('md')]: {
   
    paddingLeft: "40px",
    paddingLeft: "20%",
  },

  [theme.breakpoints.down('sm')]: {
    
    paddingLeft: "7%",
  },

  [theme.breakpoints.down('xs')]: {
    fontSize: '1em',
  },
  [theme.breakpoints.down('3841')]: {
    padding: "0 180px", 
  },
  [theme.breakpoints.down('2257')]: {
    padding: "0 290px", 
  },
  [theme.breakpoints.down('1441')]: {
    padding: "0 250px", 
  },
  [theme.breakpoints.down('1025')]: {
    padding: "0 100px 0 270px", 
  },
  [theme.breakpoints.down('769')]: {
    padding: "0 50px 0 270px", 
  },
  [theme.breakpoints.down('641')]: {
    padding: "0 10px 0 70px", 
    fontSize:".8em",
  },
  [theme.breakpoints.down('385')]: {
    padding: "0 0px 0 70px", 
    fontSize:".8em",
  },
  [theme.breakpoints.down('376')]: {
    padding: "0 0px 0 60px", 
    fontSize:".8em",
  },
  [theme.breakpoints.down('361')]: {
    padding: "0 0px 0 40px", 
    fontSize:".8em",
  },
}));

  


const Header = styled(Typography)(({ theme }) => ({
  color: '#403F3F',
  fontWeight: '600',
  marginBottom: '30px',
  fontSize: '2.4em',
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  
  lineHeight: '56px',
  letterSpacing:"normal",
 
  // paddingRight:"0%",
  fontStyle: 'normal',
  
  

  [theme.breakpoints.down('3841')]: {
    paddingRight:"50%",
    
  },

  [theme.breakpoints.down('1921')]: {
    paddingLeft:"1%",
    
  },
  [theme.breakpoints.down('1441')]: {
    paddingLeft:"0%",
    
  },
  [theme.breakpoints.down('1081')]: {
    paddingRight:"40%",
    
  },
  [theme.breakpoints.down('1025')]: {
    paddingRight:"30%",
    
  },
  [theme.breakpoints.down('769')]: {
    paddingRight:"20%",
    
  },
  [theme.breakpoints.down('641')]: {
    paddingRight:"25%",
    fontSize:"1.5em",
    lineHeight:"30px",
  },
  [theme.breakpoints.down('415')]: {
    paddingRight:"15%",
    fontSize:"1.5em",
    lineHeight:"30px",
  },
  [theme.breakpoints.down('394')]: {
    paddingRight:"5%",
    fontSize:"1.5em",
    lineHeight:"30px",
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
  padding:"0px 0px 5px 0px",
  color: '#403F3F',
  fontWeight: '400',
  marginBottom: '30px',
  fontSize: '.93em',
  lineHeight: '24px',
  letterSpacing:"0px",
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
 
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: showFullText ? 'none' : 2, // Show all lines if showFullText is true
  WebkitBoxOrient: 'vertical',
  paddingLeft:"72px",

  

 


 
  [theme.breakpoints.down('1441')]: {
    
    paddingLeft:"64px",

    
  },
  [theme.breakpoints.down('641')]: {
    
    paddingLeft:"0px",
    
  },

  [theme.breakpoints.down('415')]: {
    fontSize: '.9em',
   
  },
}));

const Oxbor = styled(Box)(({ theme }) => ({
  padding: "0 335px",
 position:"absolute",
 top:"-150px",
 left:"47px",


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
  [theme.breakpoints.down('3841')]: {
    padding: "0 0px 0 480px", // Keep the same padding for xl screens
  },
  [theme.breakpoints.down('1921')]: {
    left:"55px",
  },
  [theme.breakpoints.down('1441')]: {
    padding: "0 120px 0 480px", 
    left:"140px",
  },
  [theme.breakpoints.down('1367')]: {
    top:"0px",
 left:"90px",
  padding: "0 310px",
  },
  [theme.breakpoints.down('1281')]: {
    top:"0px",
 left:"90px",
  padding: "0 270px",
  },
  [theme.breakpoints.down('1081')]: {
    padding:"0 200px",
    
  },
  [theme.breakpoints.down('1025')]: {
    padding:"0 165px",
    left:"130px",
  },
  [theme.breakpoints.down('913')]: {
    padding:"0 112px",
    left:"130px",
  },
  [theme.breakpoints.down('821')]: {
    padding:"0 95px",
    left:"90px",
  },
  [theme.breakpoints.down('801')]: {
    padding:"0 95px",
    left:"80px",
  },
  [theme.breakpoints.down('769')]: {
    padding:"0 60px",
    left:"40px",
  },
  [theme.breakpoints.down('641')]: {
    padding:"0 20px 0px 0px",
    left:"15px",
    top:"-15px"
  },
  [theme.breakpoints.down('602')]: {
    padding:"0 0px 0px 0px",
    left:"-25px",
    top:"-15px"
  },
  [theme.breakpoints.down('541')]: {
    padding:"0 10px 0px 0px",
    left:"-17px",
    top:"-15px"
  },
  [theme.breakpoints.down('415')]: {
    padding:"0 15px 0px 0px",
    left:"-17px",
    top:"-15px"
  },
  [theme.breakpoints.down('394')]: {
    padding:"0 5px 0px 0px",
    left:"-17px",
    top:"-15px"
  },
  [theme.breakpoints.down('385')]: {
    padding:"0 0px 0px 0px",
    left:"-17px",
    top:"-15px"
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
    <Box >
    <Container
    maxWidth='xl'
    >
    <WhatWrap >
   
      <Header >What can you expect from <span style={{color:"RGB(45, 45, 191)"}}>cooperation</span> with Prehood?</Header>
      <TitleOne>Responsiveness. Proficiency. Courage.</TitleOne>
      <Box >
      <Container sx={{position:"relative"}}>
              {items.map((item, index) => (
                <Oxbor key={item.id} sx={{ position: "relative" }}>
                  <Box sx={{ display: "flex", gap: "5%" ,
                   '@media (max-width: 641px)': {
                    display:"block"
                  }
            }}>
                    <CircleIcon
                      sx={{
                        padding: "0 0px 0 0", 
                        height: "15px",
                        width: "15px",
                        color: "RGB(45, 45, 191)",  
                        border: "10px solid white",
                        borderRadius: "30px",
                        '@media (max-width: 641px)': {
                          marginBottom:"20px",
                          marginLeft:"7px"
                        }
                      }}
                    />
             <Title >{item.title}</Title>
            </Box>
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
