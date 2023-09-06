import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";
import gsap from "gsap";

const App = () => {
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  const testimonies = [
    {
      name: "John Doe",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIe4oqWfRd_ALgDUBhMIrwq-YlO4Ruxek_Q&usqp=CAU",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
    {
      name: "Albert Einstein",
      image: "https://i0.wp.com/businessday.ng/wp-content/uploads/2020/08/Untitled-design-2020-08-05T093040.360.png?fit=700%2C400&ssl=1",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from Albert Einstein. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
    {
      name: "James Bond",
      image: "https://www.kingsplace.co.uk/wp-content/uploads/2023/06/The-greatest-Generation-1-2000x1125.jpg",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from James Bond. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
    {
      name: "Eriga Doe",
      image: "https://assets.justenergy.com/wp-content/uploads/2022/10/electric-shock-scientists-connects-two-electric-cables.jpeg",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from Eriga Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
    {
      name: "Moses Pluto",
      image: "https://media.post.rvohealth.io/wp-content/uploads/2020/05/Jump_Fitness_Female_Leap-732x549-Thumbnail-732x549.jpg",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from Eriga Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
    {
      name: "Moshhod boss",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Formation_of_a_Legacy%2C_Hertiage_flight_merges_aviation_past_and_present_86-16-51-22.jpg",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from Eriga Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
  
    {
      name: "Stunt life",
      image: "https://guardian.ng/wp-content/uploads/2018/06/Food-Shopping.jpg",
      text: " This is a testimonial from John Doe. He is very happy with our product This is a testimonial from Eriga Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
    {
      name: "Mercy Johnson",
      image: "https://i.ytimg.com/vi/Rf1pR5aXiwo/maxresdefault.jpg",
      text: "This is a testimonial from John Doe. He is very happy with our product This is a testimonial from Eriga Doe. He is very happy with our product This is a testimonial from John Doe. He is very happy with our product.",
    },
  ];

  useEffect(() => {
    const animateTestimonial = () => {
      const testimonialElement = document.getElementById("testimonial");

      gsap.to(testimonialElement, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          // After animation completion, update the index and reset position
          setTestimonyIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
          testimonialElement.style.transform = "translateX(100%)";
          testimonialElement.style.opacity = 0;

          // Animate the next testimonial
          gsap.to(testimonialElement, {
            x: "0%",
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      });
    };

    const interval = setInterval(animateTestimonial, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Container maxWidth="md" sx={{padding:"40px 0px"}}>
      <Typography variant="h1" align="center" gutterBottom sx={{padding:"30px 0px"}}>
        Customer Testimonials
      </Typography>
      <Testimonial testimony={testimonies[testimonyIndex]} />
    </Container>
  );
};

const Testimonial = ({ testimony }) => {
  const { name, image, text } = testimony;

  return (
    <Box id="testimonial" textAlign="center" display={"flex"} gap={15}>
      <Box>
      <Typography variant="body1">{text}</Typography>
      </Box>
      <Box>
      <img src={image} alt={name} height="200px" style={{ maxWidth: "200px%" , borderRadius:"10px"}} />
      <Typography variant="h2" gutterBottom>
        {name}
      </Typography>
      </Box>
      
    </Box>
  );
};

export default App;
