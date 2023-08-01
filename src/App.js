

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Navigation from "./components/navbar/navigation";

import { FirstSection } from "./pages/about/firstSection/firstSection";
import { About } from "./pages/about/about";
import { Home } from "./pages/home/home";
import "./App.css"
import { AllFooterContents } from "./components/footer/allFooterContents";
import ServicesPage from "./pages/services/servicesPage";
import ResourcesPage from "./pages/resources/resourcesPage";
import { ProjectPage } from './pages/projects/projectPage';
import ClientStories from "./pages/clientStory/clientStories";









function App() {
  return (

<Router>
<Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/services" element={<ServicesPage/>} />
        {/* <Route path="/resources" element={<ResourcesPage/>} /> */}
        <Route path="/project" element={<ProjectPage/>} />
        {/* <Route path="/story" element={<ClientStories/>} /> */}
        
        
      </Routes>
      <AllFooterContents />
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
