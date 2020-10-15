import React, { useState } from 'react';
import { Button, Icon, Grid, Image, Form, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImg from './../../src/Assets/zister-personal-info.png';
import {ContinueButton} from './../components/Vendor/ContinueButton';
import history from './../History';


const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 70%;
    margin: 0 auto 100px auto !important;
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
const FormTitle = styled.h1`
    padding: 0;
`;
const FormLabels = styled.label`
    font-size: 25px !important;
    padding: 20px 0 !important;
`;
const ButtonGrid = styled(Grid)`
    width: 50%;
    margin: 0 auto !important;
`;
const VideoGrid = styled(Grid)`
    margin: 0 auto !important;
`;
const Video = styled.video`
    max-height: 700px;
    text-align: center;
`;
const VendorForm = styled(Form)`
    width: 100% !important;
`;
const SelectDropdown = styled(Dropdown)`
    margin: 0  !important;
    padding: 20px 20px !important;
`;
const options = [
    { text: 'Dumy data1', value: 'Dumy data1' },
    { text: 'Dumy data2', value: 'Dumy data2' },
    { text: 'Dumy data3', value: 'Dumy data3' },
    { text: 'Dumy data4', value: 'Dumy data4' },
]
const VehicleInfo = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [licenseNumber, setLicenseNumber] = useState('')
    const [email, setEmail] = useState('')
    const [residence, setResidence] = useState('')
    const [tel, setTel] = useState('')

    const handleRedirect = () => {
        history.push('/')
    }

    return (
        <div>
            <Grid style={{ position: 'relative' }}>
                <Image src={heroImg} />
                <Grid.Row style={{ position: 'absolute', left: '16%', bottom: 0 }}>
                    <h1> Sign Up to be a Zister <br />
                    Become a Zister , earn money whilst putting smiles on Z- Shoppers.
                    </h1>
                </Grid.Row>
            </Grid>

            <MainDiv>
                <MainGrid >
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <FormTitle> Enter your vehicular information </FormTitle>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Icons width={2}>
                                <Icon name='help circle' size='huge' />
                            </Icons>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row width={16}>
                        <Grid.Column width={16}>
                            <h2 style={{ padding: '30px 0' }}> Vehicle Information </h2>
                            <VendorForm >
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Form.Field>
                                                <FormLabels> Select type of vehicle </FormLabels>
                                                <SelectDropdown
                                                    placeholder='Select type of vehicle'
                                                    openOnFocus={false}
                                                    fluid
                                                    selection
                                                    options={options}
                                                    onChange={(e, { value }) => setResidence({ natureOfBusiness: value })}
                                                    clearable
                                                    search
                                                    style={{ padding: '2rem !important' }}
                                                />
                                            </Form.Field>

                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <Form.Field>
                                                <FormLabels> Vehicle Colour </FormLabels>
                                                <SelectDropdown
                                                    placeholder='Select colour'
                                                    openOnFocus={false}
                                                    fluid
                                                    selection
                                                    options={options}
                                                    onChange={(e, { value }) => setResidence({ natureOfBusiness: value })}
                                                    clearable
                                                    search
                                                    style={{ padding: '2rem !important' }}
                                                />
                                            </Form.Field>

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column width={8}>
                                            <Form.Field>
                                                <FormLabels> Vehicle Model </FormLabels>
                                                <SelectDropdown
                                                    placeholder='Select the vehicle model'
                                                    openOnFocus={false}
                                                    fluid
                                                    selection
                                                    options={options}
                                                    onChange={(e, { value }) => setResidence({ natureOfBusiness: value })}
                                                    clearable
                                                    search
                                                    style={{ padding: '2rem !important' }}
                                                />
                                            </Form.Field>

                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <Form.Field>
                                                <FormLabels> Year </FormLabels>
                                                <SelectDropdown
                                                    placeholder='Select Year'
                                                    openOnFocus={false}
                                                    fluid
                                                    selection
                                                    options={options}
                                                    onChange={(e, { value }) => setResidence({ natureOfBusiness: value })}
                                                    clearable
                                                    search
                                                    style={{ padding: '2rem !important' }}
                                                />
                                            </Form.Field>

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Form.Field>
                                                <FormLabels> Vehicle Number Plate </FormLabels>
                                                <FormInput placeholder='Input the vehicle number plate'
                                                    fluid
                                                    type='text'
                                                    required
                                                // onChange={e => setName(e.target.value)}
                                                />
                                            </Form.Field>

                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <h2> Your license is essential in identification of your vehicle </h2>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                        <Form.Checkbox style={{fontSize:'20px'}} required label='I agree to the Terms and Conditions' />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                                <ButtonGrid width={16} >
                                    <ContinueButton type='submit' />
                                </ButtonGrid>

                            </VendorForm>
                        </Grid.Column>
                    </Grid.Row>
                </MainGrid>
            </MainDiv>
        </div>
    )
}

export default VehicleInfo