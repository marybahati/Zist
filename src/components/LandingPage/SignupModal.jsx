import React, { useState } from 'react';
import { Modal, Header, Icon, Grid, Form } from 'semantic-ui-react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ModalSignUpButton } from './ModalSignUpButton';
import { LinkingLoginButton } from './LinkingLoginButton';
import { HOST_API } from './../../endpoints';
import { useSnackbar } from 'notistack';

export const SignupModal = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  // console.log(userId)
  const { enqueueSnackbar } = useSnackbar();

  const handleSignup = (event) => {
    event.preventDefault();
    if(password !== confirmPassword){
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
        size='small'
        closeOnEscape={true}
        // centered={false}
        style={{ padding: '30px 30px' }}
      >
        <Header style={{ border: '0' }}>
          <Grid>
            <Grid.Row style={{ padding: '0' }}>
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
            <Grid.Row style={{ padding: '10px 0 0 0 ' }}>
              <Grid.Column width={14} style={{ background: '', textAlign: 'center', fontSize: '20px' }} >
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

                <Form onSubmit={handleSignup} style={{ width: '80%', margin: '0 auto' }}>

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
                    placeholder='Email' style={{ borderBottom: '2px solid #FFE5B4', margin: '30px 0' }} />

                  <Form.Input transparent
                    name='password'
                    required={true}
                    type='password'
                    textAlign='center'
                    size='tiny'
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Password' style={{ borderBottom: '2px solid #FFE5B4', margin: '0 0 30px 0' }} />
                  <Form.Input transparent
                    name='password'
                    required={true}
                    type='password'
                    textAlign='center'
                    size='tiny'
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder='Confirm Password' style={{ borderBottom: '2px solid #FFE5B4' }} />
                  <ModalSignUpButton />
                </Form>

                <p style={{ color: 'black', paddingTop: '20px', fontSize: '14px' }}>Already have an account ?</p>
                {/* <LinkingLoginButton/> */}
                <LinkingLoginButton />

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

      </Modal>
    </div>
  )
}

