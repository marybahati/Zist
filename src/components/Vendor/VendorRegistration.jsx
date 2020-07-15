import React,{useState} from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import history from './../../History';
import axios from 'axios';
import vendor from './../../Assets/vendor.png';
import video from './../../Assets/intro-video.mp4';
import { ContinueButton } from './ContinueButton';
import { ContinueButtonSection } from './ContinueButtonSection';
import { withRouter } from 'react-router-dom';
const Intro = styled(Grid)`
   background: #FEE2D4;
   padding : 40px 0 0 0 !important;
`;
const IntroRows = styled(Grid.Row)`
   padding : 0;
   width:70%;
   margin: 0 auto;
   text-align: center;
`;
const VendorImage = styled(Image)`
  max-height: 370px;
  width: 370px;
  margin: 0 auto;
  display: block;
`;
const Icons = styled(Grid.Column)`
  padding: 0 ;
  text-align: center;
`;
const MainGrid = styled(Grid)`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    border: 1px solid #707070;
    opacity: 1;
    padding: 80px 0 80px 80px !important;
`;
const FormInput = styled.input`
    padding: 30px 20px !important;
    font-size: 18px !important;
    width: 100%;
    margin: 20px 0 !important;
    @media only screen and (min-width: 1400px) {
        padding: 50px 20px !important;
        font-size: 29px !important;
    }
`;
const FormSelectDropdown = styled(Dropdown)`
    padding: 300px 20px !important;
    font-size: 18px !important;
    width: 100% !important;
    margin: 20px 0 !important;
    @media only screen and (min-width: 1400px) {
        padding: 50px 20px !important;
        font-size: 29px !important;
    }
`;
const FormTitle = styled.h1`
    text-align: center;
    margin-bottom: 50px;
`;
const FormLabels = styled.label`
    font-size: 25px !important;
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
const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
  ]
const VendorRegistration = (props) => {
    const [openModal, setModalOpen] = useState(false)
    console.log(openModal)

    const handleGoingBack = () => {
        history.goBack()
    }
    return (
        <div>
            <Intro width={16}>
                <Grid.Row >
                    <Icons width={1}>
                     <Button style={{background: 'inherit'}} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link  /> </Button>
                    </Icons>
                </Grid.Row>

                 {/* <IntroRows width={16}>
                    <IntroRows width={12}>
                        <h1>GET WITH THE TIMES , ESTABLISH AN ONLINE PRESENCE…</h1>
                    </IntroRows>
                </IntroRows>  */}

                {/* <IntroRows width={16}> */}
                    <VideoGrid>
                        <Video autoPlay='autoplay' loop='loop' muted >
                            <source src={video} type='video/mp4' />
                        </Video>
                    </VideoGrid>
                {/* </IntroRows> */}

                {/* <IntroRows width={16} >
                    <IntroRows width={12}>
                        <h1>Register and start selling on Zist Shopping without any stress.</h1>
                    </IntroRows>
                </IntroRows> */}

            </Intro>
            <MainGrid>
                <Grid.Row width={16} >
                    <Grid.Column width={14}>
                        <FormTitle>Enter your business information.</FormTitle>
                            <Form >
                                <Form.Field>
                                <FormLabels>Name of business</FormLabels>
                                <FormInput placeholder='Enter the name your business is registered under…' 
                                type='text' required/>
                                </Form.Field>
                                

                                <Form.Field>
                                <FormLabels>Nature of Store/Stall</FormLabels>
                                <FormSelectDropdown
                                    placeholder='Select whether your business is an independent / in a hypermarket.'
                                    fluid
                                    search
                                    selection
                                    options={countryOptions}
                                    required
                                />
                                </Form.Field>

                                <Form.Field>
                                <FormLabels>Niche of business</FormLabels>
                                <FormSelectDropdown
                                    placeholder='Where appropriate , select which products your store deals in.'
                                    fluid
                                    search
                                    selection
                                    options={countryOptions}
                                    required
                                />
                                </Form.Field>
                                
                                <Form.Field>
                                <FormLabels>Contact Details</FormLabels>
                                <FormInput placeholder='Enter your primary contact (phone number)' required type="tel"  />
                                <FormInput placeholder='Enter your secondary contact (email)' required  type='email' />
                                </Form.Field>

                                <ButtonGrid width={16} >
                                    <ContinueButtonSection />
                                </ButtonGrid>

                            </Form>
                                <h1>
                                    *Your contact is important in reaching you and getting you 
                                    verified as a Zist Vendor. Contact should be made within 24 hrs post application.
                                </h1>
                        
                    </Grid.Column>
                        <Icons width={2}>
                            <Icon name='help circle' size='huge' />
                        </Icons>
                </Grid.Row>
                
            </MainGrid>
        </div>
    )
}

export default VendorRegistration