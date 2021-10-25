import React, { useState, useEffect } from 'react';
import blueberries from './../../Assets/blue-berries.png';
import axios from 'axios'
import { Cookies, withCookies } from 'react-cookie';
import history from '../../History'
import { HOST_API } from '../../endpoints';
import { Grid, Button, Typography, TextField, Avatar, AppBar, Toolbar, Link, Card, CardHeader, CardMedia, CardActions, CardContent, IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./multicarousel.css";
import bananas from './../../Assets/bananas.png';
import Navbar from '../Navbar/Navbar';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: ' #FFF 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
    },
    mainGrid: {
        width: '90%',
        margin: '0 auto 100px auto !important',
    },
    boldFont: {
        fontWeight: 'bold !important',
        padding: '10px 0',
    },
    aisleButton: {
        // width: '100% !important',
        // background: '#ECECEC !important',
        // height: '60px !important',
        // color: '#FFBD59 !important',
        fontSize: '17px !important',
        // borderRadius: '10px',
        // opacity: 1,
    },
    getStartedButton: {
        background: '#FFBD59 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '70px !important',
        width: '100%',
        fontSize: '26px !important',
        color: '#050504 !important',
        margin: '50px 0 !important',
    },
    roundedGrid: {
        // borderRadius: '30px',
        // background: '#FFBD59',
        // width: '150px',
        // height: '50px',
        // textTransform: 'none',
        // textAlign: 'center',
        // margin: '20px 0'
        borderRadius: '30px',
        background: '#FFBD59',
        // height: 40,
        top: -150,
    },
    seeAllGrid: {
        borderRadius: '30px',
        background: '#FFBD59',
        width: '150px',
        height: '50px',
        textTransform: 'none',
        textAlign: 'center',
        margin: '20px 0'
    },
    roundedButton: {
        borderRadius: '50%',
        background: '#DCDCDC',
        alignItems: 'center',
        minWidth: 20,
        top: -20
    },
    roundedBlackButton: {
        borderRadius: '50%',
        backgroundColor: 'black',
        alignItems: 'center',
        minWidth: 40,
        color: '#fff',
        height: 40,
        top: -20
    },

}))

const Aisles = (props) => {
    const classes = useStyles()
    const { cookies } = props
    const [products, setProducts] = useState([])
    const storedItems = cookies.get('cart')
    const [showQty, setShowQty] = useState([])
    const [productsInBasket, setProductsInBasket] = useState()
    const [fetchedProducts, setFetchedProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [showDelayedComponent, setShowDelayedComponent] = useState(false)
    const userData = cookies.get('login-res')
    const token = userData?.access
    const clickedBusiness = (props.location && props.location.state) || '';
    const businessId = clickedBusiness?.id
    const cookie = new Cookies()

    let groupedAisles = fetchedProducts?.reduce((r, a) => {
        r[a.category.category] = [...r[a.category.category] || [], a];
        return r;
    }, {});
    console.log("grouped categories", groupedAisles);

    useEffect(() => {
        if (storedItems) {
            setProductsInBasket(storedItems)
        } else {
            setProductsInBasket([])
        }
    }, [])
    useEffect(() => {
        axios.get(HOST_API + `zist/business/${businessId}/get_categories/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                if (response.status == 200) {
                    setCategories(response.data);
                }

            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        // axios.get(HOST_API + 'zist/products/', {
        axios.get(HOST_API + `zist/business/${businessId}/product_list/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                if (response.status == 200) {
                    setFetchedProducts(response.data.results);
                }

            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    const singleCategory = (e, cat) => {
        e.preventDefault()
        const matchedCategory = categories?.find(data => data.category === cat)
        history.push({
            pathname: '/shopping/single/category',
            state: matchedCategory
        })
    }
    const handleAddProduct = (e, name, price, quantity, id) => {
        const checkIndex = productsInBasket.findIndex(product => product.id === id);
        if (checkIndex !== -1) {
            productsInBasket[checkIndex].quantity++;
            cookie.set('cart', productsInBasket, { path: '/' })
            setShowQty([...showQty, id])
            console.log("Quantity updated:", productsInBasket);
            const timer = setTimeout(() => {
                setShowDelayedComponent(id)
            }, 6000)
            // return () => clearTimeout(timer)
        } else {
            const d = { productName: name, productPrice: price, quantity: quantity, id: id }
            const aa = [...productsInBasket, d]
            setProductsInBasket(aa)
            setShowQty([...showQty, id])
            cookie.set('cart', aa, { path: '/' })
            console.log('The product has been added to cart:', productsInBasket)
            const timer = setTimeout(() => {
                setShowDelayedComponent(id)
            }, 6000)
            // return () => clearTimeout(timer)
        }

    }
    const changeQuantity = (e, product_id, val) => {
        e.preventDefault()
        const curIndx = productsInBasket.findIndex(product => product_id === product.id)
        if (curIndx === -1) return

        const curObj = productsInBasket[curIndx]
        curObj['quantity'] += val
        productsInBasket[curIndx] = curObj
        setProductsInBasket([...productsInBasket])
        const timer = setTimeout(() => {
            setShowDelayedComponent(product_id)
        }, 6000)
        // return () => clearTimeout(timer)
    }
    const getProductQty = (product_id) => {
        const product = productsInBasket.find(prd => prd.id === product_id)
        return product?.quantity
    }
    const CalculateProductPrice = (product_id, product_price) => {
        const product = productsInBasket.find(prd => prd.id === product_id)
        const price = product ? product.productPrice * product.quantity : product_price
        return price
    }
    const deleteProduct = (e, productId) => {
        e.preventDefault()
        const deleteObj = productsInBasket?.findIndex(obj => obj.id === productId)
        productsInBasket.splice(deleteObj, 1)
        setProductsInBasket([...productsInBasket])
        cookie.set('cart', productsInBasket, { path: '/' })
        setShowQty('')
    }
    const handleGoingBackToList = () => {
        history.push({
            pathname: '/user-list',
            state: clickedBusiness
        })
    }
    const handleClickedAisle = (category) => {
        const data = { id: category.id, name: category.category }
        history.push({
            pathname: '/shopping/single/category',
            state: data
        })
    }
    const suggestedProducts = products.map((product, index) => {
        return (
            <Grid container item xs={12} spacing={3} style={{ padding: '35px 0' }} >
                <Grid item xs={3} >
                    <img src={blueberries} />
                </Grid>
                <Grid item xs={1} />
                {!showQty.includes(product.id) ? (
                    <Grid item xs={7} style={{ margin: 'auto 0' }} >
                        <Grid container spacing={3} >
                            <Grid item xs={5} >
                                <Typography variant='h5'>   {product.name} </Typography>
                                <Typography variant='h6'>   Ksh.{CalculateProductPrice(product.id, product.price)}  </Typography>
                            </Grid>
                            <Grid item xs={3} />
                            <Grid item xs={3} >
                                <Button onClick={() => handleAddProduct(product.name, product.price, 1, product.id)} >
                                    <AddCircleOutlineIcon fontSize='large' />
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                ) : (
                    <Grid item xs={7} style={{ margin: 'auto 0' }}>
                        <Grid container spacing={3} >
                            <Grid item xs={5} >
                                <Typography variant='h5'>   {product.name} </Typography>
                                <Typography variant='h6'>   Ksh.{CalculateProductPrice(product.id, product.price)}  </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid container item xs={5} style={{ textAlign: 'center' }} >
                                <Grid item xs={3} >
                                    <Button
                                        style={{ fontSize: '20px' }}
                                        onClick={e => {
                                            if (getProductQty(product.id) === 1) {
                                                changeQuantity(e, product.id, 0)
                                            } else {
                                                changeQuantity(e, product.id, -1)
                                            }
                                        }}
                                    > - </Button>
                                </Grid>
                                <Grid item xs={6} >
                                    <Typography variant='h6'>  {getProductQty(product.id)}  </Typography>
                                </Grid>
                                <Grid item xs={3} >
                                    <Button style={{ fontSize: '20px' }} onClick={e => changeQuantity(e, product.id, 1)} > + </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                )}

            </Grid>
        )
    })
    // console.log(arr) 
    return (
        <div className={classes.mainDiv}  >
            <div className={classes.mainGrid} >
                <Navbar />
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} style={{ textAlign: 'center' }} >
                        <Typography variant='h5' className={classes.boldFont} > Aisles </Typography>
                    </Grid>
                </Grid>
                <>
                    {Object.keys(groupedAisles).map((data, index) => (
                        <Grid container item xs={12} key={index} style={{ marginBottom: '20px' }} >
                            <Grid item xs={3} key={index} style={{ height: '250px', margin: 'auto 0' }} >
                                <Grid item xs={12} >
                                    <Typography
                                        variant='h5'
                                        key={data}
                                    >
                                        {data}
                                    </Typography>
                                    <Button className={classes.seeAllGrid} key={data} onClick={(e) => singleCategory(e, data)}> See all </Button>
                                </Grid>
                            </Grid>
                            <Grid container item xs={9} spacing={3} >
                                {groupedAisles[data].slice(0, 3).map((product) => (
                                    <Grid item xs={4} key={product.id} >
                                        <Grid container >
                                            <Grid item xs={12}>
                                                <img src={bananas} alt='Product image' />
                                            </Grid>
                                            <Grid container item xs={12}>
                                                {!showQty.includes(product.id) ? (
                                                    <Grid item xs={12} style={{ margin: 'auto 0' }} >
                                                        <Grid container >
                                                        <Grid item xs={11} />
                                                            <Grid item xs={1} >
                                                                <Button className={classes.roundedButton} onClick={(e) => handleAddProduct(e, product.name, product.price, 1, product.id)} >
                                                                    <AddIcon />
                                                                </Button>
                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={12} style={{ margin: 'auto 0' }}>
                                                        <Grid container spacing={3} >
                                                            <Grid item xs={6} />
                                                            {showQty.includes(product.id) ? (
                                                                <>
                                                                    {showDelayedComponent === product.id ? (
                                                                        <Grid container item xs={6}>
                                                                            <Grid item xs={9} />
                                                                            <Grid item xs={3} style={{ margin: 'auto 0' }}>
                                                                                <Button className={classes.roundedBlackButton} onClick={e => setShowQty([...showQty, product.id])}> {getProductQty(product.id)} </Button>
                                                                            </Grid>
                                                                            {/* <Grid item xs={3} /> */}
                                                                        </Grid>
                                                                    ) : (
                                                                        <Grid container item xs={6} style={{ textAlign: 'center' }} className={classes.roundedGrid} >
                                                                            <Grid item xs={4} >
                                                                                {getProductQty(product.id) === 1 ? (
                                                                                    <Button
                                                                                        style={{ fontSize: '20px' }}
                                                                                        onClick={e => deleteProduct(e, product.id)}
                                                                                    >
                                                                                        <DeleteIcon />
                                                                                    </Button>
                                                                                ) : (
                                                                                    <Button
                                                                                        style={{ fontSize: '20px' }}
                                                                                        onClick={e => changeQuantity(e, product.id, -1)}
                                                                                    > <RemoveIcon /> </Button>
                                                                                )}
                                                                            </Grid>
                                                                            <Grid item xs={4} style={{ textAlign: 'center' }} >
                                                                                <Typography variant='h6' >  {getProductQty(product.id)}  </Typography>
                                                                            </Grid>
                                                                            <Grid item xs={4} >
                                                                                <Button style={{ fontSize: '20px' }} onClick={e => changeQuantity(e, product.id, 1)} > <AddIcon /> </Button>
                                                                            </Grid>
                                                                        </Grid>
                                                                    )}
                                                                </>
                                                            ) : null}

                                                        </Grid>
                                                    </Grid>
                                                )}
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant='h6'> {product.name} </Typography>
                                                <Typography variant='h6'> Ksh.{product.price} </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    ))}
                </>
            </div>
        </div>
    )
}
export default withCookies(Aisles)