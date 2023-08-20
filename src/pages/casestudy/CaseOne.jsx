import React from 'react'

import { Box, Container, Typography, styled } from '@mui/material'
import CaseCard from './CaseCard'



const Header = styled(Typography)(({ theme }) => ({
    color: '#403F3F',
    fontWeight: '600',
    marginBottom: '30px',
    fontSize: '2.4em',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
    
    lineHeight: '56px',
    letterSpacing:"normal",
   
    // paddingRight:"0%",
    fontStyle: 'normal',
    
    
  
    [theme.breakpoints.down('3841')]: {
      paddingRight:"50%",
      
    },
  
    [theme.breakpoints.down('1921')]: {
      paddingLeft:"1%",
      
    },
    [theme.breakpoints.down('1441')]: {
      paddingLeft:"0%",
      
    },
    [theme.breakpoints.down('1081')]: {
      paddingRight:"40%",
      
    },
    [theme.breakpoints.down('1025')]: {
      paddingRight:"30%",
      
    },
    [theme.breakpoints.down('769')]: {
      paddingRight:"20%",
      
    },
    [theme.breakpoints.down('641')]: {
      paddingRight:"25%",
      fontSize:"1.5em",
      lineHeight:"30px",
    },
    [theme.breakpoints.down('415')]: {
      paddingRight:"15%",
      fontSize:"1.5em",
      lineHeight:"30px",
    },
    [theme.breakpoints.down('394')]: {
      paddingRight:"5%",
      fontSize:"1.5em",
      lineHeight:"30px",
    },
  }));




export const CaseOne = () => {
  return (
    <div style={{display:"flex", gap:"100px", alignItems:"center"}}>
        <Container>
            <Header>Portfolio</Header>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type
         specimen book. It has survived not only five centuries, but also the leap into 
         electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
        </Container>
        <Box >
    <CaseCard/>
        </Box>
       
    </div>
  )
}
