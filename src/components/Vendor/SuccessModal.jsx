import React, { useState } from 'react';
import { Modal, Header, Icon, Grid } from 'semantic-ui-react';


export const SuccessModal = (props) => {


  return (
    <div>
      <Modal
        open={props.modalOpen}
        size='small'
        closeOnEscape={true}
        centered={false}
        style={{ padding: '40px 15px' }}
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
              <Grid.Column width={15} >
                <Modal.Content  style={{textAlign: 'center'}} >
                <Icon name='check circle outline' size='massive'/>
                <h2 style={{textAlign: 'left !important'}}>
                Congrats on knocking the first step out of the woods , You’re officially on your way to being a 
                fully-fledged veon Zist Shopping. We’ll contact you with the guidelines and relevant
                 information on the same. The Zist Team,
                </h2>
                </Modal.Content>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Header>


        <Modal.Content>
          <Grid>
            <Grid.Row>
              {/* <Grid.Column width={1} style={{ background: '' }} > </Grid.Column> */}
              <Grid.Column width={16} style={{ background: '', textAlign: 'center', fontSize: '18px' }} >

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>

      </Modal>
    </div>
  )
}

