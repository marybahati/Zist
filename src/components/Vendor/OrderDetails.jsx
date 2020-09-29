import React, { useState } from 'react';
import { Grid, Image, Button, Icon, List, Form, TextArea } from "semantic-ui-react";
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import Collapsible from 'react-collapsible';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
const UserName = styled.h2`
    text-decoration: underline !important;
`;
const Columns = styled(Grid.Column)`
     padding: ${props => props.spaced ? '30px 0 0 0 !important' : '10px 0 0 0 !important'};
     margin: auto 0 0 0 !important;
`;
const EditLink = styled(List.Item)`
     color: #FFBD59 !important;
     font-size: 23px !important;
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
`;
const ProductImages = styled(Image)`
   width: 80% !important;
   margin: 0 auto 0 0 !important;
`;
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 20px 0 40px 0 !important "};
   padding: 0 !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const OrderNowColumn = styled(Grid.Column)`
   width: 50% !important;
   margin: 0 auto !important;
`;
const OrderNowButton = styled(Button)`
   width: 100% !important;
   background: #FFBD59 0% 0% no-repeat padding-box !important;
   border: 2px solid #FEE2D4 !important;
   border-radius: 24px !important;
   opacity: 1;
   color: black !important;
   height: 90px !important;
   font-size: 22px !important;
`;

const OrderDetails = () => {
    
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <Collapsible width={16} fluid trigger={<DropdownButtons > Address Details <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                        <Grid width={16}  >
                            <Grid.Row >
                                <Grid.Column width={4} >
                                    <h3> Name: </h3>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <h3>  Brian </h3>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row >
                                <Grid.Column width={4} >
                                    <h3>  Address: </h3>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <h3>  Ngong road  </h3>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Collapsible>
                </Grid.Row>
                <Grid.Row>
                    <Columns>
                        <UserName> ORDER DETAILS </UserName>
                    </Columns>
                </Grid.Row>
                <Grid.Row>
                    <Columns spaced width={6} >
                        <UserName> Bryan’s Shopping List </UserName>
                    </Columns>
                    <Columns width={6} >
                        <List>
                            <EditLink as='a' href='/edit-shopping-list'> Edit </EditLink>
                        </List>
                    </Columns>
                </Grid.Row>
                <ProductRows>
                    <Grid.Column width={5}>
                        <ProductImages src={blueberries} />
                    </Grid.Column>
                    <ProductName center width={5} >
                        <h3> Blueberries </h3>
                    </ProductName>
                    <ItemsColumn width={3}>
                        <h3> Kshs. 3000 </h3>
                    </ItemsColumn>
                </ProductRows>
                <ProductRows>
                    <Grid.Column width={5}>
                        <ProductImages src={bananas} />
                    </Grid.Column>
                    <ProductName center width={5} >
                        <h3> Banana </h3>
                    </ProductName>
                    <ItemsColumn width={3}>
                        <h3> Kshs. 4000 </h3>
                    </ItemsColumn>
                </ProductRows>
                <ProductRows>
                    <Grid.Column width={5}>
                        <ProductImages src={strawberries} />
                    </Grid.Column>
                    <ProductName center width={5} >
                        <h3> Strawberries </h3>
                    </ProductName>
                    <ItemsColumn width={3}>
                        <h3> Kshs. 7000 </h3>
                    </ItemsColumn>
                </ProductRows>
                <ProductRows>
                    <Grid.Column width={5}>
                        {/* <Icon name='fire' color='black' size='huge'/> */}
                    </Grid.Column>
                    <ProductName center width={5} >
                        <h3> Delivery fee </h3>
                    </ProductName>
                    <ItemsColumn width={3}>
                        <h3> Kshs. 200 </h3>
                    </ItemsColumn>
                </ProductRows>
                <ProductRows>
                    <Grid.Column width={5}>
                        {/* <Icon name='fire' color='black' size='huge'/> */}
                    </Grid.Column>
                    <ProductName center width={5} >
                        <h3> Total </h3>
                    </ProductName>
                    <ItemsColumn width={3}>
                        <h3> Kshs. 2460 </h3>
                    </ItemsColumn>
                </ProductRows>
                <ProductRows>
                    <Grid.Column>
                        <h2> Delivery Notes </h2>
                        <Form>
                            <TextArea placeholder='Please include specifics if you have any' />
                        </Form>
                    </Grid.Column>
                </ProductRows>
                <ProductRows>
                <Grid.Column>
                <Collapsible width={16} fluid trigger={<DropdownButtons > Covid-19 Announcement <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                        <Grid width={16}  >
                            <Grid.Row >
                                <Grid.Column width={16} >
                                    <h3> A dog is a type of domesticated animal. Known for its loyalty and faithfulness, 
                                        it can be found as a welcome guest in many households across the world.Name: 
                                        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
                                         guest in many households across the world.
                                        </h3>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Collapsible>
                </Grid.Column>
                </ProductRows>
                <Grid.Row>
                    <OrderNowColumn>
                        <OrderNowButton > Order Now </OrderNowButton>
                    </OrderNowColumn>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default OrderDetails