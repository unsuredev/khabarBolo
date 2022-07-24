import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GoogleLogin from "react-google-login";
import axios from "axios";
import { GCLIENT_ID, BASE_URL } from "../../Common/constant";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { toast } from "react-toastify";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useHistory } from "react-router-dom"
 import './register.css'

const Register = () => {
    let history = useHistory();
    const [value, setValue] = React.useState('female');
    const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };





    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box 
            style={{marginTop:"12rem"}}
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" gutterBottom component="div">
                    Welcome to <span style={{ color: "#FF9800" }} >KhabarBolo</span>
                </Typography>
                <Box sx={{ mt: 3 }} style={{ marginTop: "5rem" }}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            mobile: '',
                            password: '',
                            gender: 'male'
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().max(25).required('Name is required'),
                            gender: Yup.string().max(25).required('Gender is required'),
                            mobile: Yup.string()
                                .required('Mobile is required')
                                .matches(/^[0-9]+$/, "Must be only digits")
                                .min(10, 'Must be exactly 10 digits')
                                .max(10, 'Must be exactly 10 digits'),
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                            password: Yup.string().min(6, 'Password must be combination of 6 digits with char').max(255).required('Password is required')
                        })}
                        onSubmit={async (values: any) => {
                            try {
                                const result = await axios.post(BASE_URL + "user/add",
                                    {
                                        "name": values.name,
                                        "login_type": "email",
                                        "email": values.email,
                                        "mobile": values.mobile.toString(),
                                        "fullName": values.name,
                                        "password": values.password,
                                        "gender":value
                                    }
                                )
                                if (result.data.data && result.data != null) {
                                    toast.success("Sign up Successfull");
                                    localStorage.setItem("access_token", result.data.data.access_token)
                                    history.push('/')
                                    window.location.reload()
                                    console.log("res", result.data)
                                }
                            } catch (error) {
                                //@ts-ignore
                                if (error.response.data.message == "Unable to Login user") {
                                    //@ts-ignore
                                    toast.error(error.response.data.errorMessage);
                                }
                                else {
                                    //@ts-ignore
                                    toast.error(error.response.data.message);
                                    console.log(error)
                                }
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
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} >
                                            <TextField
                                                error={Boolean(touched.name && errors.name)}
                                                helperText={touched.name && errors.name}
                                                autoComplete="name"
                                                name="name"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Full Name"
                                                autoFocus
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={Boolean(touched.email && errors.email)}
                                                helperText={touched.email && errors.email}
                                                required
                                                fullWidth
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="email"
                                                value={values.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={Boolean(touched.mobile && errors.mobile)}
                                                helperText={touched.mobile && errors.mobile}
                                                required
                                                fullWidth
                                                id="mobile"
                                                label="Mobile Number (we may send OTP)"
                                                name="mobile"
                                                autoComplete="mobile"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                type="number"
                                                value={values.mobile}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                        <FormControl component="fieldset">
                                        <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChangeRadio} style={{ flexDirection: "row" }}>
                                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                      </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                error={Boolean(touched.password && errors.password)}
                                                helperText={touched.password && errors.password}
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                autoComplete="new-password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2" gutterBottom>
                                                By clicking on enter, you accept the
                                                <Link rel="stylesheet" href="/privacy" >&nbsp; terms and conditions</Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        style={{ color: "white" }}
                                    >
                                        Sign Up
                                    </Button>
                                </Form>
                            </div>
                        )}
                    </Formik>
   
                </Box>
            </Box>
          
            <br></br>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2">
                        Existing user? Sign in
                    </Link>
                </Grid>
            </Grid>  <br></br>

        </Container>
    );
}


export default Register