import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material';
import "./verticaltabs.css";
import { blue, green } from '@mui/material/colors';




const RadioText = styled(Typography)(({ theme }) => ({
color: "white",
letterSpacing: "normal",
textTransform:"initial",
fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
fontWeight:"900",
fontSize:"1.2em",
lineHeight:"36px",
[theme.breakpoints.down('641')]: {
   display:"none"
  
},
  
}));

const RadioTextOne = styled(Typography)(({ theme }) => ({
  color: "white",
  letterSpacing: "normal",
  textTransform:"initial",
  fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
  fontWeight:"900",
  fontSize:"1.2em",
  lineHeight:"36px",
  display:"none",
  [theme.breakpoints.down('641')]: {
     
    display:"block"
  },
    
  }));
const VertBox = styled(Typography)(({ theme }) => ({

  flexGrow: 1,
  bgcolor: 'transparent', 
  color: "white",
  display: 'flex',
  alignItems: "center",
  height: 424, 
  width: "700px",
 
 
  [theme.breakpoints.down('1081')]: {
    
    marginLeft:"-28px"
  },
  [theme.breakpoints.down('641')]: {
    
    width: "380px",
  },


}));


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const tabLabels = [
  "Software Development",
  "System Analysis and Design",
  "AI and Data Analytics",
  "Cyber Security",
];
const tabPanelContents = [
  [
    "Api Development",
    "Mobile Development",
    "Web Application Development"
  ],
  [
    "Requirements Elicitation",
    "Data Modeling",
    "Prototyping",
    "System Architecture",
    "Class and Object Modeling",
    "Testing Strategy",
    "Integration",
    "Version Control",
    "User Training",
    "Project Management"
  ],
  [
    "Data Strategy, Assessment",
    "Data Cleaning, Enrichment",
    "Predictive Modeling",
    "Machine Learning Solutions",
    "Computer Vision Applications",
    "Custom Analytics Solutions",
    "AI Strategy and Implementation",
    "Model Evaluation and Validation",
    "Deployment and Integration",
    "Data Governance",
    "Consultation",
    "Client Collaboration and Support"
  ],
  [
    "Risk Assessment and Analysis",
    "Security Audits and Assessments",
    "Security Architecture Design",
    "Network Security",
    "Endpoint Security",
    "Vulnerability Management",
    "Security Awareness Training",
    "Data Protection and Encryption",
    "Identity and Access Management",
    "Security Monitoring and Analytics",
    "Cloud Security"
  ]
];

function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <VertBox>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', alignItems: 'center' }}
      >
        <Tab
          label={
            <Box display="flex" alignItems="center" sx={{paddingBottom:"0px"}} >
              <Radio checked={value === 0} sx={{marginLeft:"-36px",  color:"white",
              '&.Mui-checked': {
                color: green[500], // Change the color when checked to green[500]
              },
             '@media (max-width: 641px)': {
              marginLeft:"0px"
            }
            }}/>
              <RadioText>Software Development</RadioText>
            </Box>
          }
          {...a11yProps(0)}
        />
        <Tab 
        
          label={
            <Box display="flex" alignItems="center" sx={{paddingBottom:"10px"}} >
              <Radio checked={value === 1}  sx={{marginLeft:"0px",  color:"white",
            '&.Mui-checked': {
              color: green[500], // Change the color when checked to green[500]
            },
            }} />
              <RadioText>System Analysis and Design</RadioText>
            </Box>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box display="flex" alignItems="center" sx={{paddingBottom:"10px"}}  >
              <Radio checked={value === 2}  sx={{marginLeft:"-50px",  color:"white",
              '&.Mui-checked': {
                color: green[500], // Change the color when checked to green[500]
              },
            '@media (max-width: 641px)': {
              marginLeft:"0px"
            }
            }} />
              <RadioText>AI and Data Analytics</RadioText>
              
            </Box>
          }
          {...a11yProps(2)}
        />
          <Tab
          label={
            <Box display="flex" alignItems="center" sx={{paddingBottom:"10px"}} >
              <Radio checked={value === 3} sx={{marginLeft:"-104px", color:"white",
              '&.Mui-checked': {
                color: green[500], // Change the color when checked to green[500]
              },
            '@media (max-width: 641px)': {
              marginLeft:"0px"
            }
            }} />
              <RadioText>Cyber Security</RadioText>
            </Box>
          }
          {...a11yProps(4)}
        />
        {/* ... Repeat for other tabs */}
      </Tabs>
      
      {tabPanelContents.map((content, index) => (
        <TabPanel key={index} value={value} index={index}>
          <></>
          <ul>
          <RadioTextOne>{tabLabels[index]}</RadioTextOne>
            {content.map((item, itemIndex) => (
              <li key={itemIndex} className='listitemswhatwedo'>{item}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </VertBox>
  );
}

export default VerticalTabs;
