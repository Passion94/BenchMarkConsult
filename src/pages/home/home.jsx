import React from 'react'
import NavbarCarousal from '../../components/navbar/navbarCarousal'
import { Getstarted } from '../../components/aboutus/getstarted'
import { Whatwedo } from '../../components/aboutus/whatwedo'
import AboutData from '../../components/aboutus/aboutusdata'
import { Story } from '../story/story'
import Expectations from './expectations/expectations'
import { Box, Container } from '@mui/material'


import { CaseOne } from '../casestudy/CaseOne'
import CardStack from '../casestudy/CardStack'








export const Home = () => {
  return (
    <Box sx={{ position:"relative", height:"100vh"}}>
      <Box >
      <NavbarCarousal/>
     <Whatwedo/> 
      </Box>
      <Expectations/>
     <Getstarted/>
     
      <CardStack/>
     <Box sx={{marginTop:"700px"}}>
      <Getstarted/>
      <Getstarted/>
      <Getstarted/>
      </Box>
      {/* <AboutData/>
      
     
     <Story/>  */}
    </Box>
  )
}
