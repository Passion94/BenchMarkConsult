

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import { Home } from "./pages/home/home";
import "./App.css";
import ServicesPage from "./pages/services/servicesPage";
import ResourcesPage from "./pages/resources/resourcesPage";
import { About } from './pages/about/about';
import { Project } from './pages/projects/Project';
import ProjectCaseStudy from './pages/projects/sectionTwo/ProjectCaseStudy';
import AllCaseStudy from './pages/projects/sectionTwo/AllCaseStudy';
import Navigate from './components/navbar/Navigate';
import ContactForm from './components/navbar/ContactForm';
import FooterSection from './components/footer/FooterSection';











function App() {
  return (
   
<Router>
<Navigate/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
        <Route path="/projects/:projectId"element={<ProjectCaseStudy/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/casestudy" element={<AllCaseStudy/>} />
        <Route path="/Form" element={<ContactForm/>} />
        
        {/* <Route path="/story" element={<ClientStories/>} /> */}
        
        
      </Routes>
       <FooterSection/>
    </Router>
   
    


    // <Router>
    
    //  
 
    //   <FirstSection/>
     
    //  <NavbarCarousal/>
    //  <Getstarted/>
    //  <Whatwedo/> 
    
    //   <AboutData/>
    //   <Story/>
     
    // </Router>
  );
}

export default App;
