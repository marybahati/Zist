import React, { useState, useEffect } from 'react'
import { Grid, Link, Typography, IconButton, TextField } from "@material-ui/core";
import { RatedStars } from '../ShoppingPage/Ratings';
import storefront from './../../Assets/d1.png';
import inventory from './../../Assets/d2.png';
import serviceDesk from './../../Assets/d3.png';
import analytics from './../../Assets/d4.png';
import history from '../../History';
import { withCookies } from 'react-cookie';
import { HOST_API } from '../../endpoints';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

// const Headers = styled.h1`
// text-align: center;
// text-decoration: underline;
// color: #FFBD59;
// `;
// const Links = styled(List.Item)`
// color: #FFBD59;
// font-size: 20px;
// padding: 50px 0 !important;
// `
const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: ' #F9F7F1 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
    },
    mainGrid: {
        width: '80%',
        margin: '0 auto 50px auto !important',
    },
    avatarImage: {
        width: '100%',
        borderRadius: '50%'
    },
    headers: {
        textAlign: 'center',
        // textDecoration: 'underline',
        color: '#FFBD59',
    },
    centeredLinksGrid: {
        width: '40%',
        margin: '0 auto !important',
        textAlign: 'center',
    },
    links: {
        color: '#FFBD59',
        fontSize: '20px',
    },
}))
const Dashboard = (props) => {
    const { cookies } = props
    const classes = useStyles()
    const userData = cookies.get('login-res')
    const id = cookies.get('business-id')
    const token = userData?.access
    const [info, setInfo] = useState()
    console.log(info)
    useEffect(() => {
        axios.get(HOST_API + `zist/vendor/business/${id}/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                setInfo(res.data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    const analyticsRedirect = () => {
        history.push('/vendor-analytics')
    }
    const serviceRedirect = () => {
        history.push('/vendor-service-desk')
    }
    const inventoryRedirect = () => {
        history.push('/inventory-create-product')
    }
    const settingsRedirect = () => {
        history.push('/vendor-settings')
    }
    const storefrontRedirect = () => {
        history.push('/vendor-store-front')
    }
    const announcementsRedirect = () => {
        history.push('/vendor-announcements')
    }
    return (
        <div className={classes.mainDiv} >
            <Grid className={classes.mainGrid} container spacing={1} >
                <Grid item xs={2} >
                    <img src='https://semantic-ui.com/images/wireframe/square-image.png' className={classes.avatarImage} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4} style={{ margin: 'auto 0' }}>
                    <Typography variant='h4' >  {info?.name} </Typography>
                    <Typography variant='h6'> {info?.bio} </Typography>
                    <Typography variant='h6'> {info?.business_type} </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3} style={{ margin: '39px 0 0 0' }}>
                    <Typography variant='h5' >  Current Rating </Typography>
                    <RatedStars rating={5} />
                </Grid>
            </Grid>
            <Grid className={classes.mainGrid} container spacing={1} >
                <Grid item xs={12} >
                    <Typography variant='h5' >  “Congrats on becoming a Vendor , we value our partnership!.” </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.mainGrid} container spacing={1} >
                <Grid item xs={5} >
                    <IconButton onClick={storefrontRedirect} >
                        <img src={storefront} />
                    </IconButton>
                    <Typography variant='h5' className={classes.headers} > Storefront </Typography>
                    <Typography variant='subtitle1' >
                        Just like a physical storefront , the digital storefront is how You introduce your business to
                        potential customers. With selection of profile image , small description of Your business and
                        classification of items , stand out Just like you’d do with a flashy neon sign.
                    </Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5} >
                    <IconButton onClick={inventoryRedirect} >
                        <img src={inventory} />
                    </IconButton>
                    <Typography variant='h5' className={classes.headers} > Inventory </Typography>
                    <Typography variant='subtitle1' >
                        The days of managing your inventory by book and pen are over! With Zist Inventory get to put all your
                        items onto your digital shelf ,arrange them into aisles for easy curation by the customer ; with
                        opportunities to get Supplies within the platform, business will never be the same again.
                    </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.mainGrid} container spacing={1} >
                <Grid item xs={5} >
                    <IconButton onClick={serviceRedirect} >
                        <img src={serviceDesk} />
                    </IconButton>
                    <Typography variant='h5' className={classes.headers} > Service Desk </Typography>
                    <Typography variant='subtitle1' >
                        There’s no business without customers, with service desk get to receive feedback
                        that helps you improve , dispute any wrong ratings / comments , also in
                        specialised situations have one/one conversations with customers to suggest what
                        it is they might need.
                    </Typography>
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={5} >
                    <IconButton onClick={analyticsRedirect} >
                        <img src={analytics} />
                    </IconButton>
                    <Typography variant='h5' className={classes.headers} > Analytics </Typography>
                    <Typography variant='subtitle1' >
                        Make informed decisions when it comes to product, see how your items are
                        performing within specific time periods. get to align your business with customer
                        needs, also with patterns see when particular stock will be depleted.
                    </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.mainGrid} container spacing={1} >
                <Grid item xs={5} className={classes.centeredLinksGrid} >
                    <Link
                        component="button"
                        variant="subtitle1"
                        className={classes.links}
                        // onClick={() => {
                        //     console.info("I'm a button.");
                        // }}
                    >
                        Settings
                    </Link> <br/>
                    <Link
                        component="button"
                        variant="subtitle1"
                        className={classes.links}
                    >
                        Share a link to your store
                    </Link> <br/>
                    <Link
                        component="button"
                        variant="subtitle1"
                        className={classes.links}
                    >
                        Log Out
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}
export default withCookies(Dashboard)