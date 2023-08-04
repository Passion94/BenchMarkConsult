import React from 'react'
import NavbarCarousal from '../../components/navbar/navbarCarousal'
import { Getstarted } from '../../components/aboutus/getstarted'
import { Whatwedo } from '../../components/aboutus/whatwedo'
import AboutData from '../../components/aboutus/aboutusdata'
import { Story } from '../story/story'
import Expectations from './expectations/expectations'


export const Home = () => {
  return (
    <div>
     <NavbarCarousal/>
     {/* <Expectations/> */}

     <Getstarted/>
    
      {/* <AboutData/> */}
      
     {/* <Whatwedo/> 
     <Story/>  */}
    </div>
  )
}
