import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const StyledLink= styled(Link)({
    textDecoration:"None",
    fontWeight:"600",
     color:"black",
     '&:hover':{
        textDecoration:"underline"
     }
})


export const Projectinfo = () => {
    const projectInfoSets = [
      {
        sector: "Banking",
        serviceType: "Softwae engineering",
        description: "Creating a system architecture for the Railroad industrialization and human interaction to decide the process of growth in an era of stagnation",
      },
     
      
      // Add more sets of project information as needed
    ];
  
    return (
      <Box sx={{ width: "100%" }}>
        {projectInfoSets.map((projectInfo, index) => (
          <React.Fragment key={index}>
            <hr />
            <StyledLink style={{ marginRight: "20px" }}>{projectInfo.sector}</StyledLink>
            <StyledLink>{projectInfo.serviceType}</StyledLink>
            <Typography sx={{ fontSize: "1rem" }}>{projectInfo.description}</Typography>
            <StyledLink>View More</StyledLink>
          </React.Fragment>
        ))}
      </Box>
    );
  };
  

