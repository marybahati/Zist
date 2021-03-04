import React, { useState } from 'react';
import { Button, Icon, Grid, Image, Form, List } from 'semantic-ui-react';
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
`;
const Headings = styled.h2`
text-align: center;
color: #FFBD59;
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
                    <CenteredColumn width={9}>
                        <h2> ANN’S DASHBOARD </h2>
                        <h2> “Congrats on becoming a Zister , we appreciate your service!!.” </h2>
                        <h2> 54 Deliveries completed. </h2>
                    </CenteredColumn>
                    <Grid.Column width={3} style={{ paddingTop: 25 }}>
                        <h2> Current Rating</h2>
                        <RatedStars rating={5} />
                    </Grid.Column>
                </Grid.Row>
                <SpacedRows>
                    <ImageColumn width={7}>
                        <Image src={deliveries} />
                        <Headings > Make Deliveries </Headings>
                        <h3>
                            Make deliveries and improve the quality of life of Zist Shoppers.
                            Thank you for partnering with Zist Shopping; the mission would be unattainable without you,
                            let’s continue enhancing the best level of service.

                        </h3>
                    </ImageColumn>
                    <ImageColumn width={2} />
                    <ImageColumn width={7}>
                        <Image src={history} />
                        <Headings> History </Headings>
                        <h3>
                            All your past orders in one place. Get to see how you’ve been rated , thank customers who tip you
                            and also dispute Instances where an unfair rating/feedback has been provided.
                        </h3>
                    </ImageColumn>

                </SpacedRows>
                <SpacedRows>
                    <ImageColumn width={7}>
                        <Image src={badges} />
                        <Headings> Badges </Headings>
                        <h3>
                            Stand out from the pack with badges, with every badge You’re awarded you gain more and more reliability
                            hence more frequent orders.
                    </h3>
                    </ImageColumn>
                </SpacedRows>
                <Grid.Row>
                    <Grid.Column>
                        <List style={{textAlign:'center',fontSize:25}}>
                            <List.Item as='a' style={{color:'#FFBD59'}} >Settings</List.Item>
                            <List.Item as='a' style={{color:'#FFBD59'}} >Log Out</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </MainGrid>
        </MainDiv>

    )
}

export default RiderDashboard