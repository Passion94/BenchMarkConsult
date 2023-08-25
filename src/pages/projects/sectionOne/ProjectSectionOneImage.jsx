import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Typography, styled } from '@mui/material';


const Desc = styled(ImageListItemBar)(({ theme }) => ({
  color: 'white',
 
  fontWeight: 500, /* Remove quotes around 500 */
  
  fontSize: '1em',
  lineHeight: '46px',
  
  fontFamily: "Ubuntu, Helvetica, Arial, sans-serif",
 
  [theme.breakpoints.down('415')]: {
    fontSize: ".7em",
    lineHeight:"36px"
  },
}));

const ImageListCont = styled(ImageList)(({ theme }) => ({
  width: 1350,
   height: 500,
   
   [theme.breakpoints.down('1025')]: {
    width: 900,
   height: 380,
  },
  [theme.breakpoints.down('913')]: {
    width: 800,
   height: 350,
  },
  [theme.breakpoints.down('811')]: {
    width: 870,
   height: 350,
  },
  [theme.breakpoints.down('769')]: {
    width: 600,
   height: 500,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('641')]: {
    width: 500,
   height: 450,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('602')]: {
    width: 458,
   height: 450,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('541')]: {
    width: 417,
   height: 450,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('481')]: {
    width: 380,
   height: 430,
   paddingTop:"50px",
   
  },
  [theme.breakpoints.down('415')]: {
    width: 360,

   paddingTop:"40px",
   
  },
  [theme.breakpoints.down('394')]: {
    width: 355,

   paddingTop:"40px",
   
  },
  [theme.breakpoints.down('385')]: {
    width: 340,
    height: 410,
   paddingTop:"30px",
   
  },
  [theme.breakpoints.down('376')]: {
    width: 320,

   paddingTop:"40px",
   
  },
}));
const Listsubheader = styled(Typography)(({ theme }) => ({
 display:"flex", 
 justifyContent:"center",
 
 background:"white",
 padding:"10px 20px",
 fontWeight: '500',
 
 fontFamily:"Ubuntu, Helvetica,Arial, sans-serif",
 fontSize: '.9em', 
 color: '#9F9F9F',
 
 
 textTransform:"uppercase",
  
 [theme.breakpoints.down('541')]: {
  fontSize: ".8em",
  
},
 
  [theme.breakpoints.down('415')]: {
    fontSize: ".68em",
    
  },
  [theme.breakpoints.down('394')]: {
    fontSize: ".65em",
    
  },
}));


export default function ProjectSectionOneImage() {
  return (
    <ImageListCont >
      <ImageListItem key="Subheader" cols={2}>
        <Listsubheader >RESPONSIVENESS. PROFICIENCY. COURAGE</Listsubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{maxWidth:"297.5px", maxHeight:"168px"}}
          />
          <Desc
            title={item.title}
            />
        </ImageListItem>
      ))}
    </ImageListCont>
  );
}

const itemData = [
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
  {
    img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Artificial_Intelligence_Stats_You_Should_Know_About_in_2021.jpg',
    title: 'Critical thinking',
   
    cols: 2,
  },
  
];
