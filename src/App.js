

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import { Home } from "./pages/home/home";
import "./App.css";
import { AllFooterContents } from "./components/footer/allFooterContents";
import ServicesPage from "./pages/services/servicesPage";
import ResourcesPage from "./pages/resources/resourcesPage";

import ClientStories from "./pages/clientStory/clientStories";
import Navigation from './components/navbar/navigation';
import { About } from './pages/about/about';
import { Project } from './pages/projects/Project';

import ProjectCaseStudy from './pages/projects/sectionTwo/ProjectCaseStudy';
import AllCaseStudy from './pages/projects/sectionTwo/AllCaseStudy';











function App() {
  return (

<Router>
<Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/projects/:projectId"element={<ProjectCaseStudy/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/casestudy" element={<AllCaseStudy/>} />
        AllCaseStudy
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
