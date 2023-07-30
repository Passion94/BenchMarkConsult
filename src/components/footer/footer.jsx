import { Box, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  marginTop: { xs: '100px', sm: '450px', md: '500px', lg: '250px' },
  background: 'black',
  color: 'white',
 

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
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '8em',
  columnGap: '8em',
  paddingLeft: '4.5em',
 
}));

const FooterLinks = styled(Box)(({ theme }) => ({
  
//   gap: '5px',
  
}));

const CopyWrite = styled(Typography)(({ theme }) => ({
  color: 'rgb(117, 117, 117)',
  marginTop: '4.375em',
}));

export const Footer = () => {
  return (
    <FooterContainer>
      <Container sx={{marginTop:"300px", padding:"40px", overflow:"hidden"}}>
        <SectionOne>
          <Typography>
            <img src="/images/Logo.png" alt="Logo" />
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
              <Typography>Services</Typography>
              <Typography>Projects</Typography>
              <Typography>Experiments</Typography>
              <Typography>About</Typography>
              <Typography>Stories</Typography>
              <Typography>Resources</Typography>
              <Typography>Guidelines for your project</Typography>
            </FooterLinks>
            <FooterLinks>
            <SectionTwo>Follow US</SectionTwo>
              <Typography>Linkdin</Typography>
              <Typography>Twitter</Typography>
              <Typography>Instagram</Typography>
              <Typography>Medium</Typography>
              <Typography>Thread</Typography>
            </FooterLinks>
            <Typography sx={{ color: 'rgb(117, 117, 117)' }}>
              contact@benchmark.com
              <br />
              Chez Modality, 50 rue Bichat
              75010 Paris
              France
            </Typography>
          </FooterLinkContainer>
        </Box>

        <CopyWrite>&copy; {new Date().getFullYear()} BenchMark. All rights reserved.</CopyWrite>
      </Container>
    </FooterContainer>
  );
};
