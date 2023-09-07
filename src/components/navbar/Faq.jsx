import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const Faq = () => {
  const faqData = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
    {
        question: "What is Lorem Ipsum?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "Why do we use it?",
        answer:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    
    
  
     
    
    // Add more FAQ items here
  ];

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Box>
        <Typography variant="h2" sx={{padding:"10px 0px"}}>Frequently asked questions</Typography>
      {faqData.map((faq, index) => (
        <Accordion
        sx={{backgroundColor:(theme) => theme.palette.primary.main}}
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{color:(theme) => theme.palette.primary.second}} />}>
            <Typography variant="body1" sx={{backgroundColor:(theme) => theme.palette.primary.second, color:"inherit", padding:"0px 10px"}}>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{backgroundColor:(theme) => theme.palette.primary.second}}>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        
        </Accordion>
      ))}
       <Typography mt={5} variant="body1">Got more questions, click<Link>  here </Link></Typography> 
    </Box>
  );
};

export default Faq;
