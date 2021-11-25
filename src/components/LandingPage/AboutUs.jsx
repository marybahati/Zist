import React from 'react'
import { Grid, Typography, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Img from './../../Assets/about us.jpeg';
import history from '../../History';
import { makeStyles } from '@material-ui/core/styles';
import { FooterComponent } from "./Footer";
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: ' #FFF 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 0 0 !important',
    },
    mainGrid: {
        width: '90%',
        margin: '0 auto 100px auto !important',
    },
    centeredText: {
        textAlign: 'center',
    },
    paddedPG: {
        paddingTop: 15,
    },
    heroImg: {
        margin:'0 auto 20px auto',
    },
    fullWidthImg: {
        width: '100%'
    },
}))

const AboutUs = () => {
    const classes = useStyles()
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleRedirect = () => {
        history.push('/vendor')
    }
    return (
        <div className={classes.mainDiv} >
            <Navbar/>
            <div className={classes.mainGrid} >
                {/* <Grid container  >
                    <Grid item xs={1} >
                        <IconButton onClick={handleGoingBack}  >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                </Grid> */}
                <Grid container  >
                    <Grid item xs={12} className={classes.centeredText} >
                        <Typography variant='h4' > About Us </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={7} className={classes.heroImg} >
                        <img src={Img} className={classes.fullWidthImg} />
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} >
                        <Typography variant='h5' > 
                        Zist Shopping is an on-demand delivery service that delivers your everyday 
                        essentials to you. We’re here to alleviate the need of having to go to the 
                        store and the inconveniences that arise when shopping at the tap of a button. 
                        With different stores in place , we aim to give you as much value as possible.
                        </Typography> 
                    </Grid>    
                    <Grid item xs={12} className={classes.paddedPG} >
                        <Typography variant='h5' > 
                        We started with the mission of democratising the process of getting online for 
                        stores , bringing them into the digital economy by digitising their brick & 
                        mortar stores. Every purchase made on Zist Shopping supports local stores. 
                        After the constraints imposed during the pandemic, we need to support local 
                        stores as much as we can.
                        </Typography> 
                    </Grid> 
                    <Grid item xs={12} className={classes.paddedPG} >
                        <Typography variant='h5' > 
                        Delivery is done by our carefully selected and highly trained delivery 
                        partners. Thank you for being part of Zist, you’re now officially a Zister!
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12}  className={classes.paddedPG}>
                    <Typography variant='h5' > 
                        The Zist team.
                    </Typography>
                    </Grid>
                </Grid>
            </div>
            <FooterComponent/>
        </div>
    )
}
export default AboutUs