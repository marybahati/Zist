import React from 'react'
import bgImage from './../../Assets/bgShopping.png'
import { Grid, Dropdown, Image, Icon, Input, Button , Menu, List, Header, Modal,Form, Search} from "semantic-ui-react";
import styled from 'styled-components';
import cartImage from "./../../Assets/cart.png";

export const Shopping = () => {
    return (
        <Grid style={{ backgroundImage:`url(${bgImage})`,height:'1290px' }} >
         <Grid.Column width={16} style={{ backgroundColor: "",textAlign:'right'}}>
         <Grid.Column width={8} style={{display:'inline-block',backgroun:'#FEE2D4',marginRight: '50px'}}>
         <Search
            input={{ icon: 'search', iconPosition: 'left'}}
            placeholder='SEARCH FOR A PLACE OR AN ITEM'
            size='huge'
            fluid={true}
            style={{display:'inline-block',background:'#FEE2D4',marginRight: '50px'}}
          />
         </Grid.Column>
            <List style={{display:'inline-block'}}>
            <List.Item as='a'href='' style={{paddingRight: '30px', fontSize: '20px',color: '#050504',textDecoration:'underline',paddingTop:'80px'}}>
                HELP
            </List.Item>
            </List>
 
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
  
 <Image
   src={cartImage}
   style={{ display: "inline-block", marginLeft: "1rem" }}
 />
</Grid.Column>
       </Grid>
    )
}