import React, { useState } from 'react';
import { Grid, Dropdown, Image, Input, Button } from "semantic-ui-react";
import styled from 'styled-components';
import axios from 'axios';
import bananas from './../../Assets/bananas.png'
import strawberries from './../../Assets/strawberries.png'
import blueBerries from './../../Assets/blue-berries.png'

const RequestButton = styled(Button)`
background:  #FEE2D4 0% 0% no-repeat padding-box !important;
border: 2px solid #FEE2D4 !important;
border-radius: 24px !important;
opacity: 1;
height: 66px !important;
width: 100%;
font-size: 20px !important;
color: #050504 !important;
margin: 50px 0 !important;
@media only screen and (max-width: 1024px) {
    font-size: 18px !important;
}
`;
const CenteredTextColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;

const Requests = () => {
    return (
        <Grid>
            <Grid.Row  style={{padding:'0 0 50px 0'}}>
                <Grid.Column >
                    <h2> Make material requests at the tap of a button. </h2>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <h2> PRODUCT IMAGES </h2>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h2> PRODUCT NAME </h2>
                </Grid.Column>
                <Grid.Column width={7}>
                    <h2> IN STOCK </h2>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={blueBerries} />
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
                <CenteredTextColumn width={4}>
                    <h3> BLUEBERRIES </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <h3> 12 </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={5}>
                    <RequestButton> MAKE REQUEST </RequestButton>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={bananas} />
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
                <CenteredTextColumn width={4}>
                    <h3> BANANAS </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <h3> 43 </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={5}>
                    <RequestButton> MAKE REQUEST </RequestButton>
                </CenteredTextColumn>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={3}>
                    <Image src={strawberries} />
                </Grid.Column>
                <Grid.Column width={1}>
                </Grid.Column>
                <CenteredTextColumn width={4}>
                    <h3> STRAWBERRIES </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={3}>
                    <h3> 70 </h3>
                </CenteredTextColumn>
                <CenteredTextColumn width={5}>
                    <RequestButton> MAKE REQUEST </RequestButton>
                </CenteredTextColumn>
            </Grid.Row>
        </Grid>
    )
}
export default Requests