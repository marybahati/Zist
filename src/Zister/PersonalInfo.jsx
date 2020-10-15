import React,{useState} from 'react';
import { Button, Icon, Grid, Image,Form, Dropdown } from 'semantic-ui-react';
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
    // padding: 12px 0 !important;
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
    margin: 0 0 40px 0 !important;
    padding: 20px 20px !important;
`;
const options = [
    { text: 'Ngong road', value: 'Ngong road' },
    { text: 'Westlands', value: 'Westlands' },
    { text: 'Thika road', value: 'Thika road' },
    { text: 'Kinoo', value: 'Kinoo' },
]
const PersonalInfo = () => {
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [licenseNumber, setLicenseNumber] = useState('')
    const [email, setEmail] = useState('')
    const [residence, setResidence] = useState('')
    const [tel, setTel] = useState('')

    const handleRedirect = () => {
        history.push('/zister-vehicle-info')
    }

    return (
        <div>
            <Grid style={{ position: 'relative' }}>
                <Image src={heroImg} />
                <Grid.Row style={{ position: 'absolute', left: '16%', bottom: 0 }}> 
                    <h1> Sign Up to be a Zister <br/>
                    Become a Zister , earn money whilst putting smiles on Z- Shoppers. 
                    </h1>
                </Grid.Row>
            </Grid>
          
            <MainDiv>
                <MainGrid >
                    <Grid.Row>
                        <Grid.Column width={14}>
                            <FormTitle>Enter your information , the better we know each other , the better we work together.</FormTitle>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <Icons width={2}>
                                <Icon name='help circle' size='huge' />
                            </Icons>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row width={16}>
                        <Grid.Column width={16}>
                        <h2 style={{padding:'30px 0'}}> Personal Information. </h2>
                            <VendorForm >
                                <Form.Field>
                                    <FormLabels>Name </FormLabels>
                                    <FormInput placeholder='Input your Full Name…'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setName(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                <FormLabels>National ID number </FormLabels>
                                    <FormInput placeholder='Input your National ID number…'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setId(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                <FormLabels>License Number </FormLabels>
                                    <FormInput placeholder='Input your License Number'
                                        fluid
                                        type='text'
                                        required
                                        onChange={e => setLicenseNumber(e.target.value)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                <FormLabels>Area of Residence</FormLabels>
                                <SelectDropdown
                                        placeholder='Select your area of residence'
                                        openOnFocus={false}
                                        fluid
                                        selection
                                        options={options}
                                        onChange={(e, { value } ) => setResidence({ natureOfBusiness : value})}
                                        clearable
                                        search
                                        style={{ padding: '2rem !important' }}
                                    />
                                </Form.Field>

                                <Form.Field>
                                    <FormLabels>Contact Information</FormLabels>
                                    <FormInput placeholder='Input your phone number…'
                                        required type="tel" fluid
                                        onChange={e => setTel(e.target.value)}
                                    />
                                    <FormInput placeholder='Input your secondary contact (email)'
                                        required type='email' fluid
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Field>

                                <ButtonGrid width={16} >
                                    <ContinueButton type='submit' handleClick={handleRedirect} />
                                </ButtonGrid>

                            </VendorForm>
                        </Grid.Column>
                    </Grid.Row>
                    <h2>
                    *Your contact is important in reaching you if need be and relaying Official communication.
                    </h2>

                </MainGrid>
            </MainDiv>
        </div>
    )
}

export default PersonalInfo