import { Box, CardContent, CardMedia, Typography, styled } from '@mui/material'
import React from 'react'
import { Anime } from '../../../../components/anime/anime'



const Desc = styled(Typography)({
  fontWeight: '400',
  color: 'black',
  marginBottom:"5%",
  fontSize: 'clamp(8px, 3vw, 16px)',
})


export const Summary = () => {
  return (
    <div>
      <Box sx={{marginTop:"500px", padding:"50px"}}>

     
      <Anime/>
      

      </Box>
      <Box>
      <Desc sx={{marginTop:"100px"}}>
      Our team bridges the gap between typically segmented skills, 
      such as rapid prototyping, complex information design, large dataset processing,
       Software engineering, data journalism, business analytics and product strategy.
      </Desc>
      <CardMedia
        sx={{ borderRadius: '6px', marginTop:"200px" }}
        component="img"
        alt="learn"
        height="200px"
        width="300px"
        flexWrap="wrap"
        image="https://guardian.ng/wp-content/uploads/2021/09/office-space.jpg"
      />
      <CardContent
     
     >
       
       <Desc variant="body1" color="text.secondary" className="bodytypography">
         Every new Project with  it's specific challanges drives our imagination 
         and willignss to learn, we focus on long term 
         partnership and getting to the core of ssisting our
          clients in creating a market dorminant product
       </Desc>
     
     </CardContent>
      </Box>
    </div>
  )
}
