import React, { useState } from "react";
import zist from "./../../Assets/zist.png";
import shop from "./../../Assets/shop.png";
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Form, Menu } from "semantic-ui-react";
import cartImage from "./../../Assets/cart.png";
import styled from 'styled-components';
import coffeShop from "./../../Assets/coffeShop.png";
// import heroImg from "./../../Assets/homepage-hero-img.png"
import heroImg from "./../../Assets/L-P.jpeg"
import step1 from "./../../Assets/step1.png";
import step2 from "./../../Assets/step2.png";
import step3 from "./../../Assets/step3.png";
import "./styles.css";
import { GoogleComponent } from 'react-google-location';
import history from './../../History';
import { SignupButtonSection } from "./SignupButtonSection";
import { LoginButtonSection } from "./LoginButtonSection";
import { withCookies, Cookies } from 'react-cookie';

const API_KEY = 'AIzaSyB8dwrSJiQel6cCeOtBVThnu_ZcBKT3LM4'

const MainDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #F9F7F1;
`;
const NavbarGrid = styled(Grid)`
    padding: 0 0 0 0 !important;
    width:100% !important;
    height: 600px;
    background: url(${heroImg});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: right !important;
    margin: 0 !important;
    
    
`;

const IntroGrid = styled(Grid)`
    background: #F9F7F1  0% 0% no-repeat padding-box;
    opacity: 1;
`
const DemoGrid = styled(Grid)`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    padding-bottom: ${props => props.spaced ? "80px !important" : " "};
`
const AppSectionGrid = styled(Grid)`
    background: #F9F7F1 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 100px;
`;
const AppLinkButton = styled(Button)`
    background: #FFBD59 0% 0% no-repeat padding-box !important;
    opacity: 1;
    width:70% !important;
    height: 80px !important;
    border-radius: 55px !important;
    color: #050504 !important;
    font-size: 25px !important;
    border: none !important;
    font-weight: bold !important;
    @media only screen and (max-width: 768px) {
      height: 60px !important;
      font-size: 14px !important;
      border-radius: 30px !important;
      };
`;
const FooterGrid = styled(Grid.Column)`
    // margin-left: 90px;
    margin-top: 100px;
`
const FooterTitle = styled.h1`
  font-size: 2rem;
  // text-align: left;
  color: ${props => props.blue ? "#4083C4" : "#0B0B0B"}; 
`;
const FooterLinks = styled(List.Item)`
  font-size: 2rem;
  text-align: left;
  color: #707070;
  line-height: 60px;
`;
const OrderNowColumns = styled(Grid.Column)`
  margin: ${props => props.spaceVertically ? "auto 0 !important" : " 0 auto !important"};
  text-align: ${props => props.centered ? "center" : " left"};
  border-right: ${props => props.border ? "1px solid #707070 !important" : "0"};

`;
const Title = styled.h1`
  font-size: 30px !important;
  font-weight: bold !important;
  @media only screen and (max-width: 1100px) {
    font-size: 20px !important;
    };
`;
const NavbarActionsColumn = styled(Grid.Column)`
  display: inline-block !important;
  padding: 0  !important;
`;
const Cart = styled(Image)`
  display: inline-block !important;
`;
const HeroImage = styled(Image)`
  margin: 40px auto 0 auto !important;
`;
const IntroText = styled.h1`
margin: ${props => props.margin ? "60px auto 0 auto !important" : " 29px auto 0 auto !important"};
font-weight: bold;
font-size: 48.5px;
@media only screen and (max-width: 1100px) {
  font-size: 25px !important;
  text-align: center !important;
  };
`;
const Grids = styled(Grid)`
background-color: inherit !important;
`;
const LocationColumn = styled(Grid.Column)`
background-color: white !important;
padding: 0 !important;
width: 490px !important;
margin: 0 auto 0px 150px !important;
border: 1px solid #707070 !important;
@media only screen and (min-width: 1100px) {
  font-size: 18px !important;
  margin: 0 auto 0px 150px !important;
  };
  @media only screen and (max-width: 750px) {
    font-size: 18px !important;
    // width: 70% !important;
    margin: 0 auto 0px 0 !important;
    };
`;
const IntroColumnText = styled(Grid.Column)`
background-color: inherit !important;
padding: 0 !important;
width: 490px !important;
margin: 0 auto 0px 150px !important;
text-align: left;
@media only screen and (min-width: 1100px) {
  font-size: 35px !important;
  margin: 0 auto 0px 150px !important;
  };
  @media only screen and (max-width: 750px) {
    font-size: 18px !important;
    margin: 0 auto 0px 0 !important;
    // width: 70% !important;
    };
`
const LocationInput = styled(Input)`
font-size: 30px !important;
`;
const LocationIconLabel = styled(Label)`
padding-left: 20px !important;
margin: 0 !important; 
border: 0 !important;
padding-right: 0 !important; 
`;
const InputLocation = styled.input`
border: 0 !important; 
padding: 0 8px !important;
`;
const SubmitLocationButton = styled(Button)`
margin: 0 !important;
padding: auto 0 !important;
border-radius: 0 !important;
border-left: 1px solid grey !important;
background: white;
`;
const SubmitIcon = styled(Icon)`
font-size: 40px !important;
padding-top: 12px !important;
margin-left: 0 !important;
@media only screen and (max-width: 1100px) {
  font-size: 20px !important;
  };

`;
const LocaationDiv = styled.div`
// border: 1px solid #707070 !important;
// height: 77px !important;
background-color: #fff !important;
`;
const LocationPickerButton = styled(Button)`
border: 0 !important;
text-align: left !important;
padding-bottom: 27px !important;
font-size: 25px !important;
padding-left: 20px !important;

@media only screen and (max-width: 1100px) {
  font-size: 18px !important;
  };
`;
const LocationPickerIcon = styled(Icon)`
font-size: 28px !important;
margin-right: 40px !important;
@media only screen and (max-width: 1100px) {
  font-size: 18px !important;
  };
`;
const BetaColumn = styled(Grid.Column)`
width: 60% !important;
margin: auto 0 !important;
@media only screen and (max-width: 450px) {
  margin: 0 auto !important;
  };
`;
const BetaColumnText = styled(Grid.Column)`
width: 80% !important;
margin:  auto 0 !important;
padding-left: 50px !important;
@media only screen and (max-width: 450px) {
  font-size: 15px !important;
  margin: 0 auto !important;
  };
`;
const BetaText = styled.h1`
font-size: 30px !important;
line-height:2;
padding-left: 10px !important;
@media only screen and (max-width: 450px) {
  font-size: 13px !important;
  };
  @media only screen and (min-width: 900px) {
    font-size: 26px !important;
    };
`;
const BetaImageColumn = styled(Grid.Column)`
@media only screen and (max-width: 900px) {
  margin: auto 0 !important;
  };
`;
const BetaGrid = styled(Grid)`
background: #F9F7F1 0% 0% no-repeat padding-box;
opacity: 1;
margin-top: 0 !important
`;
const BetaRsvp = styled(Grid.Column)`
margin: auto 0 !important;
`;
const GridRows = styled(Grid.Row)`
padding: ${props => props.padding ? "70px 0 0 0 !important" : " 0 !important"};
`;
const Demo1 = styled.h1`
// padding-top: 120px;
// padding-bottom: 50px;
font-size: 60px;
font-weight: bold;
@media only screen and (max-width: 600px) {
  padding-top: 40px;
  padding-bottom: 0;
  font-size: 35px;
  };
`;
const OrderColumnText = styled.h1`
font-size: 30px;
line-height:1.4;
font-weight: bold;
padding: 30px 0 !important;
@media only screen and (max-width: 450px) {
  font-size: 12px;
  };
  @media only screen and (max-width: 800px) {
    font-size: 15px;
    };
`;
const DemoDescription = styled.h1`
font-size: 35px;
font-weight: bold;
line-height:1.2;
@media only screen and (max-width: 600px) {
  font-size: 20px;
  };
`;
const DemoTitleColumn = styled(Grid.Column)`
width: 85% !important;
margin: 0 auto !important;
@media only screen and (max-width: 450px) {
  width: 90% !important;
  };
`;
const SocialMediaRow = styled(Grid.Row)`
margin: 100px 0 0 90px !important;
`;
const FooterColumn = styled(Grid.Column)`
width: 85% !important;
margin: 0 auto !important;
padding: 40px 0 80px 0 !important;
text-align: center;
@media only screen and (max-width: 450px) {
  width: 60% !important;
  margin: 0 auto !important;
  };
  @media only screen and (min-width: 768px) {
    width: 80% !important;
    margin: 0 auto !important;
    };  
`;
const LandingPage = (props) => {

  const [location, setLocation] = useState(null);
  const { cookies } = props
  const userData = cookies.get('login-res')
  const token = userData?.access
  const names = cookies.get('name')
  const splitName = names?.split(' ')
  const name = splitName !== undefined ? splitName[0] : null 
  console.log(names, name)

  const handleRedirect = () => {
    if (location == null) {
      alert('please fill in your location to continue')
    } else {
      history.push({
        pathname: '/shopping',
        state: location
      })
    }
  }
  const handleLogOut = () => {
    cookies.remove('login-res',{path: '/'})
    window.location.reload(false);
  }
  const orderNowRedirect = () => {
    history.push('/shopping')
  }
console.log(token)
console.log(token !== undefined || token !== '')
  return (
    <MainDiv >
      {/* start of the navbar section */}
      <NavbarGrid>
      { token === undefined || token === '' ? (
        <Grid.Row style={{ padding: '10px 0 0 0 ' }}>
        <Grid.Column width={12} >
          <SignupButtonSection />
        </Grid.Column>

        <Grid.Column width={2} >
          <LoginButtonSection />
        </Grid.Column>

        <Grid.Column width={2} >
          <Cart
            src={cartImage}
          />
        </Grid.Column>
        {/* <Grid.Column width={1} >

        </Grid.Column> */}

      </Grid.Row>
         
        ) : (            
          <Grid.Row width={16} >
          <Grid.Column >
            <Grid>
              <Grid.Row>
              <Grid.Column width={12}>
                       <List style={{ display: 'inline-block' }}>
                      <List.Item as='a' href='' style={{ paddingRight: '20px', fontSize: '20px', color: '#050504', textDecoration: 'underline', paddingTop: '13px' }}>
                        HELP
                  </List.Item>
                    </List>
                </Grid.Column>
                {name == undefined || name == '' ? (
                      <Grid.Column width={2}>
                        <Grid.Row>
                          <Grid.Column width={1} style={{ paddingTop: '0px' }}>
                            <Grid>
                              <Grid.Row>
                                <Grid.Column width={8}>
                                  <Icon name='user circle' color='black' size='huge' />
                                </Grid.Column>
                                <Grid.Column width={8} style={{ paddingTop: '17px' }}>
                                  <Menu size='huge' style={{ background: 'inherit', border: 'none', boxShadow: 'none' }} >
                                    <Menu.Menu >
                                      <Dropdown text='Account' icon='' >
                                        <Dropdown.Menu>
                                          <Dropdown.Item as='a' href='/update-profile'> Update Profile </Dropdown.Item>
                                          <Dropdown.Item onClick={handleLogOut}> Log out </Dropdown.Item>
                                        </Dropdown.Menu>
                                      </Dropdown>
                                    </Menu.Menu>
                                  </Menu> 
                               </Grid.Column>
                              </Grid.Row>
                            </Grid>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid.Column>
                    ) : (
                        <Grid.Column width={2} style={{ paddingTop: '7px',textAlign:'center' }} >
                          <Grid>
                          <Grid.Row>
                            <Grid.Column>
                              <h2> {name} </h2>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                        </Grid.Column>
                      )}
                  <Grid.Column width={1} style={{ paddingTop: '0px' }}>
                    <Image
                      src={cartImage}
                      style={{ display: "block", margin: '0 auto' }}
                    />
                  </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
              )}
              <NavbarActionsColumn width={16}  >
              <Grid >
                <GridRows>
                  <IntroColumnText>
                    <h1> SHOPPING REINVENTED. </h1>
                    <h1> YOUR SHOPPING? WE'RE BUILT FOR THAT. </h1>
                  </IntroColumnText>
                </GridRows>
              <GridRows style={{ top: '20px' }}>
                {/* <Grid.Column width={1}></Grid.Column> */}
                <LocationColumn >
                  <LocationInput labelPosition='right' type='search'
                    size="small"
                    type="text"
                    value={location}
                    style={{ padding: '0 !importat' }}
                  >
                    <LocationIconLabel basic >
                      <Icon color='black' name="map marker alternate" link />
                    </LocationIconLabel>
                    <InputLocation placeholder='Enter your address …' onChange={event => setLocation(event.target.value)} />
                    <SubmitLocationButton onClick={handleRedirect} type="submit" basic>
                      <SubmitIcon color="black" name="angle right" link />
                    </SubmitLocationButton>
                  </LocationInput>
                </LocationColumn>

              </GridRows>

              <GridRows style={{ top: '20px' }} >
                <LocationColumn >
                  <LocaationDiv >
                    <LocationPickerButton basic fluid >
                      <Button.Content >
                        <Icon name='location arrow' link />
                      Use my current location
                     </Button.Content>
                    </LocationPickerButton>
                  </LocaationDiv>
                </LocationColumn>
              </GridRows>
            </Grid>
          </NavbarActionsColumn>
        {/* </Grid.Row> */}
      </NavbarGrid>
      {/* end of the navbar section */}

      <Grids>

      </Grids>

      <BetaGrid>
        <BetaImageColumn width={8}> <Image src={coffeShop} /> </BetaImageColumn>
        <BetaRsvp width={8} textAlign='left'>
          <Grid>
            <Grid.Row>
              <BetaColumnText>
                <Demo1>
                  Tailored to you.
            </Demo1>
                <BetaText> Taking charge of your priorities <br />
                And choosing whom or what <br />
                matters most starts with you , <br />
               we’re here to help!  </BetaText>
              </BetaColumnText>
            </Grid.Row>
          </Grid>
        </BetaRsvp>
      </BetaGrid>

      <DemoGrid>
        <Grid.Row>
          <DemoTitleColumn>
            <Demo1>
              Here’s how it works!
            </Demo1>
          </DemoTitleColumn>
        </Grid.Row>
      </DemoGrid>

      {/* <DemoGrid>
        <Grid.Row>
          <Image src={step1} />
        </Grid.Row>
        <Grid.Row>
          <DemoTitleColumn>
            <DemoDescription > 1.  With a myriad of options , select / search for the store </DemoDescription>
            <DemoDescription > or item you’d like to purchase and get to have whatever it is </DemoDescription>
            <DemoDescription >That you’d like from wherever you’d like.
            </DemoDescription>
          </DemoTitleColumn>
        </Grid.Row>
      </DemoGrid> */}
      <BetaGrid>
        <BetaImageColumn width={8}> <Image src={step1} /> </BetaImageColumn>
        <BetaRsvp width={8} textAlign='left'>
          <Grid>
            <Grid.Row>
              <BetaColumnText>
                <BetaText> 1.  With a myriad of options , select / search for the store 
                  or item you’d like to purchase and get to have whatever it is
                  That you’d like from wherever you’d like.
               </BetaText>
              </BetaColumnText>
            </Grid.Row>
          </Grid>
        </BetaRsvp>
      </BetaGrid>
      {/* <DemoGrid>
        <Grid.Row>
          <Image src={step2} />
        </Grid.Row>
        <Grid.Row>
          <DemoTitleColumn>
            <DemoDescription >
              2.  Get to browse through the different aisles just like you’d do
            </DemoDescription>
            <DemoDescription >
              in a regular store , also quickly search and add items to
            </DemoDescription>
            <DemoDescription >
              your list just like you’d do with a regular list.
            </DemoDescription>
          </DemoTitleColumn>
        </Grid.Row>
      </DemoGrid> */}
      <BetaGrid>
        <BetaRsvp width={8} textAlign='left'>
          <Grid>
            <Grid.Row>
              <BetaColumnText>
                <BetaText>
                  2.  Get to browse through the different aisles just like you’d do
                  in a regular store , also quickly search and add items to
                  your list just like you’d do with a regular list.
               </BetaText>
              </BetaColumnText>
            </Grid.Row>
          </Grid>
        </BetaRsvp>
        <BetaImageColumn width={8}> <Image src={step2} /> </BetaImageColumn>

      </BetaGrid>
      {/* <DemoGrid spaced>
        <Grid.Row>
          <Image src={step3} />
        </Grid.Row>
        <Grid.Row>
          <DemoTitleColumn>
            <DemoDescription >
              3.  With the fastest selection to checkout process you’ll
            </DemoDescription>
            <DemoDescription >
              find anywhere , get to focus on yourself and things that
            </DemoDescription>
            <DemoDescription >
              matter whilst our dedicated team of Zisters gets your items
            </DemoDescription>
            <DemoDescription >
              quickly & efficiently!
            </DemoDescription>
          </DemoTitleColumn>
        </Grid.Row>
      </DemoGrid> */}
      <BetaGrid>
        <BetaImageColumn width={8}> <Image src={step3} /> </BetaImageColumn>
        <BetaRsvp width={8} textAlign='left'>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <BetaText> 3.  With the fastest selection to checkout process you’ll
                find anywhere , get to focus on yourself and things that
                matter whilst our dedicated team of Zisters gets your items
                quickly & efficiently!
               </BetaText>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </BetaRsvp>
      </BetaGrid>
      <AppSectionGrid>
        <GridRows>
          <OrderNowColumns spaceVertically width={6} textAlign='center'>
            <OrderColumnText>
              Get whatever it is that you <br />
               want at the tap of a button.
            </OrderColumnText>
            <AppLinkButton onClick={orderNowRedirect} > Get the App </AppLinkButton>
          </OrderNowColumns>
          <OrderNowColumns border width={10}>
            <Image src={shop} />
          </OrderNowColumns>
        </GridRows>
      </AppSectionGrid>

      <Grid style={{ background: '#F9F7F1 0% 0% no-repeat padding-box',paddingBottom:50 }}>
        <Grid.Row>
          <Grid.Column width={8} style={{ margin: '0 auto', textAlign: 'center' }}>
            <Image src={zist} />
            <h1> Zist Shopping </h1>
            <h1> Offers , discounts and updates. </h1>
            <h1>  Subscribe to our updates. </h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} style={{ margin: '0 auto', textAlign: 'center' }}>
            <Form size='huge' >
              <Form.Group widths='equal'>
                <Form.Field
                  control='input'
                  placeholder='Email Address …'
                />
                <Button type='submit' style={{ color: '#050504', fontSize: 20, background: '#FFBD59 0% 0% no-repeat padding-box', borderRadius: '24px', width: '250px' }}>I’m in!</Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <IntroGrid style={{background:'#FEE2D4',paddingTop:100}}>

        <GridRows width={16} >
          <FooterGrid width={1}></FooterGrid>
          <FooterGrid width={5}>
            <FooterTitle>Zist Shopping</FooterTitle>
            <List >
              <FooterTitle as='a' href='' blue >Zist Articles</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' blue >Zist Recipes</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' blue >Zist Careers</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' blue>Contact</FooterTitle>
            </List>

          </FooterGrid>

          <FooterGrid width={5}>
            <FooterTitle>Vendor</FooterTitle>
            <List>
              <FooterTitle as='a' href='/vendor-intro' blue >Sell on Zist Shoppping</FooterTitle>
            </List>
            <FooterTitle as='a' href='' blue >Vendor Help</FooterTitle>
          </FooterGrid>
          <FooterGrid width={5}>
            <FooterTitle>Zister</FooterTitle>
            <FooterTitle as='a' href='/welcome' blue >Become a Zister</FooterTitle>
            <List>
              <FooterTitle as='a' blue >Zister Help</FooterTitle>
            </List>
          </FooterGrid>
        </GridRows>
        <GridRows>
          <FooterGrid width={1}></FooterGrid>
          <FooterGrid width={7} style={{ paddingTop: 50 }}>
            <List link >
              <FooterTitle as='a' href=''>Terms & Policy</FooterTitle>
            </List>
          </FooterGrid>
        </GridRows>
        <SocialMediaRow>
          <Grid.Column width={1}>
            <a href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'>
              <Icon color='blue' size='big' as='i' name="instagram" />
            </a>
          </Grid.Column>
          <Grid.Column width={1}>
            <a href='https://twitter.com/zistshopping'>
              <Icon color='blue' size='big' as='i' name="twitter" />
            </a>
          </Grid.Column>
          <Grid.Column width={1}>
            <a href=''>
              <Icon color='blue' size='big' as='i' name="facebook" />
            </a>
          </Grid.Column>
        </SocialMediaRow>
        <Grid.Row textAlign='center'>
          <FooterColumn>
            <FooterTitle> @2021 Zist Shopping Inc.</FooterTitle>
          </FooterColumn>
        </Grid.Row>
      </IntroGrid>
    </MainDiv>
  )
}


export default withCookies(LandingPage);
