import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, styled } from "@mui/material";

const sectionsData = [
  {
    title: "Edtify",
    content:
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remainingessentially unchanged. It was popularised in .",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg",
    buttonLabel: "Learn more",
    backgroundColor: "#ffcccc", // Add a background color property
    type:"Saas, Chat Bot"
  },
  {
    title: "Afridemics",
    content:
    " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remainingessentially unchanged. It was popularised in .",
    imageUrl:
      "https://www.collinsdictionary.com/images/full/school_309241295.jpg",
    buttonLabel: "Learn more",
    backgroundColor: "#ccffcc", // Add a background color property
    type:"Saas, Education",
  },
  {
    title: "Myrwin",
    content:
    " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remainingessentially unchanged. It was popularised in .",
    imageUrl:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80",
    buttonLabel: "Learn more",
    backgroundColor: "#ccccff", // Add a background color property
    type:"Saas, Assistant Chat Bot"
  },
];



const MainContainer = styled(Box)(({ theme }) => ({
    
    padding:"0px 90px 90px 90px",
  
  }));
const Stack = styled(Box)(({ theme }) => ({
   marginTop:"70px",
    width: "100%",
    marginBottom: "100px",
    position: "sticky",
    
    
  
  }));


const Section = styled(Box)(({ theme }) => ({
   
    height: "500px",
    backgroundColor: "#ccc",
    position: "sticky",
    top: "170px",
    padding: "50px",
    display: "flex",
    gap: "100px",
    borderRadius:"10px",
  
  }));

 

const CardStack = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const sectionHeight = document.querySelector("Stack");

      // Calculate the current section index based on the scroll position
      const currentSectionIndex = Math.floor(scrollTop / sectionHeight);

      // Set the section index state
      setSectionIndex(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainContainer>
        <Typography variant="h1">Explore Our case Study</Typography>
      <Stack>
        
        {sectionsData.map((section, index) => (
          <Section key={index} style={{ backgroundColor: section.backgroundColor }}>

            <Box>
              <Typography variant="h1">{section.title}</Typography>
              <Typography variant="body1">{section.content}</Typography>
              <Button variant="contained">Learn more</Button>
            </Box>
            {section.imageUrl && (
              <Box>
                <img style={{borderRadius:"10px"}}
                  width="460px"

                  height="360px"
                  src={section.imageUrl}
                  alt={`Section ${index + 1}`}
                />
                <Typography variant="body1" color="primary">{section.type}</Typography>
              </Box>
            )}
          </Section>
        ))}
      </Stack>
    </MainContainer>
  );
};

export default CardStack;

