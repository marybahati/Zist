import React, { useState } from 'react';
import bananas from './../../Assets/bananas.png';
import strawberries from './../../Assets/strawberries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import Collapsible from 'react-collapsible';
import store from './../../Assets/store.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, TextField, Avatar, AppBar, Toolbar, Link } from "@material-ui/core";
import { Cookies,withCookies } from 'react-cookie';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationOn from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

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
        width: '100% !important',
        background: '#ECECEC !important',
        height: '60px !important',
        // color: '#FFBD59 !important',
        fontSize: '17px !important',
        borderRadius: '10px',
        opacity: 1,
    },
    getStartedButton: {
        background: '#FFBD59 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '70px !important',
        width: '200px',
        fontSize: '26px !important',
        color: '#050504 !important',
        margin: '50px auto !important',
        textTransform: 'none',
    },
}))

const OrderDetails = (props) => {
    const classes = useStyles()
    const { cookies } = props
    const cookie = new Cookies()
    const storedItems = cookies.get('cart')
    const info = (props.location && props.location.state) || '';
    const [cart, setCart] = useState(storedItems)
    const [n, setN] = useState([])
    const [proceed, setProceed] = useState(false)
    console.log(cart)
    const changeQuantity = (e, index, val) => {
        e.preventDefault()
        const curObj = cart[index]
        curObj['quantity'] += val
        cart[index] = curObj
        setCart([...cart])
    }
    const getProductQty = (product_id) => {
        const product = cart.find(prd => prd.id === product_id)
        console.log(product)
        return product?.quantity
    }
    const CalculateProductPrice = (product_id, product_price) => {
        const product = cart.find(prd => prd.id === product_id)
        const price = product ? product.productPrice * product.quantity : product_price
        return price
        console.log(price, product)
    }
    const deleteProduct = (e, productId) => {
        e.preventDefault()
        const deleteObj = cart?.findIndex(obj => obj.id === productId)
        cart.splice(deleteObj, 1)
        setCart([...cart])
        cookie.set('cart', cart, { path: '/' })
    }
    console.log(info)
    return (
        <div>
            <div className={classes.mainGrid}>
                <Grid container style={{ padding: '20px 0 0 0' }} >
                    <Grid item xs={12} style={{ textAlign: 'center', margin: '0 auto' }} >
                        {/* <Typography variant='h4' > Order details </Typography> */}
                        {/* <img src={BusinessPic} style={{ padding: '15px 0' }} /> */}
                        <Typography variant='h5' > {info.clickedBusiness.name} </Typography>
                        <Typography variant='h5' > Your List </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ padding: '20px 0 20px 0' }} >
                    <Grid item xs={5} >
                        <Typography variant='h6' > Products </Typography>
                    </Grid>
                </Grid>
                {cart?.map((product, index) => {
                    return (
                        <Grid key={product.id} container item xs={12} spacing={3} style={{ paddingBottom: 15 }} >
                            <Grid container item xs={1}>
                                <Grid item xs={12} >
                                    <Typography gutterBottom variant="subtitle1" style={{ margin: 'auto 0 !important' }}>{product.quantity} x </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={3} >
                                <img src={strawberries} />
                            </Grid>
                            {/* <Grid item xs={1} /> */}
                            <Grid item xs={7} style={{ margin: 'auto 0' }}>
                                <Grid container spacing={3} >
                                    <Grid item xs={6} >
                                        <Typography variant='h5'>   {product.productName} </Typography>
                                        <Typography variant='body1' style={{ paddingBottom: 10 }}> Item order instructions </Typography>
                                        <TextField fullWidth placeholder="Specify every item to your liking" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid item xs={3} >
                                        <Typography variant='h6'>   Ksh.{CalculateProductPrice(product.id, product.price)}  </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Button
                                            style={{ fontSize: '20px' }}
                                            onClick={e => deleteProduct(e, product.id)}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }
                )}
                { proceed ? (
                    <>
                        <Grid container >
                            <Grid item xs={10} style={{ paddingBottom: 20 }} >
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Delivery Notes </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Add an extra note for your Zister if any"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={10} style={{ paddingBottom: 20 }}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Location </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Westlands, Chiromo Rd."
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOn />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={10} style={{ paddingBottom: 20 }}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Add Promo code </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Add promo code"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocalOfferIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={3} />
                            <Grid item xs={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Sub total </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Ksh.720 </Typography>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>
                        <Grid container >
                            <Grid item xs={3} />
                            <Grid item xs={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Delivery fee </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Kshs. 200 </Typography>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>
                        <Grid container >
                            <Grid item xs={3} />
                            <Grid item xs={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Total </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Kshs. 920 </Typography>
                            </Grid>
                            <Grid item xs={2} />
                        </Grid>
                        <Grid container >
                            <Grid item xs={2} style={{ margin: '0 auto' }} >
                                <Button
                                    className={classes.getStartedButton}
                                >
                                    Complete
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid spacing={3} item xs={8} style={{ margin: '0 auto' }} >
                            <Grid container >
                                <Grid item xs={4} />
                                <Grid item xs={2} >
                                    <Typography variant='h6'>  Total </Typography>
                                </Grid>
                                <Grid item xs={3} />
                                <Grid item xs={3} >
                                    <Typography variant='h6'> Ksh.720 </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} style={{ margin: '0 auto' }} >
                            <Button className={classes.getStartedButton} onClick={ e => setProceed(true)}> Proceed </Button>
                        </Grid>
                    </>
                )}
            </div>
        </div>
            )
}
            export default withCookies(OrderDetails)