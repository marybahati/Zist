import React, { useState } from 'react';
import { Grid, Image, Button, Icon, List, Form, TextArea } from "semantic-ui-react";
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import Collapsible from 'react-collapsible';
import { Checkbox } from 'semantic-ui-react'
import store from './../../Assets/store.png';

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
// const UserName = styled.h2`
//     text-decoration: underline !important;
// `;
const Columns = styled(Grid.Column)`
     padding: ${props => props.spaced ? '30px 0 0 0 !important' : '10px 0 0 0 !important'};
     margin: auto 0 0 0 !important;
`;
const Rows = styled(Grid.Row)`
     padding:  0 !important;
     margin: 0 !important;
`;
const EditLink = styled(List.Item)`
     color: #FFBD59 !important;
     font-size: 23px !important;
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
   text-align: ${props => props.center ? 'center !important' : 'left !important'};
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
   width: 35% !important;
   margin: 0 auto !important;
`;
const OrderNowButton = styled(Button)`
   width: 100% !important;
   background: #FFBD59 0% 0% no-repeat padding-box !important;
   border: 2px solid #FEE2D4 !important;
   border-radius: 24px !important;
   opacity: 1;
   color: black !important;
   height: 70px !important;
   font-size: 22px !important;
`;
const IntroColumn = styled(Grid.Column)`
    width: 60% !important;
    margin: 0 auto !important;
    text-align: center  !important;
`;
const UserName = styled.h2`
    text-decoration: underline !important;
    padding: 0 0 15px 0 !important;
`;
const BusinessImage = styled(Image)`
    margin: 0 auto !important;
`;
const ButtonCounters = styled(Button)`
   background: inherit !important;
   font-size : ${props => props.linkbutton ? "20px !important" : " 40px !important "};
   padding : 0 !important;
   color :  ${props => props.orange ? "orange !important" : " black !important"};
//    margin: 0 8px !important;
   text-align: center !important;
`;

const OrderDetails = (props) => {

    const info = (props.location && props.location.state) || '';
    const [cart, setCart] = useState(info.productsInBasket)
    const [n, setN] = useState([])
    const changeQuantity = (e, index, val) => {
        e.preventDefault()
        const curObj = cart[index]
        curObj['quantity'] += val
        cart[index] = curObj
        setCart([...cart])
    }
    const deleteProduct = (e, index) => {
        e.preventDefault()
        const obj = cart[index]
        cart.splice(obj, 1)
        setCart([...cart])
        console.log(cart, obj)
    }
    // info.map( no => {
    //     const numbers = no.productPrice 
    //     // console.log(numbers)
    //     setN([...n, numbers])
    //     console.log(n, numbers)
    // })
    console.log(info)
    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <IntroColumn>
                        <UserName> ORDER DETAILS </UserName>
                    </IntroColumn>
                </Grid.Row>
                <Rows>
                    <IntroColumn>
                        <UserName> Shopping List </UserName>
                        <BusinessImage src={BusinessPic} />
                        <UserName> {info.clickedBusiness.name}   <Icon name='check circle' color='yellow' /> </UserName>
                    </IntroColumn>
                </Rows>


                {info.productsInBasket?.map((res, index) => {
                    return (
                        <ProductRows>
                            <Grid.Column width={4}>
                                <ProductImages src={strawberries} />
                            </Grid.Column>
                            <ProductName width={6} >
                                <h3> {res.productName} </h3>
                                <List link>
                                    <List.Item as='a' href='' style={{ fontSize: 20, color: 'black' }} >See product images</List.Item>
                                </List>
                                <h3> Item order instructions </h3>
                                <Form.Input
                                    required
                                    placeholder='Add in the product instructions'
                                    name='name'
                                    style={{ width: '100%' }}
                                // onChange={e => setCategory(e.target.value)}
                                />
                            </ProductName>
                            <Grid.Column width={3}>
                                <Grid>
                                    <Grid.Row>
                                        <ItemsColumn width={5}>
                                            <ButtonCounters onClick={e => {
                                                if (res.quantity === 1) {
                                                    changeQuantity(e, index, 0)
                                                } else {
                                                    changeQuantity(e, index, -1)
                                                }
                                            }} > - </ButtonCounters>
                                        </ItemsColumn>
                                        <ItemsColumn width={6}>
                                            <h2> {res.quantity} </h2>
                                        </ItemsColumn>
                                        <ItemsColumn width={5}>
                                            <ButtonCounters onClick={e => changeQuantity(e, index, 1)} > + </ButtonCounters>
                                        </ItemsColumn>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h3> Kshs.{res.productPrice} </h3>
                                <ButtonCounters orange linkbutton onClick={deleteProduct}> Remove </ButtonCounters>
                            </Grid.Column>
                        </ProductRows>
                    )
                })}

                <ProductRows>
                    <Grid.Column width={8}>
                        {/* <Icon name='fire' color='black' size='huge'/> */}
                    </Grid.Column>
                    <ProductName center width={3} >
                        <h2> Delivery fee </h2>
                        <h2> Service Fee </h2>
                        <h2> Total </h2>
                    </ProductName>
                    <ProductName center width={4}>
                        <h2> Kshs. 200 </h2>
                        <h2> Kshs. 100 </h2>
                        <h2> Kshs. 2460 </h2>
                    </ProductName>
                </ProductRows>
                <ProductRows>
                    <Grid.Column>
                        <h2> Delivery Notes </h2>
                        <Form>
                            <TextArea placeholder='Please include specifics if you have any' style={{ width: '80%' }} />
                        </Form>
                    </Grid.Column>
                </ProductRows>
                <ProductRows>
                    <Grid.Column>
                        <List as='a' href='' style={{ fontSize: 25, color: 'black' }} > Address & Contact Details </List>
                    </Grid.Column>
                </ProductRows>
                <ProductRows>
                    <Grid.Column>
                        <List as='a' href='/payment-details' style={{ fontSize: 25, color: 'black' }} > Payment Details </List>
                    </Grid.Column>
                </ProductRows>
                <ProductRows>
                    <Grid.Column>
                        <h2> Add Promo Code </h2>
                        <Form size='massive'>
                            <Form.Field
                            style={{width:'50%'}}
                                control='input'
                            />
                        </Form>
                    </Grid.Column>
                </ProductRows>
                <ProductRows>
                    <Grid.Column>
                        <UserName> Delivery Announcement </UserName>
                            <h2> Your items are picked & handled with the highest degree of hygiene. </h2>
                    </Grid.Column>
                </ProductRows>
                <Grid.Row>
                    <OrderNowColumn>
                        <OrderNowButton > COMPLETE </OrderNowButton>
                    </OrderNowColumn>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default OrderDetails