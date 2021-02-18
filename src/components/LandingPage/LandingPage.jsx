import React, { useState } from "react";
import zist from "./../../Assets/zist.png";
import shop from "./../../Assets/shop.png";
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Form } from "semantic-ui-react";
import cartImage from "./../../Assets/cart.png";
import styled from 'styled-components';
import coffeShop from "./../../Assets/coffeShop.png";
import heroImg from "./../../Assets/homepage-hero-img.png"
import step1 from "./../../Assets/step1.png";
import step2 from "./../../Assets/step2.png";
import step3 from "./../../Assets/step3.png";
import zistApp from "./../../Assets/order-now-img.png";
import explore from "./../../Assets/explore.png";
import "./styles.css";
import { GoogleComponent } from 'react-google-location';
import history from './../../History';
import { SignupButtonSection } from "./SignupButtonSection";
import { LoginButtonSection } from "./LoginButtonSection";
import { withRouter } from 'react-router-dom';

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
    padding: 39px 0 0 0 !important;
    width:100% !important;
    height: 800px;
    background: url(${heroImg});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    text-align: right !important;
    margin: 0 !important;
    
    
`;

const MenuGrid = styled.div`
    width: 30%;
    margin: 0 auto 100px 200px ;
    // padding: 0 !important;
    // height: 145px;
    @media only screen and (max-width: 750px) {
      font-size: 18px !important;
      width: 70% !important;
      };
`
const TabDiv = styled.div`
    width: 100%;
    padding: 26px 0px;
    text-align: center;
`
const IntroGrid = styled(Grid)`
    background: #F9F7F1  0% 0% no-repeat padding-box;
    opacity: 1;
`
const IntroColumn = styled(Grid.Column)`
    // border: 1px solid #707070;
    padding: auto !important;
    margin: 0 auto !important;
`
const BetaButton = styled.button`
    width: 100%;
    height: 109px;
    background-color: inherit;
    color: #050504;
    font-size: 28px;
    border: 1px solid #707070;
    font-weight: bold;
    @media only screen and (max-width: 450px) {
      height: 60px;
      font-size: 14px;
      };
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
const AppSectionColumn = styled(Grid.Column)`
    border-left: 1px solid #707070 !important;
    margin: ${props => props.spaceVertically ? "auto 0 !important" : " 0 auto !important"};
    text-align: ${props => props.centered ? "center" : " left"};
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
const ExploreLinks = styled(List.Item)`
  font-size: 20px;
  color: #0B0B0B;
  font-weight: bold;
  padding: 0 0 0 30px !important;
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
const MenuDropdown = styled(Dropdown)`
  font-size: 18px;
  color: #050504;
`;
const DropdownColumn = styled(Grid.Column)`
  padding: 0 !important;
  background: white !important;
`;
const NavbarActionsColumn = styled(Grid.Column)`
  display: inline-block !important;
  padding: 0  !important;
`;
const Columns = styled(Grid.Column)`
  padding:  0 !important;
`;
const ButtonColumns = styled(Grid.Column)`
  padding: ${props => props.morePadding ? "16px 0 0 0 !important" : " 5px 0 0 0 !important"};
`;
const HelpLink = styled(List.Item)`
  font-size: 30px !important;
  font-weight: bold !important;
  padding-right: 30px !important;
  font-size: 20px !important;
  color: #050504 !important;
  text-decoration: underline; 
  @media only screen and (max-width: 1100px) {
    font-size: 16px !important;
    };
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
// width: 30% !important;
margin: 0 auto 0px 90px !important;
border: 1px solid #707070 !important;
@media only screen and (max-width: 1100px) {
  font-size: 18px !important;
  };
  @media only screen and (max-width: 750px) {
    font-size: 18px !important;
    width: 70% !important;
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
@media only screen and (max-width: 1100px) {
  font-size: 20px !important;
  };

`;
const LocaationDiv = styled.div`
border: 1px solid #707070 !important;
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
  const [activeExploreItem, setActiveExploreItem] = useState('');

  const handleItemClick = (e, { name }) => setActiveExploreItem({ activeExploreItem: name });

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
  const orderNowRedirect = () => {
    history.push('/shopping')
  }

  return (
    <MainDiv >
      {/* start of the navbar section */}
      <NavbarGrid>
        <Grid.Row style={{ padding: 0 }}>
          <NavbarActionsColumn width={16}  >
            <Grid >
              <Grid.Row style={{ padding: 0 }}>
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
              <GridRows style={{ top: '350px' }}>
                {/* <Grid.Column width={1}></Grid.Column> */}
                <LocationColumn width={6}>
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

              <GridRows style={{ top: '350px' }} >
                <LocationColumn width={6}>
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
        </Grid.Row>
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

      <DemoGrid>
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
      </DemoGrid>

      <DemoGrid>
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
      </DemoGrid>

      <DemoGrid spaced>
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
      </DemoGrid>
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
              <FooterTitle as='a' href=''>Zist Articles</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href='' >Zist Recipes</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href=''>Zist Careers</FooterTitle>
            </List>
            <List>
              <FooterTitle as='a' href=''>Contact</FooterTitle>
            </List>

          </FooterGrid>

          <FooterGrid width={5}>
            <FooterTitle>Vendor</FooterTitle>
            <List>
              <FooterTitle as='a' href='/vendor-intro' >Sell on Zist Shoppping</FooterTitle>
            </List>
            <FooterTitle as='a' href=''>Vendor Help</FooterTitle>
          </FooterGrid>
          <FooterGrid width={5}>
            <FooterTitle>Zister</FooterTitle>
            <FooterTitle as='a' href='/zister-personal-info'>Become a Zister</FooterTitle>
            <List>
              <FooterTitle as='a'>Zister Help</FooterTitle>
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


export default withRouter(LandingPage);
