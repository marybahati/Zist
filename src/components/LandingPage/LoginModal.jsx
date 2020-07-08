import React, { useState } from 'react';
import { Modal, Header, Button, Icon, Grid, Form } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ModalSignUpButton } from './ModalSignUpButton';
import { LinkingButton } from './LinkingButtons';
import { LinkingLoginButton } from './LinkingLoginButton';
import { ModalLoginButton } from './ModalLoginButton';
import { LinkingSignupButton } from './LinkingSignupButton';

export const LoginModal = (props) => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/token/', {
          // data to be sent
            email: loginEmail ,
            password: loginPassword
          })
          .then(res => {
      
            if(res.status === 200 ){
             setSnackbarOpen(true)
             toast.success("You have successfully logged in",{
               className:'toast',
               draggable: true,
               position: toast.POSITION.TOP_CENTER,
               type: toast.TYPE.SUCCES,
               hideProgressBar: true
             }) 
             props.handleClose() 
            } 
       
           }).catch(error => {
             setSnackbarOpen(true)
             toast.error("An error occurred, please check your email and password",{
               className:'toast',
               draggable: true,
               position: toast.POSITION.TOP_CENTER,
               type: toast.TYPE.ERROR,
               hideProgressBar: true
             })   
           });
      }

  return (
    <div>
      <ToastContainer autoClose={4000} onOpen={snackbarOpen} />
      <Modal
        open={props.modalOpen}
        size='tiny'
        closeOnEscape={true}
        centered={false}
        style={{ padding: '40px 15px' }}
      >
        <Header style={{ border: '0' }}>
          <Grid>
            <Grid.Row style={{ padding: '0'}}>
              <Grid.Column width={2} style={{ background: '' }} >
                <Modal.Actions>
                  <Icon
                    type='button'
                    name='remove'
                    color='orange'
                    size='large'
                    link
                    onClick={props.handleClose}
                  />
                </Modal.Actions>
              </Grid.Column>
              <Grid.Column width={14} style={{ background: '', textAlign: 'center', fontSize: '20px'}} >
                <h2> LOGIN </h2>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Header>


        <Modal.Content>
          <Grid>
            <Grid.Row>
              {/* <Grid.Column width={1} style={{ background: '' }} > </Grid.Column> */}
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
                <a href='' style={{color:'#BCB4A7',textDecoration: 'underline',fontSize:'14px'}}>Can't Sign in?</a> <br/>
                <div>
                <p style={{color:'#BCB4A7',fontSize:'14px',margin:'20px 0 0 0'}}>New to Zist Shopping ?</p> <br/>
                <LinkingSignupButton/>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

      </Modal>
    </div>
  )
}
