import React, { useState, useEffect } from 'react';
import { Grid, Image, Button, List, Icon } from "semantic-ui-react";
import styled from 'styled-components';
import blueberries from './../../Assets/blue-berries.png';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from '../../endpoints';
import history from '../../History';
import shelving from './../../Assets/shelving.png';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSnackbar } from 'notistack';

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
    width: 100% !important;
    background: #0A0806 0% 0% no-repeat padding-box !important;
    border: 1px solid #C19A6B !important;
    border-radius: 5px !important;
    height: 60px !important;
    color: white !important;
    font-size: 18px !important;
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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [currentId, setCurrentId] = React.useState(null);
    console.log(currentId, '-------------------===')
    const open = Boolean(anchorEl);
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = (event) => {
        // console.log(event.currentTarget, 'event====')
        setAnchorEl(event.currentTarget);
    };

    const handleHamburgerClick = (e, id) => {
        console.log(id, '990000werd=======')
        e.preventDefault()
        setCurrentId(id);
        handleClick(e)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log(products)
    const handleEditProduct = (e, id,name,price,stock,description,category) => {
        const data = {id: id, name: name,price: price, stock: stock, description: description, category: category}
        console.log(data)
        history.push({
            state: data,
            pathname: '/vendor-product/edit'
        })
    }
    const handleGoingBack = () => {
        history.goBack()
    }
    const handleAddProduct = () => {
        history.push('inventory-create-product')
    }
    const fetchProducts = () => {
        axios.get(HOST_API + `zist/vendor/products/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => {
                if (res.status == 200) {
                    setProducts(res.data.results)
                    setProductCount(res.data.count)
                }
            }, (error) => {
                console.log(error)
            });
    }
    useEffect(
        fetchProducts
        , [products]);
    const handleDeleteProduct = (e, id) => {
        e.preventDefault()
        console.log(id)
        axios.delete(HOST_API + `zist/vendor/products/${id}/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((res) => {
                if (res.status == 204) {
                    enqueueSnackbar(`You have successfully deleted the product`, { variant: 'success' })
                    handleClose()
                }
            }, (error) => {
                enqueueSnackbar(`${error}`, { variant: 'error' })
                handleClose()
            });
    }
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
                        <CenteredColumn width={10}>
                            <h2> You have no products yet, please create new products</h2>
                        </CenteredColumn>
                        <ImageColumn width={16}>
                            <Grid>
                                <Grid.Row>
                                    <CenteredColumn width={4}>
                                        <Buttonx type='submit' onClick={handleAddProduct} > Add new item </Buttonx>
                                    </CenteredColumn>
                                </Grid.Row>
                            </Grid>
                        </ImageColumn>
                    </ProductRows>
                ) : (
                    <>
                        {/* <ProductRows>
                            <IntroColumn>
                                <List>
                                    <EditButton name='pencil' > EDIT PRODUCTS  <EditIcon name='pencil' size='small' /> </EditButton>
                                </List>
                            </IntroColumn>
                        </ProductRows> */}
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
                                <h3 style={{ textAlign: '' }}> CATEGORY </h3>
                            </Grid.Column>
                        </ProductRows>
                        {products?.map(product => {
                            console.log(product, '=====')
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
                                    <ItemsColumn width={2}>
                                        <OffersButton> {product.category.category} </OffersButton>
                                    </ItemsColumn>
                                    <ItemsColumn width={1}>
                                        <div>
                                            <IconButton
                                                aria-label="more"
                                                aria-controls="long-menu"
                                                aria-haspopup="true"
                                                style={{ padding: '0 auto !important' }}
                                                onClick={e => handleHamburgerClick(e, product.id)}
                                            >
                                                <MoreVertIcon style={{ margin: '0 auto !important' }} />
                                            </IconButton>
                                            <Menu
                                                // onClick={handleClick}
                                                id="long-menu"
                                                anchorEl={anchorEl}
                                                keepMounted
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                    style: {
                                                        width: '70px',
                                                    },
                                                }}
                                            >
                                                <MenuItem onClick={e => handleEditProduct(e, currentId,product.name,product.price,product.metadata,product.description,product.category.category)}>
                                                    Edit
                                                </MenuItem>
                                                <MenuItem onClick={e => handleDeleteProduct(e, currentId)}>
                                                    Delete
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    </ItemsColumn>
                                </ProductRows>
                            )
                        })}
                        <ProductRows>
                            <ImageColumn width={16}>
                                <Grid>
                                    <Grid.Row>
                                        <CenteredColumn width={4}>
                                            <Buttonx type='submit' onClick={handleAddProduct} > Add new item </Buttonx>
                                        </CenteredColumn>
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