import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';

import { styled } from '@mui/material';


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
const Listsubheader = styled(ListSubheader)(({ theme }) => ({
 display:"flex", 
 justifyContent:"center",
  
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


export default function ProjectCAseStudyImage() {
  return (
    <ImageListCont >
      <ImageListItem key="Subheader" cols={3}>
        <Listsubheader >RESPONSIVENESS. PROFICIENCY. COURAGE</Listsubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img maxWidth="50px"
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
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
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisOQCAq6TrAsUQ9bY40h8UQpzovo5sePt-A&usqp=CAU',
    title: 'Scope ',
   
    rows: 1,
    cols: 1,
    featured: false,
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7aSj_aCnTF-B6v3yh4YBGTBS6QhvfaOh4g&usqp=CAU',
    title: 'Planning',
    
  },
  {
    img: 'https://kissflow.com/hubfs/Feature-Image-Business-Collaboration.jpg',
    title: ' Implementation',
   
    
  },
  {
    img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_Artificial_Intelligence_Stats_You_Should_Know_About_in_2021.jpg',
    title: 'Monitoring',
   
    cols: 2,
  },
  // {
  //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  //   title: 'Hats',
  //   author: '@hjrc33',
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  //   title: 'Honey',
  //   author: '@arwinneil',
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
  //   title: 'Basketball',
  //   author: '@tjdragotta',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
  //   title: 'Fern',
  //   author: '@katie_wasserman',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
  //   title: 'Mushrooms',
  //   author: '@silverdalex',
  //   rows: 2,
  //   cols: 2,
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
  //   title: 'Tomato basil',
  //   author: '@shelleypauls',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
  //   title: 'Sea star',
  //   author: '@peterlaster',
  // },
  // {
  //   img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
  //   title: 'Bike',
  //   author: '@southside_customs',
  //   cols: 2,
  // },
];
