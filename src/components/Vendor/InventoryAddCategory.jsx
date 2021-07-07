import React, { useState } from 'react'
// import { Grid, Image, Button, Icon, Form } from "semantic-ui-react";
import { Grid, Typography, IconButton, TextField, Button } from "@material-ui/core";
import shelving from './../../Assets/shelving.png';
import history from '../../History';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { HOST_API } from '../../endpoints';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// const MainDiv = styled.div`
//     background: #F9F7F1 0% 0% no-repeat padding-box;
//     opacity: 1;
//     padding: 50px 0 !important;
// `;
// const MainGrid = styled(Grid)`
//     width: 80%;
//     margin: 0 auto 100px auto !important;
// `;
// const ActionButton = styled(Button)`
//     background: #FEE2D4 0% 0% no-repeat padding-box !important;
//     border: 2px solid #FEE2D4 !important;
//     border-radius: 24px !important;
//     opacity: 1;
//     height: 66px !important;
//     width: 100%;
//     font-size: 26px !important;
//     color: #050504 !important;
//     margin: 30px 0 !important;
// `;
// const DropzoneDiv = styled.div`
// text-align: center;
//   padding: 20px;
//   /* border: 3px dashed #eeeeee; */
//   background-color: #fff;
//   color: #bdbdbd;
//   height:230px;
//   margin: auto 0 !important;

// `;
// const IntroColumn = styled(Grid.Column)`
//     width: 60% !important;
//     margin: 0 auto !important;
//     text-align: center  !important;
// `;
// const CenteredColumn = styled(Grid.Column)`
//     margin: 0 auto !important;
// `;
// const Buttonx = styled(Button)`
//     background: #FFBD59 0% 0% no-repeat padding-box !important;
//     border: 2px solid #FEE2D4 !important;
//     border-radius: 24px !important;
//     opacity: 1;
//     height: 90px !important;
//     width: 100%;
//     font-size: 26px !important;
//     color: #050504 !important;
//     margin: 50px 0 !important;
// `;
// const Icons = styled(Grid.Column)`
//   padding: 0 0 0 30px ;
//   text-align: center;
// `;
// const Columns = styled(Grid.Column)`
//    margin: 0 auto !important;
// //    width: 50% !important,;
// `;
// const NoSpaceColumn = styled(Grid.Column)`
//    padding: 0 !important;
// `;
// const DoneButton = styled(Button)`
//     background: #FFBD59 0% 0% no-repeat padding-box !important;
//     border: 2px solid #FEE2D4 !important;
//     border-radius: 24px !important;
//     opacity: 1;
//     height: 66px !important;
//     width: 100%;
//     font-size: 26px !important;
//     color: #050504 !important;
//     margin: 20px 0 !important;
// `;

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
    textfields: {
        background: 'white',
        padding: '5px 0 0 0',
        margin: '0  0 10px 0',
        ' & .MuiOutlinedInput-input': {
            padding: '18px 14px'
        },
    },
    centeredButtonColumns: {
        width: '150px',
        margin: '0 auto'
    },
    createItemButton: {
        background: '#FFBD59 0% 0% no-repeat padding-box !important',
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

const AddCategory = (props) => {
    const { cookies } = props
    const data = cookies.get('login-res')
    const businessId = cookies.get('business-id')
    const token = data?.access
    console.log(data, token, businessId)
    const [category, setCategory] = useState('')
    const classes = useStyles();

    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const product_res = await axios.post(HOST_API + `zist/categories/`,
                {
                    category: category,
                    // description: description,
                    business: businessId
                },
                { headers: { "Authorization": `Bearer ${token}` } }
            )
            if (product_res.status == 201) {
                console.log(product_res)
                enqueueSnackbar(`You have successfully created category ${category}`, { variant: 'success' })
                setCategory('')
                // setDescription('')
                // history.push('/inventory-create-product')
            }
        } catch (error) {
            console.log(error)
            enqueueSnackbar(`${error}`, { variant: 'error' })
        }
    }
    const handleGoingBack = () => {
        history.goBack()
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
                        <Typography variant='h5' className={classes.boldFont} > Add your products. </Typography>
                    </Grid>
                </Grid>
                <form autocomplete='off' onSubmit={handleSubmit} >
                    <Grid container  >
                        <Grid item xs={6} style={{ margin: '20px auto' }} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Category"
                                variant="outlined"
                                name='name'
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                                className={classes.textfields}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} >
                        <Grid item className={classes.centeredButtonColumns} >
                            <Button type='submit' className={classes.createItemButton} > Save </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}
export default withCookies(AddCategory)