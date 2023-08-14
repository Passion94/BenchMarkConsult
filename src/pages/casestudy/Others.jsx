import { Box, Container, Typography, styled } from '@mui/material'
import React from 'react'
import EastIcon from '@mui/icons-material/East';



const BoxOne = styled(Box)(({ theme }) => ({
 
  height:"200px", 
  width:"200px",
   background:"black",
   position:"absolute",
   right:"-50px",
   [theme.breakpoints.down('1025')]: {
    height:"230px", 
    width:"230px",

     },
   [theme.breakpoints.down('913')]: {
    height:"190px", 
    width:"190px",

     },
     [theme.breakpoints.down('801')]: {
      height:"320px", 
      width:"320px",
  
       },
       [theme.breakpoints.down('713')]: {
        height:"310px", 
        width:"310px",
    
         },
       [theme.breakpoints.down('641')]: {
        height:"300px", 
        width:"300px",
    
         },
       [theme.breakpoints.down('602')]: {
        height:"250px", 
        width:"250px",
    
         },

         [theme.breakpoints.down('481')]: {
          height:"230px", 
            width:"230px",
      
           },
         [theme.breakpoints.down('415')]: {
          height:"200px", 
          width:"200px",
      
           },

           [theme.breakpoints.down('394')]: {
            height:"180px", 
            width:"180px",
        
             },

           [theme.breakpoints.down('391')]: {
            height:"185px", 
            width:"185px",
        
             },
             [theme.breakpoints.down('376')]: {
              height:"176px", 
              width:"176px",
          
               },
               [theme.breakpoints.down('361')]: {
                height:"160px", 
                width:"160px",
            
                 },
  }))
  
  const BoxTwo = styled(Box)(({ theme }) => ({
    border:"2px solid white", 
    height:"200px", 
    width:"200px",
    // maxWidth:"400px",
    // maxHeight:"400px",
     background:"blue",
     [theme.breakpoints.down('1025')]: {
      height:"230px", 
      width:"230px",
  
       },
     [theme.breakpoints.down('913')]: {
      height:"190px", 
      width:"190px",
  
       },
       [theme.breakpoints.down('801')]: {
        height:"320px", 
        width:"320px",
    
         },
         [theme.breakpoints.down('713')]: {
          height:"310px", 
          width:"310px",
      
           },
         [theme.breakpoints.down('641')]: {
          height:"300px", 
          width:"300px",
      
           },
         [theme.breakpoints.down('602')]: {
          height:"250px", 
          width:"250px",
      
           },
           [theme.breakpoints.down('481')]: {
            height:"230px", 
            width:"230px",
        
             },
           [theme.breakpoints.down('415')]: {
            height:"200px", 
            width:"200px",
        
             },

             [theme.breakpoints.down('394')]: {
              height:"180px", 
              width:"180px",
          
               },

             [theme.breakpoints.down('391')]: {
              height:"185px", 
              width:"185px",
          
               },

               [theme.breakpoints.down('376')]: {
                height:"176px", 
                width:"176px",
            
                 },
                 [theme.breakpoints.down('361')]: {
                  height:"160px", 
                  width:"160px",
              
                   },
    }))


    const Title = styled(Container)(({ theme }) => ({
      fontWeight: '600',
      marginBottom: '10px',
      color: 'black',
      display:"flex",
      alignItems:"center",
      justifyContent:"flex-end",
     
      fontSize:"1.5em",
      
      letterSpacing:"0.05em",
     
    
    
     
    }));


    const Desc = styled(Typography)(({ theme, showFullText }) => ({
    
      color: 'white',
      fontWeight: '600',
      marginBottom: '30px',
      fontSize: '1em',
      lineHeight: '24px',
      padding:"15px 10px",
      fontFamily: 'Archivo Narrow',
      [theme.breakpoints.down('913')]: {
        fontSize: '.95em',
    
         },
         [theme.breakpoints.down('801')]: {
          fontSize: '1.5em',
          lineHeight:"36px",
          padding:"20px 15px",
      
           },
           [theme.breakpoints.down('602')]: {
            fontSize: '1em',
            lineHeight:"36px",
            padding:"15px 20px",
        
             },
             [theme.breakpoints.down('415')]: {
              fontSize: '1em',
              lineHeight:"24px",
              padding:"5px 10px",
          
               },

               [theme.breakpoints.down('394')]: {
                height:"180px", 
                width:"180px",
                fontSize: '.8em',
                padding:"10px 5px 5px 5px",
                 },
               [theme.breakpoints.down('391')]: {
                fontSize: '.8em',
                lineHeight:"24px",
                padding:"5px 10px",
            
                 },
                 [theme.breakpoints.down('361')]: {
                  fontSize: '.7em',
                  lineHeight:"24px",
                  padding:"10px 10px",
                  paddingRight:"70px",
                  wordWrap:"break-word",
              
                   },
           
    }));


export const Others = () => {
  return (
    <Box sx={{}}>
      
        <Container sx={{display:"flex",}}
        maxWidth="xl"
        >
          <Box sx={{position:"relative"}}>
          <Title>Edtify</Title>
          <BoxOne >
           <Desc> Creating an environment for a seamless learning concept to enhance
             growth and simmilation using artificil intelligence and other equiped knowledge </Desc>
          </BoxOne>
          </Box>
          <Box>
          <BoxTwo > 
          <img 
           className='caseStudytwoimg'
           src='https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w='/>
         <Title sx={{  padding:"5px",}}>View <EastIcon/></Title>
          </BoxTwo>
         
          </Box>
        </Container>
    </Box>
  )
}
