import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const FooterContainer = styled(Box)(({ theme }) => ({
  marginTop: { xs: '100px', sm: '450px', md: '500px', lg: '250px' },
  background: 'transparent',
  color: 'black',
  borderTop:"5px solid rgb(8,16,103)"
 

}));

const SectionOne = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center',
  justifyContent: 'flex-start',
  
  paddingBottom: '3.5em',
  
}));

const SystemButton = styled(Button)(({ theme }) => ({
  background: 'rgb(47, 163, 107)',
  color: 'white',
  borderRadius: '2px',
  textDecoration: 'none',
  height: '50px',
  fontWeight: '500',
  letterSpacing: '0.2em',
  fontSize: '0.7em',
 
  textAlign: 'center',
}));

const SectionTwo = styled(Box)(({ theme }) => ({
paddingBottom:"20px",
  color: 'rgb(117, 117, 117)',
  fontSize:"1em",
  fontWeight:"600"
}));



const FooterLinkContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '8em',
  columnGap: '8em',
  paddingLeft: '4.5em',
  color: 'rgb(8,16,103)',
  [theme.breakpoints.down('lg')]: {
    gap: '6em',
    columnGap: '6em',
  },
  [theme.breakpoints.down('md')]: {
    gap: '4em',
    columnGap: '4em',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2em',
    columnGap: '0',
    paddingLeft: '0',
  },
}));




const FooterLinks = styled(Box)(({ theme }) => ({
  

  
}));

const CopyWrite = styled(Typography)(({ theme }) => ({
  color: 'rgb(117, 117, 117)',
  marginTop: '4.375em',
}));

export const Footer = () => {
  return (
    <FooterContainer>
       <Box sx={{borderTop:"5px solid rgb(75,75,221)"}}></Box>
       <Box sx={{borderTop:"5px solid rgb(46,234,250)"}}></Box>
       <Box sx={{borderTop:"5px solid rgb(8,16,103)"}}></Box>
      <Container sx={{marginTop:"0px", padding:"40px", overflow:"hidden"}}>
        <SectionOne>
          <Typography>
            <img className="logo" src="/images/Logo.png" alt="Logo" />
          </Typography>
          {/* <Typography>
            Subscribe to our newsletter:
            <SystemButton>Subscribe</SystemButton>
          </Typography> */}
        </SectionOne>

        <Box>
        
          <FooterLinkContainer>
            <FooterLinks>
            <SectionTwo>Sitemap</SectionTwo>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Services</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Projects</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>About</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Case Study</Typography>
             
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Guidelines for your project</Typography>
            </FooterLinks>
            <FooterLinks>
            <SectionTwo>Follow US</SectionTwo>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Linkdin</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Twitter</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Instagram</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Medium</Typography>
              <Typography sx={{fontWeight:"600", color:"rgb(8,16,103)"}}>Thread</Typography>
            </FooterLinks>
            <Typography sx={{ color: 'rgb(117, 117, 117)' }}>
              contact@prehood.com
              <br />
              Chez Prehood, 50 rue Bichat
              75010 Paris
              France
            </Typography>
          </FooterLinkContainer>
        </Box>

        <CopyWrite>&copy; {new Date().getFullYear()} Prehood. All rights reserved.</CopyWrite>
      </Container>
    </FooterContainer>
  );
};
