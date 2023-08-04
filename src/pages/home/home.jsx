import React from 'react'
import NavbarCarousal from '../../components/navbar/navbarCarousal'
import { Getstarted } from '../../components/aboutus/getstarted'
import { Whatwedo } from '../../components/aboutus/whatwedo'
import AboutData from '../../components/aboutus/aboutusdata'
import { Story } from '../story/story'
import Expectations from './expectations/expectations'
import { Box, Container } from '@mui/material'



export const Home = () => {
  return (
    <Box>
     <NavbarCarousal/>
     

     <Getstarted/>
     <Expectations/>
    
      {/* <AboutData/> */}
      
     {/* <Whatwedo/> 
     <Story/>  */}
    </Box>
  )
}
