import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import Container from "@mui/material/Container";
import GoogleLogin from "react-google-login";
import { GCLIENT_ID, BASE_URL } from "../../Common/constant";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebaseapp } from "../../Common/config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import { authActions } from "../../Store/auth-slice";
const Login = () => {
  const [mynumber, setnumber] = React.useState("");
  const [otp, setotp] = React.useState("");
  const [show, setshow] = React.useState(false);
  const [final, setfinal] = React.useState("");

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

  const dispatch = useDispatch();

  React.useEffect(() => {
    document.title = "KhabarBolo | Login ";
  }, []);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseapp);

  const signInWithGoogle = async () => {
    try {
      const result: any = await signInWithPopup(auth, provider);
      if (result && result.user != null) {
        const result2 = await axios.post(
          BASE_URL + "user/login",
          {
            email: result.user.email,
            login_type: "google",
            google_account_id: result.user.uid,
          },
          { headers: { encryption: false } }
        );
        localStorage.clear();
        localStorage.setItem("access_token", result2.data.data.access_token);
        toast.success("Login successfull");
        dispatch(authActions.login());
        history.push("/");
      }
    } catch (error) {
      //@ts-ignore
      if (error.response.data.message == "Unable to Login user") {
        //@ts-ignore
        toast.error(error.response.data.errorMessage);
      } else {
        //@ts-ignore
        toast.error(error.response.data.message);
        console.log(error);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values: any) => {
          console.log("values", values);
          try {
            const result = await axios.post(
              BASE_URL + "user/login",
              {
                login_type: "email",
                email: values.email.toLowerCase(),
                password: values.password,
              },
              {
                headers: {
                  encryption: false,
                  Accept: "application/json",
                },
              }
            );
            if (result.data.status === "success") {
              toast.success("Login Successfully!");
              localStorage.clear();
              localStorage.setItem(
                "access_token",
                result.data.data.access_token
              );
              dispatch(authActions.login());
              history.push("/");
              window.location.reload();
            }
          } catch (error) {
            //@ts-ignore
            if (error.response.data.message == "Unable to Login user") {
              //@ts-ignore
              toast.error(error.response.data.errorMessage);
            } else {
              //@ts-ignore
              toast.error(error.response.data.message);
              console.log(error);
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
          values,
        }) => (
          <div style={{ marginTop: "12rem" }}>
            <Form>
              <Box
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ paddingTop: "4rem" }}>
                  <Typography variant="h5" gutterBottom component="div">
                    Welcomeback!, Login to continue
                  </Typography>
                </div>

                <Box sx={{ mt: 1 }} style={{ marginTop: "5rem" }}>
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
                  <Grid item xs={12} md={12}>
                    <Grid item xs={12} md={12}>
                      <Button
                        className="socialButton"
                        onClick={signInWithGoogle}
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
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Form>
          </div>
        )}
      </Formik>
      <Grid container>
        <Grid item xs m={1}>
          <Link style={{ color: "black" }} href="/reset" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item m={1}>
          <Link style={{ color: "black" }} href="/register" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <br></br>
    </Container>
  );
};

export default Login;
