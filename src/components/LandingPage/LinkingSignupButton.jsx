import React from 'react'
import { SignupModal } from './SignupModal';
import { LinkingButton } from './LinkingButtons';

export class LinkingSignupButton extends React.Component {

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
        > Sign up </LinkingButton>,
        <SignupModal 
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