import React, { useState } from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import { RatedStars } from './../ShoppingPage/Ratings';
import card1 from './../../Assets/1.jpg';
import ContinueButtonSection from './ContinueButtonSection';

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
const warningText = styled.label`
    margin: 20px 0 !important;
    font-size: 20px !important;
`;
const Titles = styled.h2`
    padding: 0 !important;
`;
export const Storefront = () => {

    const [name, setName] = useState('')
    const [natureOfBusiness, setNatureOfBusiness] = useState('')
    const [niche, setNiche] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    return (
        <MainDiv>
            <MainGrid>
                <h2> Fresh Field Vegetables’ Storefront. </h2>
                <h2> OUTLOOK OF YOUR BUSINESS’ PROFILE </h2>
                <Grid.Row>
                    <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
                        <Image src={card1} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Brandy's Deli <Icon name='check circle' color='yellow' /></Card.Header>
                            <Grid>
                                <Grid.Row width={16} style={{ marginTop: '15px', marginBottom: '5px' }}>
                                    <Grid.Column width={10} >
                                        <h4>
                                            All your utilities in one place
                                        </h4>
                                    </Grid.Column>

                                    <Grid.Column width={6} style={{ textAlign: 'center' }}>
                                        <RatedStars rating={3} />
                                    </Grid.Column>

                                </Grid.Row>
                            </Grid>

                            <List bulleted horizontal >
                                <List.Item ></List.Item>
                                <List.Item >groceries</List.Item>
                                <List.Item >utilities</List.Item>
                            </List>
                        </Card.Content>

                    </Card>
                </Grid.Row>
                <Grid.Row>
                    <Form  fluid >
                        <Form.Field>
                            <FormLabels>Name of business</FormLabels>
                            <FormInput placeholder='Enter the name your business is registered under…'
                                type='text'
                                required
                                fluid
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Field>
                        <warningText>
                            * changing the business name would involve the verification process being done again for validity purposes.
                        </warningText>

                        <Form.Field>
                            <FormLabels>Nature of Store/Stall</FormLabels>
                            <FormInput
                                fluid={true}
                                placeholder='Nature of Store/Stall'
                                search
                                selection
                                // value={natureOfBusiness}
                                onChange={ e => setNatureOfBusiness(e.target.value)}
                                style={{ padding: '50px 20px !important', position: 'inherit !important', boxShadow: 'none' }}
                            />
                            {/* <Form.Select
                                    placeholder='Select whether your business is an independent / in a hypermarket.'
                                    // fluid
                                    search
                                    // selection
                                    options={countryOptions}
                                    required
                                    onChange={ e => setNatureOfBusiness(e.target.value) }

                                /> */}
                        </Form.Field>


                        <Form.Field>
                            <FormLabels> Business Niche </FormLabels>
                            <FormInput
                                placeholder='Business niche '
                                onChange={ e => setNiche(e.target.value)}
                                clearable
                                search
                                style={{ padding: '2rem !important' }}
                            />
                        </Form.Field>

                        <Form.Field>
                            <FormLabels>Primary contact information</FormLabels>
                            <FormInput placeholder='Enter your primary contact (phone number)'
                                required type="tel"
                                onChange={e => setTel(e.target.value)}
                            />
                        </Form.Field>

                        <Form.Field>
                        <FormLabels>Secondary contact information</FormLabels>
                            <FormInput placeholder='Enter your secondary contact (email)'
                                required type='email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Field>

                        <ButtonGrid width={16} >
                            <ContinueButtonSection type='submit' name={name} natureOfBusiness={natureOfBusiness}
                                niche={niche} tel={tel} email={email} />
                        </ButtonGrid>

                    </Form>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}