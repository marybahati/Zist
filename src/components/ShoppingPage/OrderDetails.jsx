import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, TextField, } from "@material-ui/core";
import { Cookies, withCookies } from 'react-cookie';
import DeleteIcon from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationOn from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Navbar from '../Navbar/Navbar';
import { HOST_API } from '../../endpoints';
import axios from 'axios'
import { useSnackbar } from 'notistack';
import history from './../../History'
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
        fontSize: '22px !important',
        color: '#050504 !important',
        margin: '50px auto !important',
        textTransform: 'none',
    },
}))

const OrderDetails = (props) => {
    const classes = useStyles()
    const { cookies } = props
    const { enqueueSnackbar } = useSnackbar()
    const cookie = new Cookies()
    const store = cookies.get('store')
    const storedItems = cookies.get('cart')
    const userData = cookies.get('login-res')
    const location = cookies.get('location')
    const token = userData?.access
    const info = (props.location && props.location.state) || '';
    console.log(userData, info)
    const [cart, setCart] = useState()
    const [proceed, setProceed] = useState(false)
    const [listID, setListID] = useState()
    const [deliveryNotes, setDeliveryNotes] = useState('')
    const [tel, setTel] = useState('')
    const [buyerLocation, setBuyerLocation] = useState(location)
    const [subtotal, setSubtotal] = useState(0)
    const placeholderImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAAWlBMVEXh5urDzdba3+LFz9nf5+rEz9HBy8/S3d/CytHJztHBzNLL19ji6e3R193g5enCzNbGys7O1t7Z4OPa4ejS2t/J0tXV3eXU2dze5u3N0tXa5O69yNHZ4+XF0dKFwnRbAAAC4klEQVR4nO3c63KqMBRAYYLIQY3BCy1yaN//NQ83EQjqHi/TM93r+9GZxtYZ1wRMwDYIAAAAAAAAAAAAAAAAAAAAAAAAADzKRe/ifvqlvVi4fJfwp1/ai4XmXShFKUrdRikpSklRSopSUpSSopTUoFSaPC/VUSp8no5Sixc83YJSQpSSopQUpWa5wAZRVH25oNSVXy52cbwrwksrSs3al93ywvRXgik1w636dWayO3SDlPJZM1hlmqQbpZTHZokZltq2w4pLuWD+FZ8WwylVza9TM6y51CE+zo6no1LGtD+luJRdrhdz9ziP5TiUyZphxaWytTEfkT9+8Eo1iyrFperzdrzxx4/lJJXqOVXtVvbNI0lup49Fy/W4VHuIKi3VH2PpzjtV2c2oVLpQ/t636t/gpqmcG6+nui5aS+WXGitvVmXlYJ3QLTy1lnKDFOU+mJyrbH4+8tKkOA8qLVUMVpdpkgfjaeWCo0nqSZeaz35QZ6mveLxh+fTeAIMwL4p8mERnqY/JOsD42xrv5KWyVG48p7tPp6+UC06JFyrd+8ffhL5Sl0u/Q+vNzA5wRGGpMPVDVamyO0+nsNRqLtRlLe5x7QPqStlsdkrVZq/rBce0XaWrKxUmV0v525pKkZQ6S0Wba52qbc102eXs32pY6Zw6LK+XMmUxXiu4bTP/dJa60alONdrWhKZdTqgslfmLzqHUHPpUUXY+o2ksdbx6Nj9bdgtQ+/XdjyksZYu7peLmbo2z2TLWXCq8few1mm2N2w+TKiwlCFVvayYfTFBYKpveRr+S6jseD+grtZV0qlNNvqeUFKUo1aGUFKWkKCVFKSlKSfmlRAtPj74reXa7fsxW3acXD5vHtH/loKiUs49q7kQoKvUkSklRSopSUipKpeXqeYNPyf7eUq9GKUpR6jZKSVFKilJSlJKilBSlpML4XX5bKffnXX7bf/0GAAAAAAAAAAAAAAAAAAAAAAAA8D/6B0YsNs6SxFarAAAAAElFTkSuQmCC'
    console.log(cart, 'buyer l', buyerLocation)
    useEffect(() => {
        if (storedItems) {
            setCart(storedItems)
        } else {
            setCart([])
        }
    }, [])
    const calculatepriceOfProducts = () => {
        var costs = []
        var total
        var val = 0
        const check = cart?.map(prd => {
            var cost = prd.productPrice * prd?.quantity
            console.log(cost)
            costs.push(cost)
        })
        console.log(costs)
        const calculate = costs?.map(price => {
            total = val += price
        })
        console.log('total', costs, total)
        setSubtotal(total)
        console.log(subtotal)
    }
    useEffect(() => {
        calculatepriceOfProducts()
    }, [cart])

    const saveList = () => {
        axios.post(HOST_API + `zist/list/add_multiple_items/`,
            {
                listItems: cart?.map(prd => {
                    return {
                        product: prd.id,
                        quantity: prd.quantity,
                        metadata: {
                            name: prd.productName,
                            price: prd.productPrice,
                        }
                    }
                })
            }
            ,

            {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then((res) => {
                if (res.status == 200) {
                    console.log(res)
                    setProceed(true);
                    setListID(res.data.id)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const checkout = (event) => {
        event.preventDefault();
        axios.post(HOST_API + `courier/request/`,
            // {
            //     shopping_source: 'test store',
            //     delivery_location: buyerLocation,
            //     instructions: deliveryNotes,
            //     order: { name: listID } ,
            // },
            {
                buyer: userData?.id,
                order: listID,
                shopping_source: store,
                delivery_location: buyerLocation,
                instructions: deliveryNotes,
                metadata: {
                    phone_number: tel
                }, 
            },
            {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then((res) => {
                if (res.status == 201) {
                    enqueueSnackbar('You have successfully placed your order', { variant: 'success' })
                    cookies.remove('cart')
                    history.push('/shopping')
                    window.location.reload(false)
                    console.log(res)
                    // const formattedTel = tel?.slice(1)
                    // console.log(res, formattedTel)
                    // axios.post(HOST_API + `payment/mpesa/`, {
                    //     amount: 1,
                    //     phone_number: `254${formattedTel}`,
                    //     order: listID
                    // },
                    //     { headers: { "Authorization": `Bearer ${token}` } }
                    // )
                    //     .then(res => {
                    //         console.log('payment successful ', res)
                    //     }).catch(error => {
                    //         console.log('error', error)
                    //     })
                }

            })
            .catch(error => {
                console.log(error)
            })
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
    return (
        <div className={classes.mainDiv}>
            <div className={classes.mainGrid}>
                <Navbar hideCart />
                <Grid container style={{ padding: '20px 0 0 0' }} >
                    <Grid item xs={12} style={{ textAlign: 'center', margin: '0 auto' }} >
                        {/* <Typography variant='h4' > Order details </Typography> */}
                        {/* <img src={BusinessPic} style={{ padding: '15px 0' }} /> */}
                        {/* <Typography variant='h5' > {info?.clickedBusiness.name} </Typography> */}
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
                            <Grid container item xs={12} sm={12} md={1} lg={1}>
                                <Grid item xs={12} >
                                    <Typography gutterBottom variant="h6" style={{ margin: 'auto 0 !important' }}>{product.quantity} x </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3} lg={3} >
                                <img src={product?.image ? product?.image : placeholderImg} style={{ height: '250px', width: '100%' }} />
                            </Grid>
                            <Grid item md={1} lg={1} />
                            <Grid item xs={12} sm={7} md={7} lg={7} style={{ margin: 'auto 0' }} xs={12} sm={12} md={7} lg={7}>
                                <Grid container spacing={3} >
                                    <Grid item xs={12} sm={12} md={6} lg={6} >
                                        <Typography variant='h5'>   {product.productName} </Typography>
                                        <Typography variant='body1' style={{ paddingBottom: 10 }}> Item order instructions </Typography>
                                        <TextField fullWidth placeholder="Specify every item to your liking" variant="outlined" />
                                    </Grid>
                                    <Grid item md={1} lg={1} />
                                    <Grid item xs={4} sm={4} md={3} lg={3} >
                                        <Typography variant='h6'>   Ksh.{CalculateProductPrice(product.id, product.price)}  </Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={5} md={2} lg={2} >
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
                {proceed ? (
                    <form onSubmit={checkout} >
                        <Grid container >
                            <Grid item xs={11} sm={11} md={10} lg={10} style={{ paddingBottom: 20 }} >
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Delivery Notes </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Add an extra note for your Zister if any"
                                    variant="outlined"
                                    required
                                    onChange={e => setDeliveryNotes(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11} md={10} lg={10} style={{ paddingBottom: 20 }} >
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Phone Number </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="0728289410"
                                    variant="outlined"
                                    required
                                    onChange={e => setTel(e.target.value)}
                                    value={tel}
                                />
                            </Grid>

                            <Grid item xs={11} sm={11} md={10} lg={10} style={{ paddingBottom: 20 }}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Location </Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Westlands, Chiromo Rd."
                                    variant="outlined"
                                    onChange={e => setBuyerLocation(e.target.value)}
                                    value={buyerLocation}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationOn />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={11} sm={11} md={10} lg={10} style={{ paddingBottom: 20 }}>
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
                        <Grid container item xs={12} >
                            <Grid item xs={1} sm={1} md={3} lg={3} />
                            <Grid item xs={5} sm={5} md={3} lg={2}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Sub total </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} />
                            <Grid item xs={4} >
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Ksh.{subtotal} </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={2} lg={2} />
                        </Grid>
                        <Grid container >
                            <Grid item xs={1} sm={1} md={3} lg={3} />
                            <Grid item xs={5} sm={5} md={3} lg={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Delivery fee </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} />
                            <Grid item xs={4}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Ksh.200 </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={2} lg={2} />
                        </Grid>
                        <Grid container >
                            <Grid item xs={1} sm={1} md={3} lg={3} />
                            <Grid item xs={5} sm={5} md={3} lg={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Total </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} />
                            <Grid item xs={4}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Kshs. { subtotal + 200 } </Typography>
                            </Grid>
                            <Grid item xs={2} xs={1} sm={1} md={2} lg={2} />
                        </Grid>
                        <Grid container >
                            <Grid item xs={8} sm={6} md={2} lg={2} style={{ margin: '0 auto' }} >
                                <Button
                                    className={classes.getStartedButton}
                                    type='submit'
                                >
                                    Complete
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                ) : (
                    <>
                        {cart?.length === 0 ? (
                            <>
                                <Grid item xs={12} sm={12} md={12} lg={12} style={{ margin: '0 auto', textAlign: 'center' }} >
                                    <Typography variant='h6' style={{ paddingBottom: 10 }}> You have no products in your cart </Typography>
                                    <Button className={classes.getStartedButton} > Add products </Button>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={8} sm={8} md={8} lg={8} style={{ margin: '0 auto' }} >
                                    <Grid container >
                                        <Grid item md={2} lg={4} />
                                        <Grid item xs={6} sm={4} md={2} lg={2}>
                                            <Typography variant='h6'>  Sub total </Typography>
                                        </Grid>
                                        <Grid item xs={3} />
                                        <Grid item xs={3} >
                                            <Typography variant='h6'> Ksh.{subtotal} </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8} sm={6} md={2} lg={2} style={{ margin: '0 auto' }} >
                                    <Button className={classes.getStartedButton} onClick={e => saveList()}> Proceed </Button>
                                </Grid>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
export default withCookies(OrderDetails)