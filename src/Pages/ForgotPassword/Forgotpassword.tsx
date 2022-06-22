import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../Store/auth-slice';


const ForgotPassword = () => {


    React.useEffect(() => {
        document.title = "KhabarBolo | Forgot";
      }, []);

    return (
        <Container component="main" maxWidth="xs" style={{height:"60vh"}}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <img
                    src="/logo2.png"
                    data-rimg-scale="1"
                    height={40}
                    width={150} alt="logo" />
                <Box component="form" noValidate  sx={{ mt: 3 }} style={{ marginTop: "6rem" }}>
                    <Grid container >
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Registered Email Id"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        style={{ color: "white" }}
                    >
                        send reset email
                    </Button>
                    <Grid container>
                        <Grid item>
                        <Link href="/login" variant="body2">
                        Rememberd password? Sign in
                    </Link>
                        </Grid>
                    </Grid>
                    <br></br>
                </Box>
            </Box>
        </Container>
    );
}


export default ForgotPassword 