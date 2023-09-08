import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove"; // Import the RemoveIcon
import { Link } from "react-router-dom";


  const Faq = () => {
    const faqData = [
      {
        question: "What is Lorem Ipsum?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "Why do we use it?",
        answer:
          " It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a readerIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader It is a long established fact that a reader.",
      },
      {
        question: "Where does it come from?",
        answer:
          "It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a readerContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
      },
      {
        question: "What is Lorem Ipsum?",
        answer:
          "It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a readerLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "What is Lorem Ipsum?",
        answer:
          " It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a reader It is a long established fact that a readerLorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
     
     
      
    
  
    
   
    ];
  const [expanded, setExpanded] = useState(`panel0`);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Container>
      <Typography
        variant="h2"
        align="center"
        sx={{ padding: "50px 0px 20px 0px" }}
      >
        Have questions about working at Prehood? Read answers to frequently
        asked questions to help you
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion
          sx={{
            backgroundColor: "white",
            borderRadius: "5px",

            "&.Mui-expanded": {
              backgroundColor: "white",
            },
          }}
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={
              expanded === `panel${index}` ? (
                <RemoveIcon sx={{ marginTop: "-30px", color: "transparent" }} />
              ) : (
                <AddIcon sx={{ marginTop: "-30px", color: (theme) => theme.palette.primary.second }} />
              )
            }
            sx={{
              margin: "0px",
              padding: "0px",
              marginBottom: "-40px",
            }}
          >
            <Typography variant="body1" sx={{ padding: "10px 10px" }}>
              {faq.question}
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ backgroundColor: (theme) => theme.palette.primary.first }}>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Link className="link">
        <Typography variant="body2" >
          View more
        </Typography>
      </Link>
    </Container>
  );
};

export default Faq;





