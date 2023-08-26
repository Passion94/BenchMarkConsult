import * as React from 'react';

import { Box, Container, Typography} from '@mui/material'

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';


import { styled } from '@mui/material';









const Header = styled(Typography)(({ theme }) => ({
    color:'white',
    fontWeight: '900',
    display:"flex",
    justifyContent:"center",
    paddingTop:"10px",
   paddingBottom:"30px",
    fontSize: '2.4em',
   
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    fontStyle: "normal",
    textTransform:"initial",
    lineHeight:"36px",
    
    [theme.breakpoints.down('769')]: {
     position:'absolute',
     top:"-630px",
    

    },
    [theme.breakpoints.down('641')]: {
      position:'absolute',
      top:"-570px",
     },
     [theme.breakpoints.down('541')]: {
     fontSize:"2em",
     top:"-567px",
     },
     [theme.breakpoints.down('481')]: {
      position:'absolute',
      top:"-545px",
     
 
     },
    
     [theme.breakpoints.down('415')]: {
      position:'absolute',
     
      fontSize:"1.7em",
      left:"67px"
     
 
     },
     [theme.breakpoints.down('413')]: {
      fontSize:"1.68em",
     
 
     },
     [theme.breakpoints.down('394')]: {
      fontSize:"1.6em",
     
 
     },
     [theme.breakpoints.down('385')]: {
      position:'absolute',
      top:"-517px",
      
      fontSize:"1.57em",
 
     },
     [theme.breakpoints.down('376')]: {
      position:'absolute',
      top:"-530px",
     
      fontSize:"1.55em",
 
     },
     [theme.breakpoints.down('361')]: {
      
      fontSize:"1.5em",
      },
  }));
  const ImageListCont = styled(ImageList)(({ theme }) => ({
   paddingLeft:"20px",
     width:"1000px",
     height:"800px"
    
  }));
  const Desc = styled(Typography)(({ theme }) => ({
    color: 'white',
   
    fontWeight: 500, /* Remove quotes around 500 */
    
    fontSize: '1em',
    lineHeight: '46px',
    
    fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
   
    [theme.breakpoints.down('1025')]: {
        lineHeight: '30px',
    },
    [theme.breakpoints.down('913')]: {
        lineHeight: '28px',
        fontSize:".9em",
    },
    [theme.breakpoints.down('769')]: {
      lineHeight: '36px',
      fontSize:"1em",
  },
  }));
  
  const itemData = [
    {
      summary: "At Prehood, our work philosophy is built on the pillars of communication, collaboration, and critical thinking. We believe that successful software development and consultancy go beyond technical expertise – they thrive on effective teamwork, innovative problem-solving, and transparent client relationships.",
      gallery: [
        {
          img: 'https://www.impellam.com/-/media/impellam-group/blog-images/apsco-blob-header-(1).png',
          title: 'Technical expertise',
          rows: 2,
          cols: 2,
          featured: true,
        },
        {
          img: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/05/Image-6.jpg',
          title: 'Communication',
         
        },
        {
          img: 'https://kissflow.com/hubfs/Feature-Image-Business-Collaboration.jpg',
          title: 'Collaboration',
          
        },
       
      ],
      milestone:{

      }
    },
  ];
  



export const ProjectCaseText = () => {
  return (
    <Container sx={{background:"rgb(45, 45, 191)"}}>
     
    <Box>
<Header>
 summary
</Header>
<Desc>
{itemData[0].summary}
</Desc>
<Box >
<Header>Gallery</Header>
         <ImageListCont >
      <ImageListItem key="Subheader" cols={1}>
       
      </ImageListItem>
      {itemData[0].gallery.map((galleryItem) => (
            <ImageListItem key={galleryItem.title} cols={galleryItem.cols || 1} >
              <img 
                src={galleryItem.img}
                alt={galleryItem.title}
                loading="lazy" 
              />
             
          <Desc
            title={galleryItem.title}
            />
        </ImageListItem>
      ))}
    </ImageListCont>
    </Box>
</Box>
    </Container>
  )
}
