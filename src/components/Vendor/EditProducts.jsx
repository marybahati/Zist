import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Tab } from "semantic-ui-react";
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import axios from 'axios';
import { withCookies } from 'react-cookie';

const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
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

const EditProducts = (props) => {
    const { cookies } = props
    const token = cookies.get('access-token')
    console.log(token)

    const [products,setProducts] = useState([])
    const [addProduct, setAddProduct] = useState()
    const [inStock, setInStock] = useState(6)

    const increment = () => setInStock(stock => stock + 1);

    const decrement = () => {
        if (inStock == 0) {
            setInStock(0)
        } else {
            setInStock(stock => stock - 1)
        }
    }

    const fetchProducts = async () => {
        try {
            const products_res = await axios.get(`https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/vendor/products/`,
            { 
              headers: {"Authorization" : `Bearer ${token}`} 
            }
            )
            if ( products_res.status == 200) {
                setProducts({ products: products_res.data })
              console.log(products.map( product  => product.length() ))
            }
            console.log(products_res)
          } catch (error) {
            console.log(error)
          }
    }
    useEffect(() => {
        fetchProducts()
    }, [] )

    return (
        <Grid>
            { products.length == 0 ? <h1>array is empty </h1> : <h1> array has value </h1>}
            <ProductRows spaced>
                <Grid.Column width={4}>
                    <h3> PRODUCT IMAGES </h3>
                </Grid.Column>
                <ProductName width={4}>
                    <h3> PRODUCT NAME </h3>
                </ProductName>
                <Grid.Column width={3}>
                    <h3> PRICE/UNIT </h3>
                </Grid.Column>
                <Grid.Column width={4}>
                    <h3> IN STOCK </h3>
                </Grid.Column>
            </ProductRows>
            <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={blueberries} />
                </Grid.Column>
                <ProductName center width={4} >
                    <h3> BLUEBERRIES </h3>
                </ProductName>
                <ItemsColumn width={3}>
                    <h3> Kshs. 300/pack </h3>
                </ItemsColumn>
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
            </ProductRows>

            <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={bananas} />
                </Grid.Column>
                <ProductName width={4} >
                    <h3> BANANAS </h3>
                </ProductName>
                <ItemsColumn width={3}>
                    <h3> Kshs. 40/bunch </h3>
                </ItemsColumn>
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
            </ProductRows>

            <ProductRows>
                <Grid.Column width={4}>
                    <ProductImages src={strawberries} />
                </Grid.Column>
                <ProductName width={4} >
                    <h3> STRAWBERRIES </h3>
                </ProductName>
                <ItemsColumn width={3}>
                    <h3>Kshs. 340/pack </h3>
                </ItemsColumn>
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
            </ProductRows>
        </Grid>
    )
}
export default withCookies(EditProducts)