import { Box, Container, Typography } from "@mui/material";
import { Navbar } from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavbarCarousal from "./components/navbar/navbarCarousal";
import { Aboutus } from "./components/aboutus/aboutus";
import { Whatwedo } from "./components/aboutus/whatwedo";
import { Getstarted } from "./components/aboutus/getstarted";
import AboutData from "./components/aboutus/aboutusdata";
import { Story } from "./pages/story/story";
import { Footer } from "./components/footer/footer";








function App() {
  return (
    <Router>
    
     <Navbar/>
     
     <NavbarCarousal/>
     <Getstarted/>
     <Whatwedo/> 
    
      <AboutData/>
      <Story/>
      <Footer/>
    </Router>
  );
}

export default App;
