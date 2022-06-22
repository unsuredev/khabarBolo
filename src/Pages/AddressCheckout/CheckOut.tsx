import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddressForm from "./Address";
import Review from "../Review/ReviewOrder";
import MakePayment from '../Payments/Payment'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const steps = ["Shipping address", "Review your order",'Payment'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <Review />;
        default:
            throw new Error("Unknown step");
    }
}

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    React.useEffect(() => {
        document.title = "KhabarBolo | Check Out  ";
      }, []);



    return (
        <>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }} style={{ marginTop:"2rem" , paddingTop:"10rem"}}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length-1 ? (
                            <React.Fragment>
                                <div style={{height:"30vh"}}>
                                <List>
                                <ListItem >
                                    <Typography variant="h5" component="div">
                                    We do not accept CASH ON DELIVERY
                                    </Typography>
                                </ListItem>
                                <Divider />
                                </List>
                                <ListItem >
                                    <Typography variant="body2">
                                    If amount deducted and item not deliverd. we will refund the amount to your bank within 3 working days!.
                                    </Typography>
                                </ListItem>
                                <MakePayment/>
                                </div>                                
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        {activeStep === steps.length  ?'process to payment' : "Next"}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
            </Container>
        </>
    );
}
