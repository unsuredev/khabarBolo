import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressForm() {

    const [address, setAddress]= React.useState({
        zip:742166,
        exactLocation:"",
        area:'Hariharpara',
        additionaInfo:"",
        landMark:"",
        name:"",
        mobile:""


    })
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address 
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
            Note : We are currently delivering 4km from Hariharpara Bazar

            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <TextField
                        required
                        id="name"
                        name="name"
                        label="Full Name"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        value={address.name}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="mobile"
                        name="mobile"
                        label="Mobile Number (We will call during delivery)"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="landmark"
                        name="landmark"
                        label="Land Mark,(school, office, shop name)"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        value={address.landMark}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="additionaInfo"
                        name="additionaInfo"
                        label="Para, Moholla, Way to go, Anything specific"
                        fullWidth
                        autoComplete="additionaInfo"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="area"
                        name="area"
                        label="Area"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        value={address.area}
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
                        value={address.zip}
                    />
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
