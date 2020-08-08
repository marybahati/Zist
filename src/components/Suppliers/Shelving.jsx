import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Image,  Button,List } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import styled from 'styled-components';
import history from './../../History';
import trialImage from './../../Assets/v1.png';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const ImageColumn = styled(Grid.Column)`
   padding : 0 40px 0 0 !important;
   text-align: center;
`;
const ProductRows = styled(Grid.Row)`
   margin : 0 0 40px 0 !important;
`;
const IntroColumn = styled(Grid.Column)`
   margin : 30px 0  !important;
   text-align: center;
`;
const ImageButtons = styled(Button)`
    background: inherit !important;
    color: black !important;
    font-size: 23px !important;
`;
const IntroText = styled.h2`
   text-align: center !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const ProductNameColumn = styled(Grid.Column)`
   text-align: center !important;
   margin: ${props => props.center ? "auto 0 !important" : " 0 "};
`;
const EditProductLink = styled(List.Item)`
   color: black !important;
   font-size: 22px !important;
   text-decoration: underline;
`;

export const Shelving = () => {
    const analyticsRedirect = () => {
        history.push('/vendor-analytics')
    }
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <ImageColumn width={5}>
                        <ImageButtons >
                            <Image src={trialImage} />
                            <h2> SHELVING </h2>
                        </ImageButtons>
                    </ImageColumn>
                    <ImageColumn width={5}>
                        <ImageButtons onClick={analyticsRedirect}>
                            <Image src={trialImage} />
                            <h2> SUPPLIERS </h2>
                        </ImageButtons>
                    </ImageColumn>
                    <ImageColumn width={5}>
                        <ImageButtons onClick={analyticsRedirect}>
                            <Image src={trialImage} />
                            <h2> REQUESTS </h2>
                        </ImageButtons>
                    </ImageColumn>
                </Grid.Row>
                <ProductRows>
                    <IntroColumn>
                        <IntroText> Put items on your digital shelf for the new age digital customer. </IntroText>
                        <List>
                            <EditProductLink as='a' href='#' > EDIT PRODUCTS </EditProductLink>
                        </List>
                    </IntroColumn>
                </ProductRows>
                <Grid.Row>
                   <Grid.Column width={3}>
                       <h3> PRODUCT IMAGES </h3>
                   </Grid.Column>
                   <ProductNameColumn width={5}>
                       <h3> PRODUCT NAME </h3>
                   </ProductNameColumn>
                   <Grid.Column width={4}>
                       <h3> PRICE/UNIT </h3>
                   </Grid.Column>
                   <Grid.Column width={4}>
                       <h3> PRICE/UNIT </h3>
                   </Grid.Column>
                </Grid.Row>

                <ProductRows>
                <Grid.Column width={3}>
                    <Image src={trialImage} />
                   </Grid.Column>
                   <ProductNameColumn center width={5} >
                       <h3> BLUEBERRIES </h3>
                   </ProductNameColumn>
                   <ItemsColumn width={4}>
                       <h3> Kshs. 300/pack </h3>
                   </ItemsColumn>
                   <ItemsColumn width={4}>
                       <h3> 12 </h3>
                   </ItemsColumn>
                </ProductRows>

                <ProductRows>
                <Grid.Column width={3}>
                    <Image src={trialImage} />
                   </Grid.Column>
                   <ProductNameColumn center width={5} >
                       <h3> BANANAS </h3>
                   </ProductNameColumn>
                   <ItemsColumn width={4}>
                       <h3> Kshs. 40/bunch </h3>
                   </ItemsColumn>
                   <ItemsColumn width={4}>
                       <h3> 24 </h3>
                   </ItemsColumn>
                </ProductRows>

                <ProductRows>
                <Grid.Column width={3}>
                    <Image src={trialImage} />
                   </Grid.Column>
                   <ProductNameColumn center width={5} >
                       <h3> STRAWBERRIES </h3>
                   </ProductNameColumn>
                   <ItemsColumn width={4}>
                       <h3>Kshs. 340/pack </h3>
                   </ItemsColumn>
                   <ItemsColumn width={4}>
                       <h3> 10 </h3>
                   </ItemsColumn>
                </ProductRows>

            </MainGrid>
        </MainDiv>
    )
}