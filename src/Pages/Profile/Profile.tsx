import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { BASE_URL } from "../../Common/constant";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

const Profile = () => {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        mobile: "",
    });

    const getToken = () => {
        //@ts-ignore
        return localStorage.getItem("access_token");
    };

    React.useEffect(() => {
        document.title = "KhabarBolo | Profile  ";
        fetchUser();
    }, []);

    const findUserId = () => {
        let token: any = localStorage.getItem("access_token");
        var decoded = jwt_decode(token);
        //@ts-ignore
        let { user_id } = decoded;
        return user_id;
    };

    const fetchUser = async () => {
        try {
            const result = await axios.post(
                BASE_URL + "user/find",
                {
                    user_id: findUserId(),
                },
                {
                    headers: {
                        encryption: false,
                        //@ts-ignore
                        access_token: getToken(),
                    },
                }
            );
            if (result && result.data != null) {
                console.log("res", result);
                setUser(result.data.data);
            } else {
                toast.error(result.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("unable to find user!");
        }
    };
    return (
        <React.Fragment>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container
                    maxWidth="md"
                    style={{ backgroundColor: "#fff3e0", padding: "15px" }}
                >
                    <Typography variant="h5" align="center" gutterBottom component="div">
                        {user.name}
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom component="div">
                        Email: {user.email}
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom component="div">
                        Mobile:{user.mobile}
                    </Typography>

                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained">Current orders:</Button>
                        <Button variant="outlined">Past Orders</Button>
                    </Stack>
                </Container>
            </Box>
            <Box
                sx={{
                    bgcolor: "background.paper",
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="sm">
                    <List
                        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
                    >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Summer BBQ"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>
                                        {" — Wish I could come, but I'm out of town this…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Oui Oui"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: "inline" }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>
                                        {" — Do you have Paris recommendations? Have you ever…"}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </List>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default Profile;
