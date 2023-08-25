import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ProjectSectionOne } from '../sectionOne/ProjectSectionOne';
import ProjectSectionOneImage from '../sectionOne/ProjectSectionOneImage';

import { ProjectCaseText } from './ProjectCaseText';
import { Container, ImageList, ImageListItemBar } from '@mui/material';



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
  flexDirection:"column",
  marginBottom: '30px',
  fontSize: '1em',
  paddingTop: '10px',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  // fontWeight: "normal",
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

const ImageListCont = styled(ImageList)(({ theme }) => ({
  width: 1350,
   height: 500,
   marginBottom:"150px",
   
   [theme.breakpoints.down('1025')]: {
    width: 900,
   height: 380,
  },
  [theme.breakpoints.down('913')]: {
    width: 800,
   height: 350,
  },
  [theme.breakpoints.down('811')]: {
    width: 870,
   height: 350,
  },
  [theme.breakpoints.down('769')]: {
    width: 600,
   height: 500,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('641')]: {
    width: 500,
   height: 450,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('602')]: {
    width: 458,
   height: 450,
   paddingTop:"50px",
   
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
    <div style={{ marginTop: "150px", display:"flex", justifyContent:"center"}}>
      <Container sx={{ background:"white", padding:"60px 0px ", border:"5px solid red" }}>
        <Container sx={{background:" RGB(45, 45, 191)"}} >
          
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
      <h1>Explore the Case Study intrisic details</h1>
      <Box sx={{ width: '100%'}}>
        
        <Container sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {tabs.map((tabLabel, index) => (
              <Tab key={index} label={tabLabel} />
            ))}
          </Tabs>
        </Container>
        
        {tabs.map((_, index) => (
  value === index && (
    <Container key={index} >
      <h2>{tabs[index]}</h2>
      {/* Display content for each tab */}
      {project.tabContent[tabs[index].toLowerCase()]} {/* Access specific tab content */}
    </Container>
  )
))}</Box>
      
      </Container>
    </div>
  );
};

export default ProjectCaseStudy;
