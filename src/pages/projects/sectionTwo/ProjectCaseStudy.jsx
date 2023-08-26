import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { ProjectCaseText } from './ProjectCaseText';
import { Container, ImageList, ImageListItemBar } from '@mui/material';
import { CaseOne } from '../../casestudy/CaseOne';
import "../../about/Howwework/sectionOne/sectionOne.css"



const projectData = {
  1: {
    title: 'Edtify: Transforming Education with SAAS',
    desc: 'Learn how Edtify revolutionized education through its innovative SAAS solution.',
    client: 'Edtify Incorporation',
    solution: 'Customizable Learning Management System (LMS)',
    challenges: 'Low student engagement, outdated technology',
    results: '50% increase in student participation, 30% time savings for teachers',
    testimonial: 'Edtify helped us modernize our teaching methods and engage students like never before.',
    technologies: 'React, Node.js, MongoDB',
    team: 'Project Manager, UX Designer, Full-stack Developers',
    tabContent: {
      overview: 'Edtify, a forward-thinking education platform, reimagines traditional learning methods. Offering a personalized approach, it harnesses AI to tailor content and teaching styles to individual learners, optimizing engagement and comprehension. By analyzing user interactions, Edtify adapts its educational materials, creating dynamic and interactive experiences. Through its intuitive interface, users access a vast array of subjects, from mathematics to literature, while progress tracking and assessments provide real-time feedback. With Edtify, education becomes flexible, inclusive, and effective, catering to diverse learning needs and ultimately fostering a deeper, more meaningful understanding of the material.',
      approach: 'Describe the approach content here...',
      technology: 'Describe the technology content here...',
      impacts: 'Describe the impact content here...',
      insights: 'Describe the insight content here...',
      gallery: 'Describe the gallery content here...',
    }
  },
  2: {
    title: 'Afridemics: Transforming Education with SAAS',
    desc: 'Learn how Edtify revolutionized education through its innovative SAAS solution.',
    client: 'ABC School District',
    solution: 'Customizable Learning Management System (LMS)',
    challenges: 'Low student engagement, outdated technology',
    results: '50% increase in student participation, 30% time savings for teachers',
    testimonial: 'Edtify helped us modernize our teaching methods and engage students like never before.',
    technologies: 'React, Node.js, MongoDB',
    team: 'Project Manager, UX Designer, Full-stack Developers',
    tabContent: {
      overview: 'Afridemics, a forward-thinking education platform, reimagines traditional learning methods. Offering a personalized approach, it harnesses AI to tailor content and teaching styles to individual learners, optimizing engagement and comprehension. By analyzing user interactions, Edtify adapts its educational materials, creating dynamic and interactive experiences. Through its intuitive interface, users access a vast array of subjects, from mathematics to literature, while progress tracking and assessments provide real-time feedback. With Edtify, education becomes flexible, inclusive, and effective, catering to diverse learning needs and ultimately fostering a deeper, more meaningful understanding of the material.',
      approach: 'Describe the approach content here...',
      technology: 'Describe the technology content here...',
      impacts: 'Describe the impact content here...',
      insights: 'Describe the insight content here...',
      gallery: 'Describe the gallery content here...',
    }
  },
  3: { 
    title: 'Healmass: Transforming Education with SAAS',
    desc: 'Learn how Edtify revolutionized education through its innovative SAAS solution.',
    client: 'ABC School District',
    solution: 'Customizable Learning Management System (LMS)',
    challenges: 'Low student engagement, outdated technology',
    results: '50% increase in student participation, 30% time savings for teachers',
    testimonial: 'Edtify helped us modernize our teaching methods and engage students like never before.',
    technologies: 'React, Node.js, MongoDB',
    team: 'Project Manager, UX Designer, Full-stack Developers',
    tabContent: {
      overview: 'Healmass, a forward-thinking education platform, reimagines traditional learning methods. Offering a personalized approach, it harnesses AI to tailor content and teaching styles to individual learners, optimizing engagement and comprehension. By analyzing user interactions, Edtify adapts its educational materials, creating dynamic and interactive experiences. Through its intuitive interface, users access a vast array of subjects, from mathematics to literature, while progress tracking and assessments provide real-time feedback. With Edtify, education becomes flexible, inclusive, and effective, catering to diverse learning needs and ultimately fostering a deeper, more meaningful understanding of the material.',
      approach: 'Describe the approach content here...',
      technology: 'Describe the technology content here...',
      impacts: 'Describe the impact content here...',
      insights: 'Describe the insight content here...',
      gallery: 'Describe the gallery content here...',
    }
  },
  // Add more project data as needed
};

const Header = styled(Typography)(({ theme }) => ({
  color:'white',
  fontWeight: '900',
  display:"flex",
  justifyContent:"center",
  // flexDirection:"column",
  marginTop:"50px",
  
  fontSize: '1.2em',
 
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  // fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"initial",
  lineHeight:"46px",
  [theme.breakpoints.down('415')]: {
    
    fontSize:".8em",

    
  },
 
}));
const TabHeader = styled(Tab)(({ theme }) => ({
  color:'white',
  fontWeight: '900',
  display:"flex",
  justifyContent:"center",
  flexDirection:"column",
  marginBottom: '30px',
  marginTop:"30px",
  fontSize: '1em',
 
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  
  fontStyle: "normal",
  textTransform:"initial",
  lineHeight:"46px",
  [theme.breakpoints.down('415')]: {
    
    fontSize:".8em",

    
  },
 
}));
const Title = styled(Typography)(({ theme }) => ({
  color:'white',
  
  display:"flex",
  justifyContent:"center",
  fontWeight:"500",
  paddingTop:"50px",
  marginBottom: '30px',
  fontSize: '2.5em',
  lineHeight: '46px',
  
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",

    
    [theme.breakpoints.down('1281')]: {
      fontSize:"2.1em",
     
      
    },
    [theme.breakpoints.down('415')]: {
      fontSize:"1.8em",
    },
 
}));
const Desc = styled(Typography)(({ theme }) => ({
  color:'white',
  
  display:"flex",
  
 
  fontWeight:"500",
 
  fontSize: '1em',
  lineHeight: '46px',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",


  [theme.breakpoints.down('415')]: {
    
    fontSize:".9em",

    
  },
 
}));
const TabDescContainer = styled(Container)(({ theme }) => ({
  color:'white',
  fontWeight:"500",
  fontSize: '1em',
  lineHeight: '36px',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",


  [theme.breakpoints.down('415')]: {
    
    fontSize:".9em",

    
  },
 
}));

const ContentContainer = styled(Container)(({ theme }) => ({
   marginTop: "150px",
    display:"flex", 
    justifyContent:"center", 
    paddingBottom:"150px",
    [theme.breakpoints.down('1441')]: {
      paddingLeft:"40px"
     },
   
   [theme.breakpoints.down('1367')]: {
  //  paddingLeft:"40px"
  },
  [theme.breakpoints.down('913')]: {
  
  },
  [theme.breakpoints.down('811')]: {
    
  },
  [theme.breakpoints.down('769')]: {
   
   
  },
  [theme.breakpoints.down('641')]: {
    
   
  },
  [theme.breakpoints.down('602')]: {
   
   
  },
  [theme.breakpoints.down('541')]: {
    width: 417,
   height: 450,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('481')]: {
    width: 380,
   height: 430,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('415')]: {
    width: 360,

   paddingTop:"40px",
   
  },
  [theme.breakpoints.down('394')]: {
    width: 355,

   paddingTop:"40px",
   
  },
  [theme.breakpoints.down('385')]: {
    width: 340,
    height: 410,
   paddingTop:"30px",
   
  },
  [theme.breakpoints.down('376')]: {
    width: 320,

   paddingTop:"40px",
   
  },
}));
const ProjectCaseStudy = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];
  const theme = useTheme();
  const [value, setValue] = useState(0);

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    'Overview',
    'Challanges',
    'Solution',
    'Approach',
    'Technology',
    'Impacts',
    'Insights',
    
  ];

  return (
    <Box className="SectionOneContainer">
    <ContentContainer >
      <Container sx={{ background:"rgb(45, 45, 191)", padding:"60px 0px ", border:"5px solid rgb(46,234,250)" }}>
        <Container sx={{background:" rgb(45, 45, 191)"}} >
          
     <Title>{project.title}</Title>
     
     <Desc sx={{justifyContent:"center"}}> {project.desc}</Desc>
     <Desc> Client:  {project.client}</Desc>
     <Desc> Problem(s):  {project.challenges}</Desc>
     <Desc> Solution(s): {project.solution}</Desc>
     <Desc> Results: {project.results}</Desc>
     <Desc>  Testimonial: {project.testimonial}</Desc>
     <Desc> Team:  {project.team}</Desc>
     <Desc> Technologies :  {project. technologies }</Desc>
     
     </Container>
     
       <ProjectCaseText/>
      
       
  
      {/* Other project details... */}
      <Header>Explore the Case Study intrinsic details</Header>
      <Box sx={{ width: '100%'}}>
        
        <Container sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {tabs.map((tabLabel, index) => (
              <TabHeader key={index} label={tabLabel} sx={{color:"white"}} />
            ))}
          </Tabs>
        </Container>
        
        {tabs.map((_, index) => (
  value === index && (
    <TabDescContainer key={index}sx={{color:"white"}}>
      <Header>{tabs[index]}</Header>
      {/* Display content for each tab */}
      {project.tabContent[tabs[index].toLowerCase()]} {/* Access specific tab content */}
    </TabDescContainer>
  )
))}</Box>
      
      </Container>
      
    </ContentContainer>
    <Box sx={{background:"rgb(45, 45, 191)"}}>
    <Header sx={{paddingTop:"50px"}}>Explore more of our Case study</Header>
    <CaseOne/>
    </Box>
    </Box>
  );
};

export default ProjectCaseStudy;
