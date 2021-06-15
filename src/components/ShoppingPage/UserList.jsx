import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Input, Icon } from "semantic-ui-react";
import card2 from './../../Assets/2.jpg';
import store from './../../Assets/store.png';
import styled from 'styled-components';
import bananas from './../../Assets/bananas.png';
import blueberries from './../../Assets/blue-berries.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';
import Collapsible from 'react-collapsible';
import history from '../../History'
import { HOST_API } from '../../endpoints';
import cartImage from "./../../Assets/searchCart.png";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MuiButton from '@material-ui/core/Button';
import MuiGrid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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
    padding: 20px 0 15px 0 !important;
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
const SearchInput = styled(Input)`
    border: none !important;
    padding: 10px 0 !important;
    font-size:24px !important;
    background: inherit !important;
    @media only screen and (max-width: 1200px) {
        font-size: 16px !important;
    }
`;
const SearchInputColumn = styled(Grid.Column)`
    margin: 0  !important;
    padding: 30px 25px !important;
`;

const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
const Columns = styled(Grid.Column)`
    margin: ${props => props.center ? " 0 auto !important" : " auto 0 !important"};
    padding: 0 !important;
    // border-bottom: 1px solid black;
`;
const GreyText = styled.h2`
color: #707070;
`;
const ButtonCounters = styled(Button)`
   background: inherit !important;
   font-size : 18px !important;
   padding : 0 !important;
   color : black !important;
   margin: 0 8px !important;
   text-align: center !important;
`;
const StockColumn = styled(Grid.Column)`
   margin: auto 0 !important;
   background: #FFF !important;
   padding: 18px 30px !important;
   text-align: center !important;
`;
const BusinessColumns = styled(Grid.Column)`
   text-align : ${props => props.centered ? "center !important" : " left !important "};
   margin: auto 0 !important;
`;
const OrderNowColumn = styled(Grid.Column)`
   width: 40% !important;
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
const Circle = styled.div`
height: 25px;
width: 25px;
background-color: #bbb;
border-radius: 50%;
display: inline-block;
top: -92px;
left: 6px;
text-align: center;
position: relative;
padding: 4px 0 0 0 !important
`;
const UserList = (props) => {
    const [listId, setListId] = useState()
    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData?.access

    const cookie = new Cookies()

    const clickedBusiness = (props.location && props.location.state) || '';
    console.log(props.location && props.location.state, clickedBusiness)
    const businessId = clickedBusiness?.id
    const [cart, setCart] = useState([])
    const [showQty, setShowQty] = useState([])
    const [selectedOption, setSelectedOption] = useState('')
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [countProducts, setCountProducts] = useState()
    const storedItems = cookies.get('cart')
    let productsInBasket = [...storedItems, ...cart]
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (status) => (event) => {
        // event.preventDefault()
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(status);
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer(false)}
            style={{width:'50% !important',padding:'20px !important'}}
        >

            {productsInBasket.length !== 0 ? (
                    //  <h2> Products in your basket </h2>
                    productsInBasket?.map((product, index) => {
                        return (
                            <MuiGrid key={index} container spacing={1} style={{width:450,padding:20}}>
                                 <MuiGrid container item xs={12}>
                                 {/* <Typography gutterBottom variant="subtitle1"> Products in your Cart </Typography> */}
                                {/* <MuiGrid item xs={12} >
                                    <Button onClick={e => deleteProduct(e, index)} basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} >
                                        <Icon name='close' size='large' color='orange' />
                                    </Button>
                                </MuiGrid> */}
                                </MuiGrid>
                                {/* // <Grid.Column width={1}>
                                //     <Button onClick={e => deleteProduct(e, index)} basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} >
                                //         <Icon name='close' size='large' color='orange' />
                                //     </Button>
                                // </Grid.Column> */}
                                <MuiGrid container item xs={2}>
                                <MuiGrid item xs={12} >
                                    {/* <Image src={blueberries} wrapped ui={false} style={{width:'100% !important'}} /> */}
                                    <Avatar src={blueberries} variant="rounded"/> 
                                </MuiGrid>
                                </MuiGrid>
                                {/* <MuiGrid container item xs={9} /> */}
                                {/* <Columns width={10}> */}
                                    {/* <MuiGrid > */}
                                        {/* <Grid.Row> */}
                                            <MuiGrid item xs={3} style={{margin:'auto 0 !important'}}>

                                                <Typography gutterBottom variant="subtitle1">{product.productName} </Typography>
                                                {/* <List link>
                                                    <List.Item as='a' href='' style={{ fontSize: 20, color: 'black' }} >See product images</List.Item>
                                                </List> */}
                                            </MuiGrid >
                                            {/* <MuiGrid item xs={7} > */}
                                                {/* <MuiGrid container> */}
                                                    {/* <Grid.Row> */}
                                                        {/* <Columns width={2} /> */}
                                                        <MuiGrid item xs={1} style={{margin:'auto 0 !important'}} >
                                                            <ButtonCounters onClick={e => {
                                                                if (product.quantity === 1) {
                                                                    changeQuantity(e, index, 0)
                                                                } else {
                                                                    changeQuantity(e, index, -1)
                                                                }
                                                            }} > - </ButtonCounters>
                                                        </MuiGrid>
                                                        {/* <MuiGrid item xs={1} /> */}
                                                        <MuiGrid item xs={1} style={{margin:'auto 0 !important',textAlign:'center'}}>
                                                            <Typography gutterBottom variant="subtitle1"> {product.quantity} </Typography> 
                                                        </MuiGrid>
                                                        {/* <MuiGrid item xs={1} /> */}
                                                        <MuiGrid item xs={1} style={{margin:'auto 0 !important'}}>
                                                            <ButtonCounters onClick={e => changeQuantity(e, index, 1)} > + </ButtonCounters>
                                                        </MuiGrid>
                                                        <MuiGrid item xs={1} />
                                                    {/* </Grid.Row> */}
                                                {/* </MuiGrid> */}
                                            {/* </MuiGrid> */}
                                            <MuiGrid item xs={2} style={{margin:'auto 0 !important'}} >
                                                
                                                <Typography gutterBottom variant="subtitle1">Ksh.{product.productPrice * product.quantity} </Typography>
                                            </MuiGrid >
                                        {/* </Grid.Row> */}
                                    {/* </MuiGrid> */}
                                {/* </Columns> */}
                            </MuiGrid>
                        )
                    })
                ) : <h3 style={{paddingTop:50}}> You have no items in your cart</h3> }
        </div>
    );
    console.log(storedItems, productsInBasket)
    console.log(cart)

    const changeQuantity = (e, index, val) => {
        e.preventDefault()
        // const curObj = productsInBasket[index]
        // curObj['quantity'] += val
        // productsInBasket[index] = curObj
        // setProductsInBasket([...productsInBasket])
    }
    const deleteProduct = (e, index) => {
        e.preventDefault()
        const obj = cart[index]
        cart.splice(obj, 1)
        setCart([...cart])
        console.log(cart, obj)
    }
    const changeQuantityToggle = (e, product_id, val) => {
        e.preventDefault()
        const curIndx = cart.findIndex(product => product_id === product.id)
        if (curIndx === -1) return

        const curObj = cart[curIndx]
        curObj['quantity'] += val
        cart[curIndx] = curObj
        setCart([...cart])
    }
    const getProductQty = (product_id) => {
        const product = cart.find(prd => prd.id === product_id)
        console.log(product)
        return product?.quantity
    }
    const CalculateProductPrice =  (product_id,product_price)=>{
        const product = cart.find(prd => prd.id === product_id)
        const price = product ?  product.productPrice * product.quantity : product_price
        return price
        console.log(price,product)
    }
    const handleOrderDetailsDisplay = () => {
        history.push({
            pathname: '/order-details',
            state: { productsInBasket, clickedBusiness }
        })
    }

    // useEffect(() => {
    //     axios.post(HOST_API + 'zist/list/',
    //         { name: 'list' },
    //         { headers: { "Authorization": `Bearer ${token}` } })
    //         .then((response) => {
    //             console.log(response)
    //             if (response.status == 201) {
    //                 const id = response.data.id
    //                 cookie.set('list-id', id, { path: '/' })
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [])

    const handleRedirect = () => {
        history.push({
            pathname: '/shopping/categories',
            state: clickedBusiness
        })
    }


    const onSearch = (e) => {
        setSearchText(e.target.value)
        console.log(searchText)
    }

    const productSearch = (product) => {

        const show = searchText !== '' && product.name.toLowerCase().includes(searchText)
        return (
            <>
                { show && (

                    <Grid.Row width={16} style={{ margin: '0 30px 80px 0', backgroundColor: 'white !important', border: '1px black' }}>
                        <Grid.Column width={5}>
                            <Image src={blueberries} wrapped ui={false} />
                        </Grid.Column>
                        <Columns width={11}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={10}> </Grid.Column>
                                    <Grid.Column width={6}>
                                        {!showQty.includes(product.id) ? (
                                            <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} onClick={(e) => handleAddProduct(e, product.name, product.price, 1, product.id)}>
                                                <Icon name='add circle' size='big' color='black' />
                                            </Button>
                                        ) : (
                                            <Grid>
                                                <Grid.Row>
                                                    <Columns width={2} />
                                                    <Columns width={3}>
                                                        <ButtonCounters onClick={e => {
                                                            if (getProductQty(product.id) === 1) {
                                                                changeQuantityToggle(e, product.id, 0)
                                                            } else {
                                                                changeQuantityToggle(e, product.id, -1)
                                                            }
                                                        }} > - </ButtonCounters>
                                                    </Columns>
                                                    <Columns width={6}>
                                                        <StockColumn width={15}> <h2> {getProductQty(product.id)} </h2> </StockColumn>
                                                    </Columns>
                                                    <Columns width={2} />
                                                    <Columns width={3}>
                                                        <ButtonCounters onClick={e => changeQuantityToggle(e, product.id, 1)} > + </ButtonCounters>
                                                    </Columns>
                                                </Grid.Row>
                                            </Grid>
                                        )}
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
                                            { cart.length == 0 ? (
                                        <Grid.Column width={8}>
                                        <h2> Ksh.{product.price} </h2>
                                    </Grid.Column >
                                    ) : (
                                        <Grid.Column width={8}>
                                            <h2> Ksh.{CalculateProductPrice(product.id,product.price)} </h2>
                                        </Grid.Column >
                                    )}
                                    
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Row>
                            </Grid>
                        </Columns>
                    </Grid.Row>
                )}
            </>


        )
    }


    const handleAddProduct = (e, productName, productPrice, quantity, id,) => {
        const d = { productName: productName, productPrice: productPrice, quantity: quantity, id: id }
        console.log(d)
        setCart([...cart, d])
        setShowQty([...showQty, id])
    }

    useEffect(() => {
        // axios.get(HOST_API + 'zist/products/', {
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
    return (
        <MainDiv>
            <MainGrid>
                {/* <Grid.Row>
                <Grid.Column width={13}/>
                    <Grid.Column width={3}>
                    <React.Fragment >
                            <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none',textAlign:'center' }} onClick={toggleDrawer( true)}>
                                <Image src={cartImage} style={{ width: 100, height: 100 }} />
                                <Circle style={{ position: 'absolute', top: '-85px', left: '6px',textAlign:'center !important' }}> {productsInBasket.length} </Circle>
                            </Button>
                            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} style={{width:'50% !important'}} >
                                {list()}
                            </Drawer>
                        </React.Fragment>
                    </Grid.Column>
                </Grid.Row> */}
                <Grid.Row>
                    <IntroColumn>
                        <UserName> Shopping List </UserName>
                        <BusinessImage src={store} />
                        <UserName> {clickedBusiness.name}   <Icon name='check circle' color='yellow' /> </UserName>
                    </IntroColumn>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={13}>
                        <GreyText> Take a detour within the store by browsing through the aisles, just like you’d do in a physical store…</GreyText>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <React.Fragment >
                            <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} onClick={toggleDrawer( true)}>
                                <Image src={cartImage} style={{ width: 100, height: 100 }} />
                                <Circle style={{ position: 'relative', top: '', left: '',textAlign:'center !important' }}> {productsInBasket.length} </Circle>
                            </Button>
                            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} style={{width:'50% !important'}} >
                                {list()}
                            </Drawer>
                        </React.Fragment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <AisleColumn width={4} >
                        <AisleButton onClick={handleRedirect} > Fruits </AisleButton>
                    </AisleColumn>
                    <AisleColumn width={4}> <AisleButton onClick={handleRedirect} > Greens </AisleButton> </AisleColumn>
                    <AisleColumn width={4}> <AisleButton onClick={handleRedirect} > Snacks </AisleButton> </AisleColumn>
                    <AisleColumn width={4}> <AisleButton onClick={handleRedirect} > Cooking </AisleButton> </AisleColumn>
                    <Grid.Column width={16} style={{ textAlign: 'center', paddingTop: 15 }}> <HideAisleButton onClick={handleRedirect}> show more </HideAisleButton> </Grid.Column>
                </Grid.Row>


                

                <Grid.Row >
                    <Grid.Column width={16}>
                        <GreyText> Search for what you want and add it just like you’d do with a regular list… </GreyText>
                    </Grid.Column>
                    <SearchInputColumn width={14}>
                        <SearchInput fluid placeholder='Search for what you want and add it just like you’d do with a regular list…'
                            onChange={onSearch}
                        />
                    </SearchInputColumn>
                </Grid.Row>
                <Grid.Row>
                    <BusinessColumns centered>
                        {countProducts === 0 ? (
                            <h2> This store has no products,please select another store </h2>
                        ) : null}
                    </BusinessColumns>
                </Grid.Row>
                {products.map(product => {
                    return productSearch(product)
                })}
                <Grid.Row >
                    <BusinessColumns centered>
                        <Collapsible width={16} fluid trigger={<DropdownButtons > Continue shopping from another store within Mall A <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                            <Grid width={16}  >
                                <Grid.Row >
                                    <Grid.Column width={5} style={{ paddingLeft: 40 }} >
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
                                        <Image src={BusinessPic} style={{ paddingLeft: 40 }} />
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
export default withCookies(UserList)