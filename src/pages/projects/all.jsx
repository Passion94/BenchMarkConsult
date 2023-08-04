import { Box, Container } from '@mui/material'
import React from 'react'
import { Projectinfo } from './projectinfo'
import ProjectSlide from './projectSlide'

export const All = () => {
  return (
    
 <Box sx={{display:"flex", flexDirection:{xs:"column",sm:"column", md:'row' },gap:"50px", marginBottom:"40px", paddingLeft:"20px"}}>
        <Projectinfo />
        <ProjectSlide/>
       </Box>

    
  )
}
