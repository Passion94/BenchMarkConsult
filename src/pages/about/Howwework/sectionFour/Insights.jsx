import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, styled } from '@mui/material';


const Header = styled(Typography)(({ theme }) => ({
    color:'#403F3F',
    fontWeight: '900',
    display:"flex",
    justifyContent:"center",
    marginBottom: '30px',
    fontSize: '1em',
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    // fontWeight: "normal",
    fontStyle: "normal",
    textTransform:"uppercase",
    lineHeight:"36px",
    [theme.breakpoints.down('913')]: {
      marginBottom: '20px',
    },
    [theme.breakpoints.down('541')]: {
        fontSize: '.9em',
    },
    [theme.breakpoints.down('482')]: {
        fontSize: '.8em',
        marginBottom: '15px',
    },
   
   
  }));



const cardData = [
  {id:1,
    title: 'Edtify',
    image: 'https://static3.bigstockphoto.com/4/7/1/large1500/174690325.jpg',
    description: "Edtify is an innovative educational platform empowering learners and educators. It offers interactive tools, content creation, and personalized learning experiences, enhancing education's reach and impact",
  },
  {id:2,
    title: 'Afridemics',
    image: 'https://static3.bigstockphoto.com/4/7/1/large1500/174690325.jpg',
    description: "Afridemics is a dynamic initiative fostering African knowledge exchange. Through its online platform, it connects experts, researchers, and learners, facilitating collaborative learning, idea sharing, and impactful research, ultimately contributing to the growth and development of Africa's intellectual landscape.",
  },
  {id:3,
    title: 'Healmass',
    image: 'https://static3.bigstockphoto.com/4/7/1/large1500/174690325.jpg',
    description: "Healmass is a pioneering food supply company dedicated to nourishing lives. Offering a wide range of fresh, quality ingredients, meal kits, and dietary options, Healmass ensures convenient and healthy culinary experiences. With a focus on nutrition and taste, it's redefining food supply for a well-balanced lifestyle",
  },
  // Add more card data objects as needed
];

export const Insights = () =>{
  return (
    <Box sx={{marginTop:"100px"}}>
    <Header>Insights: </Header>
    <Box sx={{display:"flex", gap:"77px", flexWrap:"wrap", justifyContent:"center"}}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt="Lizard"
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
    </Box>
  );
}


