import React from 'react'

import { HowWeWorkCircle } from './Howwework/HowWeWorkCircle'
import { HowWeWorkContent } from './Howwework/HowWeWorkContent'
import { SectionOne } from './Howwework/sectionOne/SectionOne'
import { Box, Container } from '@mui/material'
import { SectionTwo } from './Howwework/sectionTwo/SectionTwo'

export const About = () => {
  return (
  
  <Box sx={{background:"transparent"}}>
    
    <SectionOne/>
    <SectionTwo/>
    
    <div style={{marginTop:"20px",display:"flex", alignItems:"center", gap:"300px",
     background:" rgb(0, 77, 64)"}}> 
     <Container maxWidth="xl">
       {/* <HowWeWorkCircle/>
       <HowWeWorkContent/> */}
       </Container>
    </div>
    
    </Box>
  )
}
