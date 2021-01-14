import React, { useState } from 'react';
import { Modal, Header, Button, Icon, Grid, Form } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ModalSignUpButton } from './ModalSignUpButton';
import { LinkingButton } from './LinkingButtons';
import { LinkingLoginButton } from './LinkingLoginButton';
import History from '../../History';

export const SignupModal = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  // console.log(userId)

  const handleSignup = (event) => {
    event.preventDefault();
    axios.post('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/register/', {
      // first_name: firstName,
      // last_name: lastName,
      email: email,
      password: password
    })
      .then(res => {

        if (res.status === 201) {
          setUserId(res.data.id)
          setSnackbarOpen(true)
          toast.success("You have successfully signed up", {
            className: 'toast',
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
            type: toast.TYPE.SUCCES,
            hideProgressBar: true
          })
          props.handleClose()
          History.push({ 
            pathname: '/shopping',
            state: userId
           })
        }
      }).catch(error => {
        setSnackbarOpen(true)
        toast.error("An error occurred, please check your email and password", {
          className: 'toast',
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
        size='small'
        closeOnEscape={true}
        // centered={false}
        style={{ padding: '30px 30px'}}
      >
        <Header style={{ border: '0' }}>
          <Grid>
            <Grid.Row style={{ padding: '0'}}>
              <Grid.Column width={12} style={{ background: '' }} >
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
              {/* <Grid.Column width={14} style={{ background: '', textAlign: 'center', fontSize: '20px'}} >
                <h2> SIGN UP </h2>

              </Grid.Column> */}
            </Grid.Row>
            <Grid.Row style={{ padding: '10px 0 0 0 '}}>
              <Grid.Column width={14} style={{ background: '', textAlign: 'center', fontSize: '20px'}} >
                <h1> Don’t miss out on your items </h1>
                <h2> SIGN UP </h2>
                <h2>Create a new account </h2>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Header>


        <Modal.Content>
          <Grid>
            <Grid.Row>
              {/* <Grid.Column width={1} style={
                { background: '' }} > </Grid.Column> */}
              <Grid.Column width={16} style={{ background: '', textAlign: 'center', fontSize: '18px' }} >
                
                <Form onSubmit={handleSignup} style={{width: '80%',margin: '0 auto'}}>

                  {/* <Form.Input transparent
                    name='first_name'
                    required={true}
                    type='text'
                    textAlign='center'
                    size='tiny'
                    onChange={e => setFirstName(e.target.value)}
                    placeholder='First Name' style={{ borderBottom: '2px solid #FFE5B4', margin: '20px 0 ' }} /> */}

                      {/* <Form.Input   transparent
                    name='last_name'
                    required={true}
                    type='text'
                    textAlign='center'
                    size='tiny'
                    onChange = { e => setLastName(e.target.value)}
                    placeholder='Last Name' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} /> */}

                  <Form.Input transparent
                    name='email'
                    required={true}
                    type='email'
                    textAlign='center'
                    size='tiny'
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Email' style={{borderBottom:'2px solid #FFE5B4',margin:'30px 0'}} />

                  <Form.Input transparent
                    name='password'
                    required={true}
                    type='password'
                    textAlign='center'
                    size='tiny'
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password' style={{ borderBottom: '2px solid #FFE5B4' }} />
                  <ModalSignUpButton />
                </Form>

                <p style={{color:'black',paddingTop: '20px',fontSize: '14px'}}>Already have an account ?</p>
                {/* <LinkingLoginButton/> */}
                <LinkingLoginButton/>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

      </Modal>
    </div>
  )
}

