import { Box, Container, Typography } from "@mui/material";

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import NavbarCarousal from "./components/navbar/navbarCarousal";
import { Aboutus } from "./components/aboutus/aboutus";
import { Whatwedo } from "./components/aboutus/whatwedo";
import { Getstarted } from "./components/aboutus/getstarted";
import AboutData from "./components/aboutus/aboutusdata";
import { Story } from "./pages/story/story";
import { Footer } from "./components/footer/footer";
import Navigation from "./components/navbar/navigation";

import { FirstSection } from "./pages/about/firstSection/firstSection";
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";
import "./App.css"








function App() {
  return (

<Router>
<Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About/>} />
        
      </Routes>
      <Footer />
    </Router>





    // <Router>
    
    //  
 
    //   <FirstSection/>
     
    //  <NavbarCarousal/>
    //  <Getstarted/>
    //  <Whatwedo/> 
    
    //   <AboutData/>
    //   <Story/>
    //   <Footer/>
    // </Router>
  );
}

export default App;
