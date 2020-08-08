import React from 'react'
import MyModal, { SignupModal } from './SignupModal';
import { Button, Grid } from 'semantic-ui-react';
import { SignUpButton } from './SignUpButton';
import { LoginButton } from './LoginButton';
import  LoginModal from './LoginModal';

export class LoginButtonSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  render() {
    return([
      
        <LoginButton 
          key='button1'
          handleClick={
            () => {
              this.setState({ modalOpen: true })
            }
          }
        /> ,
        <LoginModal 
          key='modal1'
          modalOpen={this.state.modalOpen}
          handleClose={
            () => {
              this.setState({ modalOpen: false })
            }
          }
        />
    ])
  }
}

