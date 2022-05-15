import * as React from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {
  faCartArrowDown,
  faUtensils,
  faStore,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";



import Logo from "../../images/logo2.png";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event: any) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: any) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
      <Container>
        <Toolbar>
          <div style={{ marginTop: "1rem" }}>
            <Link to="/" className="navbar-brand">
              <img
                src="/logo2.png"
                data-rimg-scale="1"
                height={40}
                width={150}
              />
            </Link>
          </div>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
            <Button startIcon={<LocalDiningIcon />}>Explore</Button>
            <Button startIcon={<AddShoppingCartIcon />}>Cart</Button>
            <Button variant="outlined"  >
              login
            </Button>
            &nbsp;
            &nbsp;

            <Button variant="contained" style={{color:"white"}} >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    );
};
export default Navbar;
