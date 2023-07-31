import React from 'react'
import NavbarCarousal from '../../components/navbar/navbarCarousal'
import { Getstarted } from '../../components/aboutus/getstarted'
import { Whatwedo } from '../../components/aboutus/whatwedo'
import AboutData from '../../components/aboutus/aboutusdata'
import { Story } from '../story/story'

export const Home = () => {
  return (
    <div>
     <NavbarCarousal/>
     <Getstarted/>
     <Whatwedo/> 
    
      <AboutData/>
  
     <Story/>
    </div>
  )
}
