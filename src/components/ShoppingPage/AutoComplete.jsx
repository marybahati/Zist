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
import {  Icon } from "semantic-ui-react";

const AutoComplete = withStyles({
  root:{
    background:'white !important',
    padding: '3px 0 0 0 !important',
    margin: '0 !important',
  },
  input:{
    fontSize: '18px',
    border:'none !important',
    '&::placeholder': {
      opacity: 1
    }
  },
})(Autocomplete)
export default function SearchComponent() {
  const [showItems, setShowItems] = useState(false)
  const [value, setValue] = useState()
  const [businesses, setBusinesses] = useState([])

  const collection = showItems ? top100Films : businesses
  const handleShowProducts = () => {
    setShowItems(true)
    console.log(showItems)
  }
  const handleShowStores = () => {
    setShowItems(false)
    console.log(showItems)
  }
  const handleSelectedBusiness = (e, { value }) => {
    setValue(value)
    // History.push({
    //   pathname: '/user-list',
    //   state: { name: value }
    // });
    console.log(value)
  }
  const fetchBusinesses = () => {
    axios.get(HOST_API + 'zist/business/')
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
    if(!businesses.length){
      fetchBusinesses()
    }
  }, [businesses])
  const PaperC = (props) => {
    return (
      <Paper>
        <Button color='inherit' onClick={handleShowStores}> Stores </Button>
        <Button color='inherit' onClick={handleShowProducts} > Products </Button>
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
  console.log(collection, showItems)
  return (
    <div style={{ width: '100% !important' }}>
      <AutoComplete
        freeSolo
        id="search-bar"
        // disableCloseOnSelect
        noOptionsText=" `Oops ! Looks like our search came back empty… We suggest checking the spelling or searching for something else"
        // options={collection.map((option) => option.title)}
        value={value}
        getOptionLabel={(option) => showItems? option.title :option?.name}
        options={collection}
        // onChange={handleSelectedBusiness}
        renderOption={(option) => (
          !showItems ? (
            <div>
              {/* <MenuItem disableGutters dense style={{padding:'0 !important',margin:'0 !important'}} > */}
                <List >
                  <ListItem >
                    <ListItemAvatar>
                      <Avatar variant="rounded" src={store} />
                    </ListItemAvatar>
                    <ListItemText primary={option?.name} secondary={option?.business_type} /> <Icon name='check circle outline' size='large' color='yellow' style={{paddingBottom:40}} /> 
                    {/* <ListItemText secondary={option?.business_type} /> */}
                  </ListItem>
                </List>
              {/* </MenuItem> */}
            </div>
          ) : <span> {option.title} </span>
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
