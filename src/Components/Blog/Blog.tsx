import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const blogs = [
    {
        imgurl: "/blog/blog1.png",
        title: "Quick Delivery",
        description: "Bacon ipsum dolor amet picanha chicken pig porchetta tenderloin meatball rump. Corned beef strip",
        buttonText: "see more",
        buttonVariant: "outlined",
    },
    {
        imgurl: "/blog/blog2.png",
        title: "A Good Auto Responder",
        description: "Bacon ipsum dolor amet picanha chicken pig porchetta tenderloin meatball rump. Corned beef strip",
        buttonText: "view ofer",
        buttonVariant: "outlined",
    },
    {
        imgurl: "/blog/blog3.png",
        title: "Home Delivery",
        description: "Bacon ipsum dolor amet picanha chicken pig porchetta tenderloin meatball rump. Corned beef strip",
        buttonText: "read more",
        buttonVariant: "outlined",
    },
];

const Blog = () => {
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
                  We delivery all kinds of food on time with great  from fastfood to cake and Biryani to meals
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="lg" component="main" style={{justifyContent:"center", textAlign:"center"}}>
                <Grid container spacing={5} alignItems="flex-end">
                    {blogs.map((blog) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid mb={3}
                            item
                            key={blog.title}
                            xs={12}
                            sm={6}
                            md={4}
                        >
                            <Card>
                                <CardContent>
                                    <img
                                        src={blog.imgurl}
                                        data-rimg-scale="1"
                                        height={220}
                                        width={250}
                                        alt={blog.title}
                                    />
                                         <Typography
                                        variant="button" display="block" gutterBottom
                                        >
                                            {blog.title}
                                        </Typography>
                                        <Typography
                                            component="li"
                                            variant="subtitle1"
                                            align="center"
                                        >
                                            {blog.description}
                                        </Typography>
                                    
                                </CardContent>
    
                                <CardActions style={{justifyContent:"center", textAlign:"center"}}>
                                <Button endIcon={<ArrowRightAltIcon />}>
                                        {blog.buttonText}
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

export default Blog;
