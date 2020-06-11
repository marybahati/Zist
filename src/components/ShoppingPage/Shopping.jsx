import React from 'react'
import bgImage from './../../Assets/bgShopping.png'
import { Grid, Dropdown, Image, Icon, Input, Button, Menu, List, Header, Modal, Form, Search, Card } from "semantic-ui-react";
import styled from 'styled-components';
import cartImage from "./../../Assets/cart.png";
import { LoginButton } from './../LandingPage/LoginButton';
import { SignUpButton } from './../LandingPage/SignUpButton';
import card1 from './../../Assets/1.jpg';
import card2 from './../../Assets/2.jpg';
import card3 from './../../Assets/3.jpg';
import card4 from './../../Assets/4.jpg';
import card8 from './../../Assets/8.jpg';
import card9 from './../../Assets/9.jpg';
import card10 from './../../Assets/10.jpg';

const CardColumn = styled(Grid.Column)`
    margin-bottom: 100px;
    padding: 0 !important;
`
export const Shopping = () => {
  return (
    <div >
      <Grid>
        <Grid.Row width={16} style={{ backgroundColor: "", textAlign: 'right', backgroundImage: `url(${bgImage})`, height: '1290px' }}>
          <Grid.Column width={6}></Grid.Column>
          <Grid.Column width={4} style={{ display: 'inline-block', background: '', paddingTop: '80px', textAlign: 'right' }}>
            {/* <Search
            input={{ icon: 'search', iconPosition: 'left'}}
            placeholder='SEARCH FOR A PLACE OR AN ITEM'
            width={2}
            size='huge'
            fluid
            style={{display:'inline-block',backgroundColor:
            '#FEE2D4 !important',marginRight: '50px' ,
            minWidth: '500px !important'
          }}
          /> */}
            <Input icon='search' fluid={true} style={{ fontSize: '27px' }} transparent type='search'
              iconPosition='left' placeholder='SEARCH FOR A PLACE OR ITEM ' />

          </Grid.Column >
          <Grid.Column width={6} style={{ display: 'inline-block', background: '', marginRight: '' }}>
            <List style={{ display: 'inline-block' }}>
              <List.Item as='a' href='' style={{ paddingRight: '30px', fontSize: '20px', color: '#050504', textDecoration: 'underline', paddingTop: '80px' }}>
                HELP
            </List.Item>
            </List>
            <LoginButton />
            <SignUpButton />

            <Image
              src={cartImage}
              style={{ display: "inline-block", margin: " 0 18px" }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <Modal  size='tiny' closeIcon  style={{border:'1px solid #707070'}} centered={false}
  trigger={<Button
   style={{
     width: '201px',
     height: '48px',
     background: '#0B0B0B 0% 0% no-repeat padding-box',
     color: '#fff',
     opacity:1,  
     borderRadius:'20px',
     marginRight: '20px'
 }}
  >SIGN UP</Button>} >
  <Grid width={16} style={{padding:'61px 0 60px 105px',backgroundColor:'',textAlign:'center'}}>
   <Modal.Content>
   <h3 >SIGN UP </h3>
     <Modal.Description style={{marginBottom: '40px'}}>
       <Header style={{marginBottom:'30px',marginTop: '30px',fontSize:'18px'}}>Create a new account</Header>
       <Form onSubmit={handleSubmit}>

       <Form.Input   transparent
       name='first_name'
       required={true}
       type='text'
       textAlign='center'
       size='tiny'
       onChange = {handleSignup}
       placeholder='First Name' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} />

       <Form.Input   transparent
       name='last_name'
       required={true}
       type='text'
       textAlign='center'
       size='tiny'
       onChange = {handleSignup}
       placeholder='Last Name' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} />

       <Form.Input   transparent
       name='email'
       required={true}
       type='email'
       textAlign='center'
       size='tiny'
       onChange = {handleSignup}
       placeholder='Email' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} />

       <Form.Input   transparent
       name='password'
       required={true}
       type='password'
       textAlign='center'
       size='tiny'
       onChange = {handleSignup}
       placeholder='Password' style={{borderBottom:'2px solid #FFE5B4'}} />
        <ModalSignUpButton />
       </Form>
     </Modal.Description>
     <p style={{color:'#BCB4A7'}}>Already have an account ?</p> 
      <a href='' style={{color:'#050504'}}><strong>Login</strong></a>
   </Modal.Content>
  </Grid>
 </Modal>

 <Modal  size='tiny' closeIcon  style={{border:'1px solid #707070'}} centered={false}
 trigger={
   <Button
   style={{
     width: '201px',
     height: '48px',
     background: ' 0% 0% no-repeat padding-box',
     border:' 2px solid #080808',
     opacity:1,  
     borderRadius:'20px'
 }}
   >LOGIN</Button>
 }
   >
  <Grid width={16} style={{padding:'61px 0 80px 105px',backgroundColor:'',textAlign:'center'}}>
   <Modal.Content>
   <h2 >LOG IN</h2>
     <Modal.Description style={{marginBottom: '40px'}}>
       {/* <Header style={{marginBottom:'50px',marginTop: '50px',fontSize:'28px'}}>Get into your account</Header> */}
      {/* <Form onSubmit={handleLogin}>
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

        <ModalLoginButton/>
       </Form>
       <a href='' style={{color:'#BCB4A7',textDecoration: 'underline'}}>Can't Sign in?</a>
     </Modal.Description>
     <a href='' style={{color:'#BCB4A7'}}>New to Zist Shopping ? <br/> Sign up</a>
   </Modal.Content>
  </Grid>
 </Modal> */}


      <Grid width={16}>
        <Grid.Row style={{ background: '' }}>icons  will be here</Grid.Row>
        <Grid.Row width={16} style={{ background: '', margin: '120px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 30px' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card1} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Brandy's Deli <Icon name='check circle' color='yellow' /></Card.Header>
                <h4>
                  All your utilities in one place
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                  <List.Item >utilities</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card3} wrapped ui={false} />
              <Card.Content>
                <Card.Header>The freshest grocery shop <Icon name='check circle' color='yellow' /> </Card.Header>
                <h4>
                  High quality groceries from local producers
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>

        <Grid.Row width={16} style={{ background: '', margin: '120px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 30px' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card2} wrapped ui={false} />
              <Card.Content>
                <Card.Header>The freshest grocery shop <Icon name='check circle' color='yellow' /></Card.Header>
                <h4>
                  High quality groceries from local producers
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card4} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Mall A <Icon name='check circle' color='yellow' /> </Card.Header>
                <h4>
                  With unique shops only on zist
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                  <List.Item >utilities</List.Item>
                  <List.Item >health</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>


        <Grid.Row width={16} style={{ background: '', margin: '120px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 30px' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card8} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Valery Fresh Produce <Icon name='check circle' color='yellow' /></Card.Header>
                <h4>
                  Fresh produce from real farms
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card8} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Muthoni's Groceries <Icon name='check circle' color='yellow' /> </Card.Header>
                <h4>
                  freshly sourced produce
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>

        <Grid.Row width={16} style={{ background: '', margin: '120px 0' }} >
          <CardColumn width={7} style={{ margin: '0 100px 0 30px' }}>
            <Card fluid={true} style={{ borderRadius: '8px ', border: '1px solid #707070' }}>
              <Image src={card9} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Maguna's kiosk <Icon name='check circle' color='yellow' /></Card.Header>
                <h4>
                  Wide variety of goods
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >groceries</List.Item>
                </List>
              </Card.Content>

            </Card>
          </CardColumn>

          <CardColumn width={7} style={{ margin: '0 30px 0 0' }}>
            <Card fluid={true} style={{ border: '1px solid #707070', borderRadius: '8px ' }}>
              <Image src={card10} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Jack's butchery(meat market) <Icon name='check circle' color='yellow' /> </Card.Header>
                <h4>
                  Fresh meat from organic farmers
      </h4>

                <List bulleted horizontal >
                  <List.Item ></List.Item>
                  <List.Item >meat</List.Item>
                </List>
              </Card.Content>
            </Card>
          </CardColumn>

        </Grid.Row>


      </Grid>
    </div>
  )
}