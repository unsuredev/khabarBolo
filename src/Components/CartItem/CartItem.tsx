import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cart-slice";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Padding } from "@mui/icons-material";

const CartItem = (props: any) => {

    const { id, name, price, img, quantity ,totalPrice} = props.food;


    const dispatch = useDispatch()

    const incrementCartItems = () => {
        dispatch(cartActions.addToCart({
            id, name, img, quantity, price, totalPrice
        }))
    }

    const decrementCartItems = () => {
        dispatch(cartActions.removeFromCart(id))

    }

    return (
        <React.Fragment>
            <Container
                disableGutters
                component="main"
                sx={{ pt: 1, pb: 1 }}
                style={{ backgroundColor: "InfoBackground" }}
            >
                <Grid item xs={12} md={12}>

                    <Table size="small">
                        <TableBody>
                            <TableRow key={id}>
                                <TableCell  align="left">{name}</TableCell>
                                <TableCell>{price}</TableCell>
                                <TableCell>
                                    <IconButton onClick={decrementCartItems} aria-label="delete" size="small">
                                        <RemoveIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                                <TableCell>
                                    {quantity}
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={incrementCartItems} aria-label="delete" size="small">
                                        <AddIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right"><span  > &#x20B9; {totalPrice}
                                    </span></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                  
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default CartItem;
