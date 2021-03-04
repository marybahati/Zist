import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Input, Icon, Card } from "semantic-ui-react";
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
import History from '../../History'
import { ToastContainer, toast } from 'react-toastify';
import { RatedStars } from './../ShoppingPage/Ratings';
import {HOST_API} from './../../endpoints';

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
const SearchColumn = styled(Grid.Column)`
  margin: 0 auto !important;
  background:pink;
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
const ProductRows = styled(Grid.Row)`
   margin : ${props => props.spaced ? "0 0 20px 0 !important" : " 0 0 40px 0 !important "};
`;
const DropdownButtons = styled(Button)`
    background: #F9F7F1 !important;
    border: 0 ;
    box-shadow: 0px !important;
    font-size: 22px !important;
    padding: 0 !important;
    color: black !important;
`;
const CardColumn = styled(Grid.Column)`
    margin-bottom: 100px;
    padding: 0 0 0 30px !important;
`;
const Columns = styled(Grid.Column)`
    margin: auto 0 !important;
    padding: 0 !important;
    // border-bottom: 1px solid black;
`;
const GreyText = styled.h2`
color: #707070;
`
const UserList = (props) => {
    const [listId,setListId] = useState()
    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData.access 
    console.log(userData,token)

    const cookie = new Cookies()
    cookie.set('list-id',{path:'/'})

    const clickedBusiness = (props.location && props.location.state) || '';
    console.log(props.location && props.location.state)
    const options = [
        {
            key: 'Strawberry',
            name: 'Strawberry',
            price: '900',
            image: { src: strawberries },
        },
        {
            key: 'Banana',
            name: 'Banana',
            price: '700',
            image: { src: bananas },
        },
        {
            key: 'Blueberry',
            name: 'Blueberry',
            price: '300',
            image: { src: blueberries },
        },
        {
            key: 'Onions',
            name: 'Onions',
            price: '120',
            image: { src: blueberries },
        },
    ]

    const [selectedOption, setSelectedOption] = useState('')
    const [products, setProducts] = useState([])
    const [hideAisles, setHideAisles] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [showFruits, setShowFruits] = useState(false)
    const [showGreens, setShowGreens] = useState(false)
    const [showSnacks, setShowSnacks] = useState(false)
    const [showCooking, setShowCooking] = useState(false)
    const [cart, setCart] = useState([])
    const [open, setOpen] = useState(false)
    console.log(products)
    console.log(cart)
    useEffect(() => {
        axios.post(HOST_API +'zist/list/', 
        { name:'list'},
        { headers: { "Authorization": `Bearer ${token}` } })
            .then((response) => {
                console.log(response)
                if (response.status == 201) {
                    const res = response.data
                    //   setBusinesses(res)
                } 
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    // useEffect(() => {
    //     axios.get('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/zist/business/',
    //     { headers: {"Authorization" : `Bearer ${token}`} 
    //     })
    //       .then((response) => {
    //         if (response.status == 200) {
    //           const res = response.data
    //           setProducts(res)
    //         }
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }, [])

    const handleHideAisles = () => {
        setHideAisles(true)
        setShowFruits(false)
        setShowGreens(false)
        setShowSnacks(false)
        setShowCooking(false)
    }
    const handleShowAisles = () => {
        setHideAisles(false)
        setShowFruits(false)
        setShowGreens(false)
        setShowSnacks(false)
        setShowCooking(false)
    }
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

    const renderProducts = (product) => {
        if (searchText !== '' && product.name.toLowerCase().indexOf(searchText) === -1) {
            return null
        }
        return (

            // <CardColumn width={7} style={{ margin: '0 30px 80px 0' }}>
            //     <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070', minHeight: '500px ', color: 'black' }} key={product.name} onClick={(e) => handleAddProduct(e, product.name, product.price)} >
            //         <Image src={card2} wrapped ui={false} />
            //         <Card.Content>
            //             <Card.Header style={{ paddingTop: 20 }}>
            //                 {product.name}
            //             </Card.Header>
            //             <Card.Header style={{ paddingTop: 20 }}>
            //                 Ksh.{product.price}
            //             </Card.Header>
            //         </Card.Content>
            //     </Card>
            // </CardColumn>
            // <ProductRows key={product.name} as='button' onClick={(e) => handleAddProduct(e, product.name, product.price)}>
            //     <Grid.Column width={5}>
            //         <ProductImages src={bananas} />
            //     </Grid.Column>
            //     <ProductName center width={5} >
            //         <h3> {product.name} </h3>
            //     </ProductName>
            //     <ItemsColumn width={4}>
            //         <h3> Ksh.{product.price} </h3>
            //     </ItemsColumn>
            // </ProductRows>
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
                                <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} onClick={(e) => handleAddProduct(e, product.name, product.price)}>
                                    <Icon name='add circle' size='big' color='black' />
                                </Button>
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
                        {/* <Grid.Row>
                            <Grid.Column width={6}></Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <h2> {product.name} </h2>
                                <List link>
                                    <List.Item as='a' href=''>See product images</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row> */}
                    </Grid>
                </Columns>
                {/* <Columns width={5}>
                    <Grid>
                        <Grid.Row style={{ padding: 0 }}>
                            <Grid.Column width={10}>
                            </Grid.Column>
                            <Grid.Column width={6}>
                                <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} onClick={(e) => handleAddProduct(e, product.name, product.price)}>
                                    <Icon name='add circle' size='big' color='black' />
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ padding: 0 }}>
                            <Grid.Column width={16} >
                                <h2> Ksh.{product.price} </h2>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Columns> */}
            </Grid.Row>

        )
    }
    const onSearch = (e) => {
        setSearchText({ searchText: e.target.value })
        console.log(searchText)
    }
    // const filteredProducts = products.filter(product => {
    //     return product.name.toLowerCase().includes(searchText)
    //     console.log(product.name)
    // })
    const suggestedProducts = products.slice(0, 5).map(product => {
        return (
            // <CardColumn width={7} style={{ margin: '0 30px 80px 0',background:'white !important',border:'1px black' }} >
            //     <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070', minHeight: '500px ', color: 'black' }} key={product.name} onClick={(e) => handleAddProduct(e, product.name, product.price)} >
            //         <Image src={card2} wrapped ui={false} />
            //         <Card.Content>
            //             <Card.Header style={{ paddingTop: 20 }}>
            //                 {product.name}
            //             </Card.Header>
            //             <Card.Header style={{ paddingTop: 20 }}>
            //                 Ksh.{product.price}
            //             </Card.Header>
            //         </Card.Content>
            //     </Card>
            // </CardColumn>
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
                                <Button basic style={{ boxShadow: 'none', background: 'inherit', border: 'none' }} onClick={(e) => handleAddProduct(e, product.name, product.price)}>
                                    <Icon name='add circle' size='big' color='black' />
                                </Button>
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
    const handleAddedProduct = () => {
        History.push({
            pathname: '/create-list',
            state: cart
        });
    }

    const handleAddProduct = (e, productName, productPrice) => {
        const d = { productName: productName, productPrice: productPrice }
        //    [...cart, d]
        console.log(d)
        setCart([...cart, d])
        console.log(cart, d)
    }

    useEffect(() => {
        axios.get(HOST_API +'zist/products/', {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                if (response.status == 200) {
                    setProducts(response.data.results);
                }

            })
            .catch(error => {
                console.log(error)
                // setOpen(true)
                // toast.error("Please login to start shopping ",{
                //     className:'toast',
                //     draggable: true,
                //     position: toast.POSITION.TOP_CENTER,
                //     type: toast.TYPE.ERROR,
                //     hideProgressBar: true
                //   })   
            })
    }, [])
    return (
        <MainDiv>
            <ToastContainer autoClose={4000} onOpen={open} />
            <MainGrid>
                <Grid.Row>
                    <IntroColumn>
                        <UserName> Shopping List </UserName>
                        <BusinessImage src={store} />
                        <UserName> {clickedBusiness.name}   <Icon name='check circle' color='yellow' /> </UserName>
                        {/* <RatedStars rating={5} /> */}
                        {/* <List bulleted horizontal >
                            <List.Item ></List.Item>
                            <List.Item style={{ fontSize: 20, paddingBottom: 13 }}  >{clickedBusiness.type} </List.Item>
                        </List> */}
                    </IntroColumn>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <GreyText> Take a detour within the store by browsing through the aisles, just like you’d do in a physical store…</GreyText>
                    </Grid.Column>
                </Grid.Row>
                {hideAisles ? (
                    <Grid.Row>
                        <Grid.Column width={3}> <HideAisleButton onClick={handleShowAisles}> Show Aisles </HideAisleButton> </Grid.Column>
                    </Grid.Row>
                ) : (
                        <Grid.Row>
                            <AisleColumn width={4} >
                                <AisleButton onClick={handleShowFruits} > Fruits </AisleButton>
                            </AisleColumn>
                            <AisleColumn width={4}> <AisleButton onClick={handleShowGreens} > Greens </AisleButton> </AisleColumn>
                            <AisleColumn width={4}> <AisleButton onClick={handleShowSnacks} > Snacks </AisleButton> </AisleColumn>
                            <AisleColumn width={4}> <AisleButton onClick={handleShowCooking} > Cooking </AisleButton> </AisleColumn>
                            <Grid.Column width={16} style={{ textAlign: 'center', paddingTop: 15 }}> <HideAisleButton onClick={handleHideAisles}> Hide Aisles </HideAisleButton> </Grid.Column>
                        </Grid.Row>
                    )}
                {showFruits ? (
                    <Grid.Row >
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16} style={{ background: '#fff', border: '2px solid black' }}>
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center', padding: '20px 0 10px 0' }}>
                                            <UserName > Fruits </UserName>
                                        </Grid.Column>
                                    </Grid.Row>
                                    {suggestedProducts}
                                    <Grid.Row style={{ paddingBottom: 30 }}>
                                        <Grid.Column width={10}></Grid.Column>
                                        <Grid.Column width={6}>
                                            {cart.length !== 0 ? <Button basic as='a' onClick={handleAddedProduct}> View List  </Button> : null}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showGreens ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16} style={{ background: '#fff', border: '2px solid black' }} >
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center', padding: '20px 0 10px 0' }}>
                                            <UserName > Greens </UserName>
                                        </Grid.Column>
                                    </Grid.Row>
                                    {suggestedProducts}
                                    <Grid.Row style={{ paddingBottom: 30 }}>
                                        <Grid.Column width={10}></Grid.Column>
                                        <Grid.Column width={6}>
                                            {cart.length !== 0 ? <Button basic as='a' onClick={handleAddedProduct}> View List  </Button> : null}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showSnacks ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16} style={{ background: '#fff', border: '2px solid black' }} >
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center', padding: '20px 0 10px 0' }}>
                                            <UserName > Snacks </UserName>
                                        </Grid.Column>
                                    </Grid.Row>
                                    {suggestedProducts}
                                    <Grid.Row style={{ paddingBottom: 30 }}>
                                        <Grid.Column width={10}></Grid.Column>
                                        <Grid.Column width={6}>
                                            {cart.length !== 0 ? <Button basic as='a' onClick={handleAddedProduct}> View List  </Button> : null}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {showCooking ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Collapsible width={16} open={true} fluid trigger={<DropdownButtons > Suggestions <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
                                <Grid width={16} style={{ background: '#fff', border: '2px solid black' }} >
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center', paddingTop: 30 }}>
                                            <UserName > Cooking </UserName>
                                        </Grid.Column>
                                    </Grid.Row>
                                    {options.map(product => {
                                        return renderProducts(product)
                                    })}
                                    <Grid.Row style={{ paddingBottom: 30 }}>
                                        <Grid.Column width={10}></Grid.Column>
                                        <Grid.Column width={6}>
                                            {cart.length !== 0 ? <Button basic as='a' onClick={handleAddedProduct}> View List  </Button> : null}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Collapsible>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                <Grid.Row >
                    {/* <SearchInputColumn width={14}>
                        <SearchInput
                        width={16}
                            placeholder='Search for what you want and add it just like you’d do with a regular list…'
                            fluid
                            // selection
                            scrolling
                            options={options}
                            // clearable
                            search
                            onChange={(e, { value }) => setSelectedOption({ selectedOption: value })}
                            noResultsMessage='Oops ! Looks like our search came back empty… We suggest checking the spelling or searching for something else'
                        >
                        </SearchInput>
                    </SearchInputColumn> */}
                    <Grid.Column width={16}>
                        <GreyText> Search for what you want and add it just like you’d do with a regular list… </GreyText>
                    </Grid.Column>
                    <SearchInputColumn width={14}>
                        <SearchInput fluid placeholder='Search for what you want and add it just like you’d do with a regular list…'
                            onChange={onSearch}
                        />
                    </SearchInputColumn>
                </Grid.Row>
                {/* {products.map(product => {
                    return renderProducts(product)
                })} */}
            </MainGrid>
        </MainDiv>
    )
}
export default withCookies(UserList)