import React, { useState }  from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';




const Header = styled(Typography)(({ theme }) => ({
    color:'white',
    // #403F3F
    fontWeight: '900',
    display:"flex",
    justifyContent:"center",
    marginBottom: '50px',
    fontSize: '1em',
   
    fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
    // fontWeight: "normal",
    fontStyle: "normal",
    textTransform:"uppercase",
    lineHeight:"36px",
    [theme.breakpoints.down('913')]: {
      marginBottom: '20px',
    },
    [theme.breakpoints.down('541')]: {
        fontSize: '.9em',
    },
    [theme.breakpoints.down('482')]: {
        fontSize: '.8em',
        marginBottom: '50px',
    },
   
   
  }));



const cardData = [
  {id:1,
    title: 'Edtify',
    image: 'https://planetyouth.org/wp-content/uploads/2022/01/10-STEPS2.png',
    description: "Education, saas",
  },
  {id:2,
    title: 'Afridemics',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SrCagx2uh_DKLCWNAZdSkUJNfR_PC5VVGA&usqp=CAU',
    description: "Ai Chat bot ",
   },

  {id:3,
    title: 'Healmass',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-89neTDVJ52CNyvX3ynJti130rAyhyXxHQ&usqp=CAU',
    description: "Education, Saas",
  },
  {id:4,
    title: 'Healmass',
    image: 'https://www.projectmanager.com/wp-content/uploads/2023/02/Process-implementation.jpg',
    description: "Education, Saas",
  },
  {id:5,
    title: 'Healmass',
    image: 'https://system-concepts.com/wp-content/uploads/2021/06/Design-Thinking-Implement.png',
    description: "Education, Saas",
  },
  {id:6,
    title: 'Healmass',
    image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3jtKtCzRwk0smD0Ko1ipR/52b16646dc4a9da30089d6925fbf1b2e/GettyImages-1346563196__3_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=',
    description: "Education, Saas",
  },
  {id:7,
    title: 'Healmass',
    image: 'https://multichannelmerchant.com/wp-content/uploads/2017/06/system-implementation-man-with-gears-feature.jpg',
    description: "Education, Saas",
  },
  {id:8,
    title: 'Healmass',
    image: 'https://media.licdn.com/dms/image/C5612AQEF5XxV4WtgMQ/article-cover_image-shrink_720_1280/0/1637139465254?e=2147483647&v=beta&t=nna3VoC6uquO2F3EvxzHnmjwM5Qjhtl0e-afaARXFp0',
    description: "Education, Saas",
  },
  {id:9,
    title: 'Healmass',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_-KPznbG0XAozDPraGrfxTy_V-NOQWw_hA&usqp=CAU',
    description: "Education, Saas",
  },
  {id:10,
    title: 'Healmass',
    image: 'https://assets.asana.biz/transform/225d45ab-e570-4fd0-aa56-4ba1331b3ce2/article-project-planning-implementation-plan-2x',
    description: "Education, Saas",
  },
  
  {id:11,
    title: 'Healmass',
    image: 'https://www.erpadvisorsgroup.com/hubfs/erp-implementation-plan.jpg',
    description: "Education, Saas",
  },
  {id:12,
    title: 'Healmass',
    image: 'https://static.wixstatic.com/media/75077a_e061453f4d054983bed2122e1c02db2a~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75077a_e061453f4d054983bed2122e1c02db2a~mv2.png',
    description: "Education, Saas",
  },
  {id:13,
    title: 'Healmass',
    image: 'https://assets.asana.biz/transform/225d45ab-e570-4fd0-aa56-4ba1331b3ce2/article-project-planning-implementation-plan-2x',
    description: "Education, Saas",
  },
  
  {id:14,
    title: 'Healmass',
    image: 'https://www.erpadvisorsgroup.com/hubfs/erp-implementation-plan.jpg',
    description: "Education, Saas",
  },
  {id:15,
    title: 'Healmass',
    image: 'https://static.wixstatic.com/media/75077a_e061453f4d054983bed2122e1c02db2a~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75077a_e061453f4d054983bed2122e1c02db2a~mv2.png',
    description: "Education, Saas",
  },
  {id:16,
    title: 'Healmass',
    image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3jtKtCzRwk0smD0Ko1ipR/52b16646dc4a9da30089d6925fbf1b2e/GettyImages-1346563196__3_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=',
    description: "Education, Saas",
  },
  {id:17,
    title: 'Healmass',
    image: 'https://multichannelmerchant.com/wp-content/uploads/2017/06/system-implementation-man-with-gears-feature.jpg',
    description: "Education, Saas",
  },
  {id:18,
    title: 'Healmass',
    image: 'https://media.licdn.com/dms/image/C5612AQEF5XxV4WtgMQ/article-cover_image-shrink_720_1280/0/1637139465254?e=2147483647&v=beta&t=nna3VoC6uquO2F3EvxzHnmjwM5Qjhtl0e-afaARXFp0',
    description: "Education, Saas",
  },
  {id:17,
    title: 'Healmass',
    image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3jtKtCzRwk0smD0Ko1ipR/52b16646dc4a9da30089d6925fbf1b2e/GettyImages-1346563196__3_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=',
    description: "Education, Saas",
  },
  {id:18,
    title: 'Healmass',
    image: 'https://multichannelmerchant.com/wp-content/uploads/2017/06/system-implementation-man-with-gears-feature.jpg',
    description: "Education, Saas",
  },
  {id:19,
    title: 'Healmass',
    image: 'https://media.licdn.com/dms/image/C5612AQEF5XxV4WtgMQ/article-cover_image-shrink_720_1280/0/1637139465254?e=2147483647&v=beta&t=nna3VoC6uquO2F3EvxzHnmjwM5Qjhtl0e-afaARXFp0',
    description: "Education, Saas",
  },
  {id:20,
    title: 'Healmass',
    image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/3jtKtCzRwk0smD0Ko1ipR/52b16646dc4a9da30089d6925fbf1b2e/GettyImages-1346563196__3_.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=',
    description: "Education, Saas",
  },
  {id:21,
    title: 'Healmass',
    image: 'https://multichannelmerchant.com/wp-content/uploads/2017/06/system-implementation-man-with-gears-feature.jpg',
    description: "Education, Saas",
  },
  {id:22,
    title: 'Healmass',
    image: 'https://media.licdn.com/dms/image/C5612AQEF5XxV4WtgMQ/article-cover_image-shrink_720_1280/0/1637139465254?e=2147483647&v=beta&t=nna3VoC6uquO2F3EvxzHnmjwM5Qjhtl0e-afaARXFp0',
    description: "Education, Saas",
  },
  {id:23,
    title: 'Healmass',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7_-KPznbG0XAozDPraGrfxTy_V-NOQWw_hA&usqp=CAU',
    description: "Education, Saas",
  },
  {id:24,
    title: 'Healmass',
    image: 'https://assets.asana.biz/transform/225d45ab-e570-4fd0-aa56-4ba1331b3ce2/article-project-planning-implementation-plan-2x',
    description: "Education, Saas",
  },
  
  {id:25,
    title: 'Healmass',
    image: 'https://www.erpadvisorsgroup.com/hubfs/erp-implementation-plan.jpg',
    description: "Education, Saas",
  },
  {id:26,
    title: 'Healmass',
    image: 'https://static.wixstatic.com/media/75077a_e061453f4d054983bed2122e1c02db2a~mv2.png/v1/fill/w_640,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75077a_e061453f4d054983bed2122e1c02db2a~mv2.png',
    description: "Education, Saas",
  },
  {id:27,
    title: 'Healmass',
    image: 'https://assets.asana.biz/transform/225d45ab-e570-4fd0-aa56-4ba1331b3ce2/article-project-planning-implementation-plan-2x',
    description: "Education, Saas",
  },
  
  {id:28,
    title: 'Healmass',
    image: 'https://www.erpadvisorsgroup.com/hubfs/erp-implementation-plan.jpg',
    description: "Education, Saas",
  },
];




const ProjectName = styled(Typography)(({ theme }) => ({
  color:'white',
  fontWeight: '900',
  display:"flex",
  justifyContent:"center",
  margin: '0px',
  
  fontSize: '1.2em',
 
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  // fontWeight: "normal",
  fontStyle: "normal",
  textTransform:"initial",
  lineHeight:"26px",
  [theme.breakpoints.down('913')]: {
    
  },
  [theme.breakpoints.down('541')]: {
      fontSize: '.9em',
  },
  [theme.breakpoints.down('482')]: {
      fontSize: '.8em',
     
  },
}));
const ProjectDesc = styled(Typography)(({ theme }) => ({
marginTop:"-5px",
  color:"#b8bec5",
  fontSize: '1em',
  display:"flex",
  justifyContent:"center",
  fontFamily: "Ubuntu, Helvetica,Arial, sans-serif",
  [theme.breakpoints.down('602')]: {
    marginBottom:"30px", 
    
},
 
}));
const ProjectCardContainer= styled(Typography)(({ theme }) => ({
  display:"flex",
  
  alignItems:"center",
  gap:"127.5px",
  flexWrap:"wrap", 
  paddingLeft:"20px",
  justifyContent:"center",
  [theme.breakpoints.down('1601')]: {
    paddingLeft:"19.5px",
    
},
  [theme.breakpoints.down('1441')]: {
    paddingLeft:"19.5px",
    gap:"90px",
},
[theme.breakpoints.down('1367')]: {
  paddingLeft:"19.5px",
  gap:"65px",
},
[theme.breakpoints.down('1281')]: {
  paddingLeft:"19px",
  gap:"36.7px",
},
[theme.breakpoints.down('1025')]: {
  paddingLeft:"19px",
  gap:"32px",
},
[theme.breakpoints.down('913')]: {
  paddingLeft:"20px",
  gap:"45px",
},
[theme.breakpoints.down('821')]: {
  paddingLeft:"5px",
  gap:"30px",
},
[theme.breakpoints.down('821')]: {
  paddingLeft:"5px",
  gap:"25px",
},
[theme.breakpoints.down('801')]: {
  paddingLeft:"5px",
  gap:"30px",
},
[theme.breakpoints.down('769')]: {
  paddingLeft:"5px",
  gap:"30px",
},
[theme.breakpoints.down('641')]: {
  paddingLeft:"2px",
  gap:"20px",
},
[theme.breakpoints.down('602')]: {
  paddingLeft:"0px",
  gap:"0px",
  flexDirection:"column",
  marginLeft:"-2px",
  
},
[theme.breakpoints.down('541')]: {
  paddingLeft:"0px",
  gap:"0px",
  flexDirection:"column",
  marginLeft:"0px",
},
[theme.breakpoints.down('481')]: {
  paddingLeft:"3px",
  gap:"0px",
  
},
[theme.breakpoints.down('481')]: {
  paddingLeft:"3px",
  gap:"0px",
  flexDirection:"column",
  marginLeft:"0px",
},
[theme.breakpoints.down('394')]: {
  paddingLeft:"0px",
  gap:"0px",
  flexDirection:"column",
  
},
[theme.breakpoints.down('361')]: {
  paddingLeft:"0px",
  gap:"0px",
  flexDirection:"column",
  marginLeft:"-3px",
  
},
}));
const ProjectCardMedia = styled(CardMedia)(({ theme }) => ({
  height:"245px",
  width:"245px",
  border:"2px solid white",
  borderRadius:"50%",
  [theme.breakpoints.down('1025')]: {
    height:"175px",
    width:"290px",
    
},
[theme.breakpoints.down('913')]: {
  height:"230px",
  width:"390px",
  
},
[theme.breakpoints.down('821')]: {
  height:"230px",
  width:"365px",
  
},
[theme.breakpoints.down('801')]: {
  height:"230px",
  width:"350px",
  
},
[theme.breakpoints.down('769')]: {
  height:"230px",
  width:"335px",
  
},

[theme.breakpoints.down('641')]: {
  height:"370px",
  width:"605px", 
  
},
[theme.breakpoints.down('602')]: {
  height:"370px",
  width:"557px", 
  
},
[theme.breakpoints.down('541')]: {
  height:"300px",
  width:"485px",  
  
},
[theme.breakpoints.down('481')]: {
  height:"300px",
  
  
  
  width:"445px", 
  
},
[theme.breakpoints.down('415')]: {
  height:"300px",
  width:"376px",  
  
},
[theme.breakpoints.down('394')]: {
  height:"300px",
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









function AllCaseStudy() {
  const cardsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, cardData.length);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box sx={{marginTop:"100px",  background:"#1a237e ", padding:"50px 0px"}}>
      <Container
      maxWidth="xl"
      >
      <Header>Explore our case study</Header>
      <ProjectCardContainer >
        {cardData.slice(startIndex, endIndex).map((card, index) => (
          <Link key={index} to={`/projects/${card.id}`}>
            <Card sx={{ maxWidth: 660, background:"transparent", border:"none", boxShadow:"none" }}>
              <CardActionArea>
                <ProjectCardMedia
                  component="img"
                  
                  image={card.image}
                  alt="Lizard"
                />
                <CardContent sx={{background:"transparent", marginLeft:"-15px"}}>
                  <ProjectName gutterBottom component="div">
                    {card.title}
                  </ProjectName>
                  <ProjectDesc variant="body2">
                    {card.description}
                  </ProjectDesc>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </ProjectCardContainer>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button sx={{marginTop:"50px"}}
            key={index}
            onClick={() => handlePageChange(index + 1)}
            variant={index + 1 === currentPage ? "contained" : "outlined"}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
      </Container>
    </Box>
  );
}

export default AllCaseStudy;
