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
import { useSelector } from 'react-redux';

const CartItems = (props: any) => {
  let grandTotal=0

    const itemLists = useSelector((state: any) => state.cart.itemList)

    itemLists.forEach((item:any)=>{
      grandTotal+=item.totalPrice
  })
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
          style={{ marginTop: "7rem" }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Your Carts :
          </Typography>

          {itemLists.length > 0 && (
            <div>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead
                    style={{ backgroundColor: "#ff9800", color: "white" }}
                  >
                    <TableRow style={{ color: "white" }}>
                      <TableCell style={{ color: "white" }}>Sl No</TableCell>
                      <TableCell style={{ color: "white" }} align="left">
                        Name
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Price{" "}
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Quantity
                      </TableCell>
                      <TableCell style={{ color: "white" }} align="right">
                        Total Amount
                      </TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              {itemLists.map((food: any) => (
                <div key={food.id}>
                  <CartItem food={food} />
                </div>
              ))}
            </div>
          )}

          <div style={{ textAlign: "right" }}>
            Subtotal : <b>{grandTotal}</b>
          </div>
          <Button variant="outlined" href="/checkout">
            Check-out
          </Button>

          {itemLists.length === 0 && (
            <Grid container>
              <Grid item xs={12} md={12}>
                <Typography variant="h6" component="h4" gutterBottom>
                  No Item
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
          <div style={{ marginTop: "10rem" }}></div>
          <SuggestedProduct />
        </Container>
      </Box>
    );
}

export default CartItems



