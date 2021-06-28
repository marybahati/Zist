import React, { useState } from 'react';
import { Modal, Grid, IconButton, Typography, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { ModalLoginButton } from './ModalLoginButton';
import { LinkingSignupButton } from './LinkingSignupButton';
import { withCookies,Cookies } from 'react-cookie';
import {HOST_API} from '../../endpoints';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textfields: {
    width: '100%',
    marginBottom: 30,
    '& .MuiInput-underline:before ': {
      borderBottom: '2px solid #FFE5B4',
    },
    '& .MuiInput-underline:after ': {
      borderBottom: '2px solid #FFE5B4',
    },
  },

}));

const LoginModal = (props) => {
    const classes = useStyles();
    const cookies = new Cookies();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [token, setToken] = useState('')
    const [userData, setUserData] = useState()
    cookies.set('access-token',token,{path: '/'})

    const { enqueueSnackbar } = useSnackbar();

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post(HOST_API + 'token/', {
          // data to be sent
            email: loginEmail ,
            password: loginPassword
          })
          .then(res => {
            if(res.status === 200 ){
              console.log(res.data)
              cookies.set('login-res', res.data,{ path: '/' })
              window.location.reload(false);
              enqueueSnackbar('You have successfully logged in', { variant: 'success' })            
              props.handleClose() 
            } 
            // res.data.vendor !== null ? History.push('/vendor-dashboard') : History.push('/shopping')
       
           }).catch(error => {
            enqueueSnackbar(`${error}`, { variant: 'error' })
            console.log(error)
           });
      }

  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={props.handleClose}
        disableBackdropClick={true}
      >
        <Grid className={classes.paper}   container style={{ width: '45%', margin: '40px auto 0 auto' }} >
          <form onSubmit={handleLogin} >
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2} >
              <IconButton onClick={props.handleClose} >
                <CloseIcon fontSize="large" style={{ color: 'orange' }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ textAlign: 'center' }}>
            <Grid item xs={12} >
              <Typography variant='h6' > LOGIN </Typography>
            </Grid>
          </Grid>
          <div style={{ padding: '30px 0 0 0', width: '90%', margin: '0 auto' }}>
            <Grid container component='form' autocomplete='off' item xs={12} >
              <Grid item xs={12} >
                <TextField
                  required
                  name="email"
                  placeholder="Email"
                  type="email"
                  className={classes.textfields}
                  onChange={ e => setLoginEmail(e.target.value) }
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  name="password"
                  placeholder="Password"
                  type="password"
                  className={classes.textfields}
                  onChange={ e => setLoginPassword(e.target.value) }
                />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center', justifyContent:'center'}} >
              <ModalLoginButton />
              <a href='' style={{color:'black',textDecoration: 'underline',fontSize:'14px'}}>Can't Sign in?</a> <br/>
                <p style={{color:'black',fontSize:'14px',margin:'20px 0 0 0'}}>New to Zist Shopping ?</p> <br/>
                <LinkingSignupButton/>
              </Grid>
            </Grid>
          </div>
          </form>
        </Grid>
      </Modal>
     {/* <Modal
      >
        <Header style={{ border: '0' }}>
          <Grid>
            <Grid.Row style={{ padding: '0'}}>
             
              <Grid.Column width={14} style={{ background: '', textAlign: 'center', fontSize: '20px'}} >
                <h2> LOGIN </h2>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Header>


        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16} style={{ background: '', textAlign: 'center', fontSize: '18px' }} >

              <Form onSubmit={handleLogin} style={{width: '70%',margin: '0 auto'}}>
                <Form.Input   transparent
                onChange={ e => setLoginEmail(e.target.value) }
                required={true}
                type='email'
                textAlign='center'
                size='tiny'
                placeholder='Email' style={{borderBottom:'2px solid #FFE5B4',margin:'30px 0'}} />

                <Form.Input   transparent
                onChange={ e => setLoginPassword(e.target.value) }
                required={true}
                type='password'
                textAlign='center'
                size='tiny'
                placeholder='Password' style={{borderBottom:'2px solid #FFE5B4'}} />

                 <ModalLoginButton />
                </Form>
                <a href='' style={{color:'black',textDecoration: 'underline',fontSize:'14px'}}>Can't Sign in?</a> <br/>
                <div>
                <p style={{color:'black',fontSize:'14px',margin:'20px 0 0 0'}}>New to Zist Shopping ?</p> <br/>
                <LinkingSignupButton/>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

      </Modal> */}
    </div>
  )
}
export default withCookies(LoginModal)