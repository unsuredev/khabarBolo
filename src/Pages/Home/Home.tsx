import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Banner from "../../Components/Banner/Index";
import Features from "../../Components/Blog/Blog";
import Food from "../../Components/Products/Products";
import CartItems from "../../Components/CartItems/CartItems";
import MakePayment from "../Payments/Payment";
import SuggestedProduct from '../../Components/SuggestedProduct/SuggestedProduct'
import { useSelector } from "react-redux";
import { Container } from "@mui/material";

const Home = () => {
  const showcartItems = useSelector((state: any) => state.cart.showCart);
  return (
    <>
      <CssBaseline />
      {!showcartItems &&<Banner />}
      {showcartItems && <CartItems />}
      <MakePayment />
      <main>
        <Food />
        <Features />
      </main>
    </>
  );
};

export default Home;
