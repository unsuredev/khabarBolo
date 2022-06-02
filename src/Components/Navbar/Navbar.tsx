import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { cartActions } from "../../Store/cart-slice";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";

import {  ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  let history = useHistory();
  const quantity = useSelector((state: any) => state.cart.totalQuantity)


  const auth = useSelector((state: any) => state.auth.isLogedIn)


  React.useEffect(() => {
    document.title = "KhabarBolo | Profile  ";
    findUserId();
  }, []);

  const findUserId = () => {
    let token: any = localStorage.getItem("access_token");
    var decoded = jwt_decode(token);
    //@ts-ignore
    let { user_id } = decoded;
    return user_id
}

  const dispatch= useDispatch()
  const showCart=()=>{
dispatch(cartActions.setShowCart())
  }


  return (
    <Container>
                <ToastContainer autoClose={2000} />

      <Toolbar>
        <div style={{ marginTop: "1rem" }}>
            <img
              src="/fulllogo.png"
              data-rimg-scale="1"
              height={200}
              width={290}
              alt="logo"
            />
        </div>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        <Box sx={{ flexGrow: 0 }} >
          {/* <Button startIcon={<FastfoodIcon />}>  My Orders</Button> */}
          <Button href="/" startIcon={<LocalDiningIcon />}>Explore</Button>
          <Button onClick={showCart}  >
             Cart
            <Badge badgeContent={quantity} color="primary">
              <AddShoppingCartIcon color="primary" />
            </Badge>
          </Button>
          {findUserId()?
          <Button variant="outlined" href="/Profile">
            Profile
          </Button>:null}
          {!findUserId()?
          <div>
          <Button variant="outlined" href="/login"   >
            login
          </Button>
          <Button variant="contained" href="/register" style={{ color: "white" }} >
            Sign Up 
          </Button> 
          </div>:null

}
          <Button variant="outlined" href="/faq"  >
            FAQ
          </Button>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default Navbar;
