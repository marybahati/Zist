import React, { useState } from 'react';
import { Grid, Image, Button, Icon, List } from "semantic-ui-react";
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import Collapsible from 'react-collapsible';
import history from './../../History';
import { Checkbox } from 'semantic-ui-react'

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const IntroColumn = styled(Grid.Column)`
    width: 60% !important;
    margin: 0 auto !important;
    text-align: center  !important;
`;
const UserName = styled.h2`
    text-decoration: underline !important;
    padding: 20px 0 !important;
`;
const BusinessImage = styled(Image)`
    margin: 0 auto !important;
`;
const AisleButton = styled(Button)`
    width: 180px !important;
    background: #0A0806 0% 0% no-repeat padding-box !important;
    border: 1px solid #C19A6B !important;
    border-radius: 5px !important;
    height: 70px !important;
    color: white !important;
    font-size: 20px !important;
    opacity: 1;
`;
const HideAisleButton = styled(Button)`
    width: 180px !important;
    background: inherit !important;
    height: 70px !important;
    color: #FFBD59 !important;
    font-size: 20px !important;
    opacity: 1;
`;
const AisleColumn = styled(Grid.Column)`
    margin: auto !important;
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
const SearchText = styled.h2`
   color: #707070;
`;
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
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
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
const BusinessColumns = styled(Grid.Column)`
   text-align : ${props => props.center ? "center !important" : " left !important "};
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
const CreateList = (props) => {
    const options = [
        {
            key: 'Strawberry',
            name: 'Strawberry',
            price: 'Kshs. 900/bunch',
            image: { src: strawberries },
        },
        {
            key: 'Banana',
            name: 'Banana',
            price: 'Kshs. 700/units',
            image: { src: bananas },
        },
        {
            key: 'Blueberry',
            name: 'Blueberry',
            price: 'Kshs. 300/pack',
            image: { src: blueberries },
        },
    ]
    const info = (props.location && props.location.state) || '';
    const {clickedBusiness} = (props.location && props.location.state) || '';
     console.log(props.location && props.location.state)
    const [hideAisles, setHideAisles] = useState(false)
    const [inStock, setInStock] = useState()
    const [inStock2, setInStock2] = useState(4)
    const [inStock3, setInStock3] = useState(7)
    const [searchText, setSearchText] = useState('')
    // const [price, setPrice] = useState(500)
    const [cost, setCost] = useState()
    
    const handleHideAisles = () => {
        setHideAisles(true)
    }
    const handleShowAisles = () => {
        setHideAisles(false)
    }

    const increment = (price) => setInStock(stock => stock + 1);

    const decrement = (price) => {
        if (price == 0) {
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
    // const calculateCost = () => {
    //     var ItemCost = inStock*price
    //     setCost(itemCost)
    // }

    const handleOrderDetailsDisplay = () => {
        history.push({
            pathname:'/order-details',
            state: info 
    })
    }


    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row>
                    <IntroColumn>
                        <h2> Construct your shopping list and fill your trolley </h2>
                        <h2> From wherever you are. </h2>
                        <UserName> Shopping List </UserName>
                        <BusinessImage src={BusinessPic} />
                        <UserName> {clickedBusiness} </UserName>
                    </IntroColumn>
                </Grid.Row>
                {/* {hideAisles ? (
                    <Grid.Row>
                        <Grid.Column width={3}> <HideAisleButton onClick={handleShowAisles}> Show Aisles </HideAisleButton> </Grid.Column>
                    </Grid.Row>
                ) : (
                        <Grid.Row>
                            <AisleColumn width={3} >   
                                <AisleButton> Fruits </AisleButton>
                            </AisleColumn>
                            <AisleColumn width={3}> <AisleButton> Greens </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton> Snacks </AisleButton> </AisleColumn>
                            <AisleColumn width={3}> <AisleButton> Cooking </AisleButton> </AisleColumn>
                            <Grid.Column width={3}> <HideAisleButton onClick={handleHideAisles}> Hide Aisles </HideAisleButton> </Grid.Column>
                        </Grid.Row>
                    )}
                <Grid.Row>
                    <SearchText> Search for what you want and add it just like you’d do with a regular list… </SearchText>
                </Grid.Row> */}
                { info ?.map(product => {
                    console.log(product)
                        return (
                <ProductRows>
                    <Grid.Column width={4}>
                        <ProductImages src={strawberries} />
                    </Grid.Column>
                    <ProductName center width={3} >
                        <h3> {product.productName} </h3>
                        
                    </ProductName>
                    <ItemsColumn width={5}>
                        <Grid>
                            <Grid.Row>
                                <CenteredTextColumn width={3}>
                                    <ButtonCounters onClick={decrement}> - </ButtonCounters>
                                </CenteredTextColumn>
                                <StockColumn width={9}> <h2> {product.productPrice} </h2> </StockColumn>
                                <CenteredTextColumn width={3}>
                                    <ButtonCounters onClick={increment}> + </ButtonCounters>
                                </CenteredTextColumn>
                            </Grid.Row>
                        </Grid>
                    </ItemsColumn>
                    <ItemsColumn width={3}>
                        <h3> Ksh. {product.productPrice} </h3>
                    </ItemsColumn>
                </ProductRows>
                  )
                })}
                {/* <ProductRows>
                    <Grid.Column width={4}>
                        <ProductImages src={strawberries} />
                    </Grid.Column>
                    <ProductName center width={3} >
                        <h3> Strawberries </h3>
                    </ProductName>
                    <ItemsColumn width={5}>
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
                    <ItemsColumn width={3}>
                        <h3> Kshs. 5000 </h3>
                    </ItemsColumn>
                </ProductRows>
                <ProductRows>
                    <Grid.Column width={4}>
                        <ProductImages src={bananas} />
                    </Grid.Column>
                    <ProductName center width={3} >
                        <h3> Banana </h3>
                    </ProductName>
                    <ItemsColumn width={5}>
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
                    <ItemsColumn width={3}>
                        <h3> Kshs. 6000 </h3>
                    </ItemsColumn>
                </ProductRows> */}
                <Grid.Row >
                    <BusinessColumns center>
                        <Collapsible width={16} fluid trigger={<DropdownButtons > Continue shopping from another store within Mall A <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                            <Grid width={16}  >
                                <Grid.Row >
                                    <Grid.Column width={5} style={{paddingLeft:40}} >
                                        <Image src={BusinessPic} />
                                    </Grid.Column>
                                    <BusinessColumns width={10}  >
                                        <h2> Thiga’s Field Fresh Vegetables <Icon name='check circle' color='yellow' /> </h2>
                                        <List bulleted horizontal >
                                            <List.Item ></List.Item>
                                            <List.Item > beauty </List.Item>
                                            <List.Item > health </List.Item>
                                        </List>
                                    </BusinessColumns>
                                </Grid.Row>
                            </Grid>

                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={5}  >
                                        <Image src={BusinessPic} style={{paddingLeft:40}} />
                                    </Grid.Column>
                                    <BusinessColumns width={10} style={{ textAlign: 'center' }} >
                                        <h2> Mary’s Apothecary <Icon name='check circle' color='yellow' /> </h2>
                                        <List bulleted horizontal >
                                            <List.Item ></List.Item>
                                            <List.Item > groceries </List.Item>
                                            <List.Item > healthy snacks </List.Item>
                                        </List>
                                    </BusinessColumns>
                                </Grid.Row>
                            </Grid>

                        </Collapsible>
                    </BusinessColumns>
                </Grid.Row>
                <Grid.Row>
                    <OrderNowColumn>
                        <OrderNowButton onClick={handleOrderDetailsDisplay} > Order Now </OrderNowButton>
                    </OrderNowColumn>
                </Grid.Row>
            </MainGrid>
        </MainDiv>
    )
}
export default CreateList