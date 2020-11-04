import React, { useState } from 'react';
import { Button, Icon, Grid, Image, Form, Dropdown } from 'semantic-ui-react';
import styled from 'styled-components';
import rider from './../../src/Assets/rider-anne.png';
import badges from './../../src/Assets/z-badges.png';
import deliveries from './../../src/Assets/z-deliveries.png';
import history from './../../src/Assets/z-history.png';
import logout from './../../src/Assets/z-logout.png';
import profile from './../../src/Assets/z-profile.png';
import { ContinueButton } from './../components/Vendor/ContinueButton';
import { RatedStars } from '../components/ShoppingPage/Ratings';

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
    margin: auto 0 !important;
`;
const SpacedRows = styled(Grid.Row)`
    margin: 50px 0 0 0 !important;
`;
const CenteredImage = styled(Image)`
    width: 50% !important;
    margin: 0 auto !important;
    display: block !important;
    height: 500px;
`;
const ImageColumn = styled(Grid.Column)`
   padding : 0 50px 0 0 !important;
   text-align: center;
`;

const RiderDashboard = () => {

    const handleRedirect = () => {
        history.push('/zister-onboarding/')
    }

    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Image src={rider} />
                    </Grid.Column>
                    <CenteredColumn width={6}>
                        <h2> ANN’S DASHBOARD </h2>
                        <RatedStars rating={5} />
                        <h2> 54 Deliveries completed. </h2>
                    </CenteredColumn>
                    <CenteredColumn width={6}>
                        <h2> Status : Novice </h2>
                    </CenteredColumn>
                </Grid.Row>
                <SpacedRows>
                    <ImageColumn width={5}>
                        <Image src={deliveries} />
                        <h2> Make Deliveries </h2>
                    </ImageColumn>
                    <ImageColumn width={5}>
                    <Image src={history} />
                        <h2> History </h2>
                    </ImageColumn>
                    <ImageColumn width={5}>
                    <Image src={badges} />
                    <h2> Badges </h2>
                    </ImageColumn>
                </SpacedRows>
                <SpacedRows>
                    <ImageColumn width={5}>
                        <Image src={profile} />
                        <h2> Profile </h2>
                    </ImageColumn>
                    <ImageColumn width={5}>
                        <Image src={profile} />
                        <h2> Sign Out </h2>
                    </ImageColumn>
                </SpacedRows>
            </MainGrid>
        </MainDiv>

    )
}

export default RiderDashboard