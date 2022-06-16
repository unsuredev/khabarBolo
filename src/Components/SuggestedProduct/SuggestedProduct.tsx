import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Carousel from "react-material-ui-carousel";
import Product from "../Product/Product";

const SuggestedProduct = () => {
  const foodArray = [
    {
      id: "7",
      category: "lunch",
      name: "Healthy Meal Plan",
      img: "https://i.imgur.com/4ifqEuW.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 120,
      time: "40 mins",
    },
    {
      id: "8",
      category: "lunch",
      name: "Fried Chicken Beneta",
      img: "https://i.imgur.com/5fJnbk3.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 110,
      time: "30 mins",
    },
    {
      id: "9",
      name: "Tarragol Rubble Salmon",
      category: "lunch",
      img: "https://i.imgur.com/RsIx4t1.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 140,
      time: "50 mins",
    },
    {
      id: "10",
      name: "Indian Lunch Beneta",
      category: "lunch",
      img: "https://i.imgur.com/u0r90tN.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 110,
      time: "20 mins",
    },
    {
      id: "11",
      name: "Beef Stick Glazed",
      category: "lunch",
      img: "https://i.imgur.com/0jxpCAI.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 120,
    },
    {
      id: "12",
      name: "Honey Soi Glazed",
      category: "lunch",
      img: "https://i.imgur.com/CNpakkJ.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 99,
    },
    {
      id: "37",
      category: "shawarma",
      name: "Suppli BBQ Chickens",
      img: "https://i.imgur.com/6gvwxbt.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 40,
      time: "30 mins",
    },
    {
      id: "38",
      category: "shawarma",
      name: "Fried Chicken Americana",
      img: "https://i.imgur.com/O0cfCQK.png",
      description: "Pecorino smellY cheese melted cheese",
      story:
        "Gummi bears topping pie pastry bonbon cupcake caramels. Muffin muffin jujubes donut",
      price: 59,
      time: "33 mins",
    },
  ];
  return (
    <Container>
      <Grid container maxWidth="md" >
        <Grid item xs={12} sm={12} md={6}>
          <Carousel animation="slide" navButtonsAlwaysVisible>
            {foodArray.map((food: any, i: number) => (
              <Product
                id={food.id}
                name={food.name}
                img={food.img}
                description={food.description}
                price={food.price}
                time={food.time}
              />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuggestedProduct;
{
}
