import React from "react";
import "./styles.css";
import Container from '@mui/material/Container';
import Typewriter from 'typewriter-effect';

const Banner = ({}) => (
  <Container>
    <header>
      <div className="header-content">
        <div className="content-main">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" <h1>Hangry ?  <h1/>")
                .start()
                .pauseFor(200)
                .deleteAll();
              typewriter.typeString("<h1>Cooking gone wrong ? <h1/>")
              .pauseFor(200)
              .deleteAll()
              typewriter
                .typeString("<h1>Unexpected guests ? <h1/>")
                .pauseFor(200)
                .deleteAll();
                typewriter.typeString("<h1>Order Now !<h1/>")
                .start();
            }}></Typewriter>
          <p>Order food from favourite restaurants near you. <span style={{color:"#f58320"}}>@Hariharpara</span></p>
          <button  style={{backgroundColor:"#f58320"}}>
            View Menu <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img className="header-img" src="/images/biryani.png" alt="banner" />
    </header>
  </Container>
);

export default Banner;
