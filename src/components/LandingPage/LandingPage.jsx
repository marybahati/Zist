import React, { useState } from "react";
import zist from "./../../Assets/zist.svg";
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Menu } from "semantic-ui-react";
import cartImage from "./../../Assets/cart.png";
import styled from 'styled-components';
import coffeShop from "./../../Assets/coffeShop.png";
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
    background: #ffecd2;
`;
const NavbarGrid = styled(Grid)`
    margin: 39px 10px 0px 32px !important;
    text-align: right !important;
    background-color: inherit !important;

`;

const MenuGrid = styled.div`
    width: 45%;
    margin: 0 auto 100px auto ;
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
    background: #FEE2D4 0% 0% no-repeat padding-box;
    opacity: 1;
`
const IntroColumn = styled(Grid.Column)`
    border: 1px solid #707070;
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
    background: #FEE2D4 0% 0% no-repeat padding-box;
    padding-bottom: ${props => props.spaced ? "80px !important" : " "};
`
const AppSectionGrid = styled(Grid)`
    background: #FFE5B4D3;
    margin-top: 100px;
    border: 1px solid #707070 !important;
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
    height: 100px !important;
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
const ExploreLinks = styled(List.Item)`
  font-size: 20px;
  color: #0B0B0B;
  font-weight: bold;
  padding: 0 0 0 30px !important;
`;
const OrderNowColumns = styled(Grid.Column)`
  margin: ${props => props.spaceVertically ? "auto 0 !important" : " 0 auto !important"};
  text-align: ${props => props.centered ? "center" : " left"};
  border-right: ${props => props.border ? "1px solid #707070 !important": "0"};

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
  padding: 0 !important;
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
const LocationInput = styled(Input)`
background-color: white !important;
margin: 80px auto 0px auto !important;
width: 45% !important;
border: 1px solid #707070 !important;
font-size: 30px !important;
@media only screen and (max-width: 1100px) {
  font-size: 18px !important;
  };
  @media only screen and (max-width: 750px) {
    font-size: 18px !important;
    width: 70% !important;
    };
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
margin:120px auto !important;
@media only screen and (max-width: 450px) {
  margin: 0 auto !important;
  };
`;
const BetaColumnText = styled(Grid.Column)`
width: 80% !important;
margin: 120px auto 0 auto !important;
@media only screen and (max-width: 450px) {
  font-size: 15px !important;
  margin: 0 auto !important;
  };
`;
const BetaText = styled.h2`
font-size: 24px !important;
@media only screen and (max-width: 450px) {
  font-size: 13px !important;
  };
  @media only screen and (min-width: 900px) {
    font-size: 16px !important;
    };
`;
const BetaImageColumn = styled(Grid.Column)`
@media only screen and (max-width: 900px) {
  margin: auto 0 !important;
  };
`;
const BetaGrid = styled(Grid)`
border: 1px solid #707070;
background: #FEE2D4 0% 0% no-repeat padding-box;
`;
const BetaRsvp = styled(Grid.Column)`
border-left: 1px solid #707070 !important;
`;
const GridRows = styled(Grid.Row)`
padding: ${props => props.padding ? "70px 0 0 0 !important" : " 0 !important"};
`;
const Demo1 = styled.h1`
padding-top: 120px;
padding-bottom: 50px;
font-size: 70px;
font-weight: bold;
@media only screen and (max-width: 600px) {
  padding-top: 40px;
  padding-bottom: 0;
  font-size: 35px;
  };
`;
const OrderColumnText = styled.h1`
font-size: 25px;
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
@media only screen and (max-width: 450px) {
  width: 60% !important;
  margin: 0 auto !important;
  };
  @media only screen and (min-width: 768px) {
    width: 80% !important;
    margin: 0 auto !important;
    };  
`;
const LandingPage = () => {

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
        <Grid.Row >
          <Grid.Column
            width={4}
            textAlign="left"
            mobile={16} tablet={8} computer={4}
          >
            <Title> ZIST SHOPPING </Title>
            <MenuDropdown text="EXPLORE" >
              <Dropdown.Menu >
                <Grids>
                  <Grid.Row >
                    <DropdownColumn width={7} >
                      <List link fluid verticalAlign style={{ lineHeight: '60px' }} >
                        <ExploreLinks as='a' href='' >Shopping</ExploreLinks> <br />
                        <ExploreLinks as='a' href='' >Zist Articles</ExploreLinks> <br />
                        <ExploreLinks as='a' href='' >Zist Recipes</ExploreLinks> <br />
                        <ExploreLinks as='a' href='' >Zist Mission & Vision</ExploreLinks>
                      </List>
                    </DropdownColumn>
                    <DropdownColumn width={9}  >
                      <Image align='right' src={explore} fluid />
                    </DropdownColumn>
                  </Grid.Row>
                </Grids>
              </Dropdown.Menu>
            </MenuDropdown>
          </Grid.Column>

          <NavbarActionsColumn width={12}  >
            <Grids >
              <Grid.Row >

                <ButtonColumns morePadding width={8} >
                  <List >
                    <HelpLink as='a' href='' >
                      HELP
                    </HelpLink>
                  </List>
                </ButtonColumns>

                <ButtonColumns width={3} >
                  <SignupButtonSection />
                </ButtonColumns>

                <ButtonColumns width={3} >
                  <LoginButtonSection />
                </ButtonColumns>

                <Columns width={2} >
                  <Cart
                    src={cartImage}
                  />
                </Columns>

              </Grid.Row>
            </Grids>
          </NavbarActionsColumn>
        </Grid.Row>
      </NavbarGrid>
      {/* end of the navbar section */}

      <Grids width={2} >
        <HeroImage
          src={zist}
        />
      </Grids>
      <Grids width={5} >
        <IntroText> SHOPPING REINVENTED. </IntroText>
      </Grids>
      <Grids width={8} >
        <IntroText> YOUR SHOPPING? WE’RE BUILT FOR THAT! </IntroText>
      </Grids>



      <Grids>
        <GridRows>
          <LocationInput labelPosition='right' type='search'
            size="small"
            type="text"
            value={location}
          >
            <LocationIconLabel basic >
              <Icon color='black' name="map marker alternate" link />
            </LocationIconLabel>
            <InputLocation placeholder='Enter your address …'  onChange={event => setLocation(event.target.value)} />
            <SubmitLocationButton onClick={handleRedirect} type="submit" basic>
              <SubmitIcon color="orange" name="angle right" link />
            </SubmitLocationButton>
          </LocationInput>
        </GridRows>

        <GridRows>
          <MenuGrid >
            <LocaationDiv >
              <LocationPickerButton basic fluid >
                <Button.Content >
                  <Icon name='location arrow' link />
                      Use my current location
                </Button.Content>
              </LocationPickerButton>
            </LocaationDiv>
          </MenuGrid>
        </GridRows>
      </Grids>

      <BetaGrid>
        <BetaImageColumn width={8}> <Image src={coffeShop} /> </BetaImageColumn>
        <BetaRsvp width={8} textAlign='left'>
          <Grid>
            <Grid.Row>
              <BetaColumnText>
                <BetaText> Life is all about priorities. We’re BUILT to  </BetaText>
                <BetaText> cater to your shoppinng needs + your  </BetaText>
                <BetaText> mundane tasks so that YOU can focus  </BetaText>
                <BetaText> on what truly MATTERS.RSVP your </BetaText> 
                <BetaText> email address to be the FIRST to know when we LAUNCH. </BetaText>
              </BetaColumnText>
            </Grid.Row>
            <Grid.Row>
              <BetaColumn >
                <BetaButton> RSVP </BetaButton>
              </BetaColumn>
            </Grid.Row>
          </Grid>
        </BetaRsvp>
      </BetaGrid>

      <DemoGrid>
        <Grid.Row>
          <DemoTitleColumn>
            <Demo1>
              Here's how it works
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
            <DemoDescription >
              1.  Search for the place/item you'd like to shop at/for
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
              2.  Come up with your list and where you'd want to shop
            </DemoDescription>
            <DemoDescription >
              the various items (because we know you LIKE getting
            </DemoDescription>
            <DemoDescription >
              Your things only from where you LIKE getting them)
            </DemoDescription>
            <DemoDescription >
              whether it's just you or your entire family's shopping,
            </DemoDescription>
            <DemoDescription >
              don't worry we can handle it!
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
                3.  Relax and do things that matter to you whilst
            </DemoDescription>
            <DemoDescription >
                we get your shopping done for you.
            </DemoDescription>
          </DemoTitleColumn>
        </Grid.Row>
      </DemoGrid>

      <AppSectionGrid>
        <GridRows>
          <OrderNowColumns border width={8}>
            <Image src={zistApp} />
          </OrderNowColumns>
          <OrderNowColumns spaceVertically width={8} textAlign='center'>
            <OrderColumnText> Handpicked and Delivered with care. </OrderColumnText>
           <AppLinkButton onClick={orderNowRedirect} > ORDER NOW </AppLinkButton>
          </OrderNowColumns>
        </GridRows>
      </AppSectionGrid>

      <IntroGrid>

        <GridRows padding width={16} >
          <FooterGrid width={7}>
            <FooterTitle>Zist Shopping</FooterTitle>
            <List link >
              <FooterLinks as='a'>Zist articles</FooterLinks><br />
              <FooterLinks as='a' >Careers</FooterLinks><br />
              <FooterLinks as='a'>Zist recipes</FooterLinks><br />
              <FooterLinks as='a' href='/shopping' >Shopping</FooterLinks><br />
              <FooterLinks as='a'>Delivery</FooterLinks><br />
              <FooterLinks as='a'>API docs</FooterLinks>
            </List>
          </FooterGrid>

          <FooterGrid width={6}>
            <FooterTitle>Vendors</FooterTitle>
            <List>
              <FooterLinks as='a' href='/vendor' >Sell on Zist Shoppping</FooterLinks>
            </List>
            <FooterTitle as='a' href='/zister-personal-info'>Become a Zister</FooterTitle>
            <List>
              <FooterLinks as='a'>Make money delivering</FooterLinks>
            </List>
            <FooterTitle>Help</FooterTitle>
            <List>
              <FooterLinks as='a'>Customer help</FooterLinks><br />
              <FooterLinks as='a'>Vendor help</FooterLinks><br />
              <FooterLinks as='a'>Zist help</FooterLinks>
            </List>
          </FooterGrid>
        </GridRows>

        <SocialMediaRow>
          <List>
            <FooterTitle> Follow us </FooterTitle>
            <SocialMediaLinks as='a' href='https://twitter.com/zistshopping'>Twitter</SocialMediaLinks><br />
            <SocialMediaLinks as='a' href=''>Facebook</SocialMediaLinks><br />
            <SocialMediaLinks as='a' href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'>Instagram</SocialMediaLinks>
          </List>
        </SocialMediaRow>
        <Grid.Row textAlign='left'>
          <FooterColumn>
           <FooterTitle> @2020 Zist Shopping inc. Terms. Privacy.</FooterTitle>
          </FooterColumn>
        </Grid.Row>
      </IntroGrid>
    </MainDiv>
  )
}


export default withRouter(LandingPage);
