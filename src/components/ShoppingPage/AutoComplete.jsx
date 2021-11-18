/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import { Button, MenuItem, Grid, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, InputAdornment } from '@material-ui/core';
import store from './../../Assets/store.png';
import axios from 'axios';
import History from '../../History';
import { HOST_API } from '../../endpoints';
import { withStyles } from '@material-ui/core/styles'
import { Icon } from "semantic-ui-react";
import SearchIcon from '@material-ui/icons/Search';
import { withCookies } from 'react-cookie';

const AutoComplete = withStyles({
  root: {
    background: 'white !important',
    padding: '3px 0 0 0 !important',
    margin: '0 !important',
    '& .MuiOutlinedInput-root': {
      borderRadius: '30px',
    }
  },
  input: {
    fontSize: '18px',
    border: 'none !important',
    '&::placeholder': {
      opacity: 1
    }
  },
})(Autocomplete)
function SearchComponent(props) {
  const { cookies } = props
  const userData = cookies.get('login-res')
  const token = userData?.access
  const [showItems, setShowItems] = useState(false)
  const [selectedOption, setSelectedOption] = useState()
  const [businesses, setBusinesses] = useState([])
  const [products, setProducts] = useState([])
  const collection = showItems ? products : businesses
  console.log(products)
  const placeholderImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAAWlBMVEXh5urDzdba3+LFz9nf5+rEz9HBy8/S3d/CytHJztHBzNLL19ji6e3R193g5enCzNbGys7O1t7Z4OPa4ejS2t/J0tXV3eXU2dze5u3N0tXa5O69yNHZ4+XF0dKFwnRbAAAC4klEQVR4nO3c63KqMBRAYYLIQY3BCy1yaN//NQ83EQjqHi/TM93r+9GZxtYZ1wRMwDYIAAAAAAAAAAAAAAAAAAAAAAAAADzKRe/ifvqlvVi4fJfwp1/ai4XmXShFKUrdRikpSklRSopSUpSSopTUoFSaPC/VUSp8no5Sixc83YJSQpSSopQUpWa5wAZRVH25oNSVXy52cbwrwksrSs3al93ywvRXgik1w636dWayO3SDlPJZM1hlmqQbpZTHZokZltq2w4pLuWD+FZ8WwylVza9TM6y51CE+zo6no1LGtD+luJRdrhdz9ziP5TiUyZphxaWytTEfkT9+8Eo1iyrFperzdrzxx4/lJJXqOVXtVvbNI0lup49Fy/W4VHuIKi3VH2PpzjtV2c2oVLpQ/t636t/gpqmcG6+nui5aS+WXGitvVmXlYJ3QLTy1lnKDFOU+mJyrbH4+8tKkOA8qLVUMVpdpkgfjaeWCo0nqSZeaz35QZ6mveLxh+fTeAIMwL4p8mERnqY/JOsD42xrv5KWyVG48p7tPp6+UC06JFyrd+8ffhL5Sl0u/Q+vNzA5wRGGpMPVDVamyO0+nsNRqLtRlLe5x7QPqStlsdkrVZq/rBce0XaWrKxUmV0v525pKkZQ6S0Wba52qbc102eXs32pY6Zw6LK+XMmUxXiu4bTP/dJa60alONdrWhKZdTqgslfmLzqHUHPpUUXY+o2ksdbx6Nj9bdgtQ+/XdjyksZYu7peLmbo2z2TLWXCq8few1mm2N2w+TKiwlCFVvayYfTFBYKpveRr+S6jseD+grtZV0qlNNvqeUFKUo1aGUFKWkKCVFKSlKSfmlRAtPj74reXa7fsxW3acXD5vHtH/loKiUs49q7kQoKvUkSklRSopSUipKpeXqeYNPyf7eUq9GKUpR6jZKSVFKilJSlJKilBSlpML4XX5bKffnXX7bf/0GAAAAAAAAAAAAAAAAAAAAAAAA8D/6B0YsNs6SxFarAAAAAElFTkSuQmCC'
  const fetchBusinesses = () => {
    axios.get(HOST_API + 'zist/business/')
      .then(res => {
        // console.log(res.data.results)
        setBusinesses(res.data.results)
      })
      .catch(error => {
        return []
        // console.log(error)
      })
  }
  const fetchProducts = () => {
    axios.get(HOST_API + 'zist/products/', {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => {
        // console.log(res.data.results)
        setProducts(res.data.results)
      })
      .catch(error => {
        return []
        // console.log(error)
      })
  }
  useEffect(() => {
    if (!businesses?.length) {
      fetchBusinesses()
    }
  }, [businesses])
  useEffect(() => {
    if (!products?.length) {
      fetchProducts()
    }
  }, [products])

  const [openStatus, setOpenStatus] = useState(false)
  const [closeOnBlur, setCloseOnBlur] = useState(true)

  const handleTabChange = (e, status) => {
    e.preventDefault()
    // setOpenStatus(true)
    // setCloseOnBlur(false)
    setShowItems(status)
  }
  console.log(closeOnBlur, '000000=====kkk', openStatus, '===q===open', showItems)
  const PaperC = (props) => {
    return (
      <Paper>
        <Button color='inherit' style={{ borderBottom: !showItems ? '2px orange solid' : '' }} onClick={e => handleTabChange(e, false)}> Stores </Button>
        <Button color='inherit' style={{ borderBottom: showItems ? '2px orange solid' : '' }} onClick={e => handleTabChange(e, true)} > Products </Button>
        {props?.children}
      </Paper>
    )
  }
  const storeDisplay = (props) => {
    return (
      <MenuItem>
        <Grid item xs={4}>
          <Avatar variant="rounded" src={store} >
          </Avatar>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h3' > store name </Typography>
        </Grid>
        <Grid item xs={4}>
          check
        </Grid>
      </MenuItem>
    )
  }
  // console.log(collection, showItems)

  return (
    <div style={{ width: '100% !important' }}>
      <AutoComplete
        open={openStatus}
        onFocus={() => setOpenStatus(true)}
        // onBlur={() => {
        //   if (closeOnBlur){
        //     setOpenStatus(false)
        //   }
        // }}
        // onClose={() =>  {
        //     if (closeOnBlur){
        //       setOpenStatus(false)
        //     }
        //   }}        
        onOpen={() => setOpenStatus(!openStatus)}
        freeSolo
        id="search-bar"
        // disableCloseOnSelect
        noOptionsText=" `Oops ! Looks like our search came back empty… We suggest checking the spelling or searching for something else"
        // options={collection.map((option) => option.title)}
        value={selectedOption}
        getOptionLabel={(option) => showItems ? option.name : option?.name}
        options={collection}
        onChange={(e, props) => {
          // props is the newValue
          if (showItems) {
            setSelectedOption(props)
          } else {
            const d = { props }
            History.push({
              pathname: '/user-list',
              state: d
            });
            setSelectedOption(props)
          }

        }}
        renderOption={(option) => (
          !showItems ? (
            <div>
              <List key={option.id}>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={option?.photo ? option?.photo : placeholderImg } />
                  </ListItemAvatar>
                  <ListItemText primary={option?.name} secondary={option?.metadata.niche} /> <Icon name='check circle outline' size='large' color='yellow' style={{ paddingBottom: 50 }} />
                </ListItem>
              </List>
            </div>
          ) : (
            <List key={option.id}>
              <ListItem >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={option?.image ? option?.image : placeholderImg} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={option?.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {`Ksh.${option?.price}`} <br />
                          {option?.business.name}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
              </ListItem>
            </List>
          )
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for a shop or an item"
            variant="outlined"
            InputProps={{ ...params.InputProps }}
          />
        )}
        PaperComponent={PaperC}
      />
    </div>
  );
}
export default withCookies(SearchComponent)
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
]
const items = [
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]
