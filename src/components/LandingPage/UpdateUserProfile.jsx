import React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { Button, Icon, Grid, Image, Input,Form } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImage from './../../Assets/update-profile.png'
import { useState } from 'react';
const MainDiv = styled.div`
   background: #FFECD2D3 0% 0% no-repeat padding-box;
   opacity: 1;
   padding : 0 0 100px 0 !important;
`;
const MainGrid = styled(Grid)`
   width : 70%;
   margin: 0 auto !important;
`;
const FormTitle = styled.h1`
    padding: 0;
`;
const Icons = styled(Grid.Column)`
  padding: 0 ;
  text-align: center;
`;
const FormInput = styled.input`
    padding: 20px !important;
    font-size: 18px !important;
    width: 100%;
    margin: 20px 0 !important;
    @media only screen and (min-width: 1400px) {
        padding: 20px 20px !important;
        font-size: 20px !important;
    }
`;
const FormLabels = styled.label`
    font-size: 25px !important;
`;
const ButtonGrid = styled(Grid)`
    width: 50%;
    margin: 0 auto !important;
`;
const VendorForm = styled(Form)`
    width: 100% !important;
`;
const SaveButton = styled(Button)`
    background: #F9F7F1 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 50px 0 !important;
`;
const UpdateUserProfile = (props) => {
    const [name,setName] =  useState('')
    const [DOB,setDOB] = useState()
    const [tel,setTel] = useState()
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={heroImage} />
                    </Grid.Column>
                </Grid.Row>
            </MainGrid>
            <MainGrid>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <FormTitle>Fill in your basic information</FormTitle>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Icons width={2}>
                            <Icon name='help circle' size='huge' />
                        </Icons>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row width={16}>
                        <Grid.Column width={16}>
                            <VendorForm >
                                <Form.Field>
                                    <FormLabels>Name</FormLabels>
                                    <FormInput placeholder='Enter your first name for a personalised touch'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Phone number</FormLabels>
                                    <FormInput placeholder='Enter your phone number for contact purposes'
                                        fluid
                                        type='tel'
                                        required
                                        onChange={e => setTel(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Date of Birth</FormLabels>
                                    <FormInput placeholder='Enter your D.O.B'
                                        fluid
                                        type='date'
                                        required
                                        onChange={e => setDOB(e.target.value)}
                                    />
                                </Form.Field>
                                
                                <ButtonGrid width={16} >
                                    <SaveButton type='submit'> SAVE </SaveButton>
                                </ButtonGrid>

                            </VendorForm>
                        </Grid.Column>
                    </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}

export default withCookies(UpdateUserProfile)