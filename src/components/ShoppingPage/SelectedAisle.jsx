import React, { useState, useEffect } from 'react';
import blueberries from './../../Assets/blue-berries.png';
import axios from 'axios'
import { Cookies, withCookies } from 'react-cookie';
import history from '../../History'
import { HOST_API } from '../../endpoints';
import Delay from 'react-delay'
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import "react-multi-carousel/lib/styles.css";
import "./multicarousel.css";
import bananas from './../../Assets/bananas.png';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: ' #fff 0% 0% no-repeat padding-box',
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
        // height: 40,
        top: -80,
    },
}))

const SelectedAisles = (props) => {
    const classes = useStyles()
    const { cookies } = props
    const cookie = new Cookies()
    const [products, setProducts] = useState([])
    const storedItems = cookies.get('cart')
    const [showQty, setShowQty] = useState([])
    const [productsInBasket, setProductsInBasket] = useState()
    const [countProducts, setCountProducts] = useState()
    const [showDelayedComponent, setShowDelayedComponent] = useState(false)
    // const [delay, setDelay] = useState(false)
    const userData = cookies.get('login-res')
    const token = userData?.access
    const clickedAisle = (props.location && props.location.state) || '';
    console.log(showDelayedComponent)

    const fetchedProductsByCategory = () => {
        axios.get(HOST_API + `zist/categories/${clickedAisle?.id}/products/`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then((response) => {
                if (response.status === 200) {
                    setProducts(response.data.results)
                    setCountProducts(response.data.count)
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
        fetchedProductsByCategory()
    }, [])


    const handleAddProduct = (e, name, price, quantity, id) => {
        const checkIndex = productsInBasket.findIndex(product => product.id === id);
        if (checkIndex !== -1) {
            productsInBasket[checkIndex].quantity++;
            cookie.set('cart', productsInBasket, { path: '/' })
            setShowQty([...showQty, id])
            console.log("Quantity updated:", productsInBasket);
            const timer = setTimeout(() => {
                setShowDelayedComponent(true)
              }, 6000)
            return () => clearTimeout(timer)    
        } else {
            const d = { productName: name, productPrice: price, quantity: quantity, id: id }
            const aa = [...productsInBasket, d]
            setProductsInBasket(aa)
            setShowQty([...showQty, id])
            cookie.set('cart', aa, { path: '/' })
            console.log('The product has been added to cart:', productsInBasket)
            const timer = setTimeout(() => {
                setShowDelayedComponent(true)
              }, 6000)
            return () => clearTimeout(timer)
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
            setShowDelayedComponent(true)
          }, 6000)
        return () => clearTimeout(timer)
    }
    console.log(productsInBasket)
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
        history.goBack()
    }



    return (
        <div className={classes.mainDiv}  >
            <div className={classes.mainGrid} >
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} style={{ textAlign: 'center' }} >
                        <Typography variant='h5' className={classes.boldFont} > {clickedAisle?.name} </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={12} >
                    <Grid item xs={12}>
                        <Grid container spacing={3} >
                            {products?.map(product => {
                                return (
                                    <Grid item xs={4} key={product.id}>
                                        <Grid container >
                                            <Grid item xs={12}>
                                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAAWlBMVEXh5urDzdba3+LFz9nf5+rEz9HBy8/S3d/CytHJztHBzNLL19ji6e3R193g5enCzNbGys7O1t7Z4OPa4ejS2t/J0tXV3eXU2dze5u3N0tXa5O69yNHZ4+XF0dKFwnRbAAAC4klEQVR4nO3c63KqMBRAYYLIQY3BCy1yaN//NQ83EQjqHi/TM93r+9GZxtYZ1wRMwDYIAAAAAAAAAAAAAAAAAAAAAAAAADzKRe/ifvqlvVi4fJfwp1/ai4XmXShFKUrdRikpSklRSopSUpSSopTUoFSaPC/VUSp8no5Sixc83YJSQpSSopQUpWa5wAZRVH25oNSVXy52cbwrwksrSs3al93ywvRXgik1w636dWayO3SDlPJZM1hlmqQbpZTHZokZltq2w4pLuWD+FZ8WwylVza9TM6y51CE+zo6no1LGtD+luJRdrhdz9ziP5TiUyZphxaWytTEfkT9+8Eo1iyrFperzdrzxx4/lJJXqOVXtVvbNI0lup49Fy/W4VHuIKi3VH2PpzjtV2c2oVLpQ/t636t/gpqmcG6+nui5aS+WXGitvVmXlYJ3QLTy1lnKDFOU+mJyrbH4+8tKkOA8qLVUMVpdpkgfjaeWCo0nqSZeaz35QZ6mveLxh+fTeAIMwL4p8mERnqY/JOsD42xrv5KWyVG48p7tPp6+UC06JFyrd+8ffhL5Sl0u/Q+vNzA5wRGGpMPVDVamyO0+nsNRqLtRlLe5x7QPqStlsdkrVZq/rBce0XaWrKxUmV0v525pKkZQ6S0Wba52qbc102eXs32pY6Zw6LK+XMmUxXiu4bTP/dJa60alONdrWhKZdTqgslfmLzqHUHPpUUXY+o2ksdbx6Nj9bdgtQ+/XdjyksZYu7peLmbo2z2TLWXCq8few1mm2N2w+TKiwlCFVvayYfTFBYKpveRr+S6jseD+grtZV0qlNNvqeUFKUo1aGUFKWkKCVFKSlKSfmlRAtPj74reXa7fsxW3acXD5vHtH/loKiUs49q7kQoKvUkSklRSopSUipKpeXqeYNPyf7eUq9GKUpR6jZKSVFKilJSlJKilBSlpML4XX5bKffnXX7bf/0GAAAAAAAAAAAAAAAAAAAAAAAA8D/6B0YsNs6SxFarAAAAAElFTkSuQmCC' alt='Product image' />
                                            </Grid>
                                            <Grid item xs={12}>
                                                {!showQty.includes(product.id) ? (
                                                    <Grid item xs={9} style={{ margin: 'auto 0' }} >
                                                        <Grid container spacing={3} >
                                                            <Grid item xs={9} /> 
                                                            <Grid item xs={1}  >
                                                                <Button className={classes.roundedButton} onClick={e => handleAddProduct(e, product.name, product.price, 1, product.id)} >
                                                                    <AddIcon />
                                                                </Button>
                                                            </Grid>
                                                            <Grid item xs={2}  />
                                                        </Grid>
                                                    </Grid>
                                                ) : (
                                                    <Grid item xs={9} style={{ margin: 'auto 0' }}>
                                                        <Grid container spacing={3} >
                                                            <Grid item xs={6} />
                                                            {showDelayedComponent ? (
                                                                <Grid container item xs={6}> 
                                                                    <Grid item xs={8} />
                                                                    <Grid item xs={1}>
                                                                    <Button className={classes.roundedBlackButton} onClick={e => setShowQty([...showQty, product.id]) }> {getProductQty(product.id)} </Button>  
                                                                    </Grid>
                                                                    <Grid item xs={3} />
                                                                 </Grid>
                                                            ) : (
                                                                <Grid container item xs={6} className={classes.roundedGrid} >
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
                                                                    <Grid item xs={2} />
                                                                    <Grid item xs={3} style={{ textAlign: 'center' }} >
                                                                        <Typography variant='h6' >  {getProductQty(product.id)}  </Typography>
                                                                    </Grid>
                                                                    <Grid item xs={4} >
                                                                        <Button style={{ fontSize: '20px' }} onClick={e => changeQuantity(e, product.id, 1)} > <AddIcon /> </Button>
                                                                    </Grid>
                                                                </Grid>
                                                            )}
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
                                )
                            })}
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