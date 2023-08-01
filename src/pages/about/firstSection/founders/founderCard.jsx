import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Button, Container, Typography, styled } from '@mui/material';
import Founder from './founders';

const StyledBtn = styled(Button)({
   
    textDecoration:"none",
    marginTop:"70px",
    fontSize:"1rem",
   border:"1px solid rgb(229, 95, 76)",
    fontWeight:"900",
    padding:"16px 20px",
    
   
   
  
  });

  const Desc = styled(Typography)({
    fontWeight: '400',
    color: 'black',
    marginBottom:"5%",
    fontSize: 'clamp(8px, 3vw, 16px)',
    paddingLeft:"25px",
    paddingRight:"25px",
     // Responsive styles using media queries
    
  '@media (max-width: 768px)': {
    fontSize: 'clamp(8px, 2.5vw, 14px)',
    paddingLeft: '20px',
    paddingRight: '10px',
  },
  '@media (max-width: 480px)': {
    fontSize: 'clamp(8px, 2vw, 12px)',
    paddingLeft: '5px',
    paddingRight: '5px',
  },
  '@media (min-width: 280px)': {
    // fontSize: 'clamp(8px, 2vw, 12px)',
    paddingLeft: '25px',
    paddingRight: '25px',
  },
  })
  const Header = styled(Typography)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '400',
    justifyContent: 'flex-Start',
    paddingLeft:"25px",
    fontSize: 'clamp(16px, 5vw, 44px)',
    fontFamily: 'Barlow Condensed',
    marginTop:"10px",
    
   
    
  });
  

  const Title = styled(Typography)({
    color: 'rgb(117, 117, 117)',
    fontWeight: '400',
    justifyContent: 'flex-Start',
    marginBottom:"10%",
    fontSize: 'clamp(32px, 5vw, 88px)',
    fontFamily: 'Barlow Condensed',
    marginTop:"10px",
    paddingLeft:"25px"
    
  });

const FounderCard = () => {
  const founderData = [
    { id:1,
      title: "Moses Peter",
      image: "https://scontent.flos2-1.fna.fbcdn.net/v/t31.18172-8/21246165_1845601805479999_3256231809904090909_o.jpg?stp=dst-jpg_s206x206&_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeETLecH0-0Qgr2-G9B3TX04TM6bueI96phMzpu54j3qmJdNWDt4r44zRoXtVu2xESTvPhFwtoErrxoMybkegPIQ&_nc_ohc=zAR8vupOiSEAX8rLhXy&_nc_ht=scontent.flos2-1.fna&oh=00_AfATYPzahjLsSTY0e_DTWMV6PKuy7DP6tUixvUb4g4XWzg&oe=64EF0784",
      description: "CEO, Co-founder",
      readMoreLink: "https://example.com/software-engineering"
    },
    { id:2,
      title: "Moses Peter",
      image: "https://scontent.flos2-2.fna.fbcdn.net/v/t1.18169-9/13344741_1224386504268202_9083860043549600478_n.jpg?stp=c0.52.206.206a_dst-jpg_p206x206&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHPjDwjkv8_IzTBK-xdja4_CRiAQdLwUk8JGIBB0vBST5lhPatqkfpXCkvjKrcwU5qf-4U0aTL3Y5OGRpJ5HgzD&_nc_ohc=UF8ufPsWPksAX9zCQVg&_nc_ht=scontent.flos2-2.fna&oh=00_AfApGX7GGFl4lNF8d4R1nl_2C9VM_p9ncw8DoUMu2wy69g&oe=64EF0A07",
      description: "CEO, Co-founder",
      readMoreLink: "https://example.com/software-engineering"
    },
   
    { id:3,
      title: "Moses Peter",
      image: "https://scontent.flos2-1.fna.fbcdn.net/v/t31.18172-8/21246165_1845601805479999_3256231809904090909_o.jpg?stp=dst-jpg_s206x206&_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeETLecH0-0Qgr2-G9B3TX04TM6bueI96phMzpu54j3qmJdNWDt4r44zRoXtVu2xESTvPhFwtoErrxoMybkegPIQ&_nc_ohc=zAR8vupOiSEAX8rLhXy&_nc_ht=scontent.flos2-1.fna&oh=00_AfATYPzahjLsSTY0e_DTWMV6PKuy7DP6tUixvUb4g4XWzg&oe=64EF0784",
      description: "CEO, Co-founder",
      readMoreLink: "https://example.com/software-engineering"
    }, 
    { id:4,
      title: "Moses Peter",
      image: "https://scontent.flos2-2.fna.fbcdn.net/v/t1.18169-9/13344741_1224386504268202_9083860043549600478_n.jpg?stp=c0.52.206.206a_dst-jpg_p206x206&_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHPjDwjkv8_IzTBK-xdja4_CRiAQdLwUk8JGIBB0vBST5lhPatqkfpXCkvjKrcwU5qf-4U0aTL3Y5OGRpJ5HgzD&_nc_ohc=UF8ufPsWPksAX9zCQVg&_nc_ht=scontent.flos2-2.fna&oh=00_AfApGX7GGFl4lNF8d4R1nl_2C9VM_p9ncw8DoUMu2wy69g&oe=64EF0A07",
      description: "CEO, Co-founder",
      readMoreLink: "https://example.com/software-engineering"
    }, 
    { id:5,
      title: "Moses Peter",
      image: "https://scontent.flos2-1.fna.fbcdn.net/v/t31.18172-8/21246165_1845601805479999_3256231809904090909_o.jpg?stp=dst-jpg_s206x206&_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeETLecH0-0Qgr2-G9B3TX04TM6bueI96phMzpu54j3qmJdNWDt4r44zRoXtVu2xESTvPhFwtoErrxoMybkegPIQ&_nc_ohc=zAR8vupOiSEAX8rLhXy&_nc_ht=scontent.flos2-1.fna&oh=00_AfATYPzahjLsSTY0e_DTWMV6PKuy7DP6tUixvUb4g4XWzg&oe=64EF0784",
      description: "CEO, Co-founder",
      readMoreLink: "https://example.com/software-engineering"
    }
  
    
  ];

  return (
    <Box  sx={{padding: {sm:"0px ", md:"0px 20px 0px 0px", lg:"0 0px 0px 50px"}}}>
        <Title> About</Title>
        <Header> We work remotely</Header>
        <Desc>When wireless is perfectly applied the whole earth will
           be converted into a huge brain, which in fact it is, all things being 
           particles of a real and rhythmic whole. We shall be able to communicate 
           with one another instantly, irrespective of distance.
           <Typography sx={{fontWeight:"600"}}>
           Nikola Tesla


           </Typography>
           
           </Desc>

    <div>
      {/* Other components */}
      <Founder founderData={founderData} />
      {/* Other components */}
    </div>
    {/* <Container sx={{display:"flex", justifyContent:"center"}}>
    
    </Container> */}
    </Box>
  );
};

export default FounderCard;