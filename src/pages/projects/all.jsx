import { Container } from '@mui/material'
import React from 'react'
import { Projectinfo } from './projectinfo'
import ProjectSlide from './projectSlide'

export const All = () => {
  return (
    
 <Container sx={{display:"flex", flexDirection:{xs:"column",sm:"column", md:'row' },gap:"50px", marginBottom:"40px"}}>
        <Projectinfo />
        <ProjectSlide/>
       </Container>

    
  )
}
