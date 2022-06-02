import React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { RAZOR_PAY_KEY } from '../../Common/constant'



const MakePayment = (props: any) => {
    const queryParams = new URLSearchParams(window.location.search);
    const [data, setData] = React.useState({
        payment_token: queryParams.get("payment_token"),
    });

    const [open, setOpen] = React.useState(false);
    const [plan, setPlan] = React.useState("")
    const [discountYearly, setDiscountYearly] = React.useState(0)


    const openPayModal = () => {
        const _window = window as any
        var rzp1 = new _window.Razorpay(
            {

                key: RAZOR_PAY_KEY,
                name: plan,
                image: 'https://d199xmsg3owom4.cloudfront.net/images/ss_logo.png', // need logo
                handler: function (response: any) {
                    // console.log("id", response.razorpay_Monthly_id);
                    // console.log(response.razorpay_order_id)
                    // console.log(response.razorpay_signature)
                },
                prefill: {
                    name: "",
                    contact: "",
                    email: "",
                },
                notes: {
                    address: ""
                },
                theme: {
                    hide_topbar: false
                }
            }
        )
        rzp1.open();
        rzp1.on('Monthly.failed', function (response: any) {
            console.log("response", response)
        }
        )
    }







    React.useEffect(() => {
        document.title = "Payment KhabarBolo";
        window.scrollTo(0, 0)
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);


    // const makePayment = async () => {
    //     try {
          
    //             openPayModal("plink_ExjpAUN3gVHrPJ")
            
    //     }
    //     catch (error) {
    //         //@ts-ignore
    //         showToast(error.response.data.message, "error")

    //     }
    // }




    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12} sm={12} md={3}>
                    <div className="table" style={{ color: "white", paddingTop: "20px" }}>
                        <div style={{ color: "white", paddingTop: "20px" }} >
                            <h2 className="switch__text">{plan} - Monthly</h2>
                        </div>
                        <div style={{ margin: "auto", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                            <Button className="payment__button" style={{  letterSpacing: "4.5px", width: "275px", borderRadius: "25px" }} onClick={() => openPayModal()}>
                                Proceed to payment
                            </Button>
                        </div>
                        <div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default MakePayment
