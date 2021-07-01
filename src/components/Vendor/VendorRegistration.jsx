import React, { useState } from 'react';
// import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Select } from "semantic-ui-react";
import { Grid, Button, Menu, InputBase, MenuItem, Typography, IconButton, TextField } from "@material-ui/core";
import styled from 'styled-components';
import history from '../../History';
import vendor from './../../Assets/vendor-img.png';
import ContinueButtonSection from './ContinueButtonSection';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';

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

// const Intro = styled(Grid)`
//    background: #FEE2D4;
//    padding : 40px 0 0 0 !important;
//    margin: 0 auto !important;
// `;
// const IntroRows = styled(Grid.Row)`
//    padding : 0;
//    width:70%;
//    margin: 0 auto;
//    text-align: center;
//    width: 60% !important;
//    @media only screen and (max-width: 768px) {
//         font-size: 18px !important;
//         width: 80% !important;
//     }
// `;
// const IntroTextHeading = styled.h1`
// @media only screen and (max-width: 768px) {
//     font-size: 24px !important;
// }
// `;
// const Icons = styled(Grid.Column)`
//   padding: 0 ;
//   text-align: center;
// `;
// const MainGrid = styled(Grid)`
//     width: 60% !important;
//     margin: 0 auto !important;
//     @media only screen and (max-width: 768px) {
//         // font-size: 18px !important;
//         width: 80% !important;
//     }
// `;
// const MainDiv = styled.div`
//     background: #FEE2D4 0% 0% no-repeat padding-box;
//     // border: 1px solid #707070;
//     opacity: 1;
//     padding: 80px 0 80px 0 !important;
// `;
// const FormInput = styled.input`
//     padding: 20px !important;
//     font-size: 18px !important;
//     width: 100%;
//     margin: 20px 0 !important;
//     @media only screen and (min-width: 1400px) {
//         padding: 20px 20px !important;
//         font-size: 20px !important;
//     }
// `;
// const FormTitle = styled.h1`
//     padding: 0;
// `;
// const FormLabels = styled.label`
//     font-size: 25px !important;
// `;
// const ButtonGrid = styled(Grid)`
//     width: 50%;
//     margin: 0 auto !important;
// `;
// const VendorForm = styled(Form)`
//     width: 100% !important;
// `;
// const SelectDropdown = styled(Dropdown)`
//     margin: 20px 0 40px 0 !important;
//     padding: 20px 20px !important;
// `;


const options = [
    // { text: 'Independent store', value: 'Independent store' },
    // { text: 'Under a mall', value: 'Under a mall' },
    { text: 'Groceries', value: 'Groceries' },
    { text: 'Cosmetics', value: 'Cosmetics' },
    { text: 'Bakery', value: 'Bakery' },
    { text: 'Meat', value: 'Meat' },
    { text: 'Drinks', value: 'Drinks' },
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

    console.log(name, natureOfBusiness, niche, email, tel)
    const bussinessType = Object.values(natureOfBusiness)
    const businessInfo = bussinessType.toString();
    const bio = Object.values(niche)
    const businessBio = bio.toString();
    console.log(businessInfo, businessBio)

    const handleGoingBack = () => {
        history.goBack()
    }

    return (
        <div>
            <div className={classes.introGrid} >
                <Grid container  >
                    <Grid item xs={1} >
                        <IconButton onClick={handleGoingBack} >
                            <ArrowBackIosIcon  />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{ textAlign: 'center' }} >
                        <Typography variant='h4' > BECOME A VENDOR ON ZIST SHOPPING </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{ textAlign: 'center', paddingTop: 15 }} >
                        <Typography variant='h5' >Get with the times and create an online presence. <br />
                            Register and start selling on Zist Shopping bila stress. </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={5} style={{ margin: '0 auto' }} >
                        <img src={vendor} style={{ width: 'auto', height: '300px' }} />
                    </Grid>
                </Grid>
            </div>
            <div className={classes.mainDiv} >
                <form className={classes.mainGrid} >
                    <Grid container style={{ padding: '10px 0 20px 0' }} >
                        <Grid item xs={12} >
                            <Typography variant='h4' > Enter your business information. </Typography>
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
                            <ContinueButtonSection
                                name={name} natureOfBusiness={businessInfo}
                                niche={description} tel={tel} email={email} location={location}
                            />
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* 
            <MainDiv>
                <MainGrid >
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <FormTitle>Enter your business information.</FormTitle>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Icons width={2}>
                                <Icon name='help circle' size='huge' />
                            </Icons>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>

                    </Grid.Row>
                    <Grid.Row width={16}>
                        <Grid.Column width={16}>
                            <VendorForm >
                                <Form.Field>
                                    <FormLabels>Name of business</FormLabels>
                                    <FormInput placeholder='Enter the name your business is registered under…'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Location of business</FormLabels>
                                    <FormInput placeholder='Select the location of your business'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setLocation(e.target.value)}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <FormLabels>Nature of Store/Stall</FormLabels>
                                    <SelectDropdown
                                        placeholder='If within a hypermarket , select the parent store.'
                                        openOnFocus={false}
                                        fluid
                                        selection
                                        options={options}
                                        onChange={(e, { value }) => setNatureOfBusiness({ natureOfBusiness: value })}
                                        clearable
                                        search
                                        style={{ padding: '2rem !important' }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Business Description</FormLabels>
                                    <FormInput placeholder='Type in a short description for customers to know you better.'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Business Categories</FormLabels>
                                    <FormInput placeholder='Input which type of products your business specifically deals in.'
                                        fluid
                                        type='text'
                                        required
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Contact Details</FormLabels>
                                    <FormInput placeholder='Enter your primary contact (phone number)'
                                        required type="tel" fluid
                                        onChange={e => setTel(e.target.value)}
                                    />
                                    <FormInput placeholder='Enter your secondary contact (email)'
                                        required type='email' fluid
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Field>
                                <h2>
                                    *Your contact is important in reaching you and getting you verified as a Zist Vendor. 
                                    Contact should be made within 24 hrs post application.
                                 </h2>
                                <ButtonGrid width={16} >
                                    <ContinueButtonSection type='submit' name={name} natureOfBusiness={businessInfo}
                                        niche={description} tel={tel} email={email} location={location} />
                                </ButtonGrid>

                            </VendorForm>
                        </Grid.Column>
                    </Grid.Row>


                </MainGrid>
            </MainDiv> */}
        </div>
    )
}

export default VendorRegistration