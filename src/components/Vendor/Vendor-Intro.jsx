import React, { useState } from 'react'
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import vendor from './../../Assets/vendor-img.png';
import history from '../../History';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: ' #F9F7F1 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
    },
    mainGrid: {
        width: '90%',
        margin: '0 auto 100px auto !important',
    },
    boldFont: {
        fontWeight: 'bold !important',
        textDecoration: 'underline',
    },
    subtitleText: {
        fontSize: '18px',
        paddingBottom: 15,
    },
    getStartedButton: {
            background: '#FFBD59 0% 0% no-repeat padding-box !important',
            border: '2px solid #FEE2D4 !important',
            borderRadius: '24px !important',
            opacity: 1,
            height: '90px !important',
            width: '100%',
            fontSize: '26px !important',
            color: '#050504 !important',
            margin: '50px 0 !important',
    },
}))

const VendorIntro = (props) => {
    const classes = useStyles();
    const [view, setView] = useState(false)
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleRedirect = () => {
        history.push('/vendor')
    }
    return (
        <div className={classes.mainDiv} >
            <div className={classes.mainGrid} >
                <Grid container  >
                    <Grid item xs={1} >
                        <IconButton >
                            <ArrowBackIosIcon onClick={handleGoingBack} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{textAlign:'center'}} >
                        <Typography variant='h4' > Become a Vendor on Zist Shopping </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{textAlign:'center',paddingTop:15}} >
                        <Typography variant='h5' > Partner with Zist Shopping today! Get to reach customers you’d otherwise never have reached ,
                            manage your inventory in a stress-free way, find suppliers and so much more! </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{width: '70%', margin:'20px auto'}} >
                        <img src={vendor} style={{width:'100%'}} />
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={4} style={{ margin:'10px auto'}} >
                        <Button className={classes.getStartedButton} onClick={handleRedirect} > Get Started </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default VendorIntro