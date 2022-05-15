import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';

const foodArray = [
    {
        "id": "7",
        "category": "lunch",
        "name": "Healthy Meal Plan",
        "img": "https://i.imgur.com/4ifqEuW.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 120,
        "time":"40 mins"

    },
    {
        "id": "8",
        "category": "lunch",
        "name": "Fried Chicken Beneta",
        "img": "https://i.imgur.com/5fJnbk3.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 110,
        "time":"30 mins"

    },
    {
        "id": "9",
        "name": "Tarragol Rubble Salmon",
        "category": "lunch",
        "img": "https://i.imgur.com/RsIx4t1.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 140,
        "time":"50 mins"

    },
    {
        "id": "10",
        "name": "Indian Lunch Beneta",
        "category": "lunch",
        "img": "https://i.imgur.com/u0r90tN.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 110,
        "time":"20 mins"

    },
    {
        "id": "11",
        "name": "Beef Stick Glazed",
        "category": "lunch",
        "img": "https://i.imgur.com/0jxpCAI.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 120
    },
    {
        "id": "12",
        "name": "Honey Soi Glazed",
        "category": "lunch",
        "img": "https://i.imgur.com/CNpakkJ.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 99
    },
    {
        "id": "37",
        "category": "shawarma",
        "name": "Suppli BBQ Chickens",
        "img": "https://i.imgur.com/6gvwxbt.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 40,
        "time":"30 mins"
    },
    {
        "id": "38",
        "category": "shawarma",
        "name": "Fried Chicken Americana",
        "img": "https://i.imgur.com/O0cfCQK.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 59,
        "time":"33 mins"

    },
    {
        "id": "39",
        "name": "Tarragol Rubble Mexicana",
        "category": "shawarma",
        "img": "https://i.imgur.com/NLxqMow.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 69,
        "time":"50 mins"

    },
    {
        "id": "40",
        "name": "Roma Naga Beneta",
        "category": "shawarma",
        "img": "https://i.imgur.com/llC8cnj.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 55,
        "time":"33 mins"

    },
    {
        "id": "41",
        "name": "Beef Roll Glazed",
        "category": "shawarma",
        "img": "https://i.imgur.com/KVXsO1M.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 60,
        "time":"40 mins"

    },
    {
        "id": "42",
        "name": "Lakasana Soi Glazed",
        "category": "shawarma",
        "img": "https://i.imgur.com/uhpgvee.png",
        "description": "Pecorino smellY cheese melted cheese",
        "story": "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
        "price": 80,
        "time":"45 mins"

    },


]

const Food = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                disableGutters
                maxWidth="sm"
                component="main"
                sx={{ pt: 8, pb: 6 }}
            >
                <Typography
                    component="h6"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Why You Chose Us!
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Quickly build an effective pricing table for your potential
                    customers with this layout. It&apos;s built with default MUI
                    components with little customization.
                </Typography>
            </Container>
            <Container
                maxWidth="lg"
                component="main"
                style={{ justifyContent: "center", textAlign: "center" }}
            >
                <Grid container spacing={5} alignItems="flex-end">
                    {foodArray.map((food) => (
                        <Grid mb={3} item key={food.name} xs={12} sm={6} md={4}>
                            <Card style={{borderRadius:"10px"}}>
                                <CardContent>
                                    <img
                                        src={food.img}
                                        data-rimg-scale="1"
                                        height={220}
                                        width={250}
                                    />
                                    <Typography variant="button" display="block" gutterBottom>
                                        {food.name}
                                    </Typography>
                                    <Typography
                                        component="li"
                                        variant="subtitle1"
                                        align="center"
                                    >
                                        {food.description}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{display:"flex", justifyContent:"space-evenly", padding:"2px"}} >
                                    <Typography variant="h5" gutterBottom component="div">
                                        &#8377;{food.price}
                                    </Typography>
                                    <Typography variant="overline" display="block" gutterBottom>
                                        {food.time}
                                    </Typography>
                                    <Button style={{borderRadius:"30px", backgroundColor:"black" ,color:"white" }} variant="contained" startIcon={<AddIcon />}>
                                        Add
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
};

export default Food;
