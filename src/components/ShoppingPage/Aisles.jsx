import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Icon, Popup } from "semantic-ui-react";
import styled from 'styled-components';
import blueberries from './../../Assets/blue-berries.png';
import axios from 'axios'
import { withCookies} from 'react-cookie';
import history from '../../History'
import { HOST_API } from '../../endpoints';

const MainDiv = styled.div`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 50px 0 !important;
`;
const MainGrid = styled(Grid)`
    width: 80%;
    margin: 0 auto 100px auto !important;
`;
const AisleColumn = styled(Grid.Column)`
    margin: auto !important;
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
const UserName = styled.h2`
    text-decoration: underline !important;
    padding: 20px 0 15px 0 !important;
`;
const Columns = styled(Grid.Column)`
    margin: ${props => props.center ? " 0 auto !important" : " auto 0 !important"};
    padding: 0 !important;
`;
const OrderNowColumn = styled(Grid.Column)`
   width: 350px !important;
   margin: 50px auto 0 auto !important;
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

const Aisles = (props) => {
    const [products, setProducts] = useState([])
    const [showFruits, setShowFruits] = useState(true)
    const [showGreens, setShowGreens] = useState(false)
    const [showSnacks, setShowSnacks] = useState(false)
    const [showCooking, setShowCooking] = useState(false)
    const [cart, setCart] = useState([])
    const [countProducts, setCountProducts] = useState()

    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData?.access
    const clickedBusiness = (props.location && props.location.state) || '';
    const businessId = clickedBusiness?.id

    const handleShowFruits = () => {
        setShowFruits(true)
        setShowCooking(false)
        setShowGreens(false)
        setShowSnacks(false)
    }
    const handleShowGreens = () => {
        setShowGreens(true)
        setShowFruits(false)
        setShowCooking(false)
        setShowSnacks(false)
    }
    const handleShowSnacks = () => {
        setShowSnacks(true)
        setShowFruits(false)
        setShowCooking(false)
        setShowGreens(false)
    }
    const handleShowCooking = () => {
        setShowCooking(true)
        setShowFruits(false)
        setShowGreens(false)
        setShowSnacks(false)
    }
    const handleAddProduct = (e, productName, productPrice, quantity, id) => {
        const d = { productName: productName, productPrice: productPrice, quantity: quantity, id: id }
        setCart([...cart, d])
        console.log(cart, d)
    }
    const handleGoingBackToList = () => {
        history.push({
            pathname: '/user-list',
            state: cart
        })
    }
    useEffect(() => {
        axios.get(HOST_API + `zist/business/${businessId}/product_list/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                if (response.status == 200) {
                    setProducts(response.data.results);
                    setCountProducts(response.data.count)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const suggestedProducts = products.slice(0, 5).map(product => {
        return (
            <Grid.Row width={16} style={{ margin: '0 30px 80px 0', background: 'white !important', border: '1px black' }}>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={5}>
                    <Image src={blueberries} wrapped ui={false} />
                </Grid.Column>
                <Columns width={10}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}> </Grid.Column>
                            <Grid.Column width={6}>
                                <Popup
                                    style={{ backgroundColor: 'green' }}
                                    trigger={
                                        <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} onClick={(e) => handleAddProduct(e, product.name, product.price, 1, product.id)}>
                                            <Icon name='add circle' size='big' color='black' />
                                        </Button>
                                    }
                                    content={`Succesfully added item ${product.name}`}
                                    on='click'
                                    position='bottom left'
                                />

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={1}></Grid.Column>
                                    <Grid.Column width={7}>
                                        <h2> {product.name} </h2>
                                        <List link>
                                            <List.Item as='a' href='' style={{ fontSize: 20, color: 'black' }} >See product images</List.Item>
                                        </List>
                                    </Grid.Column >
                                    <Grid.Column width={8}>
                                        <h2> Ksh.{product.price} </h2>
                                    </Grid.Column >
                                </Grid.Row>
                            </Grid>
                        </Grid.Row>
                    </Grid>
                </Columns>
            </Grid.Row>
        )
    })

    return (
        <MainDiv>
            <MainGrid>
                <Grid.Row style={{ marginBottom: 20 }}>
                    <AisleColumn width={4} >
                        <AisleButton onClick={handleShowFruits} > Fruits </AisleButton>
                    </AisleColumn>
                    <AisleColumn width={4}> <AisleButton onClick={handleShowGreens} > Greens </AisleButton> </AisleColumn>
                    <AisleColumn width={4}> <AisleButton onClick={handleShowSnacks} > Snacks </AisleButton> </AisleColumn>
                    <AisleColumn width={4}> <AisleButton onClick={handleShowCooking} > Cooking </AisleButton> </AisleColumn>
                </Grid.Row>
                {showFruits ? (
                    <Grid.Row >
                        <Grid.Column>
                            <Grid width={16} style={{ background: '#fff', border: '1px solid grey' }}>
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center', padding: '20px 0 10px 0' }}>
                                        <UserName > Fruits </UserName>
                                    </Grid.Column>
                                </Grid.Row>
                                {suggestedProducts}

                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showGreens ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Grid width={16} style={{ background: '#fff', border: '1px solid grey' }} >
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center', padding: '20px 0 10px 0' }}>
                                        <UserName > Greens </UserName>
                                    </Grid.Column>
                                </Grid.Row>
                                {suggestedProducts}
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showSnacks ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Grid width={16} style={{ background: '#fff', border: '1px solid grey' }} >
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center', padding: '20px 0 10px 0' }}>
                                        <UserName > Snacks </UserName>
                                    </Grid.Column>
                                </Grid.Row>
                                {suggestedProducts}
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showCooking ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Grid width={16} style={{ background: '#fff', border: '1px solid grey' }} >
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center', paddingTop: 30 }}>
                                        <UserName > Cooking </UserName>
                                    </Grid.Column>
                                </Grid.Row>
                                {suggestedProducts}
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}

                {/* {cart.length === 0 ? ( */}
                    <Grid.Row>
                    <OrderNowColumn>
                        <OrderNowButton onClick={handleGoingBackToList} > Go to basket </OrderNowButton>
                    </OrderNowColumn>
                </Grid.Row>
                {/* ) : null } */}
            </MainGrid>
        </MainDiv>
    )
}
export default withCookies(Aisles)