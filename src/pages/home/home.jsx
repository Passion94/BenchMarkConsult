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
import Footer from '../../components/footer/Footer'
import Form from '../../components/navbar/Form'
import CustomerTestimonySection from '../../components/navbar/CustomerTestimonySection '








export const Home = () => {
  return (
    <Box sx={{ position:"relative"}}>
      <Box >
      <NavbarCarousal/>
     <Whatwedo/> 
      </Box>
      <Expectations/>
     
     
      <CardStack/>
      {/* <Getstarted/> */}
      <Form/>
      <CustomerTestimonySection />
      {/* <Footer/> */}
      {/* <AboutData/>
      
     
     <Story/>  */}
    </Box>
  )
}
