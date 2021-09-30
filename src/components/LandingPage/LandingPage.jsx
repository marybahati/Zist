import React, { useState } from "react";
import zist from "./../../Assets/zist.png";
import shop from "./../../Assets/shop.png";
import { Grid, Button, InputAdornment, InputBase, Link, Typography, IconButton, TextField } from "@material-ui/core";
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
import AndroidIcon from '@material-ui/icons/Android';
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
    height: '330px',
    background: `${shop}`,
    backgroundSize: 'cover',
    backgroundRepeat: ' no-repeat',
    backgroundPosition: 'center',
    textAlign: 'right !important',
    margin: '0 !important',
  },
  centeredLocationColumn: {
    width: '490px',
    margin: '200px auto auto auto  !important',
    textAlign: 'center !important',
    paddingBottom: 20,
  },
  boldFont: {
    fontWeight: 'bold !important',
  },
  locationColumn: {
    width: '490px',
    margin: 'auto  !important',
    textAlign: 'left !important',
    background: 'white !important',
    padding: 0,
    border: '1px solid #707070 !important',
    borderRadius: '30px'
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
    background: '#FFF',
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
    textTransform: 'none'
  },
  newsletterGrid: {
    background: '#FFF',
    width: '550px',
    margin: '0 auto',
    padding: '30px 0 50px 0'
  },
  subcribeButton: {
    color: '#050504',
    fontSize: 20,
    background: '#FFBD59 0% 0% no-repeat padding-box',
    borderRadius: '24px',
    width: '90%',
    marginTop: '5px',
    textTransform: 'none'
  },
  footerLinks: {
    fontSize: 20,
    color: 'white',
  },
  headings:{
    color:'white'
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
    cookie.set('location', location, { path: '/' })
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
        <Navbar />
        <Grid container className={classes.centeredLocationColumn} >
          <Grid item >
            {/* <Typography variant='h5' className={classes.boldFont} > SHOPPING REINVENTED. </Typography> */}
            <Typography variant='h4' className={classes.boldFont} > Anything, anywhere , anytime. </Typography>
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
                onChange={(e) => setLocation(e.target.value)}
              />
             
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'center' }}>
              <IconButton type='submit' xs={2} className={classes.iconButton} aria-label="directions">
                <NavigateNextIcon fontSize='large' />
              </IconButton>
            </Grid>
          </Grid>
          {/* <Grid container item xs={12} className={classes.currentLocationGrid} >
            <Grid item xs={2} >
              <IconButton fontSize='large' className={classes.iconButton} aria-label="directions">
                <MyLocationIcon />
              </IconButton>
            </Grid>
            <Grid item xs={10} style={{ margin: ' auto 0', padding: '3px 0' }}>
              <Typography variant='subtitle1'> Use my current location </Typography>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      {/* end of the navbar section */}

      <Grid className={classes.descriptionGrid} container item xs={12} spacing={1} >
        <Grid item xs={1} />
        <Grid item xs={5} className={classes.boldFont} style={{ margin: 'auto 20px' }} >
          <Typography variant='h4' >  Browse any store at the tap of a button. </Typography>
          <Typography variant='h5'>
          Discover stores and get to see all they have to offer. 
          Just tap on any store and get to go on an adventure through the 
          aisles from the comfort of your couch.
          </Typography>
        </Grid>
        <Grid item xs={5} >
          <img src={step2} style={{ width: '100%', padding: '20px 0 0 0' }} />
        </Grid>
      </Grid>

      <Grid className={classes.descriptionGrid} container item xs={12} >
        <Grid item xs={5} >
          <img src={step2} style={{ width: '100%', padding: '20px 0 0 0' }} />
        </Grid>
        <Grid item xs={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
          <Typography variant='h4'> Focus on what matters. </Typography>
          <Typography variant='h5'>
          Get to focus on those who matter most and your high priority goals
          whilst we do your shopping for you. Less time spent in queues = more 
          ME time for you. 
          Order now & let the products come to you instead.
          </Typography>
        </Grid>
      </Grid>

      <div >
        <Grid className={classes.descriptionGrid} container item xs={12} >
          <Grid item xs={5} style={{ padding: '0 0 0 40px', margin: 'auto 0' }}>
            <Typography variant='h4' className={classes.fontBold}>
            There’s more to see in the app.
            </Typography>
            <Button className={classes.appLinkButton} startIcon={<AndroidIcon />} > Android </Button>
          </Grid>
          <Grid item xs={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
            <img src={zist} style={{ width: '100%' }} />
          </Grid>
        </Grid>

        <Grid  container item xs={12} >
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant='h5' className={classes.fontBold}>
            Subscribe to our mailing list to stay 
            on top of the latest News, 
            offers & all things Zist.
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
              <Button type='submit' className={classes.subcribeButton}> Subscribe </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
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
          <Grid container item xs={12} style={{ fontSize: 25, padding: '40px 0 0 0'}}>
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


export default withCookies(LandingPage);
