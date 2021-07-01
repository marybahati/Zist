import React from 'react';
import styled from 'styled-components';
// import { Modal, Header, Icon, Grid } from 'semantic-ui-react';
import { Modal, Grid, IconButton, Typography, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    width: '45%', 
    margin: '40px auto 0 auto',
  },

}));
export const SuccessModal = (props) => {
  const classes = useStyles();
  return (
   
      <Modal
        open={props.modalOpen}
        onClose={props.handleClose}
        disableBackdropClick={true}
      >
         <div className={classes.paper}   container >
        <Grid container item xs={12} >
          <Grid item xs={2} >
            <IconButton onClick={props.handleClose} >
              <CloseIcon fontSize="large" style={{ color: 'orange' }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container item xs={12} >
          <Grid item xs={2} style={{margin:'0 auto'}} >
            <CheckCircleOutlineIcon style={{fontSize:'150px'}} />
          </Grid>
        </Grid>
        <Grid container item xs={12} >
          <Grid item xs={12} >
            <Typography variant='body1'>
              Congrats on knocking the first step out of the woods , You’re officially on your way to being a
              fully-fledged veon Zist Shopping. We’ll contact you with the guidelines and relevant
              information on the same.
            </Typography>
            <Typography variant='h6' style={{paddingTop:30}}>  The Zist Team </Typography>
          </Grid>
        </Grid>
        </div>
        {/* <Grid.Column width={14} >
                <Modal.Content  style={{textAlign: 'center'}} >
                <Icon name='check circle outline' size='massive'/>
                <Description >
                Congrats on knocking the first step out of the woods , You’re officially on your way to being a 
                fully-fledged veon Zist Shopping. We’ll contact you with the guidelines and relevant
                 information on the same.
                </Description>
                <Signature> The Zist Team,</Signature>
                </Modal.Content>
                
              </Grid.Column> */}
      </Modal>
    // </div>
  )
}

