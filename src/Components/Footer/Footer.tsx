import React from "react";
import "./Footer.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
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
          <Grid container  justifyContent="space-evenly">
            <Grid item xs={12} sm={4} >
              <img
                src="/fulllogo.png"
                data-rimg-scale="1"
                height={250}
                width={310}
                alt="logo"
                style={{marginTop:"-50px"}}
              />
              <div   style={{marginTop:"-20px", textAlign:"center"}}>
              <Typography variant="caption" display="block" gutterBottom>Designed & developed by 
                <Link target="_blank" href="https://www.facebook.com/unsuredev"> Jamal
                  </Link>
              </Typography>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Features
              </Typography>
              <ul>
                <li>About Us </li>
                <li>
                  <Link target="_blank" href="https://www.facebook.com/khabarBolo">  Contact Us
                  </Link>
                </li>
                <li>
                  <Link target="_blank" href="https://www.facebook.com/khabarBolo">
                  Read Our Post</Link></li>
                <li>Join with Us</li>
              </ul>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" color="primary" gutterBottom>
                Legal & Support
              </Typography>
              <ul>
                <li>
                  <Link  target="_blank" href="/privacy" >
                  Return Policy
                  </Link>
                  </li>
                <li>
                  <Link target="_blank" href="/privacy">
                  Terms Of Use
                  </Link>
                  </li>
                  <li>
                  <Link target="_blank" href="/privacy">
                  Cancellation & Returns
                  </Link>
                  </li>
                  <li>
                  <Link target="_blank" href="/faq">
                FAQ
                  </Link>
                  </li>
            
            
              </ul>
            </Grid>
            <Grid item xs={6} sm={2}>
              <Typography variant="h6" color="primary" gutterBottom>
                Social
              </Typography>
              <ul>
              <li>
              <Link target="_blank" href="https://www.facebook.com/khabarBolo">
                Facebook
                </Link>
                </li>
                <li>Instaghram</li>
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
