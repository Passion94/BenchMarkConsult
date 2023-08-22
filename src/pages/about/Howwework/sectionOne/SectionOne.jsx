import React from 'react'
import SectionOneImage from './SectionOneImage'
import { SectionOneText } from './SectionOneText'
import { Box, Container, Typography, styled } from '@mui/material'
import "./sectionOne.css"

const SectionOneContainer = styled(Container)(({ theme }) => ({
    display:"flex",
    gap:"20px",
    marginTop:"200px",
    background:"green",
    paddingTop:"50px", 
    zIndex:"-1",
    paddingBottom:"50px",
    width:"1338px", 
    
    [theme.breakpoints.down('1441')]: {
        
        width:"1257px", 
      },
      [theme.breakpoints.down('1367')]: {
        
        width:"1210px", 
      },
    
      [theme.breakpoints.down('1281')]: {
        
        width:"1153px", 
      },
      [theme.breakpoints.down('1205')]: {
        
        width:"932px", 
      },
      [theme.breakpoints.down('913')]: {
        
        width:"826px", 
      },
    
      [theme.breakpoints.down('821')]: {
        
        width:"762px", 
      },
      [theme.breakpoints.down('811')]: {
        
        width:"756px", 
      },
      [theme.breakpoints.down('801')]: {
        
        width:"732px", 
      },
      [theme.breakpoints.down('769')]: {
        justifyContent:"center",
        alignItems:"center",
        width:"700px", 
        flexDirection:"column"
      },
      [theme.breakpoints.down('641')]: {
        
        width:"605px", 
        
      },
      [theme.breakpoints.down('602')]: {
        
        width:"554px", 
        
      },
      [theme.breakpoints.down('541')]: {
        width:"485px",  
      },
      [theme.breakpoints.down('481')]: {
        
        width:"445px", 
        
      },
      [theme.breakpoints.down('415')]: {
        
        width:"376px",  
      },
      [theme.breakpoints.down('394')]: {
        
        width:"359px",  
      },
      [theme.breakpoints.down('385')]: {
        
        width:"350px",  
      },
      [theme.breakpoints.down('376')]: {
        
        width:"343px",  
      },
      [theme.breakpoints.down('361')]: {
        
        width:"336px",  
      },
  }));



  const SectionContainerBox = styled(Box)(({ theme }) => ({
   marginLeft:'18px',
   
   [theme.breakpoints.down('1441')]: {
    marginLeft:"17px",
    
  },
  [theme.breakpoints.down('821')]: {
    marginLeft:"6px",
    
  },
  [theme.breakpoints.down('811')]: {
    marginLeft:"4px",
    
  },
  [theme.breakpoints.down('769')]: {
    marginLeft:"4px",
    
  },
  
  }));

  const Header = styled(Typography)(({ theme }) => ({
    color: 'green',
    padding:"80px 0px",
    display:"flex",
    justifyContent:"center",
    fontWeight: '600',
    marginBottom: '30px',
    fontSize: '2.4em',
    fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
    lineHeight: '36px',
    letterSpacing:"normal",
    fontStyle: 'normal',
    [theme.breakpoints.down('1025')]: {
    padding:"40px 200px",
    
    },
    [theme.breakpoints.down('913')]: {
      paddingLeft:"170px",
      paddingRight:"170px",
      },

      [theme.breakpoints.down('821')]: {
        paddingLeft:"150px",
        paddingRight:"120px",
        },

        [theme.breakpoints.down('769')]: {
          paddingLeft:"125px",
          paddingRight:"50px",
          },
          [theme.breakpoints.down('641')]: {
            paddingLeft:"60px",
            paddingRight:"0px",
            },
            [theme.breakpoints.down('602')]: {
              paddingLeft:"40px",
              paddingRight:"0px",
              },
              [theme.breakpoints.down('541')]: {
                paddingLeft:"53px",
                paddingRight:"0px",
                fontSize:"2em",
                },
                [theme.breakpoints.down('481')]: {
                  paddingLeft:"22px",
                  paddingRight:"0px",
                  fontSize:"2em",
                  },
                  [theme.breakpoints.down('415')]: {
                    paddingLeft:"23px",
                    paddingRight:"10px",
                    fontSize:"1.7em",
                    },
                    [theme.breakpoints.down('413')]: {
                      paddingLeft:"23px",
                      paddingRight:"0px",
                      fontSize:"1.68em",
                      },
                      [theme.breakpoints.down('394')]: {
                        paddingLeft:"23px",
                        paddingRight:"0px",
                        fontSize:"1.6em",
                        },
                        [theme.breakpoints.down('391')]: {
                          paddingLeft:"21px",
                          
                          },
                          [theme.breakpoints.down('385')]: {
                            paddingLeft:"21px",
                            fontSize:"1.57em",
                            },
                            [theme.breakpoints.down('376')]: {
                              paddingLeft:"19px",
                              fontSize:"1.55em",
                              },
                              [theme.breakpoints.down('361')]: {
                                paddingLeft:"15px",
                                fontSize:"1.5em",
                                },
  }));


export const SectionOne = () => {
  return (
    <Box className="SectionOneContainer">
        
        <Box sx={{ background:"white"}}>
        <Header >We are at the forefront of technological advancements. </Header >
        </Box>
       <SectionContainerBox  >
        <SectionOneContainer maxWidth="xl">

<SectionOneImage />
<SectionOneText/>
</SectionOneContainer>
</SectionContainerBox>
    </Box>
   
  )
}
