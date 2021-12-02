import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Cookies, withCookies } from 'react-cookie';
import history from '../../History'
import { HOST_API } from '../../endpoints';
import Delay from 'react-delay'
import { Grid, Button, Typography, Card, CardMedia, CardActions, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import "react-multi-carousel/lib/styles.css";
import "./multicarousel.css";
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import Navbar from '../Navbar/Navbar';

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
    roundedGrid: {
        borderRadius: '30px',
        background: '#FFBD59',
        height: '70px',
        marginLeft: 20,
    },
    card: {
        height: 490,
    },
    showMore: {
        background: '#FFBD59 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '70px !important',
        width: '200px',
        fontSize: '22px !important',
        color: '#050504 !important',
        margin: '50px auto !important',
        textTransform: 'none',
    },
}))

const SelectedAisles = (props) => {
    const classes = useStyles()
    const { cookies } = props
    const cookie = new Cookies()
    const [products, setProducts] = useState([])
    console.log(products)
    const storedItems = cookies.get('cart')
    const [showQty, setShowQty] = useState([])
    const [productsInBasket, setProductsInBasket] = useState()
    const [countProducts, setCountProducts] = useState()
    const [categories, setCategories] = useState([])
    const [showDelayedComponent, setShowDelayedComponent] = useState(false)
    const clickedAisle = (props.location && props.location.state) || '';
    const [currentURL, setCurrentURL] = useState(`${HOST_API}zist/categories/${clickedAisle?.id}/products/`)
    // const [delay, setDelay] = useState(false)
    const userData = cookies.get('login-res')
    const token = userData?.access
    const placeholderImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAAWlBMVEXh5urDzdba3+LFz9nf5+rEz9HBy8/S3d/CytHJztHBzNLL19ji6e3R193g5enCzNbGys7O1t7Z4OPa4ejS2t/J0tXV3eXU2dze5u3N0tXa5O69yNHZ4+XF0dKFwnRbAAAC4klEQVR4nO3c63KqMBRAYYLIQY3BCy1yaN//NQ83EQjqHi/TM93r+9GZxtYZ1wRMwDYIAAAAAAAAAAAAAAAAAAAAAAAAADzKRe/ifvqlvVi4fJfwp1/ai4XmXShFKUrdRikpSklRSopSUpSSopTUoFSaPC/VUSp8no5Sixc83YJSQpSSopQUpWa5wAZRVH25oNSVXy52cbwrwksrSs3al93ywvRXgik1w636dWayO3SDlPJZM1hlmqQbpZTHZokZltq2w4pLuWD+FZ8WwylVza9TM6y51CE+zo6no1LGtD+luJRdrhdz9ziP5TiUyZphxaWytTEfkT9+8Eo1iyrFperzdrzxx4/lJJXqOVXtVvbNI0lup49Fy/W4VHuIKi3VH2PpzjtV2c2oVLpQ/t636t/gpqmcG6+nui5aS+WXGitvVmXlYJ3QLTy1lnKDFOU+mJyrbH4+8tKkOA8qLVUMVpdpkgfjaeWCo0nqSZeaz35QZ6mveLxh+fTeAIMwL4p8mERnqY/JOsD42xrv5KWyVG48p7tPp6+UC06JFyrd+8ffhL5Sl0u/Q+vNzA5wRGGpMPVDVamyO0+nsNRqLtRlLe5x7QPqStlsdkrVZq/rBce0XaWrKxUmV0v525pKkZQ6S0Wba52qbc102eXs32pY6Zw6LK+XMmUxXiu4bTP/dJa60alONdrWhKZdTqgslfmLzqHUHPpUUXY+o2ksdbx6Nj9bdgtQ+/XdjyksZYu7peLmbo2z2TLWXCq8few1mm2N2w+TKiwlCFVvayYfTFBYKpveRr+S6jseD+grtZV0qlNNvqeUFKUo1aGUFKWkKCVFKSlKSfmlRAtPj74reXa7fsxW3acXD5vHtH/loKiUs49q7kQoKvUkSklRSopSUipKpeXqeYNPyf7eUq9GKUpR6jZKSVFKilJSlJKilBSlpML4XX5bKffnXX7bf/0GAAAAAAAAAAAAAAAAAAAAAAAA8D/6B0YsNs6SxFarAAAAAElFTkSuQmCC'
    
    const fetchedProductsByCategory = () => {
        axios.get(currentURL, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                if (response.status === 200) {
                    const prds = [...products, ...response.data.results]
                    setProducts(prds)
                    setCountProducts(response.data.count)
                    setCurrentURL(response.data.next)
                }

            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        if (storedItems) {
            setProductsInBasket(storedItems)
        } else {
            setProductsInBasket([])
        }
    }, [])

    useEffect(() => {
        fetchedProductsByCategory()
    }, [])
    const handleAddProduct = (e, name, price, quantity, id, img) => {
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
            const d = { productName: name, productPrice: price, quantity: quantity, id: id, image: img }
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
        const product = productsInBasket?.find(prd => prd.id === product_id)
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
        history.goBack()
    }



    return (
        <div className={classes.mainDiv}  >
            <div className={classes.mainGrid} >
                <Navbar />
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} style={{ textAlign: 'center' }} >
                        <Typography variant='h5' className={classes.boldFont} > {clickedAisle?.category} </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} >
                    <Grid item xs={12}>
                        <Grid container spacing={3} >
                            {products?.map(product => {
                                return (
                                    <Grid item xs={12} sm={4} md={3} lg={3} key={product.id} >
                                        <Card className={classes.card}>
                                            <Grid container >
                                                <CardMedia>
                                                    <Grid item xs={12}>
                                                        <img src={product.image ? product.image : placeholderImage} alt='Product image' style={{ width: '100%', height: '300px', maxHeight: '300px' }} />
                                                    </Grid>
                                                </CardMedia>
                                                <Grid container item xs={12}>
                                                    {!showQty.includes(product.id) ? (
                                                        <Grid item xs={12} style={{ margin: 'auto 0' }} >
                                                            <Grid container style={{ padding: '0px', top: '-20px', }} >
                                                                <Grid item xs={10} />
                                                                <Grid item xs={2} >
                                                                    <CardActions>
                                                                        <Button className={classes.roundedButton} onClick={(e) => handleAddProduct(e, product.name, product.price, 1, product.id, product.image)} >
                                                                            <AddIcon />
                                                                        </Button>
                                                                    </CardActions>
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
                                                                            <Grid container item xs={12} sm={4} md={4} lg={6} >
                                                                                <Grid item xs={8} />
                                                                                <Grid item xs={4} style={{ margin: 'auto 0', }}>
                                                                                    <CardActions>
                                                                                        <Button className={classes.roundedBlackButton} onClick={e => setShowQty([...showQty, product.id])}> {getProductQty(product.id)} </Button>
                                                                                    </CardActions>
                                                                                </Grid>
                                                                                {/* <Grid item xs={3} /> */}
                                                                            </Grid>
                                                                        ) : (
                                                                            <Grid container item xs={10} sm={12} md={10} lg={10} style={{ textAlign: 'center' }} className={classes.roundedGrid} >
                                                                                <CardActions>
                                                                                    <Grid item xs={3} >
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
                                                                                </CardActions>
                                                                                <CardContent>
                                                                                    <Grid item xs={3} style={{ textAlign: 'center' }} >
                                                                                        <Typography variant='h6' >  {getProductQty(product.id)} </Typography>
                                                                                    </Grid>
                                                                                </CardContent>
                                                                                <Grid item xs={3} >
                                                                                    <CardActions>
                                                                                        <Button style={{ fontSize: '20px' }} onClick={e => changeQuantity(e, product.id, 1)} > <AddIcon /> </Button>
                                                                                    </CardActions>
                                                                                </Grid>
                                                                            </Grid>
                                                                        )}
                                                                    </>
                                                                ) : null}

                                                            </Grid>
                                                        </Grid>
                                                    )}
                                                </Grid>
                                                <CardContent>
                                                    <Grid item xs={12}>
                                                        <Typography variant='h6'> {product.name} </Typography>
                                                        <Typography variant='h6'> Ksh.{product.price} </Typography>
                                                    </Grid>
                                                </CardContent>
                                            </Grid>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} style={{margin: '0 auto'}}  >
                            <Button className={classes.showMore} onClick={(e) => fetchedProductsByCategory()} >
                                Load more
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                {/* {
                    productsInBasket?.length !== 0 ? (
                        <Grid container  >
                            <Grid item xs={3} style={{ margin: '10px auto' }} >
                                <Button className={classes.getStartedButton} onClick={handleGoingBackToList} > Go back </Button>
                            </Grid>
                        </Grid>
                    ) : null
                } */}
            </div>
        </div>
    )
}
export default withCookies(SelectedAisles)