import React, { useState } from "react";
import zist from "./../../Assets/zist.svg";
import { Grid, Dropdown, Image, Icon, Input, Button, Label, List, Menu } from "semantic-ui-react";
import cartImage from "./../../Assets/cart.png";
import styled from 'styled-components';
import coffeShop from "./../../Assets/coffeShop.png";
import step1 from "./../../Assets/step1.png";
import step2 from "./../../Assets/step2.png";
import step3 from "./../../Assets/step3.png";
import zistApp from "./../../Assets/zistApp.png";
import explore from "./../../Assets/explorePic.png";
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
  padding: 0 70px !important;
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

  return (
    <MainDiv >
      {/* start of the navbar section */}
      <Grid style={{ margin: " 39px 10px 0px 32px", textAlign: "right" }}>
        <Grid.Row>
          <Grid.Column
            width={4}
            textAlign="left"
          >
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>ZIST SHOPPING</h1>
            <Dropdown text="EXPLORE" style={{ fontSize: '18px', color: '#050504' }}>
              <Dropdown.Menu >
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8} >
                      {/* <Dropdown.Item text="Shopping" />
                      <Dropdown.Item text="Zist Articles" />
                      <Dropdown.Item text="Zist Recipes" />
                      <Dropdown.Item text="Zist Mission & Vision" /> */}
                      {/* <Menu text vertical>

                        <Menu.Item
                          name='Shopping'
                          active={activeExploreItem === 'Shopping'}
                          onClick={handleItemClick}
                        />
                        <Menu.Item
                          name='Zist Articles'
                          active={activeExploreItem === 'Zist Articles'}
                          onClick={handleItemClick}
                        />
                        <Menu.Item
                          name='Zist Recipes'
                          active={activeExploreItem === 'Zist Recipes'}
                          onClick={handleItemClick}
                        />
                        <Menu.Item
                          name='Zist Mission & Vision'
                          active={activeExploreItem === 'Zist Mission & Vision'}
                          onClick={handleItemClick}
                        />
                      </Menu> */}
                      <List link verticalAlign >
                        <ExploreLinks as='a'>Shopping</ExploreLinks> <br/>
                        <ExploreLinks as='a'>Zist Articles</ExploreLinks> <br/>
                        <ExploreLinks as='a'>Zist Recipes</ExploreLinks> <br/>
                        <ExploreLinks as='a'>Zist Mission & Vision</ExploreLinks>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Image position='right' src={explore} />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>



              </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>

          <Grid.Column width={12} style={{ display: 'inline-block' }}>
            <Grid>
              <Grid.Row>

                <Grid.Column width={8} style={{ padding: '16px 0 0 0' }}>
                  <List >
                    <List.Item as='a' href='' style={{ paddingRight: '30px', fontSize: '20px', color: '#050504', textDecoration: 'underline' }}>
                      HELP
              </List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column width={3} style={{ padding: '5px 0 0 0' }}>
                  <SignupButtonSection />
                </Grid.Column>

                <Grid.Column width={3} style={{ padding: '5px 0 0 0' }} >
                  <LoginButtonSection />
                </Grid.Column>

                <Grid.Column width={2} style={{ padding: '0' }} >
                  <Image
                    src={cartImage}
                    style={{ display: "inline-block", marginLeft: "5px" }}
                  />
                </Grid.Column>

              </Grid.Row>
            </Grid>







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



      <Grid style={{ backgroundColor: "inherit" }}>
        <Grid.Row style={{ padding: '0', height: '170px' }}>
          <Input labelPosition='right' type='search'
            style={{
              backgroundColor: "white",
              margin: "80px auto 0px auto",
              width: "45%",
              border: "1px solid #707070",
              fontSize: '30px'
            }}
            size="small"
            type="text"
            value={location}
            onChange={event => setLocation(event.target.value)}
            placeholder='Enter your address …'>
            <Label basic style={{ paddingLeft: '20px', margin: '0', border: '0', paddingRight: '0' }}>
              <Icon size="large" color='black' name="map marker alternate" link />
            </Label>
            <input style={{ border: '0', padding: ' 0 8px' }} />
            <Button onClick={handleRedirect} type="submit" basic style={{ margin: '0', paddingLeft: '0' }}>
              <Icon size="huge" color="orange" name="angle right" link />
            </Button>
          </Input>
        </Grid.Row>

        <Grid.Row style={{ padding: '0' }}>
          <MenuGrid >
            <div style={{ border: "1px solid #707070", height: '77px', backgroundColor: '#fff' }}>

              <Button basic fluid style={{ border: '0', textAlign: 'left', paddingBottom: '27px', fontSize: '25px', paddingLeft: '20px' }}>
                <Button.Content >
                  <Icon name='location arrow' link style={{ fontSize: '28px', marginRight: '40px' }} />
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
          <p style={{ padding: '150px 200px 0 66px', fontSize: '20px', color: '#050504', lineHeight: '55px' }}>
            Life is all about priorities. We’re BUILT to <br />
        cater to your shoppinng needs + your <br />
        mundane tasks so that YOU can focus <br />
        on what truly MATTERS.
        </p>
          <BetaButton >SIGN ME UP FOR THE BETA</BetaButton>
        </IntroColumn>
      </IntroGrid>
      <DemoGrid>
        <h1 style={{ paddingTop: '150px', fontSize: '70px', fontWeight: 'bold', paddingLeft: 78 }}>
          Here's how it works
      </h1>
        <Image src={step1} />
      </DemoGrid>
      <DemoGrid>
        <h1 style={{ fontSize: '35px', fontWeight: 'bold', paddingLeft: 78 }}>
          1.  Search for the place/item you'd like to shop at/for
    </h1>
      </DemoGrid>
      <DemoGrid>
        <Image src={step2} style={{ paddingLeft: 62 }} />
      </DemoGrid>
      <DemoGrid>
        <h1 style={{ fontSize: '35px', fontWeight: 'bold', paddingLeft: 78, lineHeight: '70px' }}>
          2.  Come up with your list and where you'd want to shop<br />
        the various items (because we know you LIKE getting <br />
        Your things only from where you LIKE getting them)<br />
        whether it's just you or your entire family's shopping, <br />
        don't worry we can handle it!
    </h1>
      </DemoGrid>
      <DemoGrid>
        <Image src={step3} style={{ paddingLeft: 62 }} />
      </DemoGrid>
      <DemoGrid>
        <h1 style={{ fontSize: '35px', fontWeight: 'bold', paddingLeft: 78, paddingBottom: 150, lineHeight: '70px' }}>
          3.  Relax and do things that matter to you whilst<br />
        we get your shopping done for you.
    </h1>
      </DemoGrid>
      <AppSectionGrid>
        <IntroColumn width={8}> <Image src={zistApp} style={{ paddingTop: 150 }} /> </IntroColumn>
        <IntroColumn width={8} textAlign='left'>
          <h6 style={{ fontSize: '25px', paddingLeft: 100, paddingTop: 150 }}>GET THE ZIST SHOPPING APP ON MOBILE TO</h6>
          <h6 style={{ fontSize: '25px', paddingLeft: 100 }}>STAY NOTIFIED ON THE LATEST DEALS +</h6>
          <h6 style={{ fontSize: '25px', paddingLeft: 100 }}>BE ABLE TO ACCESS IT FROM ANYWHERE/</h6>
          <h6 style={{ fontSize: '25px', paddingLeft: 100 }}>ANYTIME</h6>
          <AppLinkButton>TEXT ME THE LINK TO THE APP</AppLinkButton>
        </IntroColumn>
      </AppSectionGrid>

      <IntroGrid>

        <Grid.Row width={16}>
          <FooterGrid width={7}>
            <FooterTitle>Zist Shopping</FooterTitle>
            <List link >
              <FooterLinks as='a'>Zist articles</FooterLinks><br />
              <FooterLinks as='a' >Careers</FooterLinks><br />
              <FooterLinks as='a'>Zist recipes</FooterLinks><br />
              <FooterLinks as='a'>Shopping</FooterLinks><br />
              <FooterLinks as='a'>Delivery</FooterLinks><br />
              <FooterLinks as='a'>API docs</FooterLinks>
            </List>
          </FooterGrid>

          <FooterGrid width={6}>
            <FooterTitle>Vendors</FooterTitle>
            <List>
              <FooterLinks as='a' href='/vendor' >Sell on Zist Shoppping</FooterLinks>
            </List>
            <FooterTitle>Become a Zister</FooterTitle>
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
        </Grid.Row>

        <Grid.Row style={{ marginLeft: 90, marginTop: 100 }}>
          <List>
            <FooterTitle> Follow us </FooterTitle>
            <SocialMediaLinks as='a' href='https://twitter.com/zistshopping'>Twitter</SocialMediaLinks><br />
            <SocialMediaLinks as='a' href=''>Facebook</SocialMediaLinks><br />
            <SocialMediaLinks as='a' href='https://instagram.com/zistshopping?igshid=gnx5fg8h7zeo'>Instagram</SocialMediaLinks>
          </List>
        </Grid.Row>
        <Grid style={{ paddingBottom: '80px', margin: '120px auto 0px 326px' }} textAlign='left' width={18}>
          <FooterTitle> @2020 Zist Shopping inc. Terms. Privacy.</FooterTitle>
        </Grid>
      </IntroGrid>
    </MainDiv>
  )
}


export default withRouter(LandingPage);
