import React, { useState } from "react";
import zist from "./../../Assets/zist.png";
import shop from "./../../Assets/shop.png";
import { Grid, Button, InputAdornment, InputBase, Link, Typography, IconButton, TextField } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import slider1 from "./../../Assets/slider1.svg";
import heroImg from "./../../Assets/L.P.png"
import slider2 from "./../../Assets/slider2.svg";
import slider3 from "./../../Assets/slider3.svg";
import step1 from "./../../Assets/nathalia.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import axios from 'axios'
import history from '../../History';
import AndroidIcon from '@material-ui/icons/Android';
import { withCookies, Cookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../Navbar/Navbar'
import { FooterComponent } from "./Footer";
const useStyles = makeStyles((theme) => ({
  rootDiv: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    // background: '#F9F7F1 ',
  },
  mainGrid: {
    padding: '0 0 0 0 !important',
    width: '100% !important',
    height: '650px',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: ' no-repeat',
    backgroundPosition: 'center',
    textAlign: 'right !important',
    margin: '0 0 40px 0!important',
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
    margin: '0 auto !important'
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
  headings: {
    color: 'white'
  }
}))

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1
  },
  mediumLargeDesktop: {
    breakpoint: { max: 300, min: 1920 },
    items: 1,
    slidesToSlide: 1
  },
  desktop: {
    breakpoint: { max: 1920, min: 1500 },
    items: 1,
    slidesToSlide: 1
  },
  mediumDesktop: {
    breakpoint: { max: 1500, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
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
          <Grid container xs={9} sm={10} component='form' onSubmit={handleRedirect} autoComplete='off' item xs={12} >
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

      <Grid className={classes.descriptionGrid} container item xs={10} sm={10} md={12} lg={12} spacing={3} >
        <Grid item md={1} lg={1} />
        <Grid item xs={12} sm={12} md={5} lg={5} className={classes.boldFont} style={{ margin: 'auto 0' }} >
          <Typography variant='h4' >  Browse any store at the tap of a button. </Typography>
          <Typography variant='h5'>
            Discover stores and get to see all they have to offer.
            Just tap on any store and get to go on an adventure through the
            aisles from the comfort of your couch.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} >
          <img src={step1} style={{ width: '95%', padding: '20px 0 0 0', borderRadius: '30px' }} />
        </Grid>
      </Grid>

      <Grid className={classes.descriptionGrid} container item xs={10} sm={10} md={12} lg={12} spacing={3} >
        <Grid item xs={12} sm={12} md={5} lg={5} >
          <Carousel
            showDots={true}
            arrows={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
          >
            <div>
              <img src={slider1} style={{ width: '100%', padding: '20px 0 0 0' }} />
            </div>
            <div>
              <img src={slider2} style={{ width: '100%', padding: '20px 0 0 0' }} />
            </div>
            <div>
              <img src={slider3} style={{ width: '100%', padding: '20px 0 0 0' }} />
            </div>
          </Carousel>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} className={classes.boldFont} style={{ margin: 'auto 0' }}>
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
        <Grid className={classes.descriptionGrid} container  item xs={10} sm={10} md={12} lg={12} spacing={3}>
          <Grid item xs={10} sm={10} md={5} lg={5} style={{ padding: '0 ', margin: 'auto 0' }}>
            <Typography variant='h4' className={classes.fontBold}>
              There’s more to see in the app.
            </Typography>
            <Button className={classes.appLinkButton} startIcon={<AndroidIcon />} > Android </Button>
          </Grid>
          <Grid item xs={10} sm={10} md={6} lg={6} className={classes.boldFont} style={{ margin: 'auto 20px' }}>
            <img src={zist} style={{ width: '100%' }} />
          </Grid>
        </Grid>

        <Grid container item xs={10} sm={10} md={12} lg={12} >
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ textAlign: 'center' }}>
            <Typography variant='h5' className={classes.fontBold}>
              Subscribe to our mailing list to stay
              on top of the latest News,
              offers & all things Zist.
            </Typography>
          </Grid>
        </Grid>

        <Grid className={classes.newsletterGrid} container item xs={10} sm={10} md={12} lg={12} >
          <Grid container component='form' item xs={12} sm={12} md={12} lg={12} spacing={3}>
            <Grid item xs={12} sm={8} md={8} lg={8} >
              <TextField
                style={{ background: 'white', padding: '5px 0 0 0', width: '100%' }}
                required
                id="news-email"
                placeholder="Email"
                type="email"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} >
              <Button type='submit' className={classes.subcribeButton}> Subscribe </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <FooterComponent />
    </div>
  )
}


export default withCookies(LandingPage);
