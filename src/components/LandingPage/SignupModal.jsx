import React, { useState } from 'react';
import { Modal, Grid, IconButton, Typography, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import { ModalSignUpButton } from './ModalSignUpButton';
import { LinkingLoginButton } from './LinkingLoginButton';
import { HOST_API } from '../../endpoints';
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

export const SignupModal = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      enqueueSnackbar(`Your passwords do not match`, { variant: 'warning' })
    } else {
      axios.post(HOST_API + 'register/', {
        email: email,
        password: password
      })
        .then(res => {
          if (res.status === 201) {
            enqueueSnackbar('You have successfully signed up', { variant: 'success' })
            props.handleClose()
          }
        }).catch(error => {
          enqueueSnackbar(`${error}`, { variant: 'error' })
        });
    }

  }

  return (
    <div>
      <Modal
        open={props.modalOpen}
        onClose={props.handleClose}
        disableBackdropClick={true}
      >
        <Grid className={classes.paper}   container style={{ width: '45%', margin: '40px auto 0 auto' }} >
          <form onSubmit={handleSignup} >
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={2} >
              <IconButton onClick={props.handleClose} >
                <CloseIcon fontSize="large" style={{ color: 'orange' }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container item xs={12} style={{ textAlign: 'center' }}>
            <Grid item xs={12} >
              <Typography variant='h5' > Don’t miss out on your items </Typography>
              <Typography variant='h6' > SIGN UP </Typography>
              <Typography variant='h6' >Create a new account </Typography>
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
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  name="password"
                  placeholder="Password"
                  type="password"
                  className={classes.textfields}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  name="password"
                  placeholder="Confirm Password"
                  type="password"
                  className={classes.textfields}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{textAlign:'center', justifyContent:'center'}} >
                <ModalSignUpButton/>
                <p style={{ color: 'black', paddingTop: '20px', fontSize: '14px' }}>Already have an account ?</p>
                <LinkingLoginButton />
              </Grid>
            </Grid>
          </div>
          </form>
        </Grid>
      </Modal>
    </div>
  )
}

