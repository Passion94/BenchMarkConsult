import { Box, Button, Container, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { Others } from './Others';
import "./casestudy.css"



const items = [
    {
      id: 1,
      title: 'Honesty and respect for your opinion',
      description: 'Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are. Solvd software engineering company keeps workflows transparent to our clients and we appreciate and listen to our clients opinions. Throughout all phases of a project, well keep you updated on the decisions we make, so youre involved in the process every step of the way, and from wherever you are',
    },
]

const ContentContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  // backgroundColor: "rgb(75, 75, 221)",
  marginLeft: "5%",
  borderLeft: "10px solid rgb(46, 234, 250)",
  borderRight: "10px solid rgb(46, 234, 250)",
  [theme.breakpoints.down('xl')]: {
    marginLeft: "5%",
  },

  [theme.breakpoints.down('lg')]: {
    marginLeft: "7%",
  },

 
  [theme.breakpoints.down("md")]: {
    display:"block",
    marginLeft: "", // Adjust spacing for medium-sized screens
    borderLeft: "5px solid rgb(46, 234, 250)",
    borderRight: "5px solid rgb(46, 234, 250)",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "20px", // Adjust spacing for smaller screens
    borderLeft: "2px solid rgb(46, 234, 250)",
    borderRight: "2px solid rgb(46, 234, 250)",
  },
  [theme.breakpoints.down("xs")]: {
    marginLeft: "20px", // Adjust spacing for smaller screens
    borderLeft: "2px solid rgb(46, 234, 250)",
    borderRight: "2px solid rgb(46, 234, 250)",
  },
   [theme.breakpoints.down("1367")]: {
    marginLeft: "4.5%", // Adjust spacing for medium-sized screens
    borderLeft: "10px solid rgb(46, 234, 250)",
    borderRight: "10px solid rgb(46, 234, 250)",
    
  },
  [theme.breakpoints.down("1281")]: {
    marginLeft: "3.8%", // Adjust spacing for medium-sized screens
    width:"91.5%",
    borderLeft: "10px solid rgb(46, 234, 250)",
    borderRight: "10px solid rgb(46, 234, 250)",
    
  },
  [theme.breakpoints.down("1025")]: {
    marginLeft: "4.3%", // Adjust spacing for medium-sized screens
    width:"94.5%",
    borderLeft: "10px solid rgb(46, 234, 250)",
    borderRight: "10px solid rgb(46, 234, 250)",
    
  },
 
  [theme.breakpoints.down("913")]: {
    display:"block",
    width:"86%",
    marginLeft: "7.3%",
    paddingTop:"30px",
    paddingBottom:"30px",
    },
    [theme.breakpoints.down("821")]: {
      
      width:"95%",
      marginLeft: "2.1%",
      },
      [theme.breakpoints.down("801")]: {
      
        width:"96.5%",
      
        },
        [theme.breakpoints.down("769")]: {
      
          width:"89.2%",
          marginLeft: "6%",
          },
          [theme.breakpoints.down("713")]: {
      
            width:"87.4%",
            marginLeft: "6.5%",
            },
            [theme.breakpoints.down("641")]: {
      
              width:"93%",
              marginLeft: "3%",
              },
          [theme.breakpoints.down("602")]: {
      
            width:"88.2%",
            marginLeft: "7%",
            },
            [theme.breakpoints.down("541")]: {
      
              width:"92%",
              marginLeft: "3.5%",
              },
              [theme.breakpoints.down("481")]: {
      
                width:"93%",
                marginLeft: "4.3%",
                },
              [theme.breakpoints.down("415")]: {
      
                width:"93.2%",
                marginLeft: "4%",
                },
                [theme.breakpoints.down("391")]: {
      
                  width:"91%",
                  marginLeft: "4.3%",
                  },
                  [theme.breakpoints.down("394")]: {
      
                    width:"90%",
                    marginLeft: "4.3%",
                    },
                  [theme.breakpoints.down("391")]: {
      
                    width:"91%",
                    marginLeft: "4.8%",
                    },
                    [theme.breakpoints.down("385")]: {
      
                      width:"92%",
                      marginLeft: "4.5%",
                      },
                    [theme.breakpoints.down("376")]: {
      
                      width:"89.6%",
                      marginLeft: "4.8%",
                      },
}))



const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  paddingLeft:"4.9%",
  justifyContent: 'center',
  marginBottom: '70px',
  fontSize: '2em',
  color: 'rgb(8, 16, 103)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2em',
    paddingLeft:"150px",
  },
  [theme.breakpoints.down('sm')]: {
    // fontSize: '1em',
    // marginLeft:"-10px",
    // paddingLeft:"0px",
   
  },
  [theme.breakpoints.down('1367')]: {
    paddingLeft:"4.6%",
   
  },
  [theme.breakpoints.down('1281')]: {
    paddingLeft:"3.8%",
   
  },
  [theme.breakpoints.down('1025')]: {
    paddingLeft:"4.2%",
   
  },
  [theme.breakpoints.down('913')]: {
    paddingLeft:"7.5%",
   
  },
  [theme.breakpoints.down('821')]: {
    paddingLeft:"2.4%",
   
  },
  [theme.breakpoints.down('810')]: {
    paddingLeft:"2.4%",
   
  },
  [theme.breakpoints.down('769')]: {
    paddingLeft:"6.3%",
   
  },
  [theme.breakpoints.down('641')]: {
    paddingLeft:"3%",
   
  },
  [theme.breakpoints.down('602')]: {
    paddingLeft:"7.2%",
   
  },
    [theme.breakpoints.down('541')]: {
    paddingLeft:"3.5%",
   
  }
  ,
    [theme.breakpoints.down('415')]: {
    paddingLeft:"4.2%",
   
  }
  ,
    [theme.breakpoints.down('376')]: {
    paddingLeft:"4.8%",
   
  }
}));




const SecContentContainer = styled(Container)(({ theme }) => ({
background:"linear-gradient(to right, rgb(8, 16, 103), rgb(46, 234, 250))",
borderRight:"10px solid white",
// width:"500px"
height:"410px",

[theme.breakpoints.down("913")]: {
  borderRight:"none",
  },
}))



const Header = styled(Typography)(({ theme }) => ({
    color: 'white',
    fontWeight: '600',
   
    fontSize: '2em',
    
    fontFamily: '"Tiempos Headline", serif',
    fontStyle: 'normal',
    // padding:" 50px 50px 10px 50px",
    paddingTop:"30px",
    lineHeight: '46px',
  
    [theme.breakpoints.down('xl')]: {
      fontSize: '2em',
      lineHeight: '36px',

    },
  
    [theme.breakpoints.down('lg')]: {
      paddingTop:"15px",
      lineHeight: '36px',
      fontSize: '2em',
      
    },
  
    [theme.breakpoints.down('md')]: {
     
      lineHeight: '36px',
      paddingLeft:"20px",
      paddingRight:"10%",
    },
  
    [theme.breakpoints.down('sm')]: {
      
      lineHeight: '36px',
      paddingRight:"10px",
      paddingRight:"20%",
      paddingRight:"5%",
    },
  
    [theme.breakpoints.down('xs')]: {
      
      lineHeight: '20px',
    },
    [theme.breakpoints.down("913")]: {
      padding:"30px 0px 10px 0px"
      },
  }));
  
  const Desc = styled(Typography)(({ theme }) => ({
    padding:"20px 0px",
    transition: 'max-height 1s ease-in-out',
    color: 'white',
    fontWeight: '400',
    
    fontSize: '1em',
    lineHeight: '24px',
    fontFamily: 'Archivo Narrow',
    // padding:"10px 10px 10px 10px",
    
  
    [theme.breakpoints.down('xl')]: {
     
      lineHeight: '26px',
    },
  
    [theme.breakpoints.down('lg')]: {
     
      
      paddingTop:"15px",
    },
  
    [theme.breakpoints.down('md')]: {
     
      
      
      
    },
  
    [theme.breakpoints.down('sm')]: {
      
      lineHeight: '20px',
      padding:" 0 35px 0 33px",
  
  
    },
  
    [theme.breakpoints.down('xs')]: {
      fontSize: '1em',
      lineHeight: '18px',
    },
    [theme.breakpoints.down("913")]: {
      padding:"10px 0px 30px 0px"
      },
  }));


  const StyledButton = styled('button')(({ theme }) => ({
    border: '1px solid white',
    marginTop: '10px',
    backgroundColor:"white",
    color: 'rgb(8,16,103)',
    fontSize: '.8em',
    fontWeight: '900',
    lineHeight: '17px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '12px 20px',
    
    
    position:'relative',
    fontFamily:"Lato , sans-serif",
   
    cursor: 'pointer',
    // marginLeft: '42px',
  
    [theme.breakpoints.down('md')]: {
      
      // marginLeft:"-20px"
    },
    [theme.breakpoints.down('sm')]: {
      
      marginTop:"5px", // Adjust padding for extra-small screens
    },
   
    // Add responsive styles using Material-UI breakpoints
    [theme.breakpoints.down('xs')]: {
      // fontSize: '0.9rem', 
      padding: '12px 16px',
      marginTop:"5px",
       // Adjust padding for extra-small screens
  
    },
  }));






  const CaseStudyTwo= styled(Box)(({ theme }) => ({
   display:"flex",
   flexWrap:"wrap",
   alignItems:"center",
   justifyContent:"center",
    columnGap:"47px",
    marginTop:"70px",
     marginLeft:"-110px",
     [theme.breakpoints.down('1441')]: {
      marginLeft:"-10px",
      columnGap:"50px",
    },
     [theme.breakpoints.down('1367')]: {
      marginLeft:"45px",
      columnGap:"50px",
  
    },
   
    
    [theme.breakpoints.down('1281')]: {
     marginLeft:"19px",
     gap:"5px",
    
 
   },
   [theme.breakpoints.down('1025')]: {
    marginLeft:"53px",
   columnGap:"70px",
   rowGap:"80px"
   

  },
  [theme.breakpoints.down('913')]: {
    marginLeft:"24px",
   columnGap:"47px",
   rowGap:"80px"
   

  },
 
  [theme.breakpoints.down('811')]: {
    marginLeft:"8px",
   columnGap:"25px",
   rowGap:"90px"
   

  },

  [theme.breakpoints.down('801')]: {
    marginLeft:"20px",
   columnGap:"0px",
   rowGap:"90px"
   

  },

  [theme.breakpoints.down('769')]: {
    marginLeft:"105px",
   columnGap:"0px",
   rowGap:"90px"
   

  },
  [theme.breakpoints.down('713')]: {
    marginLeft:"140px",
   columnGap:"0px",
   rowGap:"90px"
   

  },
  [theme.breakpoints.down('641')]: {
    marginLeft:"130px",
    columnGap:"0px",
    rowGap:"90px"

     },

  [theme.breakpoints.down('602')]: {
    marginLeft:"60px",
   columnGap:"0px",
   rowGap:"90px"
   

  },
  [theme.breakpoints.down('541')]: {
    marginLeft:"78px",
   columnGap:"0px",
   rowGap:"90px"
   

  },

  [theme.breakpoints.down('415')]: {
    marginLeft:"50px",
    columnGap:"0px",
    rowGap:"90px"

     },

     [theme.breakpoints.down('394')]: {
      marginLeft:"20px",
      columnGap:"0px",
      rowGap:"90px"
  
       },
     [theme.breakpoints.down('391')]: {
      marginLeft:"25px",
      columnGap:"0px",
      rowGap:"90px"
  
       },
       [theme.breakpoints.down('376')]: {
        marginLeft:"19px",
        columnGap:"0px",
        rowGap:"90px"
    
         },
  }))

export const Casestudy = () => {
  return (
    <Box sx={{marginTop:"150px"}}>
      <Container
      maxWidth="xl"
      >
        
        <Title> Check our Case studies</Title>
        <ContentContainer>
        
        <SecContentContainer>
         
      <Header> Structural development and system analytics</Header>
      <Desc> Structural development and system analytics
          Structural development and system analytics</Desc>

          <StyledButton variant="outline">Find More</StyledButton>
        </SecContentContainer>
        
           <img 
           className='caseImage'
           src='https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w='/>
        
        </ContentContainer>
        <CaseStudyTwo>
        <Others/>
        <Others/>
        <Others/>
        
        </CaseStudyTwo>
        </Container>
       
    </Box>
  )
}
