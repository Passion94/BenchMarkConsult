import React from 'react'
import { OurVision } from '../sectionOne/OurVision'
import { Communication } from './Communication'
import { Collaboration } from './Collaboration'
import { Expertise } from './Expertise'
import { CriticalThink } from './CriticalThink'
import { Box, Container, styled } from '@mui/material'



const MainContainer = styled(Box)(({ theme }) => ({
 

 
  [theme.breakpoints.down('913')]: {
      
    },
}))



const BoxOne = styled(Box)(({ theme }) => ({
    display:"flex",
    padding:"0px 87px",
    gap:"80px",
    justifyContent:"center",
    marginTop:"30px",
    alignItems:"center",
    [theme.breakpoints.down('1441')]: {
      padding:"0px 68px",
      gap:"70px",
    },
    [theme.breakpoints.down('1367')]: {
      padding:"0px 57px",
    },
    [theme.breakpoints.down('1281')]: {
      padding:"0px 41px",
      gap:"70px",
    },
    [theme.breakpoints.down('1025')]: {
      padding:"0px 33px",
      gap:"50px",
    },
    [theme.breakpoints.down('913')]: {
        flexDirection:"column",
        padding:"0px 30px",
        gap:"30px",
      },
      [theme.breakpoints.down('821')]: {
        flexDirection:"column",
        padding:"0px 10px",
        gap:"30px",
      },
      [theme.breakpoints.down('811')]: {
        flexDirection:"column",
        padding:"0px 5px",
        gap:"30px",
      },
      [theme.breakpoints.down('801')]: {
        flexDirection:"column",
        padding:"0px 13px",
        gap:"30px",
      },
      [theme.breakpoints.down('641')]: {
        flexDirection:"column",
        padding:"0px 0px",
        marginLeft:"-4px",
        gap:"30px",
      },
      [theme.breakpoints.down('602')]: {
        flexDirection:"column",
        padding:"0px 2px",
        marginLeft:"0px",
        gap:"30px",
      },
      [theme.breakpoints.down('541')]: {
        flexDirection:"column",
        padding:"0px 15px",
       
        gap:"10px",
      },
      [theme.breakpoints.down('481')]: {
        flexDirection:"column",
        padding:"0px 6px",
       
       
      },
      [theme.breakpoints.down('415')]: {
        flexDirection:"column",
        padding:"0px 6px",
       
       
      },
      [theme.breakpoints.down('376')]: {
        flexDirection:"column",
        padding:"0px 2px",
      },
      [theme.breakpoints.down('361')]: {
        flexDirection:"column",
        padding:"0px 0px",
       
      },
}))

const BoxTwo= styled(Box)(({ theme }) => ({
  display:"flex",
  padding:"0px 87px",
  gap:"70px",
  
  marginTop:"30px",
  alignItems:"center",
  [theme.breakpoints.down('1441')]: {
    padding:"0px 68px",
    gap:"70px",
  },
  [theme.breakpoints.down('1367')]: {
    padding:"0px 57px",
  },
  [theme.breakpoints.down('1281')]: {
    padding:"0px 41px",
    gap:"70px",
  },
  [theme.breakpoints.down('1025')]: {
    padding:"0px 33px",
    gap:"50px",
  },
  [theme.breakpoints.down('913')]: {
      flexDirection:"column",
      padding:"0px 30px",
      gap:"30px",
    },
    [theme.breakpoints.down('821')]: {
      flexDirection:"column",
      padding:"0px 10px",
      gap:"30px",
    },
    [theme.breakpoints.down('811')]: {
      flexDirection:"column",
      padding:"0px 5px",
      gap:"30px",
    },
    [theme.breakpoints.down('801')]: {
      flexDirection:"column",
      padding:"0px 13px",
      gap:"30px",
    },
    [theme.breakpoints.down('641')]: {
      flexDirection:"column",
      padding:"0px 0px",
      marginLeft:"-4px",
      gap:"30px",
    },
    [theme.breakpoints.down('602')]: {
      flexDirection:"column",
      padding:"0px 2px",
      marginLeft:"0px",
      gap:"30px",
    },
    [theme.breakpoints.down('541')]: {
      flexDirection:"column",
      padding:"0px 15px",
     
      gap:"10px",
    },
    [theme.breakpoints.down('481')]: {
      flexDirection:"column",
      padding:"0px 6px",
     
     
    },
    [theme.breakpoints.down('415')]: {
      flexDirection:"column",
      padding:"0px 6px",
     
     
    },
    [theme.breakpoints.down('376')]: {
      flexDirection:"column",
      padding:"0px 2px",
    },
    [theme.breakpoints.down('361')]: {
      flexDirection:"column",
      padding:"0px 0px",
     
    },
}))


export const SectionTwo = () => {
  return (
    <MainContainer>
      <Container maxWidth="xl" >
        <BoxOne >
        <Expertise/>
        <Communication/>
        </BoxOne>
        <BoxTwo>
        <Collaboration/>
          <CriticalThink/> 
        </BoxTwo >
        </Container>

    </MainContainer>
  )
}
