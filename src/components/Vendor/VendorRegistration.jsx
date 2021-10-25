import React, { useState } from 'react';
import { Grid, MenuItem, Typography, IconButton, TextField } from "@material-ui/core";
import history from '../../History';
import ContinueButtonSection from './ContinueButtonSection';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import {HOST_API} from '../../endpoints';
import { useSnackbar } from 'notistack';
const useStyles = makeStyles((theme) => ({
    introGrid: {
        background: ' #FEE2D4 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '30px 0 30px 0 !important',
    },
    mainDiv: {
        background: '#F9F7F1 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '30px 0 !important',
    },
    mainGrid: {
        width: '60% !important',
        margin: '0 auto !important',
    },
    boldFont: {
        fontWeight: 'bold !important',
        textDecoration: 'underline',
    },
    continueButton: {
        width: '200px',
        margin: '0 auto !important',
    },
}))

const options = [
    { text: 'Independent store', value: 'Independent store' },
    { text: 'Under a mall', value: 'Under a mall' },
    // { text: 'Groceries', value: 'Groceries' },
    // { text: 'Cosmetics', value: 'Cosmetics' },
    // { text: 'Bakery', value: 'Bakery' },
    // { text: 'Meat', value: 'Meat' },
    // { text: 'Drinks', value: 'Drinks' },
]

const VendorRegistration = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('')
    const [natureOfBusiness, setNatureOfBusiness] = useState('')
    const [niche, setNiche] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const bussinessType = Object.values(natureOfBusiness)
    const businessInfo = bussinessType.toString();
    // console.log(natureOfBusiness,bussinessType,businessInfo)
    const bio = Object.values(niche)
    const businessBio = bio.toString();
    // console.log(businessInfo, businessBio)
    const { enqueueSnackbar } = useSnackbar()
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleSubmit = (e,name,natureOfBusiness,niche,tel,email,location) => {
        e.preventDefault()
        const { cookies } = props
        const userData = cookies.get('login-res')
        // console.log(userData)
        const token = userData?.access 
        // console.log(token)
          axios.post(HOST_API +'zist/vendor/', '',
           { headers: { "Authorization": `Bearer ${token}` } }
           ) 
        .then(res => {
          console.log(res, '========pass')
            if (res.status === 201) {
              axios.post(HOST_API +'zist/vendor/business/', {
                  name: name,
                  business_type: natureOfBusiness,
                  bio: niche,
                  tel: tel,
                  email: email,
                  location: location,
                  // metadata: props.niche
                },
                  { headers: { "Authorization": `Bearer ${token}` } }
                ).then( res => {
                  console.log(res, '=====pass2') 
                  if (res.status === 201) {
                    const id = res.data.id
                    cookies.set('business-id', id, { path: '/' });
                    setOpenModal(true)
                  }
                }).catch( error => {
                    enqueueSnackbar(`${error}`, { variant: 'error' })
                })
                
            }
            
        }).catch(error => {
            enqueueSnackbar(`${error}`, { variant: 'error' })
            });
      }
      console.log( '=======expectedfail', openModal)
    return (
        <div>
            <div className={classes.mainDiv} >
                <Grid container  >
                    <Grid item xs={1} >
                        <IconButton onClick={handleGoingBack} >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <form className={classes.mainGrid} onSubmit={ e => handleSubmit(e,name,natureOfBusiness, description, tel, email, location)}>
                    <Grid container  >
                        <Grid item xs={12} >
                            <Typography variant='h4' > BECOME A VENDOR ON ZIST SHOPPING </Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '10px 0 20px 0' }} >
                        <Grid item xs={12} >
                            <Typography variant='h5' > Enter your business information. </Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Name of business"
                                variant="outlined"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Location of business"
                                variant="outlined"
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                select
                                required
                                placeholder="Select"
                                value={natureOfBusiness}
                                onChange={(e) => setNatureOfBusiness(e.target.value)}
                                helperText="Please select the nature of store/stall"
                                variant="outlined"
                                fullWidth
                            >
                                {options.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.text}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Business description"
                                variant="outlined"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Business categories"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                type='tel'
                                placeholder="Primary contact (phone number)"
                                variant="outlined"
                                value={tel}
                                onChange={e => setTel(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Secondary contact (email)"
                                variant="outlined"
                                type='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container  >
                        <Grid item xs={12}  >
                            <Typography variant='h6' > *Your contact is important in reaching you and getting you verified as a Zist Vendor. Contact should be made within 24 hrs post application.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.continueButton} >
                        <Grid item xs={12}  >
                            <ContinueButtonSection modalOpen={openModal}/>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default withCookies(VendorRegistration)