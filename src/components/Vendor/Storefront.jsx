import React, { useState,useEffect } from 'react';
import { Grid, Popup, Image, Icon, Input, Button, Form, List, Card } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import { RatedStars } from './../ShoppingPage/Ratings';
import card1 from './../../Assets/1.jpg';
import { ContinueButton } from './ContinueButton';
import { withCookies, Cookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import {HOST_API} from './../../endpoints';

const MainDiv = styled.div`
   background: #F9F7F1;
`;
const MainGrid = styled(Grid)`
   width: 50%;
   margin : 0 auto !important;
   padding: 60px 0 !important;
`;
const CardRow = styled(Grid.Row)`
   width: 100% !important;
   margin : 0 auto !important;
`;
const FormLabels = styled.label`
    font-size: 25px !important;
`;
const ButtonGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto !important;
`;
const FormInput = styled.input`
    padding: 20px !important;
    font-size: 18px !important;
    margin: 20px 0 !important;
    width: 100% !important;
    @media only screen and (min-width: 1400px) {
        padding: 20px 20px !important;
        font-size: 20px !important;
    }
`;
const warningText = styled.h2`
    margin: 20px 0 !important;
    font-size: 20px !important;
`;
const Titles = styled.h2`
    padding: 0 !important;
`;
const ColumnForm = styled(Grid.Column)`
    padding: 0 !important;
`
const Storefront = (props) => {
    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData.access 
    console.log(userData,token)
    const businessData = userData.business[0]
    const data = cookies.get('business-info')
   const id = userData.business[0].id

    // console.log(data)
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [businessInfo, setbusinessInfo] = useState([])
    const [name, setName] = useState(businessData.name)
    const [natureOfBusiness, setNatureOfBusiness] = useState(businessData.business_type)
    const [niche, setNiche] = useState(businessData.bio)
    const [email, setEmail] = useState(businessData.email)
    const [tel, setTel] = useState(businessData.tel)
    const [location, setLocation] = useState(businessData.location)

    console.log(businessInfo,name)

    // useEffect(() => {
    //     axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/vendor/business/${id}/`, {
    //         headers: { "Authorization": `Bearer ${token}`,
    //         responseType: 'json' ,
    //      }
    //     })
    //     .then(response => response.json())
    //     .then(res => {
    //         if (res.status === 200) {
    //             setbusinessInfo(res)
    //             const businessData = cookies.set('business-data',businessInfo)
    //         }
    //     })
    //   }, []);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(HOST_API +`zist/vendor/business/${id}/`,
                { 
                  headers: {"Authorization" : `Bearer ${token}`} 
                }
                )
                if ( res.status == 200) {
                    setbusinessInfo(res.data)
                    console.log(res.data)
                }
              } catch (error) {
                console.log(error)
              }
        } )();
    }, []);
   

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put(HOST_API +`zist/vendor/business/${id}/`, {
            name: name,
            business_type: natureOfBusiness,
            bio: niche,
            email: email,
            tel: tel,
            location: location
        }, 
            { headers: { "Authorization": `Bearer ${token}` } }
        )
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    // setSnackbarOpen(true)
                    toast.success("You have successfully updated the business profile", {
                        className: 'toast',
                        draggable: true,
                        position: toast.POSITION.TOP_CENTER,
                        type: toast.TYPE.SUCCES,
                        hideProgressBar: true
                    })
                }

            }).catch(error => {
                // setSnackbarOpen(true)
                toast.error("An error occurred, please try again", {
                    className: 'toast',
                    draggable: true,
                    position: toast.POSITION.TOP_CENTER,
                    type: toast.TYPE.ERROR,
                    hideProgressBar: true
                })
            });
    }

    return (
        <MainDiv>
            <ToastContainer autoClose={4000} onOpen={snackbarOpen} />
                    <MainGrid>
                    <Grid.Row>
                        <h2> {name}’ Storefront. </h2>
                    </Grid.Row>
                    <Grid.Row>
                        <h2> OUTLOOK OF YOUR BUSINESS’ PROFILE </h2>
                    </Grid.Row>
                    <Grid.Row>
                        <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
                            <Image src={card1} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header> {name} <Icon name='check circle' color='yellow' /></Card.Header>
                                <Grid>
                                    <Grid.Row width={16} style={{ marginTop: '15px', marginBottom: '5px' }}>
                                        <Grid.Column width={10} >
                                            <Card.Header style={{paddingLeft:'10px'}}>
                                                <h3> {niche} </h3>
                                            </Card.Header>
                                        </Grid.Column>
    
                                        <Grid.Column width={6} style={{textAlign:'center'}} >
                                            <RatedStars rating={3} />
                                        </Grid.Column>
    
                                    </Grid.Row>
                                </Grid>
    
                                <List bulleted horizontal >
                                    <List.Item ></List.Item>
                                    <List.Item >{natureOfBusiness}</List.Item>
                                </List>
                            </Card.Content>
    
                        </Card>
                    </Grid.Row>
                    <Grid.Row>
                        <ColumnForm>
                            <Form >
                                <Form.Field>
                                    <FormLabels>Name of business</FormLabels>
                                    <Popup
                                        trigger={
                                            <FormInput placeholder='Enter the name your business is registered under…'
                                                type='text'
                                                required
                                                fluid
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                            />
                                        }
                                        content='* changing the business name would involve the verification process being done again for validity purposes.'
                                        position='bottom left'
                                    />
    
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Nature of Store/Stall</FormLabels>
                                    <FormInput
                                        fluid={true}
                                        placeholder='Nature of Store/Stall'
                                        search
                                        selection
                                        value={natureOfBusiness}
                                        onChange={e => setNatureOfBusiness(e.target.value)}
                                        style={{ padding: '50px 20px !important', position: 'inherit !important', boxShadow: 'none' }}
                                    />
                                </Form.Field>
    
    
                                <Form.Field>
                                    <FormLabels> Business Niche </FormLabels>
                                    <FormInput
                                        placeholder='Business niche '
                                        onChange={e => setNiche(e.target.value)}
                                        clearable
                                        search
                                        value={niche}
                                        style={{ padding: '2rem !important' }}
                                    />
                                </Form.Field>
    
                                <Form.Field>
                                    <FormLabels>Primary contact information</FormLabels>
                                    <FormInput placeholder='Enter your primary contact (phone number)'
                                        required type="tel"
                                        onChange={e => setTel(e.target.value)}
                                        value={tel}
                                    />
                                </Form.Field>
    
                                <Form.Field>
                                    <FormLabels>Secondary contact information</FormLabels>
                                    <FormInput placeholder='Enter your secondary contact (email)'
                                        required type='email'
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </Form.Field>
    
                                <ButtonGrid width={16} >
                                    <ContinueButton type='submit' handleClick={handleUpdate} />
                                </ButtonGrid>
    
                            </Form>
                        </ColumnForm>
                    </Grid.Row>
                </MainGrid>
        </MainDiv>
    )
}
export default withCookies(Storefront)