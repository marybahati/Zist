import React, { useState, useEffect, useContext } from 'react';
import blueberries from './../../Assets/blue-berries.png';
import BusinessPic from './../../Assets/user-list-business.png'
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';
import Collapsible from 'react-collapsible';
import history from '../../History'
import { HOST_API } from '../../endpoints';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Grid, Button, Typography, TextField, Avatar, AppBar, Toolbar, Link, IconButton, InputAdornment, Divider } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Navbar from './../Navbar/Navbar'
import { MyContext } from './MyContext'
const useStyles = makeStyles((theme) => ({
    mainDiv: {
        background: ' #FFF 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
        textTransform: 'none',
    },
    mainGrid: {
        width: '90%',
        margin: '0 auto 100px auto !important',
    },
    boldFont: {
        fontWeight: 'bold !important',
        padding: '10px 0',
    },
    rootSearchField: {
        '& .MuiOutlinedInput-root': {
            borderRadius: '30px',
        }
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
    drawerToggleQtyButtons: {
        top: '-10px',
        fontSize: 20,
    },
    closeDrawer: {
        flexBasis: '0%',
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
        // top: -80,
        textAlign: 'center',
        textTransform: 'none',
        width: '120px',
        height: '50px',
    },
    divider: {
        background: 'grey',
        fontSize: '5px'
    },
    browseButtoon: {
        textTransform: 'none',
        width: '170px',
        height: '60px',
        margin: '0px auto 20px auto !important', 
        background: '#FFBD59', 
        padding: '10px 0', 
        textAlign: 'center', 
        borderRadius: '30px' ,
        fontSize: '19px',
        [theme.breakpoints.between('xs', 'sm')]: {
            width: '120px',
            height: '50px',
            fontSize: '11px',
            margin: '0px auto 20px auto', 
        },
        [theme.breakpoints.only('md')]: {
            borderRadius: '50%', 
            width: '50%',
        },

    },

}))

const UserList = (props) => {
    const storedCart = useContext(MyContext)
    const [listId, setListId] = useState()
    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData?.access

    const cookie = new Cookies()
    const classes = useStyles()
    const clickedBusiness = (props.location && props.location.state) || '';
    console.log(clickedBusiness)
    const businessId = clickedBusiness?.props?.id
    const businessName = clickedBusiness?.props?.name
    const storedItems = cookies.get('cart')
    const [showQty, setShowQty] = useState([])
    const [products, setProducts] = useState([])
    const [searchText, setSearchText] = useState('')
    const [countProducts, setCountProducts] = useState()
    const [productsInBasket, setProductsInBasket] = useState() || []
    const [showDelayedComponent, setShowDelayedComponent] = useState(false)
    const placeholderImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAAWlBMVEXh5urDzdba3+LFz9nf5+rEz9HBy8/S3d/CytHJztHBzNLL19ji6e3R193g5enCzNbGys7O1t7Z4OPa4ejS2t/J0tXV3eXU2dze5u3N0tXa5O69yNHZ4+XF0dKFwnRbAAAC4klEQVR4nO3c63KqMBRAYYLIQY3BCy1yaN//NQ83EQjqHi/TM93r+9GZxtYZ1wRMwDYIAAAAAAAAAAAAAAAAAAAAAAAAADzKRe/ifvqlvVi4fJfwp1/ai4XmXShFKUrdRikpSklRSopSUpSSopTUoFSaPC/VUSp8no5Sixc83YJSQpSSopQUpWa5wAZRVH25oNSVXy52cbwrwksrSs3al93ywvRXgik1w636dWayO3SDlPJZM1hlmqQbpZTHZokZltq2w4pLuWD+FZ8WwylVza9TM6y51CE+zo6no1LGtD+luJRdrhdz9ziP5TiUyZphxaWytTEfkT9+8Eo1iyrFperzdrzxx4/lJJXqOVXtVvbNI0lup49Fy/W4VHuIKi3VH2PpzjtV2c2oVLpQ/t636t/gpqmcG6+nui5aS+WXGitvVmXlYJ3QLTy1lnKDFOU+mJyrbH4+8tKkOA8qLVUMVpdpkgfjaeWCo0nqSZeaz35QZ6mveLxh+fTeAIMwL4p8mERnqY/JOsD42xrv5KWyVG48p7tPp6+UC06JFyrd+8ffhL5Sl0u/Q+vNzA5wRGGpMPVDVamyO0+nsNRqLtRlLe5x7QPqStlsdkrVZq/rBce0XaWrKxUmV0v525pKkZQ6S0Wba52qbc102eXs32pY6Zw6LK+XMmUxXiu4bTP/dJa60alONdrWhKZdTqgslfmLzqHUHPpUUXY+o2ksdbx6Nj9bdgtQ+/XdjyksZYu7peLmbo2z2TLWXCq8few1mm2N2w+TKiwlCFVvayYfTFBYKpveRr+S6jseD+grtZV0qlNNvqeUFKUo1aGUFKWkKCVFKSlKSfmlRAtPj74reXa7fsxW3acXD5vHtH/loKiUs49q7kQoKvUkSklRSopSUipKpeXqeYNPyf7eUq9GKUpR6jZKSVFKilJSlJKilBSlpML4XX5bKffnXX7bf/0GAAAAAAAAAAAAAAAAAAAAAAAA8D/6B0YsNs6SxFarAAAAAElFTkSuQmCC'
    // console.log(storedCart)
    useEffect(() => {
        if (storedItems) {
            setProductsInBasket(storedItems)
            storedCart.setCart(storedItems)
        } else {
            setProductsInBasket([])
        }
    }, [])

    useEffect(() => {
        // storedCart.setCart(productsInBasket)
        cookie.set('cart', productsInBasket, { path: '/' })
    }, [productsInBasket])
    console.log("prds:", productsInBasket, 'cokkie prd', storedItems)
    const handleAddProduct = (e, name, price, quantity, id, img) => {
        const checkIndex = productsInBasket.findIndex(product => product.id === id);
        if (checkIndex !== -1) {
            productsInBasket[checkIndex].quantity++;
            cookie.set('cart', productsInBasket, { path: '/' })
            storedCart.setCart(productsInBasket)
            setShowQty([...showQty, id])
            console.log("Quantity updated:", productsInBasket);
            // const timer = setTimeout(() => {
            //     setShowDelayedComponent(id)
            // }, 6000)
            // return () => clearTimeout(timer)
        } else {
            const d = { productName: name, productPrice: price, quantity: quantity, id: id, image: img }
            const aa = [...productsInBasket, d]
            cookie.set('cart', aa, { path: '/' })
            setProductsInBasket(aa)
            storedCart.setCart(aa)
            setShowQty([...showQty, id])
            console.log('The product has been added to cart:', productsInBasket)
            // const timer = setTimeout(() => {
            //     setShowDelayedComponent(id)
            // }, 6000)
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
        storedCart.setCart([...productsInBasket])
        cookie.set('cart', [...productsInBasket], { path: '/' })
        // const timer = setTimeout(() => {
        //     setShowDelayedComponent(product_id)
        // }, 6000)
        // return () => clearTimeout(timer)
    }
    const deleteProduct = (e, productId) => {
        e.preventDefault()
        const deleteObj = productsInBasket?.findIndex(obj => obj.id === productId)
        productsInBasket.splice(deleteObj, 1)
        setProductsInBasket([...productsInBasket])
        storedCart.setCart([...productsInBasket])
        cookie.set('cart', productsInBasket, { path: '/' })
        setShowQty('')
        // console.log(deleteObj, productsInBasket )
    }
    const getProductQty = (productId) => {
        const product = productsInBasket?.find(prd => prd.id === productId)
        return product?.quantity
    }
    const CalculateProductPrice = (product_id, product_price) => {
        const product = productsInBasket?.find(prd => prd.id === product_id)
        const price = product ? product.productPrice * product.quantity : product_price
        return price
    }

    const handleOrderDetailsDisplay = () => {
        history.push({
            pathname: '/order-details',
            state: { clickedBusiness }
        })
    }
    const formartProductName = (productName) => {
        const str = productName.split(" ");
        str.map((name) => {
            return name.charAt(0).toUpperCase() + str.slice(1);
            str.join(" ");
        })
    }

    const handleRedirect = () => {
        history.push({
            pathname: '/shopping/categories',
            state: clickedBusiness
        })
    }


    const onSearch = (e) => {
        setSearchText(e.target.value)
    }

    const productSearch = (product) => {

        const show = searchText !== '' && product.name.toLowerCase().includes(searchText.toLowerCase())
        return (
            <>
                {show && (
                    <Grid container key={product.id} item xs={11} spacing={3} style={{ padding: '30px 0', margin: '0 auto' }} >
                        <Grid item xs={12} sm={4} md={3} lg={3}>
                            <img src={product?.image ? product.image : placeholderImg} alt='Product image' style={{height: '250px', width: '100%'}} />
                        </Grid>
                        <Grid item md={2} lg={1} />
                        {!showQty.includes(product.id) ? (
                            <Grid item xs={12} sm={7} md={8} lg={8} style={{ margin: 'auto 0' }} >
                                <Grid container spacing={3} >
                                    <Grid item xs={12} sm={12} md={5} lg={5} >
                                        <Typography variant='h5'>   {product.name} </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3} >
                                        <Typography variant='h6'>   Ksh.{CalculateProductPrice(product.id, product.price)}  </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} lg={3}  >
                                        <Button className={classes.roundedGrid} onClick={(e) => handleAddProduct(e, product.name, product.price, 1, product.id, product.image)} >
                                            Add to cart
                                        </Button>
                                    </Grid>

                                </Grid>
                            </Grid>
                        ) : (
                            <Grid item xs={12} sm={7} md={8} lg={8} style={{ margin: 'auto 0' }}>
                                <Grid container spacing={3} >
                                    <Grid item xs={12} sm={12} md={5} lg={5} >
                                        <Typography variant='h5'>   {product.name} </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2} lg={2} >
                                        <Typography variant='h6' >   Ksh.{product.price}  </Typography>
                                    </Grid>
                                    <Grid item md={1} lg={1} />
                                    {showQty.includes(product.id) ? (
                                        <>
                                            {/* {showDelayedComponent === product.id ? (
                                                <Grid container item xs={12} sm={6} md={3} lg={3}>
                                                    <Grid item md={8} lg={8} />
                                                    <Grid item xs={1} sm={1} md={1} lg={1} style={{ margin: 'auto 0' }}>
                                                        <Button className={classes.roundedBlackButton} onClick={e => setShowQty([...showQty, product.id])}> {getProductQty(product.id)} </Button>
                                                    </Grid>
                                                    <Grid item xs={3} />
                                                </Grid>
                                            ) : ( */}
                                                <Grid container item xs={12} sm={7} md={3} lg={3} style={{ textAlign: 'center' }} className={classes.roundedGrid} >
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
                                            {/* // )} */}
                                        </>
                                    ) : null}

                                </Grid>
                            </Grid>
                        )}
                    </Grid>
                )}
            </>


        )
    }

    useEffect(() => {
        // axios.get(HOST_API + 'zist/products/', {
        axios.get( HOST_API + `zist/business/${businessId}/product_list/`,
         {
            headers: { "Authorization": `Bearer ${token}` },
            params: { search : searchText }
        })
            .then((response) => {
                if (response.status == 200) {
                    setProducts(response.data.results);
                    setCountProducts(response.data.count)
                    const data = response.data.results
                    console.log(data)
                    // cookie.set('products',data, { path: '/'} )
                }

            })
            .catch(error => {
                console.log(error)
            })
    }, [searchText])

    return (
        <div className={classes.mainDiv} >
                <Navbar />
                <Grid container style={{ 
                    marginTop: '35px',backgroundSize: 'cover', 
                    width: '100%', backgroundRepeat: ' no-repeat', 
                    backgroundPosition: 'center', 
                    color: 'black', zIndex: 3,
                    backgroundImage:`url(${clickedBusiness?.props?.photo ? clickedBusiness?.props?.photo : placeholderImg})`, height: 200  }} >
                    <Grid item xs={12} sm={12} md={5} lg={5} style={{ textAlign: 'center', margin: 'auto auto 0 auto'}} >
                        {/* <img src={clickedBusiness?.props.photo ? clickedBusiness?.props.photo : placeholderImg} style={{ padding: '15px 0',height: 250, borderRadius: '70%', width: '50%'}} /> */}
                    </Grid>
                </Grid>
            <div className={classes.mainGrid} >
                <Grid container style={{ padding: '20px 0', textAlign: 'center' }} >
                    <Grid item xs={12} >
                        <Typography variant='h4' > {businessName} </Typography>
                        <Typography variant='h5' > Your Shopping List</Typography>
                        <Typography variant='h5' style={{ padding: '10px 0 0 0' }} > Search for items , add them and quickly check out. </Typography>
                    </Grid>
                </Grid>

                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={11} sm={11} md={11} lg={11} style={{ margin: '0 auto' }} >
                        <TextField onChange={onSearch}
                            type='search'
                            fullWidth
                            variant="outlined"
                            className={classes.rootSearchField}
                            placeholder={`Search for items within ${businessName} Store`}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
                <>
                    {products.map(product => {
                        return productSearch(product)
                    })}
                </>
                <Grid container style={{ padding: '20px 0 0 0', textAlign: 'center' }} >
                    <Grid item xs={12} >
                        <Typography variant='h5' className={classes.boldFont} > Or browse the store whilst selecting items </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={6} sm={5} md={2} lg={2} style={{margin:'20px auto'}}>
                        <Button onClick={handleRedirect} className={classes.browseButtoon}> Browse Aisles </Button>
                    </Grid>
                </Grid>

                <Grid container style={{ padding: '20px 0' }} >
                    <Grid item xs={12} >
                        {countProducts === 0 ? (
                            <Typography > This store has no products,please select <Link href="/shopping" variant="body1"> another store </Link></Typography>
                        ) : null}
                    </Grid>
                </Grid>

                {/* {productsInBasket?.length !== 0 ? (
                    <Grid container  >
                        <Grid item xs={3} style={{ margin: '10px auto' }} >
                            <Button className={classes.getStartedButton} onClick={handleOrderDetailsDisplay} > Order now </Button>
                        </Grid>
                    </Grid>
                ) : null} */}

            </div>
        </div >
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
        //                                 <h2> Thiga???s Field Fresh Vegetables <Icon name='check circle' color='yellow' /> </h2>
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
        //                                 <h2> Mary???s Apothecary <Icon name='check circle' color='yellow' /> </h2>
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