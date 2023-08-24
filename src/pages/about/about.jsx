import React from 'react'

import { HowWeWorkCircle } from './Howwework/HowWeWorkCircle'
import { HowWeWorkContent } from './Howwework/HowWeWorkContent'
import { SectionOne } from './Howwework/sectionOne/SectionOne'
import { Box, Container } from '@mui/material'
import { SectionTwo } from './Howwework/sectionTwo/SectionTwo'
import { SectionThree } from './Howwework/sectionThree/SectionThree'
import { SectionFour } from './Howwework/sectionFour/SectionFour'

export const About = () => {
  return (
  
  <Box sx={{background:"transparent"}}>
    
    <SectionOne/>
    {/* <SectionTwo/> */}
    < SectionThree/>
    < SectionFour/>
   
    <div style={{marginTop:"20px",display:"flex", alignItems:"center", gap:"300px",
     background:"RGB(45, 45, 191)"}}> 
     <Container maxWidth="xl">
       {/* <HowWeWorkCircle/>
       <HowWeWorkContent/> */}
       </Container>
    </div>
    
    </Box>
  )
}
