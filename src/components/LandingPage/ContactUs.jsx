import React from 'react'
import { Grid, Typography, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Img from './../../Assets/contact us.jpeg';
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

const ContactUs = () => {
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
                <Grid container  >
                    <Grid item xs={12} className={classes.centeredText} >
                        <Typography variant='h4' > Contact Us. </Typography>
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
                        Questions? Comments? Feel free to reach us through mobile/ WhatsApp 
                        on +254769659233 or email us at zist@zistshopping.com. Message us 
                        on our socials ( Instagram, Twitter , Facebook) @Zistshopping.
                        </Typography> 
                    </Grid>    
                </Grid>
            </div>
            <FooterComponent/>
        </div>
    )
}
export default ContactUs