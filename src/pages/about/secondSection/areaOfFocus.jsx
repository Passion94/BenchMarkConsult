import { Box, CardMedia, Icon, Typography, styled } from '@mui/material'
import React from 'react'




const Title = styled(Typography)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '400',
    justifyContent: 'flex-Start',
    padding:" 25px 0 25px 25px",
    fontSize: 'clamp(16px, 5vw, 44px)',
    fontFamily: 'Barlow Condensed',
    marginTop:"10px",
    
    
  });


const trackDatas = [
    { id: 1, symbol: 'AccountBalanceIcon ',description: "Education" },
    { id: 2, symbol: 'Ac', description: " Finance" },
    { id: 3, symbol: '10', description: "Media" },
    { id: 5, symbol: '100', description: "Healthcare" },
    { id: 6, symbol: '20', description: "Exploration" },
    { id: 7, symbol: '15', description: "Consumer Services" },
    { id: 8, symbol: '15', description: "Agriculture" },
    { id: 9, symbol: '15', description: "NGO/CSO" },
    { id: 7, symbol: '15', description: "Aerospace and Aviation" },
    { id: 7, symbol: '15', description: "Gaming industry" },
    { id: 7, symbol: '15', description: "Automotive" },
    { id: 7, symbol: '15', description: "Research" },

  ];
  
  const Track = ({ symbol, description }) => {
    return (
      <Box sx={{padding: "16px 20px", background:"white", height:"60%", width:"15%" }}>
        <Icon>{symbol}</Icon>
        <Typography sx={{color:"black", fontSize:".9em", fontWeight:"600"}}>{description}</Typography>
      </Box>
    );
  };
  



export const AreaOfFocus = () => {
  return (
    <div>
        <Title> We have worked extensively in the following sectors</Title>
       <Box sx={{display:"flex", gap:"10px", marginBottom:"20px", flexWrap:"wrap"}}>
        {trackDatas.map((item) => (
          <Track key={item.id} rate={item.symbol} description={item.description} />
        ))}
        </Box>
      
    </div>
  )
}
