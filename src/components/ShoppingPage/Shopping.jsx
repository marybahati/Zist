import React, { useState, useEffect } from 'react'
import {
  Grid, Button, Typography, TextField, Card, CardActionArea, CardContent, CardMedia
} from "@material-ui/core";
import store from './../../Assets/store.png';
import axios from 'axios';
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
import { FooterComponent } from '../LandingPage/Footer';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyles = makeStyles((theme) => ({
  navbarGrid: {
    textAlign: 'right',
    // backgroundImage: `url(${bgImage})`,
    background: '#FFF',
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
    background: '#FFF',
  },
  searchbarGrid: {
    width: '50%',
    margin: '100px auto',
    [theme.breakpoints.between('sm', 'md')]: {
      width: '96%',
    },
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
  removeShadow: {
    boxShadow: 'none',
    '& .MuiPaper-elevation1': {
      boxShadow: 'none'
    },
    '& .MuiCardActionArea-focusHighlight': {
      background: 'white'
    }
  },
  media: {
    height: '300px',
    // width: '100%'
  },

  boldFont: {
    fontWeight: 'bold !important',
    textDecoration: 'underline',
  },
  subtitleText: {
    fontSize: '18px',
    paddingBottom: 15,
  },
  ellipsis: {
    maxWidth: '98%',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
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
  console.log(businesses, location)
  const placeholderImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAAWlBMVEXh5urDzdba3+LFz9nf5+rEz9HBy8/S3d/CytHJztHBzNLL19ji6e3R193g5enCzNbGys7O1t7Z4OPa4ejS2t/J0tXV3eXU2dze5u3N0tXa5O69yNHZ4+XF0dKFwnRbAAAC4klEQVR4nO3c63KqMBRAYYLIQY3BCy1yaN//NQ83EQjqHi/TM93r+9GZxtYZ1wRMwDYIAAAAAAAAAAAAAAAAAAAAAAAAADzKRe/ifvqlvVi4fJfwp1/ai4XmXShFKUrdRikpSklRSopSUpSSopTUoFSaPC/VUSp8no5Sixc83YJSQpSSopQUpWa5wAZRVH25oNSVXy52cbwrwksrSs3al93ywvRXgik1w636dWayO3SDlPJZM1hlmqQbpZTHZokZltq2w4pLuWD+FZ8WwylVza9TM6y51CE+zo6no1LGtD+luJRdrhdz9ziP5TiUyZphxaWytTEfkT9+8Eo1iyrFperzdrzxx4/lJJXqOVXtVvbNI0lup49Fy/W4VHuIKi3VH2PpzjtV2c2oVLpQ/t636t/gpqmcG6+nui5aS+WXGitvVmXlYJ3QLTy1lnKDFOU+mJyrbH4+8tKkOA8qLVUMVpdpkgfjaeWCo0nqSZeaz35QZ6mveLxh+fTeAIMwL4p8mERnqY/JOsD42xrv5KWyVG48p7tPp6+UC06JFyrd+8ffhL5Sl0u/Q+vNzA5wRGGpMPVDVamyO0+nsNRqLtRlLe5x7QPqStlsdkrVZq/rBce0XaWrKxUmV0v525pKkZQ6S0Wba52qbc102eXs32pY6Zw6LK+XMmUxXiu4bTP/dJa60alONdrWhKZdTqgslfmLzqHUHPpUUXY+o2ksdbx6Nj9bdgtQ+/XdjyksZYu7peLmbo2z2TLWXCq8few1mm2N2w+TKiwlCFVvayYfTFBYKpveRr+S6jseD+grtZV0qlNNvqeUFKUo1aGUFKWkKCVFKSlKSfmlRAtPj74reXa7fsxW3acXD5vHtH/loKiUs49q7kQoKvUkSklRSopSUipKpeXqeYNPyf7eUq9GKUpR6jZKSVFKilJSlJKilBSlpML4XX5bKffnXX7bf/0GAAAAAAAAAAAAAAAAAAAAAAAA8D/6B0YsNs6SxFarAAAAAElFTkSuQmCC'
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
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="carousel-button-group">
        <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} > Prev </Button>
        <Button onClick={() => next()} > Next </Button>
      </div>
    );
  };
  const CardDisplay = (props) => {
    return (
      <Card key={business.id} style={{ width: '100%', height: 450 }} className={classes.removeShadow}>
        <CardActionArea onClick={props.handleClick} className={classes.removeShadow}>
          <CardMedia
            className={classes.media}
            image={props.storeImage}
            title={props.title}
            key={props.key}
          />
          <CardContent className={classes.removeShadow} >
            <Grid container >
              <Grid item xs={8}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.ellipsis}>
                  {props.title}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <RatedStars rating={5} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="span" >
                  {props.description}
                </Typography>
                <ul>
                  <li>
                    {props.niche}
                  </li>
                </ul>
              </Grid>
            </Grid>
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
      items: 6,
      slidesToSlide: 6,
    },
    mediumLargeDesktop: {
      breakpoint: { max: 300, min: 1920 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 1920, min: 1500 },
      items: 4,
      slidesToSlide: 4
    },
    mediumDesktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const handleLogOut = () => {
    cookies.remove('login-res', { path: '/' })
    window.location.reload(false);
  }
  const handleCardClicked = (e,props) => {
    const d = { props }
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
          <Grid item xs={11} sm={11} md={6} lg={6} className={classes.searchbarGrid} >
            <SearchComponent />
          </Grid>
        </Grid>
      </Grid>
      {/* end of the nav section */}
      <div style={{ margin: '20px 40px' }}>
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
          // arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
          >
            {businesses?.map(business => {
              return (
                <Grid key={business.id} container style={{ marginBottom: 50 }} >
                  <Grid item xs={11} >
                    <CardDisplay
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
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
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
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
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
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
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
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
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
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
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
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
                      storeImage={business.photo ? business.photo : placeholderImg}
                      title={business.name}
                      description={business.bio}
                      niche={business.metadata.niche}
                      key={business.id}
                      handleClick={(e) => handleCardClicked(e, business)}
                    />
                  </Grid>
                </Grid>

              )
            })}
          </Carousel>
        )}

      </div>
      <FooterComponent />
    </div >
  )
}

export default withCookies(Shopping)