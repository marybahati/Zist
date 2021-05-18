import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Icon, Form } from "semantic-ui-react";
import styled from 'styled-components';
import blueberries from './../../Assets/blue-berries.png';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from './../../endpoints';
import history from '../../History';
import shelving from './../../Assets/shelving.png';
import addButton from './../../Assets/add-button.png';

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
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
`;
const IntroColumn = styled(Grid.Column)`
   margin : 30px 0  !important;
   text-align: center;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const ProductName = styled(Grid.Column)`
   margin: auto 0 auto 15px !important;
`;
const ProductImages = styled(Image)`
   width: 80% !important;
   margin: 0 auto 0 0 !important;
`;
const EditButton = styled(Button)`
   color: black !important;
   font-size: 22px !important;
   text-decoration: underline;
   background: inherit !important;

`;
const EditIcon = styled(Icon)`
   font-size: 22px !important;
    margin-left: 12px !important;
`;
const OffersButton = styled(Button)`
    width: 180px !important;
    background: #0A0806 0% 0% no-repeat padding-box !important;
    border: 1px solid #C19A6B !important;
    border-radius: 5px !important;
    height: 70px !important;
    color: white !important;
    font-size: 20px !important;
    opacity: 1;
`;
const AddButton = styled(Button)`
   background: inherit !important;
   font-size : 40px !important;
   padding : 0 !important;
   color : black !important;
   margin: 0 8px !important;
`;
const Icons = styled(Grid.Column)`
  padding: 0 0 0 30px ;
  text-align: center;
`;
const CenteredColumn = styled(Grid.Column)`
    margin: 0 auto !important;
`;
const Columns = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const Buttonx = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 18px !important;
    color: #050504 !important;
    margin: 40px 0 0 0 !important;
`;
const VendorProducts = (props) => {
    const { cookies } = props
    const data = cookies.get('login-res')
    const token = data?.access
    const [products, setProducts] = useState([])
    const [productCount, setProductCount] = useState()
    console.log(products)
    const handleAddProduct = () => {
        history.push('inventory-create-product')
    }
    const handleGoingBack = () => {
        history.goBack()
    }
    useEffect(async () => {
        try {
            const result = await axios.get(HOST_API + `zist/vendor/products/`,
                {
                    headers: { "Authorization": `Bearer ${token}` }
                }
            )
            if (result.status == 200) {
                setProducts(result.data.results)
                setProductCount(result.data.count)
            }
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }, []);
    return (
        <MainDiv>
            <Grid>
                <Grid.Row >
                    <Grid.Column width={2}>
                        <Icons width={1}>
                            <Button style={{ background: 'inherit' }} onClick={handleGoingBack}>  <Icon name='chevron left' size='large' link color='black' /> </Button>
                        </Icons>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <MainGrid>
                <Grid.Row>
                    <CenteredColumn width={6}>
                        <Image src={shelving} />
                        <h2 style={{ color: 'orange', textAlign: 'center' }}> SHELVING </h2>
                    </CenteredColumn>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column style={{ paddingBottom: 50, margin: '0 auto' }}>
                        <h1> Welcome to Shelving where putting up your wares is all within a button’s reach. </h1>
                    </Grid.Column>
                </Grid.Row>
                {productCount === 0 ? (
                    <ProductRows>
                        <CenteredColumn width={8}>
                            <h2> You have no products yet, please create new products</h2>
                        </CenteredColumn>
                        <ImageColumn width={16}>
                            <Grid>
                                <Grid.Row>
                                    <CenteredColumn width={4}>
                                        <Buttonx type='submit' > Add new item </Buttonx>
                                    </CenteredColumn>
                                </Grid.Row>
                                {/* <Grid.Row>
                               <Grid.Column width={6}>
                                   <AddButton onClick={handleAddProduct}>
                                       <Image src={addButton} /> 
                                   </AddButton>
                               </Grid.Column>
                               <Columns width={8}>
                                   <AddButton onClick={handleAddProduct}>
                                       <h3> Add new product </h3> 
                                   </AddButton>
                               </Columns>

                           </Grid.Row> */}
                            </Grid>
                        </ImageColumn>
                    </ProductRows>
                ) : (
                    <>
                        <ProductRows>
                            <IntroColumn>
                                <List>
                                    <EditButton name='pencil' > EDIT PRODUCTS  <EditIcon name='pencil' size='small' /> </EditButton>
                                </List>
                            </IntroColumn>
                        </ProductRows>
                        <ProductRows >
                            <Grid.Column width={3}>
                                <h3> PRODUCT IMAGES </h3>
                            </Grid.Column>
                            <ProductName width={3}>
                                <h3> PRODUCT NAME </h3>
                            </ProductName>
                            <Grid.Column width={2}>
                                <h3> PRICE/UNIT </h3>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h3> IN STOCK </h3>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <h3> INGREDIENTS </h3>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <h3 style={{ textAlign: 'center' }}> CATEGORY </h3>
                            </Grid.Column>
                        </ProductRows>
                        {products?.map(product => {
                            return (
                                <ProductRows>
                                    <Grid.Column width={3}>
                                        <ProductImages src={blueberries} />
                                    </Grid.Column>
                                    <ProductName center width={3} >
                                        <h3> {product.name} </h3>
                                    </ProductName>
                                    <ItemsColumn width={2}>
                                        <h3> Kshs. {product.price} </h3>
                                    </ItemsColumn>
                                    <ItemsColumn width={2}>
                                        <h3> {product.metadata} </h3>
                                    </ItemsColumn>
                                    <ItemsColumn width={2}>
                                        <h3> {product.description} </h3>
                                    </ItemsColumn>
                                    <ItemsColumn width={3}>
                                        <OffersButton> Grocery </OffersButton>
                                    </ItemsColumn>
                                </ProductRows>
                            )
                        })}
                        <ProductRows>
                            <ImageColumn width={7}>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={6}>
                                            <AddButton onClick={handleAddProduct}>
                                                <Image src={addButton} />
                                            </AddButton>
                                        </Grid.Column>
                                        <Columns width={8}>
                                            <AddButton onClick={handleAddProduct}>
                                                <h3> Add new product </h3>
                                            </AddButton>
                                        </Columns>

                                    </Grid.Row>
                                </Grid>
                            </ImageColumn>
                        </ProductRows>
                    </>
                )}
            </MainGrid>
        </MainDiv>
    )
}
export default withCookies(VendorProducts)