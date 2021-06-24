import React, { useState } from "react";
import zist from "./../../Assets/zist.png";
import shop from "./../../Assets/shop.png";
import {
  Grid, Icon, Input, Button, List, FormControl, Menu, Paper, InputBase, Divider, Typography,
  IconButton,TextField
} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Image from 'material-ui-image'
import coffeShop from "./../../Assets/coffeShop.png";
import heroImg from "./../../Assets/L-P.jpeg"
import step1 from "./../../Assets/step1.png";
import step2 from "./../../Assets/step2.png";
import step3 from "./../../Assets/step3.png";
import "./styles.css";
import axios from 'axios'
import history from '../../History';
import { SignupButtonSection } from "./SignupButtonSection";
import { LoginButtonSection } from "./LoginButtonSection";
import { withCookies, Cookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rootDiv: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#F9F7F1',
  },
  mainGrid: {
    padding: '10px 0 0 0 !important',
    width: '100% !important',
    height: '600px',
    background: `url(${heroImg})`,
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
    textAlign: 'center',
    width: '500px',
    margin: '0 auto'
  },
  subcribeButton: {
    color: '#050504', 
    fontSize: 20, 
    background: '#FFBD59 0% 0% no-repeat padding-box', 
    borderRadius: '24px', 
    width: '90%',
  },
}))

const LandingPage = (props) => {
  const classes = useStyles();
  const [location, setLocation] = useState(null);
  const { cookies } = props
  const userData = cookies.get('login-res')
  const token = userData?.access
  const names = cookies.get('name')
  const splitName = names?.split(' ')
  const name = splitName !== undefined ? splitName[0] : null
  console.log(names, name)

  const handleRedirect = () => {
    if (location == null) {
      alert('please fill in your location to continue')
    } else {
      history.push({
        pathname: '/shopping',
        state: location
      })
    }
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
  console.log(token)
  console.log(token !== undefined || token !== '')
  return (
    <div className={classes.rootDiv} >
      {/* start of the navbar section */}
      <Grid className={classes.mainGrid} >
        {token === undefined || token === '' ? (
          <Grid container  >
            <Grid item xs={9} />
            <Grid item xs={1} style={{ textAlign: 'center' }}>
              <SignupButtonSection />
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'center' }}>
              <LoginButtonSection />
            </Grid>
            <Grid item xs={1} style={{ textAlign: 'center' }}>
              <ShoppingCartIcon fontSize='large' />
            </Grid>
          </Grid>

        ) : (
          <Grid width={16} >
            <Grid >
              <Grid>
                <Grid>
                  <Grid width={12}>
                    <List style={{ display: 'inline-block' }}>
                      <List.Item as='a' href='' style={{ paddingRight: '20px', fontSize: '20px', color: '#050504', textDecoration: 'underline', paddingTop: '13px' }}>
                        HELP
                      </List.Item>
                    </List>
                  </Grid>
                  {name == undefined || name == '' ? (
                    <Grid width={2}>
                      <Grid>
                        <Grid width={1} style={{ paddingTop: '0px' }}>
                          <Grid>
                            <Grid>
                              <Grid width={8}>
                                <Icon name='user circle' color='black' size='huge' />
                              </Grid>
                              <Grid width={8} style={{ paddingTop: '17px' }}>
                                <Menu size='huge' style={{ background: 'inherit', border: 'none', boxShadow: 'none' }} >
                                  <Menu.Menu >
                                    {/* <Dropdown text='Account' icon='' >
                                        <Dropdown.Menu>
                                          <Dropdown.Item as='a' href='/update-profile'> Update Profile </Dropdown.Item>
                                          <Dropdown.Item onClick={handleLogOut}> Log out </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown> */}
                                  </Menu.Menu>
                                </Menu>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid width={2} style={{ paddingTop: '7px', textAlign: 'center' }} >
                      <Grid>
                        <Grid>
                          <Grid>
                            <h2> {name} </h2>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                  <Grid width={1} style={{ paddingTop: '0px' }}>
                    <ShoppingCartIcon />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid container className={classes.centeredLocationColumn} xs={12} >
          <Grid item >
            <Typography variant='h5' className={classes.boldFont} > SHOPPING REINVENTED. </Typography>
            <Typography variant='h5' className={classes.boldFont} > YOUR SHOPPING? WE'RE BUILT FOR THAT. </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.locationColumn} >
          <Grid container component='form' autocomplete='off' item xs={12} >
            <Grid item xs={2} >
              <IconButton className={classes.iconButton} >
                <LocationOnIcon fontSize='large' />
              </IconButton>
            </Grid>
            <Grid item xs={8} style={{ margin: 'auto 0' }}>
              <InputBase
                inputComponent='input'
                required
                className={classes.input}
                placeholder="Enter your address"
                inputProps={{ 'aria-label': 'Enter your address' }}
              />
            </Grid>
            <Grid item xs={2} style={{ textAlign: 'center', borderLeft: '1px solid #707070' }}>
              <IconButton type='submit' item xs={2} className={classes.iconButton} aria-label="directions">
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

      <Grid className={classes.descriptionGrid} container xs={12} spacing={1} >
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
      <Grid className={classes.descriptionGrid} container xs={12} >
        <Grid item xs={12} >
          <Typography variant='h3' className={classes.boldFont}>   Here’s how it works! </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.descriptionGrid} container xs={12} >
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

      <Grid className={classes.descriptionGrid} container xs={12} >
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

      <Grid className={classes.descriptionGrid} container xs={12} >
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

      <div style={{background: '#F9F7F1'}}>
      <Grid className={classes.descriptionGrid} container xs={12} >
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

      <Grid className={classes.newsletterGrid} container xs={12} >
        <Grid item xs={12} >
          <img src={zist} style={{ width: '100%' }} />
        </Grid>
      </Grid>

      <Grid className={classes.newsletterGrid} container xs={12} >
        <Grid item xs={12} >
          <Typography variant='h5' className={classes.fontBold}>
            Zist Shopping <br />
            Offers , discounts and updates. <br />
            Subscribe to our updates.
          </Typography>
        </Grid>
      </Grid>

      <Grid className={classes.newsletterGrid} container xs={12} >
        <form autoComplete='off' xs={12} >
        <Grid item xs={12} >
        <TextField
          style={{background:'white',padding: '5px 0 0 0',width:'100%'}}
          required
          id="news-email"
          placeholder="email"
          type="email"
          variant="outlined"
        />
        </Grid>
        <Grid item xs={12} >
          <Button className={classes.subcribeButton}> I'm in! </Button>
        </Grid>
        </form>
      </Grid>
      </div>
      {/* <BetaGrid>
        

      <Grid style={{ background: '#F9F7F1 0% 0% no-repeat padding-box',paddingBottom:50 }}>
        <Grid>
          <Grid width={8} style={{ margin: '0 auto', textAlign: 'center' }}>
            <Image src={zist} />
            <h1> Zist Shopping </h1>
            <h1> Offers , discounts and updates. </h1>
            <h1>  Subscribe to our updates. </h1>
          </Grid>
        </Grid>
        <Grid>
          <Grid width={6} style={{ margin: '0 auto', textAlign: 'center' }}>
            <Form size='huge' >
              <Form.Group widths='equal'>
                <Form.Field
                  control='input'
                  placeholder='Email Address …'
                />
                <Button type='submit' style={{ color: '#050504', fontSize: 20, background: '#FFBD59 0% 0% no-repeat padding-box', borderRadius: '24px', width: '250px' }}>I’m in!</Button>
              </Form.Group>
            </Form>
          </Grid>
        </Grid>
      </Grid> */}
      {/* <IntroGrid style={{background:'#FEE2D4',paddingTop:100}}>

        <GridRows width={16} >
          <FooterGrid width={1}></FooterGrid>
          <FooterGrid width={5}>
            <FooterTitle>Zist Shopping</FooterTitle>
            <List >
              <FooterTitle as='a' href='' blue >Zist Articles</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' blue >Zist Recipes</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' blue >Zist Careers</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' blue>Contact</FooterTitle>
            </List>

          </FooterGrid>

          <FooterGrid width={5}>
            <FooterTitle>Vendor</FooterTitle>
            <List>
              <FooterTitle as='a' href='/vendor-intro' blue >Sell on Zist Shoppping</FooterTitle>
            </List>
            <FooterTitle as='a' href='' blue >Vendor Help</FooterTitle>
          </FooterGrid>
          <FooterGrid width={5}>
            <FooterTitle>Zister</FooterTitle>
            <FooterTitle as='a' href='/welcome' blue >Become a Zister</FooterTitle>
            <List>
              <FooterTitle as='a' blue >Zister Help</FooterTitle>
            </List>
          </FooterGrid>
        </GridRows>
        <GridRows>
          <FooterGrid width={1}></FooterGrid>
          <FooterGrid width={7} style={{ paddingTop: 50 }}>
            <List link >
              <FooterTitle as='a' href=''>Terms & Policy</FooterTitle>
            </List>
          </FooterGrid>
        </GridRows>
        <SocialMediaRow>
          <Grid width={1}>
            <a href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'>
              <Icon color='blue' size='big' as='i' name="instagram" />
            </a>
          </Grid>
          <Grid width={1}>
            <a href='https://twitter.com/zistshopping'>
              <Icon color='blue' size='big' as='i' name="twitter" />
            </a>
          </Grid>
          <Grid width={1}>
            <a href=''>
              <Icon color='blue' size='big' as='i' name="facebook" />
            </a>
          </Grid>
        </SocialMediaRow>
        <Grid textAlign='center'>
          <FooterColumn>
            <FooterTitle> @2021 Zist Shopping Inc.</FooterTitle>
          </FooterColumn>
        </Grid> */}

    </div>
  )
}


export default withCookies(LandingPage);
