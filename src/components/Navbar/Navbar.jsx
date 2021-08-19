import React from 'react';
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
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        background: '#F9F7F1',
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
    }
}));

function PrimaryAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState()
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const { cookies } = props
    const userData = cookies.get('login-res')
    const token = userData?.access
    const names = cookies.get('name')
    const splitName = names?.split(' ')
    const name = splitName !== undefined ? splitName[0] : null

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
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setDrawerOpen({ ...drawerOpen, [anchor]: open });
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
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
                {['Become a vendor', 'Articles', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
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
                {list()}
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
                    <Typography className={classes.title} variant="h6" noWrap>
                        Zist Shopping
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {token === undefined || token === '' ? (
                            <>
                                <SignupButtonSection />
                                <LoginButtonSection />
                                <ShoppingCartIcon fontSize='large' />
                            </>
                        ) : (
                            <>
          
                                <Typography variant='h6' style={{padding: '0 30px'}} > help </Typography>
                                {name == undefined || name == '' ? (
                                    <Typography variant='h6' style={{padding: '0 30px'}} >update profile </Typography>
                                ) : (
                                    <Typography variant='h6' style={{padding: '0 30px'}}> {name} </Typography>

                                )}
                                <ShoppingCartIcon fontSize='large' />
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
            {renderMenu}
        </div>
    );
}
export default withCookies(PrimaryAppBar)