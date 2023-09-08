import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import { styled } from '@mui/material';
import "./verticaltabs.css";

const RadioContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "220px",
  maxWidth: "220px",
  
  [theme.breakpoints.down('1441')]: {
    width: "217px",
  },
}));

const RadioText = styled(Typography)(({ theme }) => ({
  letterSpacing: "normal",
  textTransform: "initial",
  fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
  fontWeight: "900",
  fontSize: "1.1em",
  marginBottom:"-5px",
  cursor:"pointer",
  width: "200px",
  lineHeight: "24px",
  marginLeft: "0px",
  [theme.breakpoints.down('641')]: {
    display: "none",
  },
}));

const RadioTextOne = styled(Typography)(({ theme }) => ({
  letterSpacing: "normal",
  textTransform: "initial",
  fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
  fontWeight: "900",
  fontSize: "1em",
  maxWidth: "50px",
  padding: "10px",
  display: "none",
  [theme.breakpoints.down('1441')]: {},
  [theme.breakpoints.down('641')]: {
    display: "block",
  },
}));

const VertBox = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: "center",
  width: "720px",
  [theme.breakpoints.down('1441')]: {
    width: "670px",
  },
  [theme.breakpoints.down('1281')]: {
    width: "645px",
  },
  [theme.breakpoints.down('1081')]: {
    marginLeft: "-28px"
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
      className="tab-content"
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          {children}
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
  { label: "Project Management and Strategic Planning", margin: "-18px" },
  { label: "Software Development and Custom Solutions", margin: "-18px"},
  { label: "AI and Data Analytics", margin: "-27px" },
  { label: "Cybersecurity and Risk Management", margin: "-18px" },
  { label: "Technology Infrastructure and Management", margin: "-40px" },
  { label: "IT Training and Skill Development", margin: "-18px" },
];

const tabPanelContents = [
  [
    "Project planning and execution",
    "Scope, time, and budget management",
    "Project risk assessment and mitigation",
    "Stakeholder communication and coordination",
    "IT Strategy and Planning",
    "IT roadmapping and strategic planning",
    "Technology alignment with business goals",
    "Digital transformation strategy",
    "IT architecture assessment and design",
  ],
  [
    "Application development (web, mobile, desktop)",
    "Custom software solutions",
    "Software integration and APIs",
    "Legacy system modernization",
    "Software Testing and Quality Assurance",
    "User Experience (UX) and User Interface (UI) Design",
  ],
  [
    "Artificial intelligence/Machine Learning",
    "Data Science",
    "Data Analysis",
    "Data Engineering",
    "Data Policy/Governance",
    "Business Intelligence",
  ],
  [
    "Security assessments and audits",
    "Cybersecurity strategy development",
    "Threat detection and incident response",
    "Data protection and encryption",
  ],
  [
    "Network design, implementation, and management",
    "Server and data center management",
    "Cloud computing strategy and migration",
    "Virtualization and containerization solutions",
  ],
  [
    "Technology training for employees",
    "Certification preparation courses",
    "IT skills workshops",
  ],
];

function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabHover = (index) => {
    setValue(index);
  };

  return (
    <VertBox>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleTabChange}
        aria-label="Vertical tabs example"
        sx={{ borderColor: 'divider', alignItems: 'center' }}
      >
        {tabLabels.map((tab, index) => (
          <Tab
            key={index}
            label={
              <div onMouseEnter={() => handleTabHover(index)}>
                <RadioContainer>
                  <Radio
                    checked={value === index}
                    sx={{
                      marginTop: tab.margin,
                    }}
                  />
                  <RadioText>{tab.label}</RadioText>
                </RadioContainer>
              </div>
            }
            {...a11yProps(index)}
          />
        ))}
      </Tabs>

      {tabPanelContents.map((content, index) => (
        <TabPanel key={index} value={value} index={index}>
          <ul style={{ position: "absolute", top: "40px" }}>
            <RadioTextOne>{tabLabels[index].label}</RadioTextOne>
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
