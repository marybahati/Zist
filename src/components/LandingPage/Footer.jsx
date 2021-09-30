import React from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { withCookies, Cookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footerLinks: {
        fontSize: 20,
        color: 'white',
    },
    headings: {
        color: 'white'
    }
}))

export const FooterComponent = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.rootDiv} >
            <div style={{ background: '#00010C', padding: '70px 0' }}>
                <Grid container style={{ width: '80%', margin: '0 auto' }} >
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={4} >
                            <Typography variant='h5' className={classes.headings} > Zist shopping </Typography>
                            <Link className={classes.footerLinks} href="#" > Zist Articles </Link> <br />
                            <Link className={classes.footerLinks} href="#" > Zist Recipes </Link> <br />
                            <Link className={classes.footerLinks} href="#" > Zist Careers </Link> <br />
                            <Link className={classes.footerLinks} href="#" > Contact </Link>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant='h5' className={classes.headings}> Vendor </Typography>
                            <Link className={classes.footerLinks} href="/vendor-intro" > Sell on Zist Shoppping </Link> <br />
                            <Link className={classes.footerLinks} href="#" > Vendor Help </Link>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{ fontSize: 25, padding: '40px 0 0 0' }}>
                        <Grid item xs={6} >
                            <Typography href='' className={classes.headings} > Terms & Policy </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{ padding: '40px 0 0 0' }}>
                        <Grid item xs={1} >
                            <a href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'> <InstagramIcon fontSize='large' className={classes.headings} /> </a>
                        </Grid>
                        <Grid item xs={1} >
                            <a href='https://twitter.com/zistshopping'> <TwitterIcon fontSize='large' className={classes.headings} /> </a>
                        </Grid>
                        <Grid item xs={1} >
                            <a href='' > <FacebookIcon fontSize='large' className={classes.headings} /> </a>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} style={{ textAlign: 'center', padding: '20px 0' }}>
                        <Grid item xs={12} >
                            <Typography variant='h6' href='' className={classes.headings}>  @2021 Zist Shopping Inc.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}
