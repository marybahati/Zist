import React from 'react'
import { LinkingButton } from './LinkingButtons';
import  LoginModal  from './LoginModal';

export class LinkingLoginButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  render() {
    return([
        <LinkingButton 
          onClick={
            () => {
              this.setState({ modalOpen: true })
            }
          }
        > Login </LinkingButton>,
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