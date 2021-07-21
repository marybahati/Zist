import React, { useState, useEffect } from 'react';
import blueberries from './../../Assets/blue-berries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';
import Collapsible from 'react-collapsible';
import history from '../../History'
import { HOST_API } from '../../endpoints';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Grid, Button, Typography, TextField, Avatar, AppBar, Toolbar, Link } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';


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
    cartCount: {
        height: '25px',
        width: '25px !important',
        background: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        top: '-25px',
        left: '-12px',
        textAlign: 'center',
        position: 'relative',
        padding: '0 6px 0 6px !important',
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
}))

const UserList = (props) => {
    const [listId, setListId] = useState()
    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData?.access

    const cookie = new Cookies()
    const classes = useStyles()
    const clickedBusiness = (props.location && props.location.state) || '';
    console.log(props.location && props.location.state, clickedBusiness)
    const businessId = clickedBusiness?.id
    const storedItems = cookies.get('cart')
    const [cart, setCart] = useState([])
    const [showQty, setShowQty] = useState([])
    const [products, setProducts] = useState([])
    const [categories,setCategories] = useState([])
    const [searchText, setSearchText] = useState('')
    const [countProducts, setCountProducts] = useState()
    const productsInBasket = []
    if (storedItems) {
        productsInBasket.push(...storedItems, ...cart)
    } else {
        productsInBasket.push(...cart)
    }
    console.log(productsInBasket)
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
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            style={{ width: '50% !important', padding: '20px !important' }}
        >
            {productsInBasket.length !== 0 ? (
                productsInBasket?.map((product, index) => {
                    return (
                        <Grid key={index} container spacing={1} style={{ width: 450, padding: 20, fontSize: 20 }}>
                            <Grid container item xs={12} />
                            <Grid container item xs={2}>
                                <Grid item xs={12} >
                                    <Avatar src={blueberries} variant="rounded" />
                                </Grid>
                            </Grid>
                            <Grid item xs={3} style={{ margin: 'auto 0 !important', fontSize: 20 }}>
                                <Typography gutterBottom variant="subtitle1">{product.productName} </Typography>
                            </Grid >
                            <Grid item xs={1} style={{ margin: 'auto 0 !important', fontSize: 20, textAlign: 'center', }} >
                                <Button onClick={e => {
                                    if (product.quantity === 1) {
                                        changeQuantity(e, index, 0)
                                    } else {
                                        changeQuantity(e, index, -1)
                                    }
                                }} > - </Button>
                            </Grid>
                            <Grid item xs={1} style={{ margin: 'auto 0 !important', textAlign: 'center', fontSize: 20 }}>
                                <Typography gutterBottom variant="subtitle1"> {product.quantity} </Typography>
                            </Grid>
                            <Grid item xs={1} style={{ margin: 'auto 0 !important', fontSize: 20, textAlign: 'center', }}>
                                <Button onClick={e => changeQuantity(e, index, 1)} > + </Button>
                            </Grid>
                            <Grid item xs={2} style={{ margin: 'auto 0 !important', fontSize: 20, textAlign: 'center', }} >
                                <Typography gutterBottom variant="subtitle1">Ksh.{product.productPrice * product.quantity} </Typography>
                            </Grid >
                        </Grid>
                    )

                })
            ) : <h3 style={{ paddingTop: 50 }}> You have no items in your cart</h3>}
        </div>
    );

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
    const CalculateProductPrice = (product_id, product_price) => {
        const product = cart.find(prd => prd.id === product_id)
        const price = product ? product.productPrice * product.quantity : product_price
        return price
        console.log(price, product)
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
                {show && (
                    <Grid container key={product.id} item xs={12} spacing={3} style={{ padding: '30px 0' }} >
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
                                        <Button onClick={(e) => handleAddProduct(e, product.name, product.price, 1, product.id)} >
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
                                                        changeQuantityToggle(e, product.id, 0)
                                                    } else {
                                                        changeQuantityToggle(e, product.id, -1)
                                                    }
                                                }}
                                            > - </Button>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Typography variant='h6'>  {getProductQty(product.id)}  </Typography>
                                        </Grid>
                                        <Grid item xs={3} >
                                            <Button style={{ fontSize: '20px' }} onClick={e => changeQuantityToggle(e, product.id, 1)} > + </Button>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        )}
                    </Grid>
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
console.log(categories)
    return (
        <div className={classes.mainDiv} >
            <div className={classes.mainGrid} >
                <Grid item container xs={12} >
                    <Grid item xs={11} />
                    <Grid item xs={1} style={{ textAlign: 'center' }}>
                        <React.Fragment >
                            <AppBar position="sticky" style={{ background: 'inherit', color: 'black', boxShadow: 'none' }}>
                                <Toolbar>
                                    <Button color="inherit" onClick={toggleDrawer(true)} >
                                        <ShoppingCartIcon fontSize='large' />
                                        <div className={classes.cartCount}> {productsInBasket.length} </div>
                                    </Button>
                                </Toolbar>
                            </AppBar>
                            <Drawer anchor='right' open={open} onClose={toggleDrawer(false)} style={{ width: '50% !important' }} >
                                {list()}
                            </Drawer>
                        </React.Fragment>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={5} style={{ textAlign: 'center', margin: '0 auto' }} >
                        <Typography variant='h4' > Shopping List</Typography>
                        <img src={BusinessPic} style={{ padding: '15px 0' }} />
                        <Typography variant='h5' > {clickedBusiness.name} </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} >
                        <Typography variant='h5' className={classes.boldFont} > Take a detour within the store by browsing through the aisles, just like you’d do in a physical store </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} >
                   {categories?.map( data => {
                       return (
                        <Grid item xs={2} key={data.id} >
                        <Button key={data.id} className={classes.aisleButton} onClick={handleRedirect} > {data.category} </Button>
                    </Grid>
                       )
                   })}
                </Grid>
                <Grid container  >
                    <Grid item xs={2} style={{ margin: '20px auto' }} >
                        <Button color="primary" onClick={handleRedirect} > Show more </Button>
                    </Grid>
                </Grid>
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} >
                        <Typography variant='h5' className={classes.boldFont} > Search for what you want and add it just like you’d do with a regular list </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} >
                        <TextField onChange={onSearch} type='search' fullWidth variant="outlined" placeholder='Search for what you want and add it just like you’d do with a regular list' />
                    </Grid>
                </Grid>
                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} >
                        {countProducts === 0 ? (
                            <Typography > This store has no products,please select <Link href="/shopping" variant="body1"> another store </Link></Typography>
                        ) : null}
                    </Grid>
                </Grid>
                <>
                    {products.map(product => {
                        return productSearch(product)
                    })}
                </>
                {productsInBasket.length !== 0 ? (
                    <Grid container  >
                        <Grid item xs={3} style={{ margin: '10px auto' }} >
                            <Button className={classes.getStartedButton} onClick={handleOrderDetailsDisplay} > Order now </Button>
                        </Grid>
                    </Grid>
                ) : null }

            </div>
        </div>
        // <MainDiv>
        //     <MainGrid>
        //         <Grid.Row >
        //             <BusinessColumns centered>
        //                 <Collapsible width={16} fluid trigger={<DropdownButtons > Continue shopping from another store within Mall A <Icon name='dropdown' style={{ marginLeft: 30 }} /></DropdownButtons>} triggerTagName='h3' link >
        //                     <Grid width={16}  >
        //                         <Grid.Row >
        //                             <Grid.Column width={5} style={{ paddingLeft: 40 }} >
        //                                 <Image src={BusinessPic} />
        //                             </Grid.Column>
        //                             <BusinessColumns width={10}  >
        //                                 <h2> Thiga’s Field Fresh Vegetables <Icon name='check circle' color='yellow' /> </h2>
        //                                 <List bulleted horizontal >
        //                                     <List.Item ></List.Item>
        //                                     <List.Item > beauty </List.Item>
        //                                     <List.Item > health </List.Item>
        //                                 </List>
        //                             </BusinessColumns>
        //                         </Grid.Row>
        //                     </Grid>

        //                     <Grid>
        //                         <Grid.Row>
        //                             <Grid.Column width={5}  >
        //                                 <Image src={BusinessPic} style={{ paddingLeft: 40 }} />
        //                             </Grid.Column>
        //                             <BusinessColumns width={10} style={{ textAlign: 'center' }} >
        //                                 <h2> Mary’s Apothecary <Icon name='check circle' color='yellow' /> </h2>
        //                                 <List bulleted horizontal >
        //                                     <List.Item ></List.Item>
        //                                     <List.Item > groceries </List.Item>
        //                                     <List.Item > healthy snacks </List.Item>
        //                                 </List>
        //                             </BusinessColumns>
        //                         </Grid.Row>
        //                     </Grid>

        //                 </Collapsible>
        //             </BusinessColumns>
        //         </Grid.Row>
        //         <Grid.Row>
        //             <OrderNowColumn>
        //                 <OrderNowButton onClick={handleOrderDetailsDisplay} > Order Now </OrderNowButton>
        //             </OrderNowColumn>
        //         </Grid.Row>
        //     </MainGrid>
        // </MainDiv>
    )
}
export default withCookies(UserList)