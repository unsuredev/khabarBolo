import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import * as Yup from 'yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import Container from '@mui/material/Container';
import GoogleLogin from "react-google-login";
import { GCLIENT_ID, BASE_URL } from "../../Common/constant";
import Typography from '@mui/material/Typography';
import { toast } from "react-toastify";
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { authActions } from '../../Store/auth-slice';
const Login = () => {

    const [passwordShown, setPasswordShown] = React.useState(false);
    let history = useHistory();
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    let icon: any;
    if (passwordShown == true) {
        icon = <VisibilityIcon onClick={togglePasswordVisiblity} />;
    } else if (passwordShown == false) {
        icon = <VisibilityOffIcon onClick={togglePasswordVisiblity} />;
    }


    const dispatch= useDispatch()


    React.useEffect(() => {
        document.title = "KhabarBolo | Login ";
      }, []);


    // google  response
    const responseGoogle = async (response: any) => {
        try {
            const profileObj = response?.profileObj;
            if (profileObj != null) {
                const { email, googleId, name } = profileObj;
                const result = await axios.post(
                    BASE_URL + "/user/login",
                    {
                        email: email,
                        login_type: "google",
                        google_account_id: googleId
                    },
                    { headers: { encryption: false } }
                );
                localStorage.setItem(
                    "access_token",
                    result.data.data.access_token
                );
            }
        } catch (error) {
            console.log("error", error)
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).required('Password is required')
                })}
                onSubmit={async (values: any) => {
                    console.log("values", values)
                    try {
                        const result = await axios.post(BASE_URL + "user/login", {
                            "login_type": "email",
                            "email": values.email.toLowerCase(),
                            "password": values.password,
                        }, {
                            headers: {
                                encryption: false,
                                'Accept': 'application/json'
                            },
                        });
                        if (result.data.status === "success") {
                            toast.success("Login Successfully!");
                            localStorage.setItem("access_token", result.data.data.access_token)
                            dispatch(authActions.login())
                            history.push('/')
                        }
                    }
                    catch (error) {
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
                    <div style={{marginTop:"12rem"}}>
                    <Form >
                        <Box
                            sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
 
 <div style={{paddingTop:"4rem"}}>
 <Typography variant="h5" gutterBottom component="div">
    Welcomeback!, Login to continue
      </Typography>
 </div>

                            <Box  sx={{ mt: 1 }} style={{ marginTop: "5rem" }}>
                                <Grid container spacing={2}>
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
                                            error={Boolean(touched.password && errors.password)}
                                            helperText={touched.password && errors.password}
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            id="password"
                                            autoComplete="new-password"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            type={passwordShown ? "text" : "password"}
                                            value={values.password}
                                            InputProps={{
                                                endAdornment: icon,
                                            }}
                                        />
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
                                    Login
                                </Button>
                                <Grid item xs={12} md={12} >
                                    <GoogleLogin
                                        clientId={GCLIENT_ID}
                                        buttonText="Continue with Google"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        render={(props: any) => (
                                            <Button
                                                className="socialButton"
                                                onClick={props.onClick}
                                                variant="outlined"
                                                fullWidth
                                            >
                                                <img
                                                    className="btn-logo"
                                                    src="/blog/Google@3x.png"
                                                    alt="GLogo"
                                                />
                                                <Typography
                                                    variant="button"
                                                    display="block"
                                                    className="FB"
                                                    gutterBottom
                                                >
                                                    &nbsp; Continue With Google
                                                </Typography>
                                            </Button>
                                        )}
                                    />
                                </Grid>
                            </Box>
                        </Box>
                    </Form>
                    </div>
                )}
            </Formik>
            <Grid container>
                <Grid item xs m={1}>
                    <Link style={{color:"black"}} href="/reset" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item   m={1}>
                    <Link style={{color:"black"}} href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
            <br></br>
            <br></br>
            <br></br>
            <br></br>    <br></br>
            <br></br>
        </Container>
    );
}


export default Login




