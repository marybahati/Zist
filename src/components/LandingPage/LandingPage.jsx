import React, {useState} from "react";
import zist from "./../../Assets/zist.svg";
import { Grid, Dropdown, Image, Icon, Input, Button , Label, List, Header, Modal,Form,Message} from "semantic-ui-react";
import cartImage from "./../../Assets/cart.png";
import { LoginButton } from "./LoginButton";
import styled from 'styled-components';
import coffeShop from "./../../Assets/coffeShop.png";
import step1 from "./../../Assets/step1.png";
import step2 from "./../../Assets/step2.png";
import step3 from "./../../Assets/step3.png";
import zistApp from "./../../Assets/zistApp.png";
import "./styles.css";     
import { SignUpButton } from "./SignUpButton";
import { ModalLoginButton } from "./ModalLoginButtonn";
import { ModalSignUpButton } from "./ModalSignUpButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleComponent } from 'react-google-location';
import history from './../../History';
import axios from 'axios';

const API_KEY = 'AIzaSyB8dwrSJiQel6cCeOtBVThnu_ZcBKT3LM4'  

const MainDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ffecd2;
`;
const MenuGrid = styled.div`
    width: 45%;
    margin: 0 auto 100px auto ;
    height: 145px;
`
const TabDiv = styled.div`
    width: 100%;
    padding: 26px 0px;
    text-align: center;
`
const IntroGrid = styled(Grid)`
    background: #FEE2D4 0% 0% no-repeat padding-box;
    opacity: 1;
`
const IntroColumn = styled(Grid.Column)`
    border: 1px solid #707070;
    padding-bottom: 100px;
`
const BetaButton = styled.button`
    width: 450px;
    height: 109px;
    background-color: inherit;
    color: #050504;
    margin-left: 120px;
    margin-top: 120px;
    margin-bottom: 150px;
    border: 1px solid #707070;
    font-weight: bold;
`
const DemoGrid = styled(Grid)`
    background: #FEE2D4 0% 0% no-repeat padding-box;
`
const AppSectionGrid = styled(Grid)`
    background: #FFE5B4D3;
    margin-top: 100px;
`
const AppLinkButton = styled.button`
    background: #FFBD59 0% 0% no-repeat padding-box;
    opacity: 1;
    width:500px;
    height: 111px;
    border-radius: 55px;
    margin-left: 100px;
    margin-top: 120px;
    color: #050504;
    font-size: 20px;
    border: none;
`
const FooterGrid =  styled(Grid.Column)`
    margin-left: 90px;
    margin-top: 100px;
`
const FooterTitle = styled.h1`
  font-size: 2rem;
  text-align: left;
  color: #0B0B0B;
`;
const FooterLinks = styled(List.Item)`
  font-size: 2rem;
  text-align: left;
  color: #707070;
  line-height: 60px;
`;
const SocialMediaLinks = styled(List.Item)`
  font-size: 2rem;
  text-align: left;
  color: #0B0B0B;
  line-height: 60px;
  font-weight: bold;
`;

const LandingPage = () => { 
  const [location, setLocation] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  console.log(firstName,lastName,email,password)
  console.log(location)
  const handleOpen = () => setOpenModal({ openModal: true })
  const handleClose = () => setOpenModal({ openModal: false })
  console.log(openModal)

const handleSignup = (event) => {
  event.preventDefault();
  axios.post('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/register/', { 
    first_name: firstName,
    // last_name: lastName,
    email: email,
    password: password
   })
    .then(res => {

     if(res.status === 201 ){
      setSnackbarOpen(true)
      toast.success("You have successfully signed up",{
        className:'toast',
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.SUCCES,
        hideProgressBar: true
      })
      setOpenModal(false)   
     } 

    }).catch(error => {
      setSnackbarOpen(true)
      toast.error("An error occurred, please check your email and password",{
        className:'toast',
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.ERROR,
        hideProgressBar: true
      })   
    });
}


const handleLogin = (event) => {
  event.preventDefault();
  axios.post('https://cors-anywhere.herokuapp.com/http://zist.herokuapp.com/token/', {
    // data to be sent
      email: loginEmail ,
      password: loginPassword
    })
    .then(res => {

      if(res.status === 200 ){
       setSnackbarOpen(true)
       toast.success("You have successfully logged in",{
         className:'toast',
         draggable: true,
         position: toast.POSITION.TOP_CENTER,
         type: toast.TYPE.SUCCES,
         hideProgressBar: true
       }) 
       setOpenModal(false)  
      } 
 
     }).catch(error => {
       setSnackbarOpen(true)
       toast.error("An error occurred, please check your email and password",{
         className:'toast',
         draggable: true,
         position: toast.POSITION.TOP_CENTER,
         type: toast.TYPE.ERROR,
         hideProgressBar: true
       })   
     });
}

const handleRedirect = () =>{
  if( location == null ){
    alert('please fill in your location to continue')
  } else {
    history.push('/shopping')
  }
} 

  return (
    <MainDiv >
    {/* start of the navbar section */}
    <Grid style={{ margin: " 39px 97px 0px 32px", textAlign: "right" }}>
      <Grid.Row>
        <Grid.Column
          width={4}
          textAlign="left"
        >
          <h1 style={{ fontSize: "30px",fontWeight: "bold"  }}>ZIST SHOPPING</h1>
          <Dropdown text="EXPLORE" style={{ fontSize: '18px',color: '#050504'}}>
            <Dropdown.Menu >
              <Dropdown.Item text="Shopping" />
              <Dropdown.Item text="Zist Articles" />
              <Dropdown.Item text="Zist Recipes" />
              <Dropdown.Item text="Zist Mission & Vision" /> 
                          <Image position='right' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ8PDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFw8PFysdFRktKysrLSsrLSsrKy0rKystKy0rLSsrLS0rKzctKys3KystLSsrLS0tKystLSsrNy0tLf/AABEIAPsAyQMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADUQAAICAQEFBgMHBAMAAAAAAAABAhEDBAUSEyExQVFhcZGhBkLBIlKBgpKx8BQyYtFyotL/xAAaAQEBAAMBAQAAAAAAAAAAAAAAAQIDBAUG/8QAIxEBAAMBAAAGAwEBAAAAAAAAAAECEQMEEiExQVETImEyFP/aAAwDAQACEQMRAD8A/JBiGdbgAAAAMAABhRSQQkikhpFpE1lEIUR7poolKJNZxVlui3TfcE4DTysHElo3cSHEusZqyoRo0S0XWOIAYioQDERQIYAIAAKBiGEAxDABoEUkECRSQJFpElnEBI0jEIo2hEwmWyITGJooGsMZ1YtPZhNsbYo4uGS8Z7C0D7jHLpGuwwjpDKebyZQM5RO/JiOacDZFmq1XM0Q0byiZtGyJa5hi0S0aNEsya5hADYghAABSAACgYhhDAENANFJCRaIsGkaRRKLiYy2RDSCN8cTKB04jXMttYdOnxXR9l8MbAjmTyZXu448rfLelXQ+V0fVH6VsfJFaGHalvxkl2S3rv0aPN8d1tSn6/L0PC84tPq6Nn6HDOUoQxQcYpL7UItS/yb7Dl+JfhfHLHLNp47koJyljXOLiurXcd+k1DhG4/2dKb53R3afaKeLJv7tRTbr7tdp5XPtatt1335RMez8Z1mDdbR52WB7u1Wt513s8bMfQ87bDxulclxTRlJHRMxkdES5phi0ZtGrIZnDXMM2SWyWZMEgNiAQABFAxDCGUiUUgGi0SikRlC0aRM0WjGWyG0Doxs5oM1hIwlsq9DBOj6TY22ZYU439mXVfU+ShM6Meajm68ovGS6efSaTsPv8e0sUlzybka5pRuT9zDa/wAQJ4uDi5Qpbzb+1PzPjlqn3mc87ZyU8DSLa6beLmYxpqs282zz8sjScznmz0KxjhtOs5sxkaSZlI3Q0yzZDLZLMmuUMhlslmTCUsQ2IIQAAUDENAUhoSGgKRSJRSIyhaKTIRSZjLOGiZpFmKZaZjLKHRGRopnKpFqRjMNkS6d8TmYbwt4mLrSUjOTJciWzKIYzJSZDY2yGZQ1yTIZTJZkwlLJZTJZWKWIbEVCABAMYhgNFIkaIqikShoKtDTIKTIyhaZSZnY0yMmiZVmdhZiutN4N4ixWF1bZNisVlTTbJYWJlYkyWNksrGSYmNksrEmIbEyoQhiAY0SNEVSGShgUNEjCqGSOyMlWOyR2RVWOyLCwq7CyLCyCrFYrCyodisVisIbZLCxFQMQCKgZI2JhCAAAQxDAoBABQyRhVATY7IqrHZA7CqsLJCyCrCyQsCrCybCyhisVhYQ7EKwsAEAioBDEEIAACN8OIZgY6zxrxB8QxGNMa8QOKZANMa8XwDi+BkA0xtxvAON4GIxpjbjeAcXwMkUqGri+L4BxfAnkDommK4vgLikMTLqY04qDi+BiA0xrxQ4pkA0xrxQ4hkIaY14guIZgNMhpxA3zMBphgABQAAAAMAhDCgoAGhUUkBUV5G0I+C9CYY33SOiGB90vUwmW2sEo+Ef0sUl4R/SbrTPun6kywPumYaz8v8ck14L0MpHTPE+6XqYSj4MziWq0MgG0KjNgQDoAEAAFAAACAYiBgMKKAAoZUKgodAAqHQAAJGkIsg0xpkkh04sMu/3O3Dpsj+Z+pzaeE30PRw4sn+Psc97OvnU1oMv3/3JyaTIus36nVwc/ZVf8UYZ4Zl2R/BUaotO+8N01iI9pcOXDNdZN/icWWL7ztzvIutHDlcjoo5emMZIgqVkm1oAgAoAAAAQAQAAAUwGBUIYwCEAxgIBjRRKNsb/lDxpHfp8cTXacbKV0sDl3P9Nnp6fPJd6/Ijp0Gmg6517/Q+g0ehxuvtKvF/TdOHr2iPeHocuM/b59amffJ+Cx39Cck8tfa3l+RJ/sfZf0ONfNy8Hy/Yyy6PH9512Umc0eIr9OieU/b4HO5vrvLzR52eL7bPs9oaXErqUu3qjwNVjgrp/wDWvqd3LpE/Di68pj5eDNEHZno5mdcerhtGSgRVAZJqQKFRDUgUAXUgOgoYJoBhRFIYUFBAFDoKKaQxpFxiQQrNYSn2fQqOM6MWF9xjNmdayeGef5b9Ed+DUaxL7KdeUTLFppdiO7Do8nd7s572j+OrnW33Kse0dcuW5f5Yf6Hl2prPmjLySidGLR5fuyXk5Gv9Hkrp62voaPNTfaG/y3+5eNm1+od70ZeN0cGbUzfVP2Pfy6SXO0vKzz8+n8DfS9fiGjpS328aeRvqZNnoZsVdnsceSJ01s5L1xlYWNiMmAsVjABWFgABYWFAFAyLCyaYsCLHZdMWNGdjsamNY0bY2u9HJZamSVicephce9Hp6VY/A+dhmo7MGsSNF6TLp59Ih9ho9PB1T6+B7mk2ddbr9lZ8TpNt7nS/c9jSfFc40qly8qPO7cuvw9Hn15vsIbIly5On29/uVPZrS58q68n/6PCxfGk65Rl6qvdGWb4qyN9KvvpnJ+Htrd+Sv27tascb3mvxs+e1+p06umn5Jmmr265/33z/xX0PC1mrhK+SX5WdnDjMf6aOvWM9GGr1GPnTXoeXmyRfQefJHsr0OWUj1KViHldLzJtiFvC3jY1YYC3g3hphgTYWDDCxWFhUgOgoxxSGFDoBAOgoqEMdDSAEaQQ4ROzDjMLTjZWupww/nM9HDgj95r1/0b6PRuVVFv0f0PotnbHm6qH4rdv0OPr2iru5cZl4mHRwfNtv8X9F9Ry0sFytn3WHYeRrmpLzxsw1ewmrbk/xjL/Zx/wDXGur8L4DU4IL5peqPK1EV2Nn2G0tAlfNN+bX7nzmuwJWv2dndx6RZxd+cw8aaIo3yxMaO2HBPpKaChgUIBgBIFATBNAVQgaAAAAAGAhgADRUSRxA6MU/5yO3Bnrv/AE2cOFcz0NPBd3cabt/PXraPXNdN30r6n0Gh23lh0TrwbR4ez8EH1inyPe0OngpKorp28zze/k+Yeny82e72NNt7M18682pfshajas59vPn1RpDGklSQs0FXTv6cjg/XfZ04+e1+Zu7jfX5m/ZWfNa2UW3y93Xuj6baj8uzsXcfM6zm306vso9Pw/s4/EPHzwXYvdHJJHfqYLuONrmelSfR5d49WQDAzayAACgAABDAAP//Z'/>
       
            </Dropdown.Menu>
          </Dropdown>
        </Grid.Column>

        <Grid.Column width={12} style={{ backgroundColor: "" }}>
        <ToastContainer autoClose={5000} onOpen={snackbarOpen} />
         <List style={{display:'inline-block'}}>
            <List.Item as='a'href='' style={{paddingRight: '30px', fontSize: '20px',color: '#050504',textDecoration:'underline'}}>
              HELP
            </List.Item>
          </List>
          
          <Modal  size='tiny' closeIcon={true}  style={{border:'1px solid #707070'}} centered={false}
          //  open={openModal}
           onOpen={handleOpen}
          //  onClose={handleClose}
           trigger={<Button
            style={{
              width: '201px',
              height: '48px',
              background: '#0B0B0B 0% 0% no-repeat padding-box',
              color: '#fff',
              opacity:1,  
              borderRadius:'20px',
              marginRight: '20px'
          }}  >SIGN UP</Button>}   >
           
           <Grid width={16} style={{padding:'61px 0 60px 105px',backgroundColor:'',textAlign:'center'}}>
            <Modal.Content>
            <h3 >SIGN UP </h3>
              <Modal.Description style={{marginBottom: '40px'}}>
                <Header style={{marginBottom:'30px',marginTop: '30px',fontSize:'18px'}}>Create a new account</Header>
                <Form onSubmit={handleSignup}>

                <Form.Input   transparent
                name='first_name'
                required={true}
                type='text'
                textAlign='center'
                size='tiny'
                onChange = { e => setFirstName(e.target.value) }
                placeholder='First Name' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} />

                {/* <Form.Input   transparent
                name='last_name'
                required={true}
                type='text'
                textAlign='center'
                size='tiny'
                onChange = { e => setLastName(e.target.value)}
                placeholder='Last Name' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} /> */}

                <Form.Input   transparent
                name='email'
                required={true}
                type='email'
                textAlign='center'
                size='tiny'
                onChange = { e => setEmail(e.target.value)}
                placeholder='Email' style={{borderBottom:'2px solid #FFE5B4',marginBottom:'20px'}} />

                <Form.Input   transparent
                name='password'
                required={true}
                type='password'
                textAlign='center'
                size='tiny'
                onChange = { e => setPassword(e.target.value)}
                placeholder='Password' style={{borderBottom:'2px solid #FFE5B4'}} />
                 <ModalSignUpButton />
                </Form>
              </Modal.Description>
              <p style={{color:'#BCB4A7'}}>Already have an account ?</p> 
               <a href='' style={{color:'#050504'}}><strong>Login</strong></a>
            </Modal.Content>
           </Grid>
          </Modal>

          <Modal  size='tiny' closeIcon={true}  style={{border:'1px solid #707070'}} centered={false}
          // open={openModal}
          onOpen={handleOpen}
         //  onClose={handleClose}
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
                <Form onSubmit={handleLogin}>
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
          </Modal>
           
          <Image
            src={cartImage}
            style={{ display: "inline-block", marginLeft: "20px" }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    {/* end of the navbar section */}

    <Grid width={2} style={{ backgroundColor: "" }}>
      <Image
        src={zist}
        style={{ marginLeft: "auto", marginRight: "auto", marginTop: "40px" }}
      />
    </Grid>
    <Grid width={5} >
      <h2
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "29px",
          fontWeight: "bold",
          fontSize: "48.5px"
        }}
      >
        SHOPPING REINVENTED.
      </h2>
    </Grid>
    <Grid width={8} style={{ backgroundColor: "inherit" }}>
      <h2
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
          fontWeight: "bold",
          fontSize: "48px"
        }}
      >
        YOUR SHOPPING? WE’RE BUILT FOR THAT!
      </h2>
    </Grid>

    
    
       <Grid style={{ backgroundColor: "inherit"}}>
         <Grid.Row  style={{padding: '0',height:'170px'}}>
          <Input labelPosition='right' type='search'
            style={{
              backgroundColor: "white",
              margin: "80px auto 0px auto",
              width: "45%",
              border: "1px solid #707070",
              fontSize:'30px'
            }}
            size="small"
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder='Enter your address …'>
              <Label basic style={{paddingLeft:'20px',margin:'0',border:'0',paddingRight:'0'}}>
                <Icon size="large" color='black' name="map marker alternate" link/>
              </Label>
              <input style={{border:'0',padding:' 0 8px'}}/>
              <Button onClick={handleRedirect} type="submit" basic style={{margin:'0',paddingLeft:'0'}}>
                <Icon size="huge" color="orange" name="angle right" link />
              </Button>
            </Input> 
         </Grid.Row>
         
         <Grid.Row style={{padding: '0'}}>
         <MenuGrid >
      <div style={{border: "1px solid #707070", height:'77px', backgroundColor:'#fff'}}>
      {/* <Menu  secondary >
      <TabDiv pointing >
      <Menu.Item
            name='SHOPPING'
            style={{color:'#FFBD59',backgroundColor:'#fff',textAlign: 'center',borderBottom: '2px solid #FFBD59'}}
            active={activeTab === 'SHOPPING'}
            onClick={handleItemClick}
          />
      </TabDiv>
      
       <TabDiv>
      <Menu.Item
      style={{backgroundColor:''}}
            name='DELIVERY'
            active={activeTab === 'DELIVERY'}
            onClick={handleItemClick}
          />
      </TabDiv> 

      </Menu> */}
      {/* <Button basic fluid style={{border:'0' ,display:'inline-block',textAlign:'left'}}>
      <Icon name='location arrow' link style={{width:'100%', fontSize:'30px',paddingTop:'20px'}} >
      </Icon>
      Use my current location
      </Button> */}

      <Button  basic fluid style={{border:'0' ,textAlign:'left',paddingBottom:'27px',fontSize:'25px',paddingLeft:'20px'}}>
        <Button.Content >
        <Icon name='location arrow' link style={{fontSize:'28px',marginRight:'40px'}} />
          Use my current location
        </Button.Content>
      </Button>

      </div> 
    </MenuGrid>
         </Grid.Row>
         <Grid.Row></Grid.Row>
      
    </Grid>
    
    <IntroGrid>
      <IntroColumn width={8}><Image src={coffeShop} ></Image></IntroColumn>
      <IntroColumn width={8} textAlign='left'>
        <p style={{padding:'150px 200px 0 66px', fontSize:'20px',color: '#050504',lineHeight:'55px'}}>
        Life is all about priorities. We’re BUILT to <br/>
        cater to your shoppinng needs + your <br/> 
        mundane tasks so that YOU can focus <br/>
        on what truly MATTERS.
        </p>
        <BetaButton >SIGN ME UP FOR THE BETA</BetaButton>
      </IntroColumn>
    </IntroGrid>
    <DemoGrid>
      <h1 style={{paddingTop: '150px',fontSize: '70px', fontWeight: 'bold',paddingLeft:78}}>
        Here's how it works
      </h1>
      <Image src={step1} /> 
    </DemoGrid>
    <DemoGrid>
    <h1 style={{fontSize: '35px', fontWeight: 'bold',paddingLeft:78}}>
        1.  Search for the place/item you'd like to shop at/for
    </h1>
    </DemoGrid>
    <DemoGrid>
      <Image src={step2} style={{paddingLeft: 62}} /> 
    </DemoGrid>
    <DemoGrid>
    <h1 style={{fontSize: '35px', fontWeight: 'bold',paddingLeft:78,lineHeight:'70px'}}>
        2.  Come up with your list and where you'd want to shop<br/>
        the various items (because we know you LIKE getting <br/>
        Your things only from where you LIKE getting them)<br/>
        whether it's just you or your entire family's shopping, <br/>
        don't worry we can handle it! 
    </h1>
    </DemoGrid>
    <DemoGrid>
      <Image src={step3} style={{paddingLeft: 62}} /> 
    </DemoGrid>
    <DemoGrid>
    <h1 style={{fontSize: '35px', fontWeight: 'bold',paddingLeft:78,paddingBottom: 150,lineHeight:'70px'}}>
        3.  Relax and do things that matter to you whilst<br/>
        we get your shopping done for you.
    </h1>
    </DemoGrid>
    <AppSectionGrid>
      <IntroColumn width={8}> <Image src={zistApp} style={{paddingTop: 150}}/> </IntroColumn>
      <IntroColumn width={8} textAlign='left'>
        <h6 style={{fontSize: '25px', paddingLeft:100,paddingTop:150}}>GET THE ZIST SHOPPING APP ON MOBILE TO</h6>
        <h6 style={{fontSize: '25px', paddingLeft:100}}>STAY NOTIFIED ON THE LATEST DEALS +</h6>
        <h6 style={{fontSize: '25px', paddingLeft:100}}>BE ABLE TO ACCESS IT FROM ANYWHERE/</h6>
        <h6 style={{fontSize: '25px', paddingLeft:100}}>ANYTIME</h6>
        <AppLinkButton>TEXT ME THE LINK TO THE APP</AppLinkButton>
      </IntroColumn>
    </AppSectionGrid>

    <IntroGrid>

      <Grid.Row width={16}>
      <FooterGrid width={7}>
      <FooterTitle>Zist Shopping</FooterTitle>
      <List link >
        <FooterLinks as='a'>Zist articles</FooterLinks><br/>
        <FooterLinks as='a' >Careers</FooterLinks><br/>
        <FooterLinks as='a'>Zist recipes</FooterLinks><br/>
        <FooterLinks as='a'>Shopping</FooterLinks><br/>
        <FooterLinks as='a'>Delivery</FooterLinks><br/>
        <FooterLinks as='a'>API docs</FooterLinks>
      </List>
      </FooterGrid>

      <FooterGrid width={6}>
      <FooterTitle>Vendors</FooterTitle>
      <List>
        <FooterLinks as='a'>Sell on Zist Shoppping</FooterLinks>
      </List>
      <FooterTitle>Become a Zister</FooterTitle>
      <List>
        <FooterLinks as='a'>Make money delivering</FooterLinks>
      </List>
      <FooterTitle>Help</FooterTitle>
      <List>
        <FooterLinks as='a'>Customer help</FooterLinks><br/>
        <FooterLinks as='a'>Vendor help</FooterLinks><br/>
        <FooterLinks as='a'>Zist help</FooterLinks>
      </List>
      </FooterGrid>
      </Grid.Row>

      <Grid.Row style={{marginLeft:90,marginTop:100}}>
      <List>
      <FooterTitle> Follow us </FooterTitle>
        <SocialMediaLinks as='a' href='https://twitter.com/zistshopping'>Twitter</SocialMediaLinks><br/>
        <SocialMediaLinks as='a' href=''>Facebook</SocialMediaLinks><br/>
        <SocialMediaLinks as='a' href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'>Instagram</SocialMediaLinks>
      </List>
      </Grid.Row>
      <Grid style={{paddingBottom:'80px',margin:'120px auto 0px 326px'}} textAlign='left' width={18}>
          <FooterTitle> @2020 Zist Shopping inc. Terms. Privacy.</FooterTitle>
      </Grid>
    </IntroGrid>
  </MainDiv>
)
}
  

export default LandingPage;
