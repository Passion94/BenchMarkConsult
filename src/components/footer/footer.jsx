import { Image } from '@mui/icons-material'
import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const sectionOne={
display:"flex",
alignItems:"center",
justifyContents:"center",
alignItems:"center",
columnGap:"150px",
paddingBottom:"70px"

}

const systemButton={
    background:"rgb(47, 163, 107)",
    color:"white",
    borderradius:"2px",
    textDecoration:"none",
    height:"50px",
    fontWeight:"500",
    letterSpacing:"0.2em",
    fontSize:".7em",
    marginLeft:"70px",
    textAlign:"center"

}

const sectionTwo={
    display:"flex",
    alignItems:"center",
    justifyContents:"center",
    alignItems:"center",
    columnGap:"200px",
    paddingLeft:"232px",
    color:"rgb(117, 117, 117)"
    
    }

const footerLinkContainer={
    display:"flex",
    alignItems:"center",
    justifyContents:"center",
    gap:"120px",
    columnGap:"120px",
    paddingLeft:"232px",
   
    }
    const footerLinks={
        alignItems:"flex-start",
        gap:"5px",
        flexDirection:"column",
        paddingTop:"20px"
        }


   
    

export const Footer = () => {
  return (
    <Box sx={{marginTop:"200px", background:"black", color:"white",padding:"100px 100px 30px 100px"}}>
        <Box style={sectionOne}>
        
        <Typography> 
            <img
             src="/images/Logo.png"/>

        </Typography>
        <Typography>Subscribe to our newsletter:<Button sx={systemButton}> Subscribe</Button></Typography>
        
        </Box>
        
        <Box >
        
        <Box style={sectionTwo}>
            <Typography>Sitemap</Typography>
            <Typography>Follow US</Typography>
            <Typography sx={{color:"rgb(117, 117, 117)"}}>contact@benchmark.com <br/>

            Chez Modality, 50 rue Bichat
            75010 Paris
            France
           
            </Typography>
           
        </Box>
        <Box style={footerLinkContainer}>
        <Typography style={footerLinks} >
                
                <Typography> Services </Typography>
                <Typography>Projects </Typography>
                <Typography> Experiments </Typography>
                <Typography> About </Typography>
                <Typography> Stories </Typography>
                <Typography> Resources </Typography>
                <Typography> Guidelines for your project</Typography>
            </Typography>
            <Typography style={footerLinks} >
                
                <Typography> Linkdin </Typography>
                <Typography>Twitter </Typography>
                <Typography> Instagram </Typography>
                <Typography> Medium </Typography>
                <Typography> Thread </Typography>
                
            </Typography>
         
        </Box>
        
        </Box>

        <Typography sx={{color:"rgb(117, 117, 117)", marginTop:"70px"}}>&copy; {new Date().getFullYear()} BenchMark. All rights reserved.</Typography>

    </Box>
  )
}


{/*
        <Box>
        
        <Box>
       
        
        <Box>
            <Box>
                Sitemap
            </Box>
            <Box>
                Follow US
            </Box>
            <Box>
             Contact@benchmark.com
            </Box>
        </Box>
        </Box>
            
        </Box> */}