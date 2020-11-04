import React, { useState } from 'react';
import { Button, Icon, Grid, Image, Form, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImg from './../../src/Assets/stepper.svg';
import { ContinueButton } from './../components/Vendor/ContinueButton';
import history from './../History';
import Stepper from 'react-stepper-enhanced';
import { Link } from 'react-router-dom';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 80px 0 !important;
`;
const MainGrid = styled(Grid)`
    width:80% !important;
    margin: 0 auto 100px auto !important;
`;
const CenteredColumn = styled(Grid.Column)`
    text-align: center !important;
`;
const CenteredImage = styled(Image)`
    width: 50% !important;
    margin: 0 auto !important;
    display: block !important;
    height: 500px;
`;
const Linking = styled(Link)`
    font-size: 22px !important;
    margin: 20px auto !important;
    color: #FFBD59 !important;
`;


const Progress = () => {

    const handleRedirect = () => {
        history.push('/zister-onboarding/')
    }

    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <CenteredColumn>
                        <CenteredImage src={heroImg} />
                        <div>
                            <Stepper 
                            steps={[{ title: 'Step One' }, { title: 'Step Two' }, { title: 'Step Three' }, { title: 'Step Four' }, { title: 'Step Five',href:'/rider/' }, { title: 'Step Six' }]} activeStep={2}
                            activeColor=' #FFBD59'
                            completeColor=' #FFBD59'
                            defaultColor='#FEE2D4'
                            size={50}
                             />
                            <h2> Almost there setting up your profile… </h2>
                            <Linking to='/rider'> Next </Linking>
                        </div>
                    </CenteredColumn>
                </Grid.Row>

        
            </MainGrid>
        </MainDiv>

    )
}

export default Progress