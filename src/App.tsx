import * as React from 'react';
import { BrowserRouter as Router ,Switch,Route } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  orange } from '@mui/material/colors';
import {  green } from '@mui/material/colors';

import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import PrivacyPolicy from './Pages/Privacy/PrivacyPolicy'
import Faq from './Pages/FAQ/Faq' 
import Cart from './Pages/Cart/Cart'
import FooterSection from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Checkout from './Pages/AddressCheckout/CheckOut'
import Profile from './Pages/Profile/Profile'
import ForgotPassword from './Pages/ForgotPassword/Forgotpassword'

import { firebaseConfig } from './Common/config';
import { initializeApp } from "firebase/app";
initializeApp(firebaseConfig)


const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },secondary:{
      main:green[500],
    }
  },
});




const App = () => {

  return (
    <ThemeProvider theme={outerTheme}>  
        <div >
          <Router>
          <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact  path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact  path="/register" component={Register} />
            <Route exact  path="/reset" component={ForgotPassword} />
            <Route exact  path="/privacy" component={PrivacyPolicy} />
            <Route exact  path="/checkout" component={Checkout} />
            <Route exact  path="/Profile" component={Profile} />
            <Route exact  path="/faq" component={Faq} />
            </Switch>
          </Router>
          <FooterSection />
      </div>
    </ThemeProvider>

  );
}

export default App;
