import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { SignupButtonSection } from "./../LandingPage/SignupButtonSection";
import { LoginButtonSection } from "./../LandingPage/LoginButtonSection";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Cookies, withCookies } from 'react-cookie';
import history from './../../History'
const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        // background: '#F9F7F1',
        backgroundColor: 'inherit !important',
        boxShadow: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawer: {
        width: 250,
    },
    closeDrawer: {
        flexBasis: '0%',
    },
    cartCount: {
        height: '25px',
        width: '20px !important',
        background: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        top: '-15px',
        left: '-12px',
        textAlign: 'center',
        position: 'relative',
        padding: '0 6px 0 6px !important',
    },
    drawerToggleQtyButtons: {
        top: '-10px',
        fontSize: 20,
    },
    closeDrawer: {
        flexBasis: '0%',
    },
}));

function PrimaryAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState()
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { cookies } = props
    const cookie = new Cookies()
    const userData = cookies.get('login-res')
    const token = userData?.access
    const location = cookies.get('location')
    const names = cookies.get('name')
    const splitName = names?.split(' ')
    const name = splitName !== undefined ? splitName[0] : null
    const [productsInBasket, setProductsInBasket] = useState()
    const [showQty, setShowQty] = useState([])
    const [open, setOpen] = React.useState(false);
    const clickedBusiness = (props.location && props.location.state) || '';
    const businessId = clickedBusiness?.id
    const businessName = clickedBusiness?.name
    const storedItems = cookies.get('cart')
    useEffect(() => {
        if (storedItems) {
            setProductsInBasket(storedItems)
        } else {
            setProductsInBasket([])
        }
    }, [])
    const handleOrderDetailsDisplay = () => {
        history.push({
            pathname: '/order-details',
            state: { clickedBusiness }
        })
    }
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const deleteProduct = (e, productId) => {
        e.preventDefault()
        const deleteObj = productsInBasket?.findIndex(obj => obj.id === productId)
        productsInBasket.splice(deleteObj, 1)
        setProductsInBasket([...productsInBasket])
        cookie.set('cart', productsInBasket, { path: '/' })
        setShowQty('')
    }
    const toggleDrawer = (status) => (event) => {
        event.preventDefault()
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log(status)
        setDrawerOpen(status);
    };
    const navbar = () => (
        <div
            role="presentation"
            // onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={classes.drawer}
        >
            <List>
                <ListItem button key='check'>
                    <ListItemText primary='Navigation' />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button >
                    <ListItemText primary='About Us' />
                </ListItem>
                <ListItem button >
                    <ListItemText primary='Sell on Zist Shopping' />
                </ListItem>
                <ListItem button >
                    <ListItemText primary='Become a Zister' />
                </ListItem>
                <ListItem button >
                    <ListItemText primary='Contact Us' />
                </ListItem>
                <ListItem button >
                    <ListItemText primary='Terms & Policy' />
                </ListItem>
                <ListItem button >
                    <ListItemText primary='Log out' />
                </ListItem>
            </List>
        </div>
    );

    const toggleProductsDrawer = (status) => (event) => {
        event.preventDefault()
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        console.log(status)
        setOpen(status);
    };
    const list = () => (
        <div
            role="presentation"
            onClick={toggleProductsDrawer(false)}
            onKeyDown={toggleProductsDrawer(false)}
            style={{ width: '50% !important', padding: '20px !important' }}
        >
            {productsInBasket?.length !== 0 ? (
                <>
                    <h3 style={{ padding: '10px 0 0 20px' }}> Your cart </h3>
                    <Typography variant='h6' style={{ padding: '10px 0 0 20px' }}> {businessName} </Typography>
                    {productsInBasket?.map((product, index) => {
                        console.log(product, '=========23456', productsInBasket)
                        return (
                            <Grid key={product.id} container spacing={1} style={{ width: 530, padding: 20, fontSize: 20 }}>
                                <Grid container item xs={12} />
                                <Grid container item xs={2}>
                                    <Grid item xs={12} >
                                        <Typography gutterBottom variant="subtitle1" style={{ margin: 'auto 0 !important' }}>{product.quantity} x </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4} >
                                    <Typography gutterBottom variant="subtitle1" style={{ margin: 'auto 0 !important' }}>{product.productName} </Typography>
                                </Grid >
                                <Grid item xs={3} style={{ margin: 'auto 0 !important', fontSize: 20, textAlign: 'center', }} >
                                    <Typography gutterBottom variant="subtitle1">Ksh.{product.productPrice * product.quantity} </Typography>
                                </Grid >
                                <Grid item xs={3} style={{ margin: 'auto 0 !important', fontSize: 20, textAlign: 'center', }} >
                                    <Button color="primary" style={{ textTransform: 'none' }} onClick={e => deleteProduct(e, product.id)}>Remove</Button>
                                </Grid >
                            </Grid>
                        )
                    })}
                    <Divider className={classes.divider} />
                    <Grid container >
                        <Grid container item xs={6} >
                            <Button fullWidth onClick={handleOrderDetailsDisplay} style={{ background: 'orange', margin: '10px 0 0 20px', padding: '15px', borderRadius: '30px', textTransform: 'none' }} >
                                <Typography variant='h6' > Checkout &nbsp; Ksh. 720 </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </>
            ) : <h3 style={{ paddingTop: 50 }}> You have no products in your cart</h3>}
        </div>
    );
    const menuId = 'primary-menu';
    const renderMenu = (
        <React.Fragment>
            <Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
                <Grid container item xs={12} spacing={3} className={classes.closeDrawer}>
                    <Grid item xs={2} >
                        <IconButton onClick={toggleDrawer(false)} >
                            <CloseIcon fontSize="large" style={{ color: 'orange' }} />
                        </IconButton>
                    </Grid>
                </Grid>
                {navbar()}
            </Drawer>
        </React.Fragment>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar color="inherit" className={classes.header}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <React.Fragment>
                        <Drawer anchor='left' open={drawerOpen} >
                            <Grid container item xs={12} spacing={3} className={classes.closeDrawer}>
                                <Grid item xs={2} >
                                    <IconButton onClick={toggleDrawer(false)} >
                                        <CloseIcon fontSize="large" style={{ color: 'orange' }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            {navbar()}
                        </Drawer>
                    </React.Fragment>
                    <Typography className={classes.title} variant="h6" noWrap>
                    { location ? ` ASAP to ${location} ` : 'Zist Shopping' } 
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {token === undefined || token === '' ? (
                            <Grid container>
                                <Grid item xs={3} />
                                <Grid item xs={3} style={{marginTop:15}} >
                                    <SignupButtonSection />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={3} style={{marginTop:15}} >
                                    <LoginButtonSection />
                                </Grid>
                                <Grid item xs={2}>
                                    <React.Fragment >
                                        <AppBar position="sticky" style={{ background: 'inherit', color: 'black', boxShadow: 'none' }}>
                                            <Toolbar>
                                                <Button color="inherit" onClick={toggleProductsDrawer(true)} >
                                                    <ShoppingCartIcon fontSize='large' />
                                                    <div className={classes.cartCount}> {productsInBasket?.length} </div>
                                                </Button>
                                            </Toolbar>
                                        </AppBar>
                                        <Drawer anchor='right' open={open} style={{ width: '52% !important' }} >
                                            <Grid container item xs={12} spacing={3} className={classes.closeDrawer}>
                                                <Grid item xs={2} >
                                                    <IconButton onClick={toggleProductsDrawer(false)} >
                                                        <CloseIcon fontSize="large" style={{ color: 'orange' }} />
                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                            {list()}
                                        </Drawer>
                                    </React.Fragment>
                                </Grid>
                            </Grid>
                        ) : (
                            <>

                                {/* <Typography variant='h6' style={{ padding: '0 30px' }} > help </Typography>
                                {name == undefined || name == '' ? (
                                    <Typography variant='h6' style={{ padding: '0 30px' }} >update profile </Typography>
                                ) : (
                                    <Typography variant='h6' style={{ padding: '0 30px' }}> {name} </Typography>

                                )} */}
                                <React.Fragment >
                                    <AppBar position="static" style={{ background: 'inherit', color: 'black', boxShadow: 'none' }}>
                                        <Toolbar>
                                            <Button color="inherit" onClick={toggleProductsDrawer(true)} >
                                                <ShoppingCartIcon fontSize='large' />
                                                <div className={classes.cartCount}> {productsInBasket?.length} </div>
                                            </Button>
                                        </Toolbar>
                                    </AppBar>
                                    <Drawer anchor='right' open={open} style={{ width: '52% !important' }} >
                                        <Grid container item xs={12} spacing={3} className={classes.closeDrawer}>
                                            <Grid item xs={2} >
                                                <IconButton onClick={toggleProductsDrawer(false)} >
                                                    <CloseIcon fontSize="large" style={{ color: 'orange' }} />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        {list()}
                                    </Drawer>
                                </React.Fragment>
                            </>
                        )}

                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            {/* <MoreIcon /> */}
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* {renderMenu} */}
        </div>
    );
}
export default withCookies(PrimaryAppBar)