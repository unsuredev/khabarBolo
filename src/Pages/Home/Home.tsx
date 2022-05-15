import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  Copyright from '../../Components/Footer/copyright'
import Banner from '../../Components/Banner/Index'
import FooterSection from '../../Components/Footer/Footer'
import Navbar from '../../Components/Header/Navbar';
import Features from '../../Components/Blog/Blog';
import Food from '../../Components/Food/Food'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const Home=()=> {
  return (
    <>
    <Navbar/>
      <CssBaseline />
      <Banner/>
      <main>

<Food/>

<Features/>
        <FooterSection/>

      </main>
    </>
  );
}


export default Home