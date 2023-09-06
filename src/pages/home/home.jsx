import React from 'react'
import NavbarCarousal from '../../components/navbar/navbarCarousal'
import { Getstarted } from '../../components/aboutus/getstarted'
import { Whatwedo } from '../../components/aboutus/whatwedo'
import AboutData from '../../components/aboutus/aboutusdata'
import { Story } from '../story/story'
import Expectations from './expectations/expectations'
import { Box, Container } from '@mui/material'
import CardStack from '../casestudy/CardStack'
import CustomerTestimonySection from '../../components/navbar/CustomerTestimonySection '
import Partner from '../../components/navbar/Partner'
import ContactForm from '../../components/navbar/ContactForm'








export const Home = () => {
  return (
    <Box sx={{ position:"relative"}}>
      <Box >
      <NavbarCarousal/>
     <Whatwedo/> 
      </Box>
      <Expectations/>
     
     
      <CardStack/>
      <ContactForm/>
      <CustomerTestimonySection />
      <Partner/>
      {/* <Footer/> */}
      {/* <AboutData/>
      
     
     <Story/>  */}
    </Box>
  )
}
