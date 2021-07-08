import React, { useState, useEffect } from 'react';
import { Grid, Typography, IconButton, Link, Button, Menu, MenuItem, List, ListItem, ListItemText } from "@material-ui/core";
import blueberries from './../../Assets/blue-berries.png';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from '../../endpoints';
import history from '../../History';
import shelving from './../../Assets/shelving.png';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useSnackbar } from 'notistack';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    autocomplete: {
        minWidth: '10rem',
        background: 'white !important',
        border: '1px #DEDEDF solid',
        borderRadius: '3px'
    },
    mainDiv: {
        background: '#F9F7F1 0% 0% no-repeat padding-box',
        opacity: 1,
        padding: '50px 0 !important',
    },
    mainGrid: {
        width: '80%',
        margin: '0 auto 100px auto !important',
    },
    headers: {
        textAlign: 'center',
        color: '#FFBD59',
    },
    boldFont: {
        fontWeight: 'bold !important',
        paddintBottom: 20,
    },
    dropzoneDiv: {
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#bdbdbd',
        height: '230px',
        margin: 'auto 0 !important',
        width: '100%',
    },
    textfields: {
        background: 'white',
        padding: '5px 0 0 0',
        margin: '0  0 10px 0',
        ' & .MuiOutlinedInput-input': {
            padding: '10px 14px'
        },
    },
    centeredButtonColumns: {
        width: '180px',
        margin: '0 auto'
    },
    createItemButton: {
        background: '#FFBD59 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '50px !important',
        width: '100%',
        fontSize: '18px !important',
        color: '#050504 !important',
        margin: '40px 0 0 0 !important',
    },
    viewItemsButton: {
        background: 'background: #FEE2D4 0% 0% no-repeat padding-box !important',
        border: '2px solid #FEE2D4 !important',
        borderRadius: '24px !important',
        opacity: 1,
        height: '40px !important',
        width: '100%',
        fontSize: '18px !important',
        color: '#050504 !important',
        margin: '40px 0 0 0 !important',
    },
});

const VendorProducts = (props) => {
    const { cookies } = props
    const classes = useStyles();
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
    const handleEditProduct = (e, id, name, price, stock, description, category) => {
        const data = { id: id, name: name, price: price, stock: stock, description: description, category: category }
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
        <div className={classes.mainDiv} >
            <div className={classes.mainGrid} >
                <Grid container >
                    <Grid item xs={1} >
                        <IconButton onClick={handleGoingBack} >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item style={{ width: '455px', margin: '20px auto' }} >
                        <img src={shelving} />
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{ margin: '20px auto' }} >
                        <Typography variant='h5' className={classes.headers} > SHELVING </Typography>
                    </Grid>
                </Grid>
                <Grid container  >
                    <Grid item xs={12} style={{ margin: '20px auto' }} >
                        <Typography variant='h5' className={classes.boldFont} >  Welcome to Shelving where putting up your wares is all within a button’s reach.  </Typography>
                    </Grid>
                </Grid>
                {productCount === 0 ? (
                    <Grid container item xs={12} >
                        <Grid item xs={12} className={classes.boldFont} >
                            <Typography variant='h5' style={{ textAlign: 'center' }}>  You have no products yet, please create new products </Typography>
                        </Grid>
                        <Grid item className={classes.centeredButtonColumns} >
                            <Button onClick={handleAddProduct} className={classes.createItemButton} > Create </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <>
                        <Grid container item xs={12} style={{padding:'15px 0 20px 0'}} >
                            <Grid item xs={12} className={classes.boldFont} >
                                <Typography variant='h5'>  Products list </Typography>
                            </Grid>
                        </Grid>
                        {products?.map(product => {
                            return (
                                <Grid container item xs={12} spacing={3} style={{paddingBottom:15}} >
                                    <Grid item xs={3} >
                                        <img src={blueberries} />
                                    </Grid>
                                    <Grid item xs={1} />
                                    <Grid item xs={7} >
                                        <Grid container spacing={3} >
                                            <Grid item xs={5} >
                                                <Typography variant='h6'>   Name: &nbsp;&nbsp;{product.name} </Typography>
                                                <Typography variant='h6'>   Stock: &nbsp;&nbsp;{product.metadata} </Typography>
                                            </Grid>
                                            <Grid item xs={5} >
                                                <Typography variant='h6'>   Price: &nbsp;&nbsp; Ksh.{product.price} </Typography>
                                                <Typography variant='h6'>   Category: &nbsp;&nbsp;{product.category.category} </Typography>
                                            </Grid>
                                            <Grid item xs={1} />
                                            <Grid item xs={1} >
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
                                                    <MenuItem onClick={e => handleEditProduct(e, currentId, product.name, product.price, product.metadata, product.description, product.category)}>
                                                        Edit
                                                    </MenuItem>
                                                    <MenuItem onClick={e => handleDeleteProduct(e, currentId)}>
                                                        Delete
                                                    </MenuItem>
                                                </Menu>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <Typography variant='h6'>   Ingredients:  </Typography>
                                                <Typography variant='h6'>   {product.description} </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        })}
                        <Grid container item xs={12} >
                            <Grid item className={classes.centeredButtonColumns} >
                                <Button onClick={handleAddProduct} className={classes.createItemButton} > Add Product </Button>
                            </Grid>
                        </Grid>
                    </>
                )}
            </div>
        </div>
    )
}
export default withCookies(VendorProducts)