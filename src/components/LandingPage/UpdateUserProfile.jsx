import React from 'react';
import { withCookies, Cookies } from 'react-cookie';
import { useState } from 'react';
import History from '../../History';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography, TextField } from "@material-ui/core";
// import DatePicker from '@mui/lab/DatePicker';

import Navbar from '../Navbar/Navbar';

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
    submit: {
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

const UpdateUserProfile = (props) => {
    const cookies = new Cookies()
    const classes = useStyles()
    const [name,setName] =  useState('')
    const [DOB,setDOB] = useState()
    const [tel,setTel] = useState()
    const handleUpdateProfile = () => {
        cookies.set('name',name,{path: '/'})
        History.push('/')
    }
    return (
        <div className={classes.mainDiv}>
            <Navbar/>
            <div className={classes.mainGrid}>
            <form className={classes.mainGrid} onSubmit={ e => handleUpdateProfile()}>
                    <Grid container  >
                        <Grid item xs={12} style={{padding:'30px 0',textAlign:'center'}} >
                            <Typography variant='h4' > Fill in your basic information </Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Enter your name for a personalised touch"
                                variant="outlined"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                type='tel'
                                placeholder="Enter your phone number for contact purposes"
                                variant="outlined"
                                value={tel}
                                onChange={e => setTel(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: '0 0 20px 0' }} >
                        <Grid item xs={12} >
                            <TextField
                                fullWidth
                                required
                                placeholder="Enter your D.O.B for special offers on your day!"
                                variant="outlined"
                                type='date'
                                value={DOB}
                                onChange={e => setDOB(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container  >
                        <Grid item xs={12}  >
                            <Typography variant='h6' > * The D.O.B is also essential in ensuring compliance upon Ordering 18+ items.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item style={{margin: 'auto'}} >
                            <Button type='submit' className={classes.submit}> Save </Button> 
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default withCookies(UpdateUserProfile)