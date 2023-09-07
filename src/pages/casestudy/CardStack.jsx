import React, { useState, useEffect } from "react";
import { Box, Button, Container, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const sectionsData = [
  {
    title: "Edtify: From Legacy Code to Modern Efficiency: A Software Refactoring Success Story",
    content:
      " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remainingessentially unchanged. It was popularised in .",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/004/641/880/original/illustration-of-high-school-building-school-building-free-vector.jpg",
    buttonLabel: "Explore",
    backgroundColor: "#5c6bc0", 
    color:"white",
    type:"Saas, Chat Bot"
  },
  {
    title: "Afridemics:Revolutionizing Healthcare IT: A Deep Dive into Our EMR System Upgrade",
    content:
    " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remainingessentially unchanged. It was popularised in .",
    imageUrl:
      "https://www.collinsdictionary.com/images/full/school_309241295.jpg",
    buttonLabel: "Explore",
    backgroundColor: "#00e5ff",
    color:"black", 
    type:"Saas, Education",
  },
  {
    title: "Myrwin:From Legacy Code to Modern Efficiency: A Software Refactoring Success Story",
    content:
    " when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remainingessentially unchanged. It was popularised in .",
    imageUrl:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sfGVufDB8fDB8fHww&w=1000&q=80",
    buttonLabel: "Explore",
    backgroundColor: "#304ffe", 
    color:"white",
    type:"Saas, Assistant Chat Bot"
  },
];



const MainContainer = styled(Box)(({ theme }) => ({
    
    padding:"70px 90px 50px 90px",
  
  }));
const Stack = styled(Box)(({ theme }) => ({
   marginTop:"0px",
    width: "100%",
   
    position: "sticky",
    
    
  
  }));


const Section = styled(Box)(({ theme }) => ({
   
    height: "500px",
    backgroundColor: "#ccc",
    position: "sticky",
    top: "170px",
    padding: "50px ",
    display: "flex",
    gap: "70px",
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
        <Container maxWidth='xl'>
        <Typography variant="h1" sx={{paddingBottom:"30px", display:"flex", justifyContent:"center"}}>Explore Our Case Study and see our portfolios</Typography>
      <Stack>
        
        {sectionsData.map((section, index) => (
          <Section key={index} style={{ backgroundColor: section.backgroundColor }}>

            <Box >
              <Typography variant="h1" style={{ color: section.color }}>{section.title}</Typography>
              <Typography variant="body1"style={{ color: section.color }}>{section.content}</Typography>
              <Button variant="contained" >{section.buttonLabel}</Button>
            </Box>
            {section.imageUrl && (
              <Box>
                <img style={{borderRadius:"10px"}}
                  width="460px"

                  height="360px"
                  src={section.imageUrl}
                  alt={`Section ${index + 1}`}
                />
                <Typography variant="body1" style={{ color: section.color }}>{section.type}</Typography>
                <Link to=''><Typography mt={10} align="end">Explore all our Casestudies</Typography></Link>
              </Box>
            )}
            {/* color="#403F3F"  */}
          </Section>
          
        ))}
        
      </Stack>
      </Container>
    </MainContainer>
  );
};

export default CardStack;

