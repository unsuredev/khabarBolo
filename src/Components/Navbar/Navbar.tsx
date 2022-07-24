import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Navbar.css";
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { cartActions } from "../../Store/cart-slice";
import jwt_decode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Common/constant";

const Navbar = () => {
  let history = useHistory();

  const cartItems: any = localStorage.getItem("cartItems") ? localStorage.getItem('cartItems') : []
      //@ts-ignore
      const quantity=cartItems.length!=0?JSON.parse(cartItems).length:0

  useSelector((state: any) => state.cart.totalQuantity)
  // const auth = useSelector((state: any) => state.auth.isLogedIn)
  React.useEffect(() => {
    document.title = "KhabarBolo | Profile  ";
  }, []);

  const findUserId = () => {
    let token: any = localStorage.getItem("access_token");
    let user_id=""
    if(token){
     let decoded:any = jwt_decode(token);
     user_id=decoded.user_id
    }
    return user_id
  }

  const dispatch = useDispatch()
  const showCart = () => {
    dispatch(cartActions.setShowCart())
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getToken = () => {
    //@ts-ignore
    return localStorage.getItem("access_token");
};


  const handleLogout = async () => {
    try {
        const result = await axios.post(BASE_URL + "user/logout",
            {},
            {
              headers: {
                  encryption: false,
                  //@ts-ignore
                  access_token: getToken(),
              },
          }
            )
            localStorage.clear();

        if (result.data && result.data != null) {
          toast.error(result.data.message);
          localStorage.clear();
            history.push("/");
            window.location.reload();
          }
        else {
          toast.error(result.data.message);
        }
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong!");
      }
};


  return (
    <AppBar position="static" style={{ height: "0px", paddingTop: "0px" }}>
      <Container maxWidth="md">
      <ToastContainer autoClose={2000} />

        <Toolbar disableGutters  >
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} >
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <Typography textAlign="center">
                  <Link style={{ textDecoration: "none" }}
                    target="_blank" href="https://www.facebook.com/khabarBolo">  Contact Us
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} >
                <Typography textAlign="center">
                  <Link style={{ textDecoration: "none" }} target="_blank" href="/faq">
                    FAQ
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <div style={{ marginTop: "1rem" }}  >
          <Tooltip title="Wea are waiting for orders!">
            <img
              src="/onlyLogo.png"
              data-rimg-scale="1"
              height={100}
              width={120}
              alt="logo"
              
            />
            </Tooltip>
          </div>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md:"contents" } }}>

          <Tooltip title="See more food items">
            <Button href="/" startIcon={<LocalDiningIcon />}>Explore</Button>
            </Tooltip>
            </Box>
            <Tooltip title="See your cart items">
              <Button onClick={showCart}  >
                Cart
                <Badge badgeContent={quantity} color="primary">
                  <AddShoppingCartIcon color="primary" />
                </Badge>
              </Button>
            </Tooltip>
            {!findUserId() ?
              <Button variant="outlined" href="/login"   >
                login
              </Button> : null}
          </Box>
          {findUserId() ?
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="See Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <img
              src="static/man-beard.png"
              data-rimg-scale="1"
              height={40}
              width={50}
              alt="logo"
            />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" >
                    <Link style={{ textDecoration: "none" }} href="/profile" variant="body2">
                      Profile
                    </Link>

                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">My Order</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>

                  
                  <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box> : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
