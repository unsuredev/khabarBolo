import React from 'react'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cart-slice';
import "react-toastify/dist/ReactToastify.css";
//@ts-ignore
const Product = ({ id ,name, img, description, price, time }) => {
    const dispatch = useDispatch()
    const addTocart=()=>{
        dispatch(cartActions.addToCart({
        id, name, img, description, price, time
        })
        )
    }






    return (
        <Card style={{ borderRadius: "10px" }}>
            <Tooltip title="10% OFF INCLUDED">
                <Chip label="10% OFF" style={{color:"white"}} color='secondary' />
            </Tooltip>
            <Chip label="Free Delivery" variant="outlined" />
            <CardContent>
                <img
                    src={img}
                    data-rimg-scale="1"
                    height={220}
                    width={250}
                    alt={name}
                />
                <Typography variant="button" display="block" gutterBottom>
                    {name}
                    {/*
                // @ts-ignore */}
                    {false ? <Tooltip title="Veg Food"> <CircleIcon style={{ color: "green", fontSize: "13px" }} /></Tooltip> : <Tooltip title="Non Veg Food"><CircleIcon fontSize='small' style={{ color: "red", fontSize: "13px" }} /></Tooltip>}
                </Typography>
                <Typography
                    component="li"
                    variant="subtitle1"
                    align="center"
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "space-evenly", padding: "2px" }} >
                <Typography variant="h5" gutterBottom component="div">
                    &#8377;{price}
                </Typography>
                <Typography variant="overline" display="block" gutterBottom>
                    {time}
                </Typography>
                
                <Button onClick={addTocart} style={{ borderRadius: "30px",  color: "white" }} variant="contained" startIcon={<AddIcon />}>
                    Add
                </Button>

            </CardActions>
        </Card>

    )
}

export default Product