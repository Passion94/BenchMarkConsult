import { Typography, styled } from '@mui/material'
import React from 'react'




const Header = styled(Typography)(({ theme }) => ({
    color:'white',
    fontWeight: '900',
    display:"flex",
    
   
    fontSize: '1em',
    paddingTop: '10px',
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    fontStyle: "normal",
    textTransform:"uppercase",
    lineHeight:"46px",
    [theme.breakpoints.down('1025')]: {
      justifyContent:"center",
    },
    [theme.breakpoints.down('415')]: {
      fontSize:".8em",
    },
   
  }));

  const Desc = styled(Typography)(({ theme }) => ({
    color: 'white',
   
    fontWeight: 500, /* Remove quotes around 500 */
    marginBottom: '30px',
    fontSize: '1em',
    lineHeight: '46px',
    
    fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
   
    [theme.breakpoints.down('415')]: {
      fontSize: ".9em",
    },
  }));
  




export const HowWeWorkContent = () => {
  return (
    <div>
<Header>
    How we work
</Header>
<Desc>
At Prehood, our work philosophy is built on the pillars of communication,
collaboration, and critical thinking. We believe that successful software
development and consultancy go beyond technical expertise – they thrive
on effective teamwork, innovative problem-solving, and transparent client relationships.we define our success not just by completed projects, but by the enduring relationships we build. By emphasizing communication, collaboration, and critical thinking, we create a dynamic partnership with our clients, offering holistic solutions that transform ideas into reality. Our commitment to these principles ensures that every project is a journey of shared knowledge, creativity, and lasting impact.
</Desc>

    </div>
  )
}
