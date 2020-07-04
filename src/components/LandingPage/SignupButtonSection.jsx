import React from 'react'
import MyModal, { SignupModal } from './SignupModal';
import { Button, Grid } from 'semantic-ui-react';
import { SignUpButton } from './SignUpButton';

export class SignupButtonSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  render() {
    return([
        <SignUpButton // Button to click to activate the Modal
          key='button1'
          primary
          content='Click!'
          
          handleClick={
            () => {
              this.setState({ modalOpen: true })
            }
          }
        />,
        <SignupModal // The invisible modal itself
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

