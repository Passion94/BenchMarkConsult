import React from "react";
import { Container, Grid, Typography, Link, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";


const Foooter = styled("footer")(({ theme }) => ({
  
  
  padding: "70px 0",
}));

const FooterContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const FooterLogo = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
}));

const FooterLinks = styled("ul")(({ theme }) => ({
  listStyle: "none",
  padding: 0,
  cursor:"pointer",
  textDecoration:"none",
 
  "& li": {
    marginBottom: "10px",
   
   
   
  },
 
}));

const SocialIcons = styled("div")(({ theme }) => ({
  marginTop: "20px",
  "& a": {
   color:theme.palette.primary.main,
    fontSize: "24px",
    margin: "0 10px",
    textDecoration: "none",
    transition: "color 0.3s",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const Footer = () => {
  return (
    <Foooter>
      <Container>
        <FooterContent container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <FooterLogo variant="h5"><img src="images/Logo.png" width='130px' sx={{ display: { xs: 'none', md: 'flex', color: '#4B4BDD' }, mr: 1 }} /></FooterLogo>
            <Typography variant="body1">
              We are at the forefront of technological advancement
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h2">Quick Links</Typography>
            <FooterLinks>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </FooterLinks>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h2">Contact Us</Typography>
            <Typography variant="body1">
              123 Main Street
              <br />
              City, Country
              <br />
              Email: info@example.com
              <br />
              Phone: +1 123-456-7890
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h2">Follow Us</Typography>
            <SocialIcons>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
            </SocialIcons>
          </Grid>
        </FooterContent>
      </Container>
    </Foooter>
  );
};

export default Footer;
