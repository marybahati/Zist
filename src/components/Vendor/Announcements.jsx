import React from 'react';
import { Grid, Button, Image,  } from 'semantic-ui-react';
import styled from 'styled-components';
import heroImage from './../../Assets/announcement.png';
import product from './../../Assets/tomatoes.png';

const MainDiv = styled.div`
   background: #F9F7F1 0% 0% no-repeat padding-box;
   opacity: 1;
   padding : 0 0 100px 0 !important;
`;
const MainGrid = styled(Grid)`
   width : 70%;
   margin: 0 auto !important;
`;
const SpacedRows = styled(Grid.Row)`
   margin: 0 0 40px 0 !important;
`;
const ShareButton = styled(Button)`
   margin: 0 auto !important;
   background: #FEE2D4 0% 0% no-repeat padding-box !important;
   border: 2px solid #FEE2D4;
   border-radius: 24px !important;
   opacity: 1 !important;
   width: 60% !important;
   padding: 30px 20px !important;
   color: black !important;
   font-size: 24px !important;
`;
export const Announcements = () => {
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Image src={heroImage} />
                </Grid.Row>
                <SpacedRows>
                    <h1> GET TO SHARE TIDBITS OF INFORMATION TO YOUR LOYAL CUSTOMERS. </h1>
                </SpacedRows>
                <Grid.Row>
                    <Image src={product} />
                </Grid.Row>
                <SpacedRows>
                    <h2> BUY 20 TOMATOES AT ONLY 100 BOB!!! LIMITED OFFER. </h2>
                </SpacedRows>
                <Grid.Row>
                    <ShareButton> SHARE TO YOUR SOCIAL PROFILES </ShareButton>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}