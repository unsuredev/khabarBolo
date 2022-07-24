import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import SuggestedProduct from '../SuggestedProduct/SuggestedProduct'
import Grid from '@mui/material/Grid';
import CartItem from '../CartItem/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { cartActions } from '../../Store/cart-slice';

const CartItems = (props: any) => {
  let history = useHistory();

  let grandTotal = 0
                        //@ts-ignore
  const itemLists = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

   if(itemLists && itemLists.length > 0) {
    itemLists.forEach((item: any) => {
      grandTotal += item.totalPrice
    })
  }

  const dispatch = useDispatch()

  const handleClearCart = (id: any) => {
    console.log("remove called")
    dispatch(cartActions.clearCart(id))
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2 }}
        maxWidth="md"
        style={{ marginTop: "10rem" }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Your Cart :
        </Typography>

        {itemLists.length > 0 && (
          <div>
                            <Grid item xs={12} md={12}>

            <TableContainer >
              <Table aria-label="simple table" size="small">
                <TableHead
                  style={{ backgroundColor: "#ff9800", color: "white" }}
                >
                  <TableRow style={{ color: "white" }}>
                    <TableCell style={{ color: "white" }}>Sl No</TableCell>
                    <TableCell style={{ color: "white" }}>
                      Name
                    </TableCell>

                    <TableCell style={{ color: "white" }} align="right">
                      Price{" "}
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      Adjust Quantity
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      Total Amount
                    </TableCell>
                  </TableRow>


                </TableHead>

              </Table>
            </TableContainer>
            </Grid>
            {itemLists.map((food: any) => (
              <div key={food.id}>
                                <TableContainer >

                <CartItem food={food} />
                </TableContainer>
              </div>
            ))}
          </div>
        )}

{itemLists.length > 0 && (
  <div>
        <div style={{ textAlign: "right" }}>
          Subtotal :&#x20B9; <b>{grandTotal}</b>
        </div>
        <Button style={{ color: "white" }} variant="contained" href='/checkout'>
          Check-out
        </Button>
        <Button variant="outlined" onClick={() => handleClearCart(100)}>
          clear Cart
        </Button>
        </div>)}
        {itemLists.length === 0 && (
          <Grid container style={{marginTop:"10rem"}}>
            <Grid item xs={12} md={12}>
              <Typography variant="h6" component="h4" gutterBottom>
                Please add item to your cart!
              </Typography>
              <img
                src="/blog/nocart.png"
                data-rimg-scale="1"
                height="100%"
                width="100%"
                alt="no item"
              />
            </Grid>
          </Grid>
        )}
        <div style={{ marginTop: "5rem" }}></div>
        <SuggestedProduct />
      </Container>
    </Box>
  );
}

export default CartItems



