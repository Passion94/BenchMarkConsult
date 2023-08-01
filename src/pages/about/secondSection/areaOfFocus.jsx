import { Box, CardMedia, Container, Icon, Typography, styled } from '@mui/material'
import React from 'react'




const Title = styled(Container)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '400',
    justifyContent: 'flex-Start',
    padding:" 25px 0 25px 25px",
    fontSize: 'clamp(16px, 5vw, 44px)',
    fontFamily: 'Barlow Condensed',
    marginTop:"10px",
    
    
  });
  const Desc = styled(Typography)({
    fontWeight: '400',
    color: 'black',
    marginBottom:"5%",
    fontSize: 'clamp(18px, 5vw, 18px)',
   
    lineHeight:"24px",
    display:"flex",
    alignItemsL:"center",
     // Responsive styles using media queries
    
  '@media (max-width: 768px)': {
    fontSize: 'clamp(16px, 5vw, 32px)',
    paddingLeft: '20px',
    paddingRight: '10px',
  },
  '@media (max-width: 480px)': {
    fontSize: 'clamp(8px, 2vw, 12px)',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  '@media (min-width: 280px)': {
    // fontSize: 'clamp(8px, 2vw, 12px)',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  })


const trackDatas = [
    { id: 1, symbol: 'AccountBalanceIcon ',description: "Education" },
    { id: 2, symbol: 'Ac', description: " Finance" },
    { id: 3, symbol: '10', description: "Media" },
    { id: 4, symbol: '100', description: "Healthcare" },
    { id: 5, symbol: '20', description: "Exploration" },
    { id: 6, symbol: '15', description: "Consumer Services" },
    { id: 7, symbol: '15', description: "Agriculture" },
    { id: 8, symbol: '15', description: "NGO/CSO" },
    { id: 9, symbol: '15', description: "Aerospace and Aviation" },
    { id: 10, symbol: '15', description: "Gaming industry" },
    { id: 11, symbol: '15', description: "Automotive" },
    { id: 12, symbol: '15', description: "Research" },

  ];
  
  const Track = ({ symbol, description }) => {
    return (
      <Container sx={{padding: "16px 20px", background:"white",
       height:"50%", width:{xs:"100%", sm:"70%", md:'20%',  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',}}}>
        {/* <Icon>{symbol}</Icon> */}
        <Desc >{description}</Desc>
      </Container >
    );
  };
  



export const AreaOfFocus = () => {
  return (
    <div>
        <Title> We have experience in the following sectors</Title>
       <Container sx={{display:"flex", justifyContent:"center" , alignItems:"center", flexDirection:{xs:"column",sm:"column", md:"row"}, gap:"10px", paddingBottom:"60px" ,marginBottom:"20px", flexWrap:"wrap"}}>
        {trackDatas.map((item) => (
          <Track key={item.id} rate={item.symbol} description={item.description} />
        ))}
        </Container>
      
    </div>
  )
}
