import React from 'react';
import Aboutus from './aboutus'; // Replace './Aboutus' with the actual path to your Aboutus component
import { Link } from 'react-router-dom';
import { Typography, styled } from '@mui/material';

const StyledLink = styled(Link)({
    textTransform:"uppercase",
    textDecoration:"none"
  });

  const Title = styled(Typography)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '600',
    justifyContent: 'center',
    marginBottom: '60px',
    fontSize: '1.5rem',
    fontFamily: 'Barlow Condensed',
    marginTop:"10px",
    display:"flex",
    justifyContent:"center",
    textTransform:"uppercase"
  });

const AboutData = () => {
  const aboutData = [
    {
      title: "Software engineering",
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_Data_Types_of_Data_and_How_To_Analyze_Data.jpg",
      description: "Welcome to our company's innovative software engineering projects, where we create cutting-edge solutions to solve real-world challenges and drive technological advancement.",
      readMoreLink: "https://example.com/software-engineering"
    },
    {
      title: "Data warehousing",
      image: "https://www.verdict.co.uk/wp-content/uploads/2019/02/shutterstock_1142996930.jpg",
      description: "Ankara's are native made cloth's unique to the African culture, shared with the world at large. You look more original in Ankara natives, share the love today by getting one for a loved one.",
      readMoreLink: "https://example.com/data-warehousing"
    },
    {
      title: "Business analytics",
      image: "https://mc-8afc6902-e56c-432c-8c3f-3991-cdn-endpoint.azureedge.net/-/media/project/emea/greece/hero-video-stills/servicios-data-analytics-es-poster.jpg?cx=0.5&cy=0.5&cw=2000&ch=1124&hash=0914F07E79E2B60675108D6EB58AA6C3",
      description: "Ankara's are native made cloth's unique to the African culture, shared with the world at large. You look more original in Ankara natives, share the love today by getting one for a loved one.",
      readMoreLink: "https://example.com/business-analytics"
    }
  ];

  return (
    <div>
        <Title> Portfolios</Title>
    <div>
      {/* Other components */}
      <Aboutus aboutData={aboutData} />
      {/* Other components */}
    </div>
    
    </div>
  );
};

export default AboutData;
