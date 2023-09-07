import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  withTheme,
} from "@mui/material";
import Faq from "./Faq";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};
    if (!formData.fullName) {
      validationErrors.fullName = "Fullname is required";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    if (!formData.phone) {
      validationErrors.phone = "Phone is required";
    }
    if (!formData.description) {
      validationErrors.description = "Description is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form data is valid, you can submit it here
      console.log("Form data submitted:", formData);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <Box sx={{ marginTop: "50px", padding: "50px 70px", background: (theme) => theme.palette.primary.first}}>
      <Container maxWidth="xl">
      <Typography variant="h1" align="center">
        Discover the right solution that solves your problem using our cutting edge technology
      </Typography>

      <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Box >
          
            <Typography variant="h2" sx={{ padding: "40px 0px 20px 0px" }}>
              Get In touch with us today
            </Typography>
            <form onSubmit={handleSubmit} style={{border: "2px solid white" , borderRadius: "10px", padding: "30px", maxWidth:"70%", 
            backgroundColor:"white"}}>
              <Grid container  spacing={2}>
                <Grid item xs={12} >
                  <TextField
                  
                  backgroundColor='white'
                    fullWidth
                    label="Fullname"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={Boolean(errors.fullName)}
                    helperText={errors.fullName}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    required
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    required
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    fullWidth
                    label="What do you want ?"
                    name="description"
                    multiline
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    error={Boolean(errors.description)}
                    helperText={errors.description}
                    required
                  />
                </Grid>
                <Grid item xs={12} >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
         
        </Box>
        <Box style={{ maxHeight: "1000px", }}>
          <Faq />
        </Box>
      </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
