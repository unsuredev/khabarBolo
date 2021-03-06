import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../Common/constant";
import Button from "@mui/material/Button";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box';
import jwt_decode from "jwt-decode";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Radio from '@mui/material/Radio';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

export default function AddressForm() {
    const [show, setShow] = React.useState(false)
    const [addres, setAddress] = React.useState({
        name: "",
        email: "",
        landmark: "",
        location: "",
        area: "",
        additionalInfo: "",
        mobile: "",
        pin: "",
    });
    const [showAddress, setShowAddress] = React.useState(false)


    const getToken = () => {
        //@ts-ignore
        return localStorage.getItem("access_token");
    };


    const findUserId = () => {
        let token: any = localStorage.getItem("access_token");
        var decoded = jwt_decode(token);
        //@ts-ignore
        let { user_id } = decoded;
        return user_id
    }

    React.useEffect(() => {
        document.title = "KhabarBolo | Checkout ";
        getUserAddres()
    }, []);

    const getUserAddres = async () => {
        try {
            const result = await axios.post(
                BASE_URL + "address/get",
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
                setAddress(result.data.data)
                setShowAddress(true)
            }
            else{
                setShowAddress(false)
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <React.Fragment>
            <Grid container style={{ margin: "auto", justifyContent: "center" }}>
                
                <Grid xs={12} sm={12} md={12}>
                {addres.name &&(
                    <Card style={{ textAlign: "left" }} >
                    <Typography variant="body2" style={{ paddingLeft: "2rem", paddingTop:"1rem" }}>
                            Addres Details
                                    </Typography>
                        <CardContent>
                            <List>
                                <ListItem >
                                    
                                    <Typography variant="h6" component="div">
                                        Name : {addres.name}
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Typography variant="body2">
                                        Email :   {addres.email}
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Typography variant="body2">
                                        Mobile :    {addres.mobile}
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Typography variant="body2">
                                        Location :    {addres.location}
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Typography variant="body2">
                                        Landmark :    {addres.landmark}
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Typography variant="body2">
                                        Area :    {addres.area}
                                    </Typography>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Typography variant="body2">
                                        Pin :    {addres.pin}
                                    </Typography>
                                </ListItem>
                                <Divider />
                            </List>

                        </CardContent>

                        <CardActions style={{ justifyContent: "space-between" }}>
                            <Button size="small" variant="contained" onClick={() => setShow(!show)}> {show ? "close" : "update"}</Button>
                            Default Address<Radio
                                checked={true}
                                value="a"
                                name="Default"
                            />
                        </CardActions>
                    </Card>)}
                    {!addres.name &&(
                        <Card>
                             <CardContent >
                             <Button style={{color:"white", textAlign:"center"}} size="medium" variant="contained" onClick={() => setShow(!show)}> Add New address</Button>

                             </CardContent>
                        </Card>
                    )}
                </Grid>
            </Grid>

            {show ?
                <div style={{ margin: "2rem" }}>

                    <Typography variant="h6" gutterBottom>
                        Shipping address
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Note : We are currently delivering 5km from Hariharpara Bazar
                    </Typography>


                    <Formik
                        initialValues={{
                            zip: 742166,
                            area: 'Hariharpara',
                            additionalInfo: "",
                            landMark: "",
                            name: "",
                            mobile: ""
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().max(255).required('Name is required'),
                            area: Yup.string().max(25).required('Area is required'),
                            additionalInfo: Yup.string().max(255).required('Para, Moholla is required'),
                            landMark: Yup.string().max(255).required('Land mark is required'),
                            mobile: Yup.string()
                                .required('Mobile  is required')
                                .matches(/^[0-9]+$/, "Must be only digits")
                                .min(10, 'Must be exactly 10 digits')
                                .max(10, 'Must be exactly 10 digits'),
                            zip: Yup.string()
                                .required('Pincode  is required')
                                .matches(/^[0-9]+$/, "Must be only digits")
                                .min(6, 'Must be exactly 6 digits')
                                .max(6, 'Must be exactly 6 digits'),

                        })}
                        onSubmit={async (values: any) => {
                            try {
                                const result = await axios.post(
                                    BASE_URL + "address/addandupdate",
                                    {
                                        pin: values.zip.toString(),
                                        area: values.area,
                                        location: values.additionalInfo,
                                        landmark: values.landMark,
                                        name: values.name,
                                        mobile: values.mobile.toString(),
                                        user_id: findUserId()
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
                                    toast.success("Address saved successfully!");

                                } else {
                                    toast.error(result.data.message);
                                }
                            } catch (error) {
                                console.log(error);
                                toast.error("unable to find user!");
                            }
                        }}
                    >
                        {({
                            errors,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting,
                            touched,
                            values
                        }) => (
                            <div >
                                <Form >
                                    <Box
                                        sx={{
                                            marginTop: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box sx={{ mt: 1 }} >
                                            <Grid container spacing={2} >
                                                <Grid item xs={12} >
                                                    <TextField
                                                        required
                                                        id="name"
                                                        name="name"
                                                        label="Receiver's Full Name"
                                                        fullWidth
                                                        autoComplete="given-name"
                                                        variant="standard"
                                                        value={values.name}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={Boolean(touched.name && errors.name)}
                                                        helperText={touched.name && errors.name}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        id="mobile"
                                                        name="mobile"
                                                        label="Mobile Number (We will call during delivery)"
                                                        fullWidth
                                                        type="number"
                                                        variant="standard"
                                                        value={values.mobile}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={Boolean(touched.mobile && errors.mobile)}
                                                        helperText={touched.mobile && errors.mobile}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        required
                                                        id="landMark"
                                                        name="landMark"
                                                        label="Land Mark,(school, office, shop name)"
                                                        fullWidth
                                                        autoComplete="shipping address-line1"
                                                        variant="standard"
                                                        value={values.landMark}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={Boolean(touched.landMark && errors.landMark)}
                                                        helperText={touched.landMark && errors.landMark}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        id="additionalInfo"
                                                        name="additionalInfo"
                                                        label="Para, Moholla, Way To Go, Anything *"
                                                        fullWidth
                                                        autoComplete="additionalInfo"
                                                        value={values.additionalInfo}
                                                        variant="standard"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={Boolean(touched.additionalInfo && errors.additionalInfo)}
                                                        helperText={touched.additionalInfo && errors.additionalInfo}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="area"
                                                        name="area"
                                                        label="Area , Village"
                                                        fullWidth
                                                        autoComplete="shipping address-level2"
                                                        variant="standard"
                                                        value={values.area}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={Boolean(touched.area && errors.area)}
                                                        helperText={touched.area && errors.area}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6}>
                                                    <TextField
                                                        required
                                                        id="zip"
                                                        name="zip"
                                                        label="Zip / Postal code"
                                                        fullWidth
                                                        autoComplete="shipping postal-code"
                                                        variant="standard"
                                                        type="number"
                                                        value={values.zip}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={Boolean(touched.zip && errors.zip)}
                                                        helperText={touched.zip && errors.zip}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <div style={{ margin: "auto", textAlign: "center", padding: "1rem" }}>
                                                <Button
                                                    disabled={isSubmitting}
                                                    type="submit"
                                                    style={{ color: "white" }} variant="contained">
                                                    Save address

                                                </Button>
                                            </div>
                                            <Grid item xs={12} md={12} >
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </div> : null}
        </React.Fragment>
    );
}
