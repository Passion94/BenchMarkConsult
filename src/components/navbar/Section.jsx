import React from 'react'
import Faq from './Faq'
import ContactForm from './ContactForm'
import { Box, Container, Typography } from '@mui/material'

export const Section = () => {
  return (
    <Box sx={{background:(theme)=>theme.palette.primary.first}}>
    {/* <Typography variant="h2" align="center">
    Discover the right solution that solves your problem using our cutting edge technology
  </Typography> */}
  <Container maxWidth="xl">
    <Box sx={{display:"flex", height:"950px"}}>
        
        <ContactForm />
       <Faq /> 
    </Box >
    </Container>
    </Box>
  )
}
