import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ProjectSectionOne } from '../sectionOne/ProjectSectionOne';
import ProjectSectionOneImage from '../sectionOne/ProjectSectionOneImage';
import ProjectCAseStudyImage from './ProjectCaseStudyImage';
import { ProjectCaseText } from './ProjectCaseText';

const projectData = {
  1: {
    title: 'Edtify: Transforming Education with SAAS',
    description: 'Learn how Edtify revolutionized education through its innovative SAAS solution.',
    client: 'ABC School District',
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
    description: 'Learn how Edtify revolutionized education through its innovative SAAS solution.',
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
    description: 'Learn how Edtify revolutionized education through its innovative SAAS solution.',
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
    'Approach',
    'Technology',
    'Impacts',
    'Insights',
    'Gallery'
  ];

  return (
    <div style={{ marginTop: "150px" }}>
      <Box sx={{display:"flex"}}>
       <ProjectCAseStudyImage/>
       <ProjectCaseText/>
       </Box>
      <h1>{project.title}</h1>
      {/* Other project details... */}
      
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {tabs.map((tabLabel, index) => (
              <Tab key={index} label={tabLabel} />
            ))}
          </Tabs>
        </Box>
        
        {tabs.map((_, index) => (
  value === index && (
    <div key={index}>
      <h2>{tabs[index]}</h2>
      {/* Display content for each tab */}
      {project.tabContent[tabs[index].toLowerCase()]} {/* Access specific tab content */}
    </div>
  )
))}
      </Box>
    </div>
  );
};

export default ProjectCaseStudy;
