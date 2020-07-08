import React from 'react'
import { SuccessModal } from './SuccessModal';
import { ContinueButton } from './ContinueButton';

export class ContinueButtonSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    }
  }

  render() {
    return([
        <ContinueButton // Button to click to activate the Modal
          handleClick={
            () => {
              this.setState({ modalOpen: true })
            }
          }
        />,
        <SuccessModal // The invisible modal itself
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

