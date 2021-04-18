import React from 'react';
import styled from 'styled-components';
import { Modal, Header, Icon, Grid } from 'semantic-ui-react';


export const SuccessModal = (props) => {

const Description = styled.h3`
  text-align: left !important;
  line-height : 40px;
`;
const Signature = styled.h3`
  text-align: left !important;
  margin-top: 140px !important;
`;

  return (
    <div>
      <Modal
        open={props.modalOpen}
        size='small'
        closeOnEscape={true}
        centered={true}
        style={{ padding: '40px 15px 25px 15px' }}
      >
        <Header style={{ border: '0' }}>
          <Grid>
            <Grid.Row style={{ padding: '0'}}>
              <Grid.Column width={1} >
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
              <Grid.Column width={14} >
                <Modal.Content  style={{textAlign: 'center'}} >
                <Icon name='check circle outline' size='massive'/>
                <Description >
                Congrats on knocking the first step out of the woods , You’re officially on your way to being a 
                fully-fledged veon Zist Shopping. We’ll contact you with the guidelines and relevant
                 information on the same.
                </Description>
                <Signature> The Zist Team,</Signature>
                </Modal.Content>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Header>

      </Modal>
    </div>
  )
}

