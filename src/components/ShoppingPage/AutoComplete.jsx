/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import { Button, MenuItem, Grid, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import store from './../../Assets/store.png';
import axios from 'axios';
import History from '../../History';
import { HOST_API } from './../../endpoints';
import { withStyles } from '@material-ui/core/styles'
import { Icon } from "semantic-ui-react";
import { withCookies } from 'react-cookie';

const AutoComplete = withStyles({
  root: {
    background: 'white !important',
    padding: '3px 0 0 0 !important',
    margin: '0 !important',
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
  const handleSelectedBusiness = (e, { value }) => {
    setSelectedOption(value)
    // History.push({
    //   pathname: '/user-list',
    //   state: { name: value }
    // });
    // console.log(value)
  }
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
    if (!businesses.length) {
      fetchBusinesses()
    }
  }, [businesses])
  useEffect(() => {
    if (!products.length) {
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
        onChange={(e, newValue) => {
          if (showItems) {
            setSelectedOption(newValue)
          } else {
            const d = { name: newValue?.name, type: newValue?.business_type, id: newValue?.id }
            History.push({
              pathname: '/user-list',
              state: d
            });
            setSelectedOption(newValue)
          }

        }}
        renderOption={(option) => (
          !showItems ? (
            <div>
              {/* <MenuItem disableGutters dense style={{padding:'0 !important',margin:'0 !important'}} > */}
              <List key={option.id}>
                <ListItem >
                  <ListItemAvatar>
                    <Avatar variant="rounded" src={store} />
                  </ListItemAvatar>
                  <ListItemText primary={option?.name} secondary={option?.business_type} /> <Icon name='check circle outline' size='large' color='yellow' style={{ paddingBottom: 50 }} />
                  {/* <ListItemText secondary={option?.business_type} /> */}
                </ListItem>
              </List>
              {/* </MenuItem> */}
            </div>
          ) : (
            <List key={option.id}>
              <ListItem >
                <ListItemAvatar>
                  <Avatar variant="rounded" src={store} />
                </ListItemAvatar>
                <ListItemText primary={option?.name} secondary={`Ksh. ${option?.price}`} />
                {/* <ListItemText secondary={option?.business_type} /> */}
              </ListItem>
            </List>
          )
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for a shop or an item"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
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
