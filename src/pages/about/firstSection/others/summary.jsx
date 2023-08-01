import { Box, CardContent, CardMedia, Container, Typography, styled } from '@mui/material';
import React from 'react';
import { Anime } from '../../../../components/anime/anime';



const Header = styled(Typography)({
  color: 'rgb(117, 117, 117)',
  fontWeight: '400',
  display:"flex",
  justifyContent: 'center',
  paddingLeft:"25px",
  fontSize: 'clamp(16px, 5vw, 44px)',
  fontFamily: 'Barlow Condensed',
  marginTop:"10px",
  
 
  
});



const Desc = styled(Typography)({
  fontWeight: '400',
  color: 'black',
  marginBottom:"5%",
  fontSize: 'clamp(16px, 5vw, 16px)',
  paddingLeft:"25px",
  paddingRight:"25px",
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
  { id: 1, rate: '100', description: "Completed projects" },
  { id: 2, rate: '100', description: "Clients" },
  { id: 3, rate: '10', description: "Years in business" },
  { id: 5, rate: '20', description: "Core Team members" },
  { id: 6, rate: '15', description: "Strategic partnership" }
  
];

const Track = ({ rate, description }) => {
  return (
    <Box sx={{padding: "16px 20px", background:"white", height:"60%", width:"20%" }}>
      <Typography sx={{color:"red", fontSize:"1.5rem", fontWeight:"600"}}>{rate} +</Typography>
      <Typography sx={{color:"rgb(117, 117, 117)", fontSize:".7rem", fontWeight:"400"}}>{description}</Typography>
    </Box>
  );
};

export const Summary = () => {
  return (
    <div>
      <Box sx={{ marginTop: "330px", padding: "50px" }}>
        <Anime />
      </Box>
      <Container>
        <Desc sx={{ marginTop: "250px" }}>
          Our team bridges the gap between typically segmented skills,
          such as rapid prototyping, complex information design, large dataset processing,
          Software engineering, data journalism, business analytics and product strategy.
        </Desc>
        <CardMedia
          sx={{ borderRadius: '2px', marginTop: "100px", width: "300px",display:"flex", alignItems:"center", justifyContent:"center" }}
          component="img"
          alt="learn"
          height="200px"
          image="https://guardian.ng/wp-content/uploads/2021/09/office-space.jpg"
        />
        <CardContent>
          <Desc variant="body1" color="text.secondary" className="bodytypography">
            Every new Project with its specific challenges drives our imagination
            and willingness to learn, we focus on long term
            partnership and getting to the core of assisting our
            clients in creating a market-dominant product
          </Desc>
        </CardContent>
      </Container>
      {/* <Container sx={{paddingBottom:"20px"}}>
        <Header variant="h4">
          Track Records
        </Header>
        <Box sx={{display:"flex", gap:"10px", marginBottom:"20px", flexWrap:"wrap"}}>
        {trackDatas.map((item) => (
          <Track key={item.id} rate={item.rate} description={item.description} />
        ))}
        </Box>
        <Desc >
        We have a track record that demonstrates a history of success and reliability.
         A proven achievements , expertise and credibility in business
        </Desc >
      </Container> */}
    </div>
  );
};
