import React, { useState } from 'react';
import strawberries from './../../Assets/strawberries.png';
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
    const userData = cookies.get('login-res')
    const location = cookies.get('location')
    const token = userData?.access
    const info = (props.location && props.location.state) || '';
    const [cart, setCart] = useState(storedItems)
    const [n, setN] = useState([])
    const [proceed, setProceed] = useState(false)
    const [listID, setListID] = useState()
    const [deliveryNotes, setDeliveryNotes] = useState('')
    const [tel, setTel] = useState('')
    console.log(cart)

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
            {
                //   list: listID,
                shopping_source: 'test store',
                delivery_location: location,
                instructions: deliveryNotes,
                order: listID,
            },
            {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then((res) => {
                if (res.status == 201) {
                    const formattedTel = tel?.slice(1)
                    console.log(res, formattedTel)
                    axios.post(HOST_API + `payment/mpesa/`, {
                        amount: 1,
                        phone_number: `254${formattedTel}`,
                        order: listID
                    },
                        { headers: { "Authorization": `Bearer ${token}` } }
                    )
                        .then(res => {
                            console.log('payment successful ', res)
                        }).catch(error => {
                            console.log('error', error)
                        })
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

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
    const formartProductName = (productName) => {
        const str = productName.split(" ");
        str.map((name) => {
            return name.charAt(0).toUpperCase() + str.slice(1);
            str.join(" ");
        })
    }
    console.log(info)
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
                                    <Typography gutterBottom variant="subtitle1" style={{ margin: 'auto 0 !important' }}>{product.quantity} x </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={3} lg={3} >
                                <img src={strawberries} />
                            </Grid>
                            <Grid item md={1} lg={1} />
                            <Grid item xs={7} style={{ margin: 'auto 0' }} xs={12} sm={12} md={7} lg={7}>
                                <Grid container spacing={3} >
                                    <Grid item xs={12} sm={12} md={6} lg={6} >
                                        <Typography variant='h5'>   {product.productName} </Typography>
                                        <Typography variant='body1' style={{ paddingBottom: 10 }}> Item order instructions </Typography>
                                        <TextField fullWidth placeholder="Specify every item to your liking" variant="outlined" />
                                    </Grid>
                                    <Grid item md={1} lg={1} />
                                    <Grid item xs={6} sm={6} md={3} lg={3} >
                                        <Typography variant='h6'>   Ksh.{CalculateProductPrice(product.id, product.price)}  </Typography>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={2} lg={2} >
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
                        <Grid container >
                            <Grid item xs={1} sm={1} md={3} lg={3} />
                            <Grid item xs={5} sm={5} md={3} lg={3}>
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Sub total </Typography>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1} />
                            <Grid item xs={4} >
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Ksh.720 </Typography>
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
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Kshs. 200 </Typography>
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
                                <Typography variant='h6' style={{ paddingBottom: 10 }}> Kshs. 920 </Typography>
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
                        <Grid item xs={8} sm={8} md={8} lg={8} style={{ margin: '0 auto' }} >
                            <Grid container >
                                <Grid item md={2} lg={4} />
                                <Grid item xs={2} >
                                    <Typography variant='h6'>  Total </Typography>
                                </Grid>
                                <Grid item xs={3} />
                                <Grid item xs={3} >
                                    <Typography variant='h6'> Ksh.720 </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} sm={6} md={2} lg={2} style={{ margin: '0 auto' }} >
                            <Button className={classes.getStartedButton} onClick={e => saveList()}> Proceed </Button>
                        </Grid>
                    </>
                )}
            </div>
        </div>
    )
}
export default withCookies(OrderDetails)