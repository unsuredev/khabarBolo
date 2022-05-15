import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import CssBaseline from '@mui/material/CssBaseline';
import Copyright from "../../Components/Footer/copyright";

const FooterSection = () => {




    return (
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
        style={{ backgroundColor: "black", color: "white", minHeight: "35vh" }}
      >
        <Container maxWidth="md" style={{ marginTop: "5rem" }}>
          <Grid container spacing={4} justifyContent="space-evenly">
            <Grid item xs={6} sm={3} mt={2} p={4}>
              <img
                src="/logo.png"
                data-rimg-scale="1"
                height={80}
                width={220}
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Features
              </Typography>
              <ul>
                <li>About Us </li>
                <li>Contact Us</li>
                <li>Read Our Blog</li>
                <li>Join with Us</li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Legal & Support
              </Typography>
              <ul>
                <li>Return Policy</li>
                <li>Terms Of Use</li>
                <li>Cancellation & Returns</li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Social
              </Typography>
              <ul>
                <li>YouTube</li>
                <li>Facebook</li>
                <li>Twitter</li>
              </ul>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Box>
    );
};

export default FooterSection;
