import React, { useState } from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Select } from "semantic-ui-react";
import styled from 'styled-components';
import history from './../../History';
import vendor from './../../Assets/vendor-img.png';
import ContinueButtonSection from './ContinueButtonSection';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Intro = styled(Grid)`
   background: #FEE2D4;
   padding : 40px 0 0 0 !important;
   margin: 0 auto !important;
`;
const IntroRows = styled(Grid.Row)`
   padding : 0;
   width:70%;
   margin: 0 auto;
   text-align: center;
`;
const Icons = styled(Grid.Column)`
  padding: 0 ;
  text-align: center;
`;
const MainGrid = styled(Grid)`
    width: 60% !important;
    margin: 0 auto !important;
`;
const MainDiv = styled.div`
    background: #FEE2D4 0% 0% no-repeat padding-box;
    // border: 1px solid #707070;
    opacity: 1;
    padding: 80px 0 80px 0 !important;
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
`;
const ButtonGrid = styled(Grid)`
    width: 50%;
    margin: 0 auto !important;
`;
const VendorForm = styled(Form)`
    width: 100% !important;
`;
const SelectDropdown = styled(Dropdown)`
    margin: 20px 0 40px 0 !important;
    padding: 20px 20px !important;
`;


const options = [
    { text: 'Groceries', value: 'Groceries' },
    { text: 'Cosmetics', value: 'Cosmetics' },
    { text: 'Bakery', value: 'Bakery' },
    { text: 'Meat', value: 'Meat' },
    { text: 'Drinks', value: 'Drinks' },
]

const VendorRegistration = (props) => {
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
            <Intro width={16}>
                <Grid.Row >
                    <Icons width={1}>
                        <Button style={{ background: 'inherit' }} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link /> </Button>
                    </Icons>
                </Grid.Row>
                <IntroRows>
                    <h1> BECOME A VENDOR ON ZIST SHOPPING </h1>
                </IntroRows>
                <IntroRows>
                    <h1> Get with the times and create an online presence. <br />
                     Register and start selling on Zist Shopping bila stress.</h1>
                </IntroRows>
                <IntroRows>
                    <Image src={vendor} />
                </IntroRows>
                <ToastContainer />
            </Intro>
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
                                    <FormLabels>Niche of business</FormLabels>
                                    <SelectDropdown
                                        placeholder='Niche of business'
                                        openOnFocus={false}
                                        fluid
                                        selection
                                        options={options}
                                        onChange={(e, { value }) => setNiche({ niche: value })}
                                        clearable
                                        search
                                        style={{ padding: '2rem !important' }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <FormLabels>Business Categories</FormLabels>
                                    <FormInput placeholder='Input which type of products your business specifically deals in.'
                                        fluid
                                        type='text'
                                        required
                                    // onChange={e => setLocation(e.target.value)}
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
                                        niche={businessBio} tel={tel} email={email} location={location} />
                                </ButtonGrid>

                            </VendorForm>
                        </Grid.Column>
                    </Grid.Row>


                </MainGrid>
            </MainDiv>
        </div>
    )
}

export default VendorRegistration