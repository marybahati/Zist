import React,{useState} from 'react';
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import vendor from './../../Assets/vendor.png';
import video from './../../Assets/intro-video.mp4';
import { ContinueButton } from './ContinueButton';
import { ContinueButtonSection } from './ContinueButtonSection';
// import { ContinueButtonSction } from './../Vendor/ContinueButtonSection';
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
const FormDropdowns = styled(Dropdown)`
    padding: 30px 20px !important;
    font-size: 18px !important;
    width: 100%;
    margin: 20px 0 !important;
    @media only screen and (min-width: 1400px) {
        padding: 50px 20px !important;
        font-size: 29px !important;
    }
`;
const FormTitle = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`;
const FormLabels = styled.label`
    font-size: 25px !important;
`;
// const ContinueButton = styled(Button)`
//     background: #FEE2D4 0% 0% no-repeat padding-box !important;
//     border: 2px solid #FEE2D4 !important;
//     border-radius: 24px !important;
//     opacity: 1;
//     height: 66px !important;
//     width: 100%;
//     font-size: 26px !important;
//     color: #050504 !important;
//     margin: 50px 0 !important;
// `;
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
export const VendorRegistration = (props) => {
    const [openModal, setModalOpen] = useState(false)
    console.log(openModal)
    return (
        <div>
            <Intro width={16}>
                <Grid.Row >
                    <Icons width={1}>
                     <Icon name='arrow left' size='large'/>
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
                                <FormInput placeholder='Enter the name your business is registered under…' />
                                </Form.Field>
                                

                                <Form.Field>
                                <FormLabels>Nature of Store/Stall</FormLabels>
                                <FormDropdowns
                                    placeholder='Select whether your business is an independent / in a hypermarket.'
                                    fluid
                                    search
                                    selection
                                    options={countryOptions}
                                />
                                </Form.Field>

                                <Form.Field>
                                <FormLabels>Niche of business</FormLabels>
                                <FormDropdowns
                                    placeholder='Where appropriate , select which products your store deals in.'
                                    fluid
                                    search
                                    selection
                                    options={countryOptions}
                                />
                                </Form.Field>
                                
                                <Form.Field>
                                <FormLabels>Contact Details</FormLabels>
                                <FormInput placeholder='Enter your primary contact (phone number)' />
                                <FormInput placeholder='Enter your secondary contact (email)' />
                                </Form.Field>

                                <ButtonGrid width={16} >
                                    {/* <ContinueButton> CONTINUE </ContinueButton> */}
                                    {/* <ContinueButton handleClick={() => setModalOpen({ openModal: true }) } />
                                    <Modal/> */}
                                    {/* <ContinueButtonSction /> */}
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