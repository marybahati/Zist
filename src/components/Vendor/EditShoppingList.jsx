import React, { useState } from 'react';
import { Grid, Image, Button, Icon, List, Form, TextArea } from "semantic-ui-react";
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import add from './../../Assets/add.png'
import Collapsible from 'react-collapsible';
import history from './../../History';

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
     text-decoration: underline;
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
const AddButton = styled(Button)`
   background: inherit !important;
`;

const EditShoppingList = () => {
    const [inStock, setInStock] = useState(6)
    const [inStock2, setInStock2] = useState(4)
    const [inStock3, setInStock3] = useState(7)
    // const [complete, setComplete] = useState(false)

    const increment = () => setInStock(stock => stock + 1);

    const decrement = () => {
        if (inStock == 0) {
            setInStock(0)
        } else {
            setInStock(stock => stock - 1)
        }
    }
    const increment2 = () => setInStock2(stock => stock + 1);

    const decrement2 = () => {
        if (inStock2 == 0) {
            setInStock2(0)
        } else {
            setInStock2(stock => stock - 1)
        }
    }
    const increment3 = () => setInStock3(stock => stock + 1);

    const decrement3 = () => {
        if (inStock3 == 0) {
            setInStock3(0)
        } else {
            setInStock3(stock => stock - 1)
        }
    }
    const handleOrderDetailsDisplay = () => {
        history.push('/order-details')
    }

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
                            <EditLink as='a' > Edit </EditLink>
                        </List>
                    </Columns>
                </Grid.Row>
                <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={strawberries} />
                </Grid.Column>
                <ProductName width={4} >
                    <h3> Strawberries </h3>
                </ProductName>
                <ItemsColumn width={4}>
                    <Grid>
                        <Grid.Row>
                            <CenteredTextColumn width={3}>
                                <ButtonCounters onClick={decrement}> - </ButtonCounters>
                            </CenteredTextColumn>
                            <StockColumn width={9}> <h2> {inStock} </h2> </StockColumn>
                            <CenteredTextColumn width={3}>
                                <ButtonCounters onClick={increment}> + </ButtonCounters>
                            </CenteredTextColumn>
                        </Grid.Row>
                    </Grid>
                </ItemsColumn>
                <ItemsColumn width={3} textAlign='right'>
                    <h3>Kshs. 340 </h3>
                </ItemsColumn>
            </ProductRows>
            <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={bananas} />
                </Grid.Column>
                <ProductName width={4} >
                    <h3> Banana </h3>
                </ProductName>
                <ItemsColumn width={4}>
                    <Grid>
                        <Grid.Row>
                            <CenteredTextColumn width={3}>
                                <ButtonCounters onClick={decrement2}> - </ButtonCounters>
                            </CenteredTextColumn>
                            <StockColumn width={9}> <h2> {inStock2} </h2> </StockColumn>
                            <CenteredTextColumn width={3}>
                                <ButtonCounters onClick={increment2}> + </ButtonCounters>
                            </CenteredTextColumn>
                        </Grid.Row>
                    </Grid>
                </ItemsColumn>
                <ItemsColumn width={3} textAlign='right'>
                    <h3>Kshs. 740 </h3>
                </ItemsColumn>
            </ProductRows>
            <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={blueberries} />
                </Grid.Column>
                <ProductName width={4} >
                    <h3> Blueberries </h3>
                </ProductName>
                <ItemsColumn width={4}>
                    <Grid>
                        <Grid.Row>
                            <CenteredTextColumn width={3}>
                                <ButtonCounters onClick={decrement3}> - </ButtonCounters>
                            </CenteredTextColumn>
                            <StockColumn width={9}> <h2> {inStock3} </h2> </StockColumn>
                            <CenteredTextColumn width={3}>
                                <ButtonCounters onClick={increment3}> + </ButtonCounters>
                            </CenteredTextColumn>
                        </Grid.Row>
                    </Grid>
                </ItemsColumn>
                <ItemsColumn width={3} textAlign='right'>
                    <h3>Kshs. 940 </h3>
                </ItemsColumn>
            </ProductRows>
            <ProductRows>
                <Grid.Column width={4}>
                    <AddButton>
                        <Image src={add}/>
                    </AddButton>
                </Grid.Column>
                <ItemsColumn width={4}>
                    <h3> Add an item </h3>
                </ItemsColumn>
            </ProductRows>
                <Grid.Row>
                    <OrderNowColumn>
                        <OrderNowButton onClick={handleOrderDetailsDisplay}> CONFIRM </OrderNowButton>
                    </OrderNowColumn>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default EditShoppingList