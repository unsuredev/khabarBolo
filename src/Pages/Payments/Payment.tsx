import React from 'react';
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { RAZOR_PAY_KEY } from '../../Common/constant'
import { BASE_URL } from "../../Common/constant";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const MakePayment = (props: any) => {
    // const queryParams = new URLSearchParams(window.location.search);
    // const [data, setData] = React.useState({
    //     payment_token: queryParams.get("payment_token"),
    // });
    let history = useHistory();

    const [user, setUser] = React.useState({
        name: "",
        email: "",
        mobile: "",
        gender:""
    });
    // React.useEffect(() => {
    //     document.title = "KhabarBolo | Payment  ";
    //     fetchUser();
    // }, []);
    const findUserId = () => {
        let token: any = localStorage.getItem("access_token");
        var decoded = jwt_decode(token);
        let user_id
        if(decoded){
        //@ts-ignore
        let { user_id } = decoded;
        user_id=user_id
        }else{
            user_id=undefined
        }
        return user_id;
    };


    const getToken = () => {
        //@ts-ignore
        return localStorage.getItem("access_token");
    };


    const [open, setOpen] = React.useState(false);

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
                console.log("user", result.data.data)
                setUser(result.data.data);
                history.push("/login");

            } else {
                toast.error(result.data.message);
            }
        } catch (error) {
            history.push("/login");
            toast.error("unable to find user!");
        }
    };

    const openPayModal = () => {
        const _window = window as any
        var rzp1 = new _window.Razorpay(
            {
                key: RAZOR_PAY_KEY,
                amount:200,
                name: "",
                image: '/static/onlyLogo.png', // need logo
                //order_id: "order_Jj5fcjJsWxRTCJ", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                handler: function (response: any) {
                    console.log("response", response);
                    console.log(response.razorpay_order_id)
                    console.log(response.razorpay_signature)
                },
                description: "KhabarBolo-Hariharpara",
                prefill: {
                    name: user.name,
                    contact:user.mobile,
                    email:user.email,
                },
                
                notes: {
                    address: ""
                },
                
                theme: {
                    hide_topbar: false,
                    color:"#F58320"
                },
                config: {
                    display: {
                      hide: [
                      { method: 'paylater' },
                      { method: 'wallet' }
                    ],
                    preferences: { show_default_blocks: true }
                    }
                  }
              
                
            }
        )
        rzp1.open();
        rzp1.on('Payment failed', function (response: any) {
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
                <Grid item xs={12} sm={12} md={12} >
                    <div className="table" style={{ color: "white", paddingTop: "2rem" }}>
                        <div style={{ margin: "auto", justifyContent: "center", alignItems: "center", textAlign: "center", paddingTop: "2rem"}}>
                            <Button variant='contained' style={{color:"white", letterSpacing: "4.5px", width: "275px", borderRadius: "25px" }} onClick={() => openPayModal()}>
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
