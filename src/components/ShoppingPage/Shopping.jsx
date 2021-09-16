import React, { useState, useEffect } from 'react'
import bgImage from './../../Assets/shopping1.png'
import {
  Grid, Button, Typography, TextField, Card, CardActionArea, CardContent, CardMedia
} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import store from './../../Assets/store.png';
import axios from 'axios';
import { SignupButtonSection } from '../LandingPage/SignupButtonSection';
import { LoginButtonSection } from '../LandingPage/LoginButtonSection';
import { Cookies, withCookies } from 'react-cookie';
import History from '../../History';
import { HOST_API } from '../../endpoints';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./multicarousel.css";
import { RatedStars } from './Ratings';
import Skeleton from '@material-ui/lab/Skeleton';
import SearchComponent from './AutoComplete';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../Navbar/Navbar'

const useStyles = makeStyles((theme) => ({
  navbarGrid: {
    textAlign: 'right',
    // backgroundImage: `url(${bgImage})`,
    background: '#F9F7F1',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 200,
    width: '100% !important'
  },
  mainDiv: {
    position: 'relative',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: '#F9F7F1 ',
  },
  textfields: {
    width: '100%',
    // marginBottom: 30,
    padding: '17px 0',
    '& .MuiInput-underline:before ': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:after ': {
      borderBottom: 'none',
    },
  },
  media: {
    height: 290,
  },

  boldFont: {
    fontWeight: 'bold !important',
    textDecoration: 'underline',
  },
  subtitleText: {
    fontSize: '18px',
    paddingBottom: 15,
  },
}))


const Shopping = (props) => {
  const classes = useStyles();
  const { cookies } = props
  const userData = cookies.get('login-res')
  const cookie = new Cookies()
  const token = userData?.access
  const names = cookies.get('name')
  const splitName = names?.split(' ')
  const name = splitName !== undefined ? splitName[0] : null
  console.log(names, name)
  const location = cookies.get('location')
  const [address, setAddress] = useState(location);
  const [loggedIn, setLoggedIn] = useState(false);
  const [business, setBusiness] = useState('')
  const [clickedBusiness, setClickedBusiness] = useState([])
  const [businesses, setBusinesses] = useState([])
  console.log(location)

  const SkeletonDisplay = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Skeleton variant="rect" width='100%' height={400} />
          <Skeleton width="60%" />
          <Skeleton />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rect" width='100%' height={400} />
          <Skeleton width="60%" />
          <Skeleton />
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="rect" width='100%' height={400} />
          <Skeleton width="60%" />
          <Skeleton />
        </Grid>
      </Grid>
    )
  }
  const CardDisplay = (props) => {
    return (
      <Card style={{ width: '100%', height: 380 }}>
        <CardActionArea key={business.id} onClick={props.handleClick} >
          <CardMedia
            className={classes.media}
            image={props.storeImage}
            title={props.title}
            key={props.key}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}  <RatedStars rating={5} />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  const fetchBusinesses = () => {
    axios.get(HOST_API + 'zist/business/',
      {
        headers: headers
      }
    )
      .then(res => {
        console.log(res.data.results)
        setBusinesses(res.data.results)
      })
      .catch(error => {
        return []
        console.log(error)
      })
  }
  useEffect(() => {
    if (!businesses?.length) {
      fetchBusinesses()
    }
  }, [businesses])
  useEffect(() => {
    cookie.set('location', address, { path: '/' })
  }, [address])
  // const optionsResults = businesses?.map(x => ({ text: x.name, value: x.name, image: { src: store } }))

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    mediumLargeDesktop: {
      breakpoint: { max: 300, min: 1920 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1920, min: 1500 },
      items: 4
    },
    mediumDesktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const handleLogOut = () => {
    cookies.remove('login-res', { path: '/' })
    window.location.reload(false);
  }
  const handleCardClicked = (e, name, type, id) => {
    const d = { name: name, type: type, id: id }
    History.push({
      pathname: '/user-list',
      state: d
    });
  }
  const handleSelectedBusiness = (e, { value }) => {
    setBusiness({ business: value })
    History.push({
      pathname: '/user-list',
      state: { name: value }
    });
  }
  console.log(business)
  return (
    <div className={classes.mainDiv} >
      <Grid className={classes.navbarGrid}>
        <Navbar />
        <Grid container spacing={1} >
          <Grid item xs={6} style={{ width: '50%', margin: '100px auto' }} >
            <SearchComponent />
          </Grid>
        </Grid>
      </Grid>
      {/* end of the nav section */}
      <div style={{ margin: '20px 55px' }}>
        <Grid container spacing={1} >
        {/* <Grid item xs={1}  >
          <LocationOnIcon fontSize='large' style={{paddingTop:15}} />
        </Grid>
        <Grid item xs={6}  >
        <TextField
                  required
                  name="location"
                  value={address}
                  placeholder='Enter your address …'
                  type="text"
                  className={classes.textfields}
                  onChange={event => setAddress(event.target.value)}
                />
        </Grid> */}
        <Grid item xs={12}  >
          <Typography variant='subtitle1' className={classes.subtitleText} > Want a look around ? Here are some suggestions to get you started. </Typography>
        </Grid>
      </Grid>

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > All under one roof </Typography>
            <Typography variant='subtitle1' className={classes.subtitleText} > Shop from your fave outlets within these malls.You need it, they got it! </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            // deviceType={props.deviceType}
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > Zist karibu </Typography>
            <Typography variant='subtitle1' className={classes.subtitleText} > Get fast from these outlets near you </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > Convenience Store </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > Go green with these green grocers </Typography>
            <Typography variant='subtitle1' className={classes.subtitleText} > Fresh quality produce delivered to you </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > Health starts with you </Typography>
            <Typography variant='subtitle1' className={classes.subtitleText} > Shops to get you living the right way </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > Go green with these green grocers </Typography>
            <Typography variant='subtitle1' className={classes.subtitleText} > Fresh quality produce delivered to you </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

        <Grid container spacing={1} >
          <Grid item xs={12}  >
            <Typography variant='h6' className={classes.boldFont} > Local shujaas </Typography>
            <Typography variant='subtitle1' className={classes.subtitleText} > Be a local hero by supporting our local shujaas </Typography>
          </Grid>
        </Grid>
        {businesses?.length === 0 ? (
          <SkeletonDisplay />
        ) : (
          <Carousel
            ssr
            partialVisbile
            itemClass="image-item"
            responsive={responsive}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={store}
                      title={business.name}
                      description={business.bio}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business.name, business.business_type, business.id)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

      </div>

    </div >
  )
}

export default withCookies(Shopping)