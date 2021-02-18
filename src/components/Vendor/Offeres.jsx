import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Icon, Form, Checkbox } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import EditProducts from './EditProducts';
import addButton from './../../Assets/add-button.png';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from './../../endpoints';
import { ContinueButton } from './ContinueButton';
import AddProduct from './AddProduct';
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
const IntroText = styled.h2`
   text-align: center !important;
`;
const ItemsColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const Columns = styled(Grid.Column)`
   margin: 0 auto !important;
`;
const ProductNameColumn = styled(Grid.Column)`
   text-align: center !important;
   margin: ${props => props.center ? "auto 0 !important" : " 0 "};
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
const CenteredTextColumn = styled(Grid.Column)`
   margin: auto 0 !important;
`;
const DoneButton = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    border: 2px solid #FEE2D4 !important;
    border-radius: 24px !important;
    opacity: 1;
    height: 66px !important;
    width: 100%;
    font-size: 26px !important;
    color: #050504 !important;
    margin: 20px 0 !important;
`;
const ProductsSection = (props) => {
    const { userData } = props
    const [products, setProducts] = useState([])
    const [addProduct, setAddProduct] = useState(false)
    const token = userData.access
    console.log(products)
    const id = userData.vendor
    const handleAddProduct = () => {
        setAddProduct(true)
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
            }
            console.log(result)
        } catch (error) {
            console.log(error)
        }

    }, []);
    return (
        <Grid>
            <ProductRows>
                <IntroColumn>
                    <List>
                        <EditButton onClick={props.handleEdit} name='pencil' > EDIT PRODUCTS  <EditIcon name='pencil' size='small' /> </EditButton>

                    </List>
                </IntroColumn>
            </ProductRows>
            <ProductRows >
                <Grid.Column width={2}>
                </Grid.Column>
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
                <Grid.Column width={3}>
                    <h3 style={{ textAlign: 'center' }}> AISLE UNDER </h3>
                </Grid.Column>
            </ProductRows>
            { products?.map(product => {
                return (
                    <ProductRows>
                        <ItemsColumn width={2}>
                            <Checkbox/>
                        </ItemsColumn>
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
                        <ItemsColumn width={3}>
                            <OffersButton> Grocery </OffersButton>
                        </ItemsColumn>
                    </ProductRows>
                )
            })}
        </Grid>
    )
}
const Offers = (props) => {
    const { cookies } = props
    const userData = cookies.get('login-res')
    const [edit, setEdit] = useState(false)
    const [addAisles, setAddAisles] = useState(false)
    const [step2, setStep2] = useState(false)

    const handleAddAisles = () => {
        setAddAisles(true)
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column style={{ paddingBottom: 50 }}>
                    <h2> Welcome to Shelving where putting up your wares is all within a button’s reach. </h2>
                </Grid.Column>
            </Grid.Row>
                    <Grid.Row style={{ paddingTop: 30 }}>
                        <Grid.Column width={4} >
                            <OffersButton > Greens </OffersButton>
                        </Grid.Column>
                        <Grid.Column width={4} >
                            <OffersButton> Fruits </OffersButton>
                        </Grid.Column>
                        <Grid.Column width={4} >
                            <OffersButton> Cakes </OffersButton>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Grid>
                                <Grid.Row>
                                    <CenteredTextColumn width={7}  >
                                        <AddButton onClick={handleAddAisles} >
                                            <Image src={addButton} />
                                        </AddButton>
                                    </CenteredTextColumn >
                                    <CenteredTextColumn width={9} >
                                        <h2> Add Aisles </h2>
                                    </CenteredTextColumn>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
      
            {/* <Grid.Row>
                { edit ? <EditProducts/> : <ProductsSection handleEdit={handleEdit} userData={userData} /> }
            </Grid.Row> */}
        </Grid>
    )
}
export default withCookies(Offers)