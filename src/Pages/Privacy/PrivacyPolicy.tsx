import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
;

export default function PrivacyPolicy() {



    React.useEffect(() => {
        document.title = "KhabarBolo | Privacy Policy";
      }, []);
    const PolicyArray = [
        "  We use the information we collect from and about you for a variety of purposes, including to:",
        "Process and respond to your queries",
        "Understand our users (what they do on our Services, what features they like, how they use them, etc.), improve the content and features of our Services (such as by personalizing content to your interests), process and complete your transactions, and make special offers.",
        "Administer our Services and diagnose technical problems.",
        "Send you communications that you have requested or that may be of interest to you by way of emails, or courier, or registered post, or telephone calls, or any other mode of communication. We may also share your preferences or the Services availed by you with your network followers on Zomato for marketing and other promotional activities of our Services.",
        "Send you questions from other users that you may be able to answer if you have registered with Zomato.",
        "Enable us to show you ads that are relevant to you.",
        "Generate and review reports and data about, and to conduct research on, our user base and Service usage patterns.",
        "Administer contests and sweepstakes.",
        "Provide you with customer support.",
        "Provide you with policies about your account.",
        "Carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.",
        "Notify you about changes to our Services.",
        "Allow you to participate in interactive features offered through our Services.",
        "In any other way we may describe when you provide the information.",
        "For any other purpose with your consent."
    ]



    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
                <div style={{margin:"2rem"}}>

                    <Typography variant="h5" component="h2" gutterBottom>
                        Acceptance of terms *
                    </Typography>
                    </div>
                    <Typography variant="body2" gutterBottom>
                        "Customer" or "You" or "Your" refers to you, as a customer of the Services. A customer is someone who accesses or uses the Services for the purpose of sharing, displaying, hosting, publishing, transacting, or uploading information or views or pictures and includes other persons jointly participating in using the Services including without limitation a user having access to 'restaurant business page' to manage claimed business listings or otherwise.
                    </Typography>
                    <div style={{margin:"2rem"}}>

                    <Typography variant="h5" component="h2" gutterBottom>
                        Content *
                    </Typography>
                    </div>
                    <Typography variant="body2" gutterBottom>
                        "Content" will include (but is not limited to) reviews, images, photos, audio, video, location data, nearby places, and all other forms of information or data. "Your content" or "Customer Content" means content that you upload, share or transmit to, through or in connection with the Services, such as likes, ratings, reviews, images, photos, messages, chat communication, profile information, or any other materials that you publicly display or displayed in your account profile. "khabarBolo Content" means content that khabarBolo creates and make available in connection with the Services including, but not limited to, visual interfaces, interactive features, graphics, design, compilation, computer code, products, software, aggregate ratings, reports and other usage-related data in connection with activities associated with your account and all other elements and components of the Services excluding Your Content and Third Party Content. "Third Party Content" means content that comes from parties other than khabarBolo or its Customers and is available on the Services.
                    </Typography>
                    <div style={{margin:"2rem"}}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Information You Provide to Us
                    </Typography>
                    </div>
                 

                    <Typography variant="body1">The information we collect on or through our Services may include:</Typography>
                    <ul>
                        <li> <b>Your account information:</b> Your full name, email address, postal code, password and other information you may provide with your account, such as your gender, mobile phone number and website. Your profile picture that will be publicly displayed as part of your account profile. You may optionally provide us with this information through third-party sign-in services such as Facebook and Google Plus. In such cases, we fetch and store whatever information is made available to us by you through these sign-in services.</li>
                        <li><b>Your content:</b>  Information you provide through our Services, including your reviews, photographs, comments, lists, followers, the users you follow, current and prior restaurant reservation details, food ordering details and history, favorite restaurants, special restaurant requests, contact information of people you add to, or notify of, your restaurant reservations through our Services, names, and other information you provide on our Services, and other information in your account profile.</li>
                        <li> <b>Your transactional information:</b>  If you make reservations or purchases through our Services, we may collect and store information about you to process your requests and automatically complete forms for future transactions, including (but not limited to) your phone number, address, email, billing information and credit or payment card information. This information may be shared with third-parties which assist in processing and fulfilling your requests, including PCI compliant payment gateway processors. When you submit credit or payment card information, we encrypt the information using industry standard technologies, as further described below under "Payment Card Information." If you write reviews about businesses with which you conduct transactions through our Services, we may publicly display information that you transacted with those businesses.</li>
                    </ul>
                    <Typography variant="h5" component="h2" gutterBottom>
                        How we use the information we collect
                    </Typography>
                    <ul>
                        {PolicyArray.map((item: any) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </Container>
            </Box>
        </>
    );
}
