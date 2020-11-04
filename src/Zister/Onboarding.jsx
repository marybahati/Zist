import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Tab, Form, Dropdown } from "semantic-ui-react";
import styled from 'styled-components';
import ImageUploader from 'react-images-upload';
import history from './../History';

const MainDiv = styled.div`
   background: #F9F7F1;
`;
const MainGrid = styled(Grid)`
   width: 60%;
   margin : 0 auto !important;
   padding: 60px 0 !important;
`;
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
`;
const ProductImages = styled(Image)`
   width: 80% !important;
   margin: 0 auto 0 0 !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const ButtonCounters = styled(Button)`
   background: inherit !important;
   font-size : 40px !important;
   padding : 0 !important;
   color : black !important;
   margin: 0 8px !important;
`;
const StockColumn = styled(Grid.Column)`
   margin: auto 0 !important;
   background: #FFF !important;
   padding: 18px 30px !important;
   text-align: center !important;
`;
const CenteredTextColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const CenteredColumn = styled(Grid.Column)`
   margin: 0 auto !important;
`;
const ActionButton = styled(Button)`
    background: #FEE2D4 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 50px 0 !important;
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
    padding: 0 0 20px 0 !important;
`;
const FormLabels = styled.label`
    font-size: 25px !important;
`;
const SelectDropdown = styled(Dropdown)`
    margin: 20px 0 40px 0 !important;
    padding: 20px 20px !important;
`;
const MutedText = styled.h3`
    color: #BCB4A7;
    margin: 0 0 28px 0 !important;
`;
const ButtonGrid = styled(Grid)`
    width: 50%;
    margin: 0 auto !important;
`;
const countryOptions = [
    { text: 'English', value: 'English' },
    { text: 'Kiswahili', value: 'Kiswahili' },
]
const Onboarding = (props) => {

    const [picture, setPicture] = useState()
    const handleRedirect = () => {
        history.push('/zister-progress/')
    }

    return (
        <MainDiv>
            <MainGrid>
                <ProductRows>
                    <CenteredColumn>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Set Background Image & Profile picture'
                            label=''
                            singleImage={true}
                            withPreview={true}
                            style={{ height: '500px !important', background: 'grey', padding: '100px' }}
                        // onChange={ e => }
                        // imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        // maxFileSize={5242880}
                        />
                    </CenteredColumn>
                </ProductRows>
                <Grid.Row>
                    <Grid.Column>
                    <Form>
                        <FormTitle> Finish Setting up your profile </FormTitle>
                        <Form.Field>
                            <FormLabels> Display Name </FormLabels>
                            <FormInput placeholder='Input your name'
                                fluid
                                type='text'
                                required
                            // onChange={e => setName(e.target.value)}
                            />
                            <MutedText> This is the name that will be displayed when taking requests. </MutedText>
                        </Form.Field>
                        <Form.Field>
                            <FormLabels> Bio </FormLabels>
                            <FormInput placeholder='Write up a short message to help customers know you better.'
                                fluid
                                type='text'
                                required
                            // onChange={e => setName(e.target.value)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <FormLabels> Language proficiency </FormLabels>
                            <SelectDropdown
                                placeholder='Select languages you’re fluent in…'
                                openOnFocus={false}
                                fluid
                                selection
                                options={countryOptions}
                                // onChange={(e, { value }) => setNiche({ niche: value })}
                                clearable
                                search
                            />
                        </Form.Field>
                        <ButtonGrid width={16}>
                            <ActionButton onClick={handleRedirect}> CONTINUE </ActionButton>
                        </ButtonGrid>
                        
                        </Form>
                    </Grid.Column> 
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default Onboarding