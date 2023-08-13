import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';



const BoxOne = styled(Box)(({ theme }) => ({
 
  height:"200px", 
  width:"200px",
   background:"black",
   position:"absolute",
   right:"-50px"
  }))
  
  const BoxTwo = styled(Box)(({ theme }) => ({
    border:"2px solid black", 
    height:"200px", 
    width:"200px",
     background:"blue"
    }))


    const Title = styled(Container)(({ theme }) => ({
      fontWeight: '600',
      marginBottom: '10px',
      color: 'black',
      display:"flex",
      alignItems:"center",
      justifyContent:"flex-end",
     
      fontSize:"1.5em",
      
      letterSpacing:"0.05em",
     
    
    
     
    }));


    const Desc = styled(Typography)(({ theme, showFullText }) => ({
     padding:"5px",
      color: 'white',
      fontWeight: '600',
      marginBottom: '30px',
      fontSize: '1em',
      lineHeight: '24px',
      padding:"15px 10px",
      fontFamily: 'Archivo Narrow',
    }));


export const Others = () => {
  return (
    <Box sx={{marginTop:"50px"}}>
      
        <Container sx={{display:"flex",}}
        maxWidth="xl"
        >
          <Box sx={{position:"relative"}}>
          <Title>Edtify</Title>
          <BoxOne >
           <Desc> Creating an environment for a seamless learning concept to enhance
             growth and simmilation using artificil intelligence and other equiped knowledge </Desc>
          </BoxOne>
          </Box>
          <Box>
          <BoxTwo > 
          <img 
        style={{width:"200px", height:"200px"}}
           src='https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w='/>
         <Title sx={{  padding:"5px",}}>View <EastIcon/></Title>
          </BoxTwo>
         
          </Box>
        </Container>
    </Box>
  )
}
