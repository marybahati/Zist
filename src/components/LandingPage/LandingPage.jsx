import React, { useState } from "react";
import zist from "./../../Assets/zist.png";
import shop from "./../../Assets/shop.png";
import { Grid, Button, Menu, InputBase, Link, Typography, IconButton, TextField } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import coffeShop from "./../../Assets/coffeShop.png";
import heroImg from "./../../Assets/landingPG.png"
import step1 from "./../../Assets/step1.png";
import step2 from "./../../Assets/step2.png";
import step3 from "./../../Assets/step3.png";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import "./styles.css";
import axios from 'axios'
import history from '../../History';
import { SignupButtonSection } from "./SignupButtonSection";
import { LoginButtonSection } from "./LoginButtonSection";
import { withCookies, Cookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../Navbar/Navbar'
const useStyles = makeStyles((theme) => ({
  rootDiv: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#F9F7F1 ',
  },
  mainGrid: {
    padding: '0 0 0 0 !important',
    width: '100% !important',
    height: '430px',
    background: '#F9F7F1',
    backgroundSize: 'cover',
    backgroundRepeat: ' no-repeat',
    backgroundPosition: 'center',
    textAlign: 'right !important',
    margin: '0 !important',
  },
  centeredLocationColumn: {
    width: '490px',
    margin: '140px 0 0 100px  !important',
    textAlign: 'left !important',
  },
  boldFont: {
    fontWeight: 'bold !important',
  },
  locationColumn: {
    width: '490px',
    margin: '40px auto 0 100px  !important',
    textAlign: 'left !important',
    background: 'white !important',
    padding: 0,
    border: '1px solid #707070 !important',
  },
  currentLocationGrid: {
    borderTop: '1px solid #707070 ',
    margin: 'auto 0',
    padding: '3px 0'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  descriptionGrid: {
    background: '#F9F7F1',
    textAlign: 'left',
  },
  appLinkButton: {
    background: ' #FFBD59 0% 0% no-repeat padding-box !important',
    opacity: 1,
    width: '70% !important',
    height: '80px !important',
    borderRadius: '55px !important',
    color: '#050504 !important',
    fontSize: '25px !important',
    border: 'none !important',
    fontWeight: 'bold !important',
    margin: '35px 0 0 0',
  },
  newsletterGrid: {
    background: '#F9F7F1',
    width: '550px',
    margin: '0 auto'
  },
  subcribeButton: {
    color: '#050504',
    fontSize: 20,
    background: '#FFBD59 0% 0% no-repeat padding-box',
    borderRadius: '24px',
    width: '90%',
    marginTop: '5px',
  },
  footerLinks: {
    fontSize: 20,
  }
}))

const LandingPage = (props) => {
  const classes = useStyles();
  const [location, setLocation] = useState('');
  const { cookies } = props
  const cookie = new Cookies()
  const userData = cookies.get('login-res')
  const token = userData?.access
  const names = cookies.get('name')
  const splitName = names?.split(' ')
  const name = splitName !== undefined ? splitName[0] : null
  console.log(location)

  const handleRedirect = () => {
    cookie.set('location', location ,{path: '/'})
      history.push({
        pathname: '/shopping',
        // state: location
      })
  }
  const handleLogOut = () => {
    cookies.remove('login-res', { path: '/' })
    window.location.reload(false);
  }
  const orderNowRedirect = () => {
    history.push('/shopping')
  }
  const handleGetLocation = (locationValue) => {
    // axios.get(`https://api.locationiq.com/v1/autocomplete.php?key=${KEY_API}&q=${locationValue}`)
  }
 
  return (
    <div className={classes.rootDiv} >
      {/* start of the navbar section */}
      <Grid className={classes.mainGrid} >
        <Navbar/>
        <Grid container className={classes.centeredLocationColumn} >
          <Grid item >
            <Typography variant='h5' className={classes.boldFont} > SHOPPING REINVENTED. </Typography>
            <Typography variant='h5' className={classes.boldFont} > YOUR SHOPPING? WE'RE BUILT FOR THAT. </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.locationColumn} >
          <Grid container component='form' onSubmit={handleRedirect} autoComplete='off' item xs={12} >
            <Grid item xs={2} >
              <IconButton className={classes.iconButton} >
                <LocationOnIcon fontSize='large' />
              </IconButton>
            </Grid>
            <Grid item xs={8} style={{ margin: 'auto 0' }}>
              <InputBase
                inputComponent='input'
                required
                value={location}
                className={classes.input}
                placeholder='Enter your address …'
                inputProps={{ 'aria-label': 'Enter your address' }}
                onChange={ (e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'center', borderLeft: '1px solid #707070' }}>
              <IconButton type='submit' xs={2} className={classes.iconButton} aria-label="directions">
                <NavigateNextIcon fontSize='large' />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container item xs={12} className={classes.currentLocationGrid} >
            <Grid item xs={2} >
              <IconButton fontSize='large' className={classes.iconButton} aria-label="directions">
                <MyLocationIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10} style={{ margin: ' auto 0', padding: '3px 0' }}>
              <Typography variant='subtitle1'> Use my current location </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* end of the navbar section */}

      <Grid className={classes.descriptionGrid} container item xs={12} spacing={1} >
        <Grid item xs={5} >
          <img src={coffeShop} style={{ width: '100%', padding: '20px 0 0 0' }} />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
          <Typography variant='h3' >  Tailored to you. </Typography>
          <Typography variant='h5'>
            Taking charge of your priorities <br />
            And choosing whom or what <br />
            matters most starts with you , <br />
            we’re here to help!
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.descriptionGrid} container item xs={12} >
        <Grid item xs={12} style={{paddingLeft:15}} >
          <Typography variant='h3' className={classes.boldFont}>   Here’s how it works! </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.descriptionGrid} container item xs={12} >
        <Grid item xs={5} >
          <img src={step1} style={{ width: '100%', padding: '20px 0 0 0' }} />
        </Grid>
        <Grid item xs={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
          <Typography variant='h5'>
            1.  With a myriad of options , select / search for the store <br />
            or item you’d like to purchase and get to have whatever it is <br />
            That you’d like from wherever you’d like.
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.descriptionGrid} container item xs={12} >
        <Grid item xs={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
          <Typography variant='h5'>
            2.  Get to browse through the different aisles just like you’d do <br />
            in a regular store , also quickly search and add items to <br />
            your list just like you’d do with a regular list.
          </Typography>
        </Grid>
        <Grid item xs={5} >
          <img src={step2} style={{ width: '100%', padding: '20px 0 0 0' }} />
        </Grid>
      </Grid>

      <Grid className={classes.descriptionGrid} container item xs={12} >
        <Grid item xs={5} >
          <img src={step3} style={{ width: '100%', padding: '20px 0 0 0' }} />
        </Grid>
        <Grid item xs={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
          <Typography variant='h5'>
            3.  With the fastest selection to checkout process you’ll <br />
            find anywhere , get to focus on yourself and things that <br />
            matter whilst our dedicated team of Zisters gets your items <br />
            quickly & efficiently!
          </Typography>
        </Grid>
      </Grid>

      <div style={{ background: '#F9F7F1', paddingBottom: 70 }}>
        <Grid className={classes.descriptionGrid} container item xs={12} >
          <Grid item xs={5} style={{ padding: '0 0 0 40px', margin: 'auto 0' }}>
            <Typography variant='h4' className={classes.fontBold}>
              Get whatever it is that you <br />
              want at the tap of a button.
            </Typography>
            <Button className={classes.appLinkButton}> Get the App </Button>
          </Grid>
          <Grid item xs={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
            <img src={shop} style={{ width: '100%' }} />
          </Grid>
        </Grid>

        <Grid className={classes.newsletterGrid} container item xs={12} >
          <Grid item xs={12} >
            <img src={zist} style={{ width: '100%' }} />
          </Grid>
        </Grid>

        <Grid className={classes.newsletterGrid} container item xs={12} >
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant='h5' className={classes.fontBold}>
              Zist Shopping <br />
              Offers , discounts and updates. <br />
              Subscribe to our updates.
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.newsletterGrid} container  >
          <Grid container component='form' item xs={12} spacing={3}>
            <Grid item xs={8} >
              <TextField
                style={{ background: 'white', padding: '5px 0 0 0', width: '100%' }}
                required
                id="news-email"
                placeholder="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4} >
              <Button type='submit' className={classes.subcribeButton}> I'm in! </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ background: '#FEE2D4', padding: '70px 0' }}>
        <Grid container style={{ width: '80%', margin: '0 auto' }} >
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4} >
              <Typography variant='h5'> Zist shopping </Typography>
              <Link className={classes.footerLinks} href="#" > Zist Articles </Link> <br />
              <Link className={classes.footerLinks} href="#" > Zist Recipes </Link> <br />
              <Link className={classes.footerLinks} href="#" > Zist Careers </Link> <br />
              <Link className={classes.footerLinks} href="#" > Contact </Link>
            </Grid>
            <Grid item xs={4} >
              <Typography variant='h5'> Vendor </Typography>
              <Link className={classes.footerLinks} href="/vendor-intro" > Sell on Zist Shoppping </Link> <br />
              <Link className={classes.footerLinks} href="#" > Vendor Help </Link>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ fontSize: 25, padding: '40px 0 0 0' }}>
            <Grid item xs={6} >
              <Typography  href='' > Terms & Policy </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ padding: '40px 0 0 0' }}>
            <Grid item xs={1} >
            <a href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'> <InstagramIcon fontSize='large' color='primary' /> </a>
            </Grid>
            <Grid item xs={1} >
            <a href='https://twitter.com/zistshopping'> <TwitterIcon fontSize='large' color='primary' /> </a>
            </Grid>
            <Grid item xs={1} >
              <a href='' > <FacebookIcon fontSize='large' color='primary' /> </a>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ textAlign: 'center', padding: '20px 0' }}>
            <Grid item xs={12} >
              <Typography variant='h6' href=''>  @2021 Zist Shopping Inc.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}


export default withCookies(LandingPage);
