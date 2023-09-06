import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Container,
  Typography,
  Grid,
  styled,
  keyframes,
  Box,
} from "@mui/material";

const slideRightToLeft = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const PartnerContainer = styled(Box)(({ theme }) => ({
  animation: `${slideRightToLeft} 20s linear infinite`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
 
 
  marginLeft: "15px", // Adjust the margin for horizontal spacing
}));

const Partner = () => {
  const [partners, setPartners] = useState([
    {
      name: "Google",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Microsoft",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Amazon",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Edtify",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Afridemics",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Ait Ghana",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "Jobberman",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "CSMT",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "CSMT",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "CSMT",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "CSMT",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "CSMT",
      image: "https://picsum.photos/200/300",
    },
  ]);

  const renderPartners = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 8, // Number of visible slides at a time
      slidesToScroll: 1,
    };

    return (
      <Box>
        <Typography variant="h1" align="center">Our partners</Typography>
      <Slider {...settings}>
        
        {partners.map((partner, index) => (
          <PartnerContainer key={index}  alignItems="center">
            <img
              src={partner.image}
              alt={partner.name}
              style={{ width: 100, height: 100 , borderRadius:"10px"}}
            />
            <Typography variant="body1">{partner.name}</Typography>
          </PartnerContainer>
        ))}
      </Slider>
      </Box>
    );
  };

  return (
    <Box>
    <Container maxWidth="xl" sx={{width:"1215px"}}>
      {renderPartners()}
    </Container>
    </Box>
  );
};

export default Partner;
